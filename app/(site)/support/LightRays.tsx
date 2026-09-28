"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type Props = {
  /** Ray colour as 0–1 RGB (Framer "single" colour mode). */
  color: [number, number, number];
  backgroundColor: string;
  /** Framer control values, 0–100. */
  intensity: number;
  rays: number;
  reach: number;
  /** Horizontal source position, % of the width. */
  position: number;
  /** Animation speed, 1–100. */
  speed: number;
  style?: CSSProperties;
};

/** Framer's control-to-uniform mapping. */
const map = (v: number, inMin: number, inMax: number, outMin: number, outMax: number) =>
  outMin + ((v - inMin) / (inMax - inMin)) * (outMax - outMin);

const VERTEX = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

// The component's fragment shader, minus the unused noise/colour helpers.
const FRAGMENT = `
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec4 u_colors[2];
uniform float u_intensity;
uniform float u_rays;
uniform float u_reach;
uniform vec2 u_rayPos1;
uniform vec2 u_rayPos2;

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord, float seedA, float seedB, float speed)
{
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);

    // Calculate the diagonal length
    float diagonal = length(u_resolution);

    return clamp(
        (.45 + 0.15 * sin(cosAngle * seedA + u_time * speed)) +
        (0.3 + 0.2 * cos(-cosAngle * seedB + u_time * speed)),
        u_reach, 1.0) *
        clamp((diagonal - length(sourceToCoord)) / diagonal, u_reach, 1.0);
}

void main()
{
    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.y = 1.0 - uv.y;
    vec2 coord = vec2(gl_FragCoord.x, u_resolution.y - gl_FragCoord.y);
    float speed = u_rays * 10.0;

    // Set the parameters of the sun rays
    vec2 rayPos1 = u_rayPos1;
    vec2 rayRefDir1 = normalize(vec2(1.0, -0.116));
    float raySeedA1 = 36.2214*speed;
    float raySeedB1 = 21.11349*speed;
    float raySpeed1 = 1.5*speed;

    vec2 rayPos2 = u_rayPos2;
    vec2 rayRefDir2 = normalize(vec2(1.0, 0.241));
    float raySeedA2 = 22.39910*speed;
    float raySeedB2 = 18.0234*speed;
    float raySpeed2 = 1.1*speed;

    // Calculate ray strengths
    float strength1 = rayStrength(rayPos1, rayRefDir1, coord, raySeedA1, raySeedB1, raySpeed1);
    float strength2 = rayStrength(rayPos2, rayRefDir2, coord, raySeedA2, raySeedB2, raySpeed2);

    // Calculate brightness attenuation
    float brightness = 1.0*u_reach - (coord.y / u_resolution.y);
    float attenuation = clamp(brightness + (0.5 + u_intensity), 0.0, 1.0);

    // Calculate alpha values while preserving color
    float alpha1 = strength1 * attenuation * u_colors[0].a;
    float alpha2 = strength2 * attenuation * u_colors[1].a;

    // Pre-multiply the colors with their alpha values
    vec3 premultColor1 = u_colors[0].rgb * alpha1;
    vec3 premultColor2 = u_colors[1].rgb * alpha2;

    // Blend the pre-multiplied colors
    vec3 blendedColor = premultColor1 + premultColor2;
    float blendedAlpha = alpha1 + alpha2 * (1.0 - alpha1);

    // Un-premultiply the final color
    vec3 finalRGB = blendedColor / max(blendedAlpha, 0.0001);

    gl_FragColor = vec4(finalRGB * blendedAlpha, blendedAlpha);
}`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

/**
 * Framer University's "Light Rays" background (used behind the Support page),
 * ported from three.js to plain WebGL with the same shader and uniforms: two
 * animated ray fans above the top edge, drawn over `backgroundColor`. Like the
 * original, the canvas is sized once at mount (pixel ratio 1) and the animation
 * starts at a random time, so every load looks slightly different.
 */
export function LightRays({ color, backgroundColor, intensity, rays, reach, position, speed, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const width = el.clientWidth;
    const height = el.clientHeight;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    canvas.style.display = "block";
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const gl = canvas.getContext("webgl", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    if (!gl) return;
    el.appendChild(canvas);

    const program = gl.createProgram()!;
    const vs = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // One triangle covering the whole viewport (the original's plane fills the view too).
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const attr = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(attr);
    gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    gl.uniform2f(uniform("u_resolution"), width, height);
    gl.uniform4fv(uniform("u_colors"), [...color, 1, ...color, 1]);
    gl.uniform1f(uniform("u_intensity"), map(intensity, 0, 100, 0, 0.5));
    gl.uniform1f(uniform("u_rays"), map(rays, 0, 100, 0, 0.3));
    gl.uniform1f(uniform("u_reach"), map(reach, 0, 100, 0, 0.5));
    gl.uniform2f(uniform("u_rayPos1"), (position / 100) * width, -0.4 * height);
    gl.uniform2f(uniform("u_rayPos2"), (position / 100 + 0.02) * width, -0.5 * height);
    const timeLocation = uniform("u_time");
    gl.viewport(0, 0, width, height);

    let time = Math.random() * 1e4;
    let last = 0;
    let frame = 0;
    const draw = (now: number) => {
      const elapsed = last ? now - last : 0;
      last = now;
      time += (elapsed * speed) / 1000 / 10;
      gl.uniform1f(timeLocation, time);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(frame);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      el.removeChild(canvas);
    };
    // Mount-only, like the original (it never re-reads its size).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} style={{ borderRadius: 0, overflow: "hidden", backgroundColor, ...style }} />
  );
}
