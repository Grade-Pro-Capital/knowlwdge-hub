import{t as e}from"./rolldown-runtime.BvHXOKAc.mjs";import{E as t,I as n,M as r,N as i,O as a,R as o,S as s,_ as c,c as l,h as u,j as d,k as f,l as p,o as m,s as h,y as g}from"./react.CwoM0HEv.mjs";import{S as _,a as v,r as y,t as b}from"./motion.B1hHj_UR.mjs";import{B as x,D as S,J as C,M as w,O as T,P as E,V as D,_t as O,at as k,c as ee,ct as A,dt as te,i as j,l as M,lt as ne,mt as re,n as ie,o as ae,r as N,s as P,st as oe,ut as se,vt as F,w as ce,y as I,yt as L}from"./framer.DdsT0GTk.mjs";import{_ as R,a as le,b as z,c as B,d as ue,f as de,g as fe,h as pe,i as me,l as he,m as ge,n as _e,o as ve,p as ye,r as be,s as xe,t as Se,u as Ce,v as we,y as Te}from"./shared-lib.Bt5-21r2.mjs";import{a as Ee,i as De,n as Oe,o as ke,r as Ae,t as je}from"./eN868h0yO.BQOobGcw.mjs";import{i as Me,n as Ne,r as Pe,t as Fe}from"./pZmxZBxnK.Cr_yFA57.mjs";import{n as Ie,r as Le}from"./y5dGAvvS_.Dozi-8Xl.mjs";function Re(){let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(vs[255&e]+vs[e>>8&255]+vs[e>>16&255]+vs[e>>24&255]+`-`+vs[255&t]+vs[t>>8&255]+`-`+vs[t>>16&15|64]+vs[t>>24&255]+`-`+vs[63&n|128]+vs[n>>8&255]+`-`+vs[n>>16&255]+vs[n>>24&255]+vs[255&r]+vs[r>>8&255]+vs[r>>16&255]+vs[r>>24&255]).toUpperCase()}function ze(e,t,n){return Math.max(t,Math.min(n,e))}function Be(e,t){return(e%t+t)%t}function Ve(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function He(e,t,n){return e===t?0:(n-e)/(t-e)}function Ue(e,t,n){return(1-n)*e+n*t}function We(e,t,n,r){return Ue(e,t,1-Math.exp(-n*r))}function Ge(e,t=1){return t-Math.abs(Be(e,2*t)-t)}function Ke(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function qe(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(6*e-15)+10))}function Je(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ye(e,t){return e+Math.random()*(t-e)}function Xe(e){return e*(.5-Math.random())}function Ze(e){return e!==void 0&&(ys=e%2147483647),ys=16807*ys%2147483647,(ys-1)/2147483646}function Qe(e){return e*bs}function $e(e){return e*xs}function et(e){return(e&e-1)==0&&e!==0}function tt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function nt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function rt(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:console.warn(`THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function it(e){if(e.length===0)return-1/0;let t=e[0];for(let n=1,r=e.length;n<r;++n)e[n]>t&&(t=e[n]);return t}function at(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ot(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ws.getDataURL(e):e.data?{data:Array.prototype.slice.call(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}function st(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ks.fromArray(e,a);let o=i.x*Math.abs(Ks.x)+i.y*Math.abs(Ks.y)+i.z*Math.abs(Ks.z),s=t.dot(Ks),c=n.dot(Ks),l=r.dot(Ks);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function ct(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+6*(t-e)*(2/3-n):e}function lt(e){return e<.04045?.0773993808*e:(.9478672986*e+.0521327014)**2.4}function ut(e){return e<.0031308?12.92*e:1.055*e**.41666-.055}function dt(e,t,n,r,i,a,o,s){let c;if(c=t.side===Mi?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side!==Ni,s),c===null)return null;xl.copy(s),xl.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(xl);return l<n.near||l>n.far?null:{distance:l,point:xl.clone(),object:e}}function ft(e,t,n,r,i,a,o,s,c,l,u,d){cl.fromBufferAttribute(i,l),ll.fromBufferAttribute(i,u),ul.fromBufferAttribute(i,d);let f=e.morphTargetInfluences;if(a&&f){ml.set(0,0,0),hl.set(0,0,0),gl.set(0,0,0);for(let e=0,t=a.length;e<t;e++){let t=f[e],n=a[e];t!==0&&(dl.fromBufferAttribute(n,l),fl.fromBufferAttribute(n,u),pl.fromBufferAttribute(n,d),o?(ml.addScaledVector(dl,t),hl.addScaledVector(fl,t),gl.addScaledVector(pl,t)):(ml.addScaledVector(dl.sub(cl),t),hl.addScaledVector(fl.sub(ll),t),gl.addScaledVector(pl.sub(ul),t)))}cl.add(ml),ll.add(hl),ul.add(gl)}e.isSkinnedMesh&&(e.boneTransform(l,cl),e.boneTransform(u,ll),e.boneTransform(d,ul));let p=dt(e,t,n,r,cl,ll,ul,bl);if(p){s&&(_l.fromBufferAttribute(s,l),vl.fromBufferAttribute(s,u),yl.fromBufferAttribute(s,d),p.uv=Bc.getUV(bl,cl,ll,ul,_l,vl,yl,new H)),c&&(_l.fromBufferAttribute(c,l),vl.fromBufferAttribute(c,u),yl.fromBufferAttribute(c,d),p.uv2=Bc.getUV(bl,cl,ll,ul,_l,vl,yl,new H));let e={a:l,b:u,c:d,normal:new W,materialIndex:0};Bc.getNormal(cl,ll,ul,e.normal),p.face=e}return p}function pt(e){let t={};for(let n in e)for(let r in t[n]={},e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}return t}function mt(e){let t={};for(let n=0;n<e.length;n++){let r=pt(e[n]);for(let e in r)t[e]=r[e]}return t}function ht(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){!0!==t&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function gt(e,t){let n=t.isWebGL2,r=new WeakMap;function i(t,r){let i=t.array,a=t.usage,o=e.createBuffer();e.bindBuffer(r,o),e.bufferData(r,i,a),t.onUploadCallback();let s=5126;return i instanceof Float32Array?s=5126:i instanceof Float64Array?console.warn(`THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.`):i instanceof Uint16Array?t.isFloat16BufferAttribute?n?s=5131:console.warn(`THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.`):s=5123:i instanceof Int16Array?s=5122:i instanceof Uint32Array?s=5125:i instanceof Int32Array?s=5124:i instanceof Int8Array?s=5120:(i instanceof Uint8Array||i instanceof Uint8ClampedArray)&&(s=5121),{buffer:o,type:s,bytesPerElement:i.BYTES_PER_ELEMENT,version:t.version}}function a(t,r,i){let a=r.array,o=r.updateRange;e.bindBuffer(i,t),o.count===-1?e.bufferSubData(i,0,a):(n?e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a,o.offset,o.count):e.bufferSubData(i,o.offset*a.BYTES_PER_ELEMENT,a.subarray(o.offset,o.offset+o.count)),o.count=-1)}function o(e){return e.isInterleavedBufferAttribute&&(e=e.data),r.get(e)}function s(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=r.get(t);n&&(e.deleteBuffer(n.buffer),r.delete(t))}function c(e,t){if(e.isGLBufferAttribute){let t=r.get(e);(!t||t.version<e.version)&&r.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}e.isInterleavedBufferAttribute&&(e=e.data);let n=r.get(e);n===void 0?r.set(e,i(e,t)):n.version<e.version&&(a(n.buffer,e,t),n.version=e.version)}return{get:o,remove:s,update:c}}function _t(e,t,n,r,i){let a=new q(0),o=0,s,c,l=null,u=0,d=null;function f(n,i){let f=!1,m=!0===i.isScene?i.background:null;m&&m.isTexture&&(m=t.get(m));let h=e.xr,g=h.getSession&&h.getSession();g&&g.environmentBlendMode===`additive`&&(m=null),m===null?p(a,o):m&&m.isColor&&(p(m,1),f=!0),(e.autoClear||f)&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Ta)?(c===void 0&&(c=new Sl(new Cl(1,1,1),new Dl({name:`BackgroundCubeMaterial`,uniforms:pt(Ul.cube.uniforms),vertexShader:Ul.cube.vertexShader,fragmentShader:Ul.cube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute(`normal`),c.geometry.deleteAttribute(`uv`),c.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(c.material,`envMap`,{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&!1===m.isRenderTargetTexture?-1:1,(l!==m||u!==m.version||d!==e.toneMapping)&&(c.material.needsUpdate=!0,l=m,u=m.version,d=e.toneMapping),n.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(s===void 0&&(s=new Sl(new Hl(2,2),new Dl({name:`BackgroundMaterial`,uniforms:pt(Ul.background.uniforms),vertexShader:Ul.background.vertexShader,fragmentShader:Ul.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),s.geometry.deleteAttribute(`normal`),Object.defineProperty(s.material,`map`,{get:function(){return this.uniforms.t2D.value}}),r.update(s)),s.material.uniforms.t2D.value=m,!0===m.matrixAutoUpdate&&m.updateMatrix(),s.material.uniforms.uvTransform.value.copy(m.matrix),(l!==m||u!==m.version||d!==e.toneMapping)&&(s.material.needsUpdate=!0,l=m,u=m.version,d=e.toneMapping),n.unshift(s,s.geometry,s.material,0,0,null))}function p(e,t){n.buffers.color.setClear(e.r,e.g,e.b,t,i)}return{getClearColor:function(){return a},setClearColor:function(e,t=1){a.set(e),o=t,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(e){o=e,p(a,o)},render:f}}function vt(e,t,n,r){let i=e.getParameter(34921),a=r.isWebGL2?null:t.get(`OES_vertex_array_object`),o=r.isWebGL2||a!==null,s={},c=h(null),l=c;function u(t,r,i,a,s){let c=!1;if(o){let e=m(a,i,r);l!==e&&(l=e,f(l.object)),c=g(a,s),c&&_(a,s)}else{let e=!0===r.wireframe;(l.geometry!==a.id||l.program!==i.id||l.wireframe!==e)&&(l.geometry=a.id,l.program=i.id,l.wireframe=e,c=!0)}!0===t.isInstancedMesh&&(c=!0),s!==null&&n.update(s,34963),c&&(C(t,r,i,a),s!==null&&e.bindBuffer(34963,n.get(s).buffer))}function d(){return r.isWebGL2?e.createVertexArray():a.createVertexArrayOES()}function f(t){return r.isWebGL2?e.bindVertexArray(t):a.bindVertexArrayOES(t)}function p(t){return r.isWebGL2?e.deleteVertexArray(t):a.deleteVertexArrayOES(t)}function m(e,t,n){let r=!0===n.wireframe,i=s[e.id];i===void 0&&(i={},s[e.id]=i);let a=i[t.id];a===void 0&&(a={},i[t.id]=a);let o=a[r];return o===void 0&&(o=h(d()),a[r]=o),o}function h(e){let t=[],n=[],r=[];for(let e=0;e<i;e++)t[e]=0,n[e]=0,r[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:n,attributeDivisors:r,object:e,attributes:{},index:null}}function g(e,t){let n=l.attributes,r=e.attributes,i=0;for(let e in r){let t=n[e],a=r[e];if(t===void 0||t.attribute!==a||t.data!==a.data)return!0;i++}return l.attributesNum!==i||l.index!==t}function _(e,t){let n={},r=e.attributes,i=0;for(let e in r){let t=r[e],a={};a.attribute=t,t.data&&(a.data=t.data),n[e]=a,i++}l.attributes=n,l.attributesNum=i,l.index=t}function v(){let e=l.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function y(e){b(e,0)}function b(n,i){let a=l.newAttributes,o=l.enabledAttributes,s=l.attributeDivisors;a[n]=1,o[n]===0&&(e.enableVertexAttribArray(n),o[n]=1),s[n]!==i&&((r.isWebGL2?e:t.get(`ANGLE_instanced_arrays`))[r.isWebGL2?`vertexAttribDivisor`:`vertexAttribDivisorANGLE`](n,i),s[n]=i)}function x(){let t=l.newAttributes,n=l.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function S(t,n,i,a,o,s){!0!==r.isWebGL2||i!==5124&&i!==5125?e.vertexAttribPointer(t,n,i,a,o,s):e.vertexAttribIPointer(t,n,i,o,s)}function C(i,a,o,s){if(!1===r.isWebGL2&&(i.isInstancedMesh||s.isInstancedBufferGeometry)&&t.get(`ANGLE_instanced_arrays`)===null)return;v();let c=s.attributes,l=o.getAttributes(),u=a.defaultAttributeValues;for(let t in l){let r=l[t];if(r.location>=0){let a=c[t];if(a===void 0&&(t===`instanceMatrix`&&i.instanceMatrix&&(a=i.instanceMatrix),t===`instanceColor`&&i.instanceColor&&(a=i.instanceColor)),a!==void 0){let t=a.normalized,o=a.itemSize,c=n.get(a);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement;if(a.isInterleavedBufferAttribute){let n=a.data,c=n.stride,f=a.offset;if(n&&n.isInstancedInterleavedBuffer){for(let e=0;e<r.locationSize;e++)b(r.location+e,n.meshPerAttribute);!0!==i.isInstancedMesh&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=n.meshPerAttribute*n.count)}else for(let e=0;e<r.locationSize;e++)y(r.location+e);e.bindBuffer(34962,l);for(let e=0;e<r.locationSize;e++)S(r.location+e,o/r.locationSize,u,t,c*d,(f+o/r.locationSize*e)*d)}else{if(a.isInstancedBufferAttribute){for(let e=0;e<r.locationSize;e++)b(r.location+e,a.meshPerAttribute);!0!==i.isInstancedMesh&&s._maxInstanceCount===void 0&&(s._maxInstanceCount=a.meshPerAttribute*a.count)}else for(let e=0;e<r.locationSize;e++)y(r.location+e);e.bindBuffer(34962,l);for(let e=0;e<r.locationSize;e++)S(r.location+e,o/r.locationSize,u,t,o*d,o/r.locationSize*e*d)}}else if(u!==void 0){let n=u[t];if(n!==void 0)switch(n.length){case 2:e.vertexAttrib2fv(r.location,n);break;case 3:e.vertexAttrib3fv(r.location,n);break;case 4:e.vertexAttrib4fv(r.location,n);break;default:e.vertexAttrib1fv(r.location,n)}}}}x()}function w(){for(let e in D(),s){let t=s[e];for(let e in t){let n=t[e];for(let e in n)p(n[e].object),delete n[e];delete t[e]}delete s[e]}}function T(e){if(s[e.id]===void 0)return;let t=s[e.id];for(let e in t){let n=t[e];for(let e in n)p(n[e].object),delete n[e];delete t[e]}delete s[e.id]}function E(e){for(let t in s){let n=s[t];if(n[e.id]===void 0)continue;let r=n[e.id];for(let e in r)p(r[e].object),delete r[e];delete n[e.id]}}function D(){O(),l!==c&&(l=c,f(l.object))}function O(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:D,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:y,disableUnusedAttributes:x}}function yt(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}function s(t,r){e.drawArrays(a,t,r),n.update(r,a,1)}function c(r,o,s){if(s===0)return;let c,l;if(i)c=e,l=`drawArraysInstanced`;else if(c=t.get(`ANGLE_instanced_arrays`),l=`drawArraysInstancedANGLE`,c===null){console.error(`THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}c[l](a,r,o,s),n.update(o,a,s)}this.setMode=o,this.render=s,this.renderInstances=c}function bt(e,t,n){let r;function i(){if(r!==void 0)return r;if(!0===t.has(`EXT_texture_filter_anisotropic`)){let n=t.get(`EXT_texture_filter_anisotropic`);r=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(35633,36338).precision>0&&e.getShaderPrecisionFormat(35632,36338).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(35633,36337).precision>0&&e.getShaderPrecisionFormat(35632,36337).precision>0?`mediump`:`lowp`}let o=typeof WebGL2RenderingContext<`u`&&e instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<`u`&&e instanceof WebGL2ComputeRenderingContext,s=n.precision===void 0?`highp`:n.precision,c=a(s);c!==s&&(console.warn(`THREE.WebGLRenderer:`,s,`not supported, using`,c,`instead.`),s=c);let l=o||t.has(`WEBGL_draw_buffers`),u=!0===n.logarithmicDepthBuffer,d=e.getParameter(34930),f=e.getParameter(35660),p=e.getParameter(3379),m=e.getParameter(34076),h=e.getParameter(34921),g=e.getParameter(36347),_=e.getParameter(36348),v=e.getParameter(36349),y=f>0,b=o||t.has(`OES_texture_float`),x=y&&b,S=o?e.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:S}}function xt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Rl,s=new Ss,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t,a){let o=e.length!==0||t||r!==0||i;return i=t,n=u(e,a,0),r=e.length,o},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1,l()},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=4*e,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,!0!==i||l===null){let t=r+4*a,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function St(e){let t=new WeakMap;function n(e,t){return t===Ca?e.mapping=xa:t===wa&&(e.mapping=Sa),e}function r(r){if(r&&r.isTexture&&!1===r.isRenderTargetTexture){let a=r.mapping;if(a===Ca||a===wa){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=e.getRenderTarget(),s=new Pl(a.height/2);return s.fromEquirectangularTexture(e,r),t.set(r,s),e.setRenderTarget(o),r.addEventListener(`dispose`,i),n(s.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}function Ct(){let e=[],t=[],n=[],r=ql;for(let i=0;i<Xl;i++){let a=2**r;t.push(a);let o=1/a;i>ql-Kl?o=Yl[i-ql+Kl-1]:i==0&&(o=0),n.push(o);let s=1/(a-1),c=-s/2,l=1+s/2,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=new Float32Array(108),f=new Float32Array(72),p=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];d.set(r,18*e),f.set(u,12*e);let i=[e,e,e,e,e,e];p.set(i,6*e)}let m=new X;m.setAttribute(`position`,new Jc(d,3)),m.setAttribute(`uv`,new Jc(f,2)),m.setAttribute(`faceIndex`,new Jc(p,1)),e.push(m),r>Kl&&r--}return{_lodPlanes:e,_sizeLods:t,_sigmas:n}}function wt(e){let t=new Ds(3*Jl,3*Jl,e);return t.texture.mapping=Ta,t.texture.name=`PMREM.cubeUv`,t.scissorTest=!0,t}function Tt(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Et(e){let t=new Float32Array(e),n=new W(0,1,0);return new Gl({name:`SphericalGaussianBlur`,defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:kt(),fragmentShader:`\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform int samples;\n\t\t\tuniform float weights[ n ];\n\t\t\tuniform bool latitudinal;\n\t\t\tuniform float dTheta;\n\t\t\tuniform float mipInt;\n\t\t\tuniform vec3 poleAxis;\n\n\t\t\t${At()}\n\n\t\t\t#define ENVMAP_TYPE_CUBE_UV\n\t\t\t#include <cube_uv_reflection_fragment>\n\n\t\t\tvec3 getSample( float theta, vec3 axis ) {\n\n\t\t\t\tfloat cosTheta = cos( theta );\n\t\t\t\t// Rodrigues' axis-angle rotation\n\t\t\t\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t\t\t\t+ cross( axis, vOutputDirection ) * sin( theta )\n\t\t\t\t\t+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n\t\t\t\treturn bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n\t\t\t}\n\n\t\t\tvoid main() {\n\n\t\t\t\tvec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n\t\t\t\tif ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n\t\t\t\t\taxis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n\t\t\t\t}\n\n\t\t\t\taxis = normalize( axis );\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\t\t\t\tgl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n\t\t\t\tfor ( int i = 1; i < n; i++ ) {\n\n\t\t\t\t\tif ( i >= samples ) {\n\n\t\t\t\t\t\tbreak;\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfloat theta = dTheta * float( i );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n\t\t\t\t\tgl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n\t\t\t\t}\n\n\t\t\t}\n\t\t`,blending:Fi,depthTest:!1,depthWrite:!1})}function Dt(){return new Gl({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null},texelSize:{value:new H(1,1)},inputEncoding:{value:Ql[os]}},vertexShader:kt(),fragmentShader:`\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform sampler2D envMap;\n\t\t\tuniform vec2 texelSize;\n\n\t\t\t${At()}\n\n\t\t\t#include <common>\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n\n\t\t\t\tvec3 outputDirection = normalize( vOutputDirection );\n\t\t\t\tvec2 uv = equirectUv( outputDirection );\n\n\t\t\t\tvec2 f = fract( uv / texelSize - 0.5 );\n\t\t\t\tuv -= f * texelSize;\n\t\t\t\tvec3 tl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x += texelSize.x;\n\t\t\t\tvec3 tr = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.y += texelSize.y;\n\t\t\t\tvec3 br = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\t\t\t\tuv.x -= texelSize.x;\n\t\t\t\tvec3 bl = envMapTexelToLinear( texture2D ( envMap, uv ) ).rgb;\n\n\t\t\t\tvec3 tm = mix( tl, tr, f.x );\n\t\t\t\tvec3 bm = mix( bl, br, f.x );\n\t\t\t\tgl_FragColor.rgb = mix( tm, bm, f.y );\n\n\t\t\t}\n\t\t`,blending:Fi,depthTest:!1,depthWrite:!1})}function Ot(){return new Gl({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},inputEncoding:{value:Ql[os]}},vertexShader:kt(),fragmentShader:`\n\n\t\t\tprecision mediump float;\n\t\t\tprecision mediump int;\n\n\t\t\tvarying vec3 vOutputDirection;\n\n\t\t\tuniform samplerCube envMap;\n\n\t\t\t${At()}\n\n\t\t\tvoid main() {\n\n\t\t\t\tgl_FragColor = envMapTexelToLinear( textureCube( envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ) ) );\n\n\t\t\t}\n\t\t`,blending:Fi,depthTest:!1,depthWrite:!1})}function kt(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 position;
		attribute vec2 uv;
		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function At(){return`

		uniform int inputEncoding;

		#include <encodings_pars_fragment>

		vec4 inputTexelToLinear( vec4 value ) {

			if ( inputEncoding == 0 ) {

				return value;

			} else {

				return sRGBToLinear( value );

			}

		}

		vec4 envMapTexelToLinear( vec4 color ) {

			return inputTexelToLinear( color );

		}
	`}function jt(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture&&!1===r.isRenderTargetTexture){let o=r.mapping,s=o===Ca||o===wa,c=o===xa||o===Sa;if(s||c){if(t.has(r))return t.get(r).texture;{let o=r.image;if(s&&o&&o.height>0||c&&o&&i(o)){let i=e.getRenderTarget();n===null&&(n=new cu(e));let o=s?n.fromEquirectangular(r):n.fromCubemap(r);return t.set(r,o),e.setRenderTarget(i),r.addEventListener(`dispose`,a),o.texture}return null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Mt(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(e){e.isWebGL2?n(`EXT_color_buffer_float`):(n(`WEBGL_depth_texture`),n(`OES_texture_float`),n(`OES_texture_half_float`),n(`OES_texture_half_float_linear`),n(`OES_standard_derivatives`),n(`OES_element_index_uint`),n(`OES_vertex_array_object`),n(`ANGLE_instanced_arrays`)),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`)},get:function(e){let t=n(e);return t===null&&console.warn(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Nt(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;for(let e in s.index!==null&&t.remove(s.index),s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),!0===s.isInstancedBufferGeometry&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return!0===i[t.id]?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(e){let n=e.attributes;for(let e in n)t.update(n[e],34962);let r=e.morphAttributes;for(let e in r){let n=r[e];for(let e=0,r=n.length;e<r;e++)t.update(n[e],34962)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(it(n)>65535?Xc:Yc)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Pt(e,t,n,r){let i=r.isWebGL2,a;function o(e){a=e}let s,c;function l(e){s=e.type,c=e.bytesPerElement}function u(t,r){e.drawElements(a,r,s,t*c),n.update(r,a,1)}function d(r,o,l){if(l===0)return;let u,d;if(i)u=e,d=`drawElementsInstanced`;else if(u=t.get(`ANGLE_instanced_arrays`),d=`drawElementsInstancedANGLE`,u===null){console.error(`THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.`);return}u[d](a,o,s,r*c,l),n.update(o,a,l)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d}function Ft(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(e,t,r){switch(n.calls++,t){case 4:n.triangles+=e/3*r;break;case 1:n.lines+=e/2*r;break;case 3:n.lines+=r*(e-1);break;case 2:n.lines+=r*e;break;case 0:n.points+=r*e;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,t);break}}function i(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function It(e,t){return e[0]-t[0]}function Lt(e,t){return Math.abs(t[1])-Math.abs(e[1])}function Rt(e,t){let n=1,r=t.isInterleavedBufferAttribute?t.data.array:t.array;r instanceof Int8Array?n=127:r instanceof Int16Array?n=32767:r instanceof Int32Array?n=2147483647:console.error(`THREE.WebGLMorphtargets: Unsupported morph attribute data type: `,r),e.divideScalar(n)}function zt(e,t,n){let r={},i=new Float32Array(8),a=new WeakMap,o=new W,s=[];for(let e=0;e<8;e++)s[e]=[e,0];function c(c,l,u,d){let f=c.morphTargetInfluences;if(!0===t.isWebGL2){let r=l.morphAttributes.position.length,i=a.get(l);if(i===void 0||i.count!==r){i!==void 0&&i.texture.dispose();let e=l.morphAttributes.normal!==void 0,n=l.morphAttributes.position,s=l.morphAttributes.normal||[],c=l.attributes.position.count,u=!0===e?2:1,d=c*u,f=1;d>t.maxTextureSize&&(f=Math.ceil(d/t.maxTextureSize),d=t.maxTextureSize);let p=new Float32Array(d*f*4*r),m=new lu(p,d,f,r);m.format=Xa,m.type=Ha,m.needsUpdate=!0;let h=4*u;for(let t=0;t<r;t++){let r=n[t],i=s[t],a=d*f*4*t;for(let t=0;t<r.count;t++){o.fromBufferAttribute(r,t),!0===r.normalized&&Rt(o,r);let n=t*h;p[a+n+0]=o.x,p[a+n+1]=o.y,p[a+n+2]=o.z,p[a+n+3]=0,!0===e&&(o.fromBufferAttribute(i,t),!0===i.normalized&&Rt(o,i),p[a+n+4]=o.x,p[a+n+5]=o.y,p[a+n+6]=o.z,p[a+n+7]=0)}}i={count:r,texture:m,size:new H(d,f)},a.set(l,i)}let s=0;for(let e=0;e<f.length;e++)s+=f[e];let c=l.morphTargetsRelative?1:1-s;d.getUniforms().setValue(e,`morphTargetBaseInfluence`,c),d.getUniforms().setValue(e,`morphTargetInfluences`,f),d.getUniforms().setValue(e,`morphTargetsTexture`,i.texture,n),d.getUniforms().setValue(e,`morphTargetsTextureSize`,i.size)}else{let t=f===void 0?0:f.length,n=r[l.id];if(n===void 0||n.length!==t){n=[];for(let e=0;e<t;e++)n[e]=[e,0];r[l.id]=n}for(let e=0;e<t;e++){let t=n[e];t[0]=e,t[1]=f[e]}n.sort(Lt);for(let e=0;e<8;e++)e<t&&n[e][1]?(s[e][0]=n[e][0],s[e][1]=n[e][1]):(s[e][0]=2**53-1,s[e][1]=0);s.sort(It);let a=l.morphAttributes.position,o=l.morphAttributes.normal,c=0;for(let e=0;e<8;e++){let t=s[e],n=t[0],r=t[1];n!==2**53-1&&r?(a&&l.getAttribute(`morphTarget`+e)!==a[n]&&l.setAttribute(`morphTarget`+e,a[n]),o&&l.getAttribute(`morphNormal`+e)!==o[n]&&l.setAttribute(`morphNormal`+e,o[n]),i[e]=r,c+=r):(a&&!0===l.hasAttribute(`morphTarget`+e)&&l.deleteAttribute(`morphTarget`+e),o&&!0===l.hasAttribute(`morphNormal`+e)&&l.deleteAttribute(`morphNormal`+e),i[e]=0)}let u=l.morphTargetsRelative?1:1-c;d.getUniforms().setValue(e,`morphTargetBaseInfluence`,u),d.getUniforms().setValue(e,`morphTargetInfluences`,i)}}return{update:c}}function Bt(e,t,n,r){let i=new WeakMap;function a(e){let a=r.render.frame,o=e.geometry,c=t.get(e,o);return i.get(c)!==a&&(t.update(c),i.set(c,a)),e.isInstancedMesh&&(!1===e.hasEventListener(`dispose`,s)&&e.addEventListener(`dispose`,s),n.update(e.instanceMatrix,34962),e.instanceColor!==null&&n.update(e.instanceColor,34962)),c}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}function Vt(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=hu[i];if(a===void 0&&(a=new Float32Array(i),hu[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Ht(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Ut(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Wt(e,t){let n=gu[t];n===void 0&&(n=new Int32Array(t),gu[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Gt(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Kt(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Ht(n,t))return;e.uniform2fv(this.addr,t),Ut(n,t)}}function qt(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Ht(n,t))return;e.uniform3fv(this.addr,t),Ut(n,t)}}function Jt(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Ht(n,t))return;e.uniform4fv(this.addr,t),Ut(n,t)}}function Yt(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ht(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ut(n,t)}else{if(Ht(n,r))return;yu.set(r),e.uniformMatrix2fv(this.addr,!1,yu),Ut(n,r)}}function Xt(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ht(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ut(n,t)}else{if(Ht(n,r))return;vu.set(r),e.uniformMatrix3fv(this.addr,!1,vu),Ut(n,r)}}function Zt(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Ht(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ut(n,t)}else{if(Ht(n,r))return;_u.set(r),e.uniformMatrix4fv(this.addr,!1,_u),Ut(n,r)}}function Qt(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $t(e,t){let n=this.cache;Ht(n,t)||(e.uniform2iv(this.addr,t),Ut(n,t))}function en(e,t){let n=this.cache;Ht(n,t)||(e.uniform3iv(this.addr,t),Ut(n,t))}function tn(e,t){let n=this.cache;Ht(n,t)||(e.uniform4iv(this.addr,t),Ut(n,t))}function nn(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function rn(e,t){let n=this.cache;Ht(n,t)||(e.uniform2uiv(this.addr,t),Ut(n,t))}function an(e,t){let n=this.cache;Ht(n,t)||(e.uniform3uiv(this.addr,t),Ut(n,t))}function on(e,t){let n=this.cache;Ht(n,t)||(e.uniform4uiv(this.addr,t),Ut(n,t))}function sn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.safeSetTexture2D(t||du,i)}function cn(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||pu,i)}function ln(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.safeSetTextureCube(t||mu,i)}function un(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||fu,i)}function dn(e){switch(e){case 5126:return Gt;case 35664:return Kt;case 35665:return qt;case 35666:return Jt;case 35674:return Yt;case 35675:return Xt;case 35676:return Zt;case 5124:case 35670:return Qt;case 35667:case 35671:return $t;case 35668:case 35672:return en;case 35669:case 35673:return tn;case 5125:return nn;case 36294:return rn;case 36295:return an;case 36296:return on;case 35678:case 36198:case 36298:case 36306:case 35682:return sn;case 35679:case 36299:case 36307:return cn;case 35680:case 36300:case 36308:case 36293:return ln;case 36289:case 36303:case 36311:case 36292:return un}}function fn(e,t){e.uniform1fv(this.addr,t)}function pn(e,t){let n=Vt(t,this.size,2);e.uniform2fv(this.addr,n)}function mn(e,t){let n=Vt(t,this.size,3);e.uniform3fv(this.addr,n)}function hn(e,t){let n=Vt(t,this.size,4);e.uniform4fv(this.addr,n)}function gn(e,t){let n=Vt(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function _n(e,t){let n=Vt(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function vn(e,t){let n=Vt(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function yn(e,t){e.uniform1iv(this.addr,t)}function bn(e,t){e.uniform2iv(this.addr,t)}function xn(e,t){e.uniform3iv(this.addr,t)}function Sn(e,t){e.uniform4iv(this.addr,t)}function Cn(e,t){e.uniform1uiv(this.addr,t)}function wn(e,t){e.uniform2uiv(this.addr,t)}function Tn(e,t){e.uniform3uiv(this.addr,t)}function En(e,t){e.uniform4uiv(this.addr,t)}function Dn(e,t,n){let r=t.length,i=Wt(n,r);e.uniform1iv(this.addr,i);for(let e=0;e!==r;++e)n.safeSetTexture2D(t[e]||du,i[e])}function On(e,t,n){let r=t.length,i=Wt(n,r);e.uniform1iv(this.addr,i);for(let e=0;e!==r;++e)n.setTexture3D(t[e]||pu,i[e])}function kn(e,t,n){let r=t.length,i=Wt(n,r);e.uniform1iv(this.addr,i);for(let e=0;e!==r;++e)n.safeSetTextureCube(t[e]||mu,i[e])}function An(e,t,n){let r=t.length,i=Wt(n,r);e.uniform1iv(this.addr,i);for(let e=0;e!==r;++e)n.setTexture2DArray(t[e]||fu,i[e])}function jn(e){switch(e){case 5126:return fn;case 35664:return pn;case 35665:return mn;case 35666:return hn;case 35674:return gn;case 35675:return _n;case 35676:return vn;case 5124:case 35670:return yn;case 35667:case 35671:return bn;case 35668:case 35672:return xn;case 35669:case 35673:return Sn;case 5125:return Cn;case 36294:return wn;case 36295:return Tn;case 36296:return En;case 35678:case 36198:case 36298:case 36306:case 35682:return Dn;case 35679:case 36299:case 36307:return On;case 35680:case 36300:case 36308:case 36293:return kn;case 36289:case 36303:case 36311:case 36292:return An}}function Mn(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=dn(t.type)}function Nn(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=jn(t.type)}function Pn(e){this.id=e,this.seq=[],this.map={}}function Fn(e,t){e.seq.push(t),e.map[t.id]=t}function In(e,t,n){let r=e.name,i=r.length;for(bu.lastIndex=0;;){let a=bu.exec(r),o=bu.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Fn(n,l===void 0?new Mn(s,e,t):new Nn(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Pn(s),Fn(n,e)),n=e}}}function Ln(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);In(n,e.getUniformLocation(t,n.name),this)}}function Rn(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function zn(e){let t=e.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+`: `+t[e];return t.join(`
`)}function Bn(e){switch(e){case os:return[`Linear`,`( value )`];case ss:return[`sRGB`,`( value )`];default:return console.warn(`THREE.WebGLProgram: Unsupported encoding:`,e),[`Linear`,`( value )`]}}function Vn(e,t,n){let r=e.getShaderParameter(t,35713),i=e.getShaderInfoLog(t).trim();return r&&i===``?``:n.toUpperCase()+`

`+i+`

`+zn(e.getShaderSource(t))}function Hn(e,t){let n=Bn(t);return`vec4 `+e+`( vec4 value ) { return `+n[0]+`ToLinear`+n[1]+`; }`}function Un(e,t){let n=Bn(t);return`vec4 `+e+`( vec4 value ) { return LinearTo`+n[0]+n[1]+`; }`}function Wn(e,t){let n;switch(t){case ha:n=`Linear`;break;case ga:n=`Reinhard`;break;case _a:n=`OptimizedCineon`;break;case va:n=`ACESFilmic`;break;case ya:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function Gn(e){return[e.extensionDerivatives||e.envMapCubeUV||e.bumpMap||e.tangentSpaceNormalMap||e.clearcoatNormalMap||e.flatShading||e.shaderID===`physical`?`#extension GL_OES_standard_derivatives : enable`:``,(e.extensionFragDepth||e.logarithmicDepthBuffer)&&e.rendererExtensionFragDepth?`#extension GL_EXT_frag_depth : enable`:``,e.extensionDrawBuffers&&e.rendererExtensionDrawBuffers?`#extension GL_EXT_draw_buffers : require`:``,(e.extensionShaderTextureLOD||e.envMap||e.transmission)&&e.rendererExtensionShaderTextureLod?`#extension GL_EXT_shader_texture_lod : enable`:``].filter(Jn).join(`
`)}function Kn(e){let t=[];for(let n in e){let r=e[n];!1!==r&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function qn(e,t){let n={},r=e.getProgramParameter(t,35721);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===35674&&(o=2),r.type===35675&&(o=3),r.type===35676&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Jn(e){return e!==``}function Yn(e,t){return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xn(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function Zn(e){return e.replace(Su,Qn)}function Qn(e,t){let n=Z[t];if(n===void 0)throw Error(`Can not resolve #include <`+t+`>`);return Zn(n)}function $n(e){return e.replace(wu,tr).replace(Cu,er)}function er(e,t,n,r){return console.warn(`WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.`),tr(e,t,n,r)}function tr(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function nr(e){let t=`precision `+e.precision+` float;
precision `+e.precision+` int;`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function rr(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===Oi?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===ki?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===Ai&&(t=`SHADOWMAP_TYPE_VSM`),t}function ir(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case xa:case Sa:t=`ENVMAP_TYPE_CUBE`;break;case Ta:case Ea:t=`ENVMAP_TYPE_CUBE_UV`;break}return t}function ar(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case Sa:case Ea:t=`ENVMAP_MODE_REFRACTION`;break}return t}function or(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case da:t=`ENVMAP_BLENDING_MULTIPLY`;break;case fa:t=`ENVMAP_BLENDING_MIX`;break;case pa:t=`ENVMAP_BLENDING_ADD`;break}return t}function sr(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=rr(n),l=ir(n),u=ar(n),d=or(n),f=n.isWebGL2?``:Gn(n),p=Kn(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[p].filter(Jn).join(`
`),h.length>0&&(h+=`
`),g=[f,p].filter(Jn).join(`
`),g.length>0&&(g+=`
`)):(h=[nr(n),`#define SHADER_NAME `+n.shaderName,p,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.supportsVertexTextures?`#define VERTEX_TEXTURES`:``,`#define MAX_BONES `+n.maxBones,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMap&&n.objectSpaceNormalMap?`#define OBJECTSPACE_NORMALMAP`:``,n.normalMap&&n.tangentSpaceNormalMap?`#define TANGENTSPACE_NORMALMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.displacementMap&&n.supportsVertexTextures?`#define USE_DISPLACEMENTMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularIntensityMap?`#define USE_SPECULARINTENSITYMAP`:``,n.specularColorMap?`#define USE_SPECULARCOLORMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEENCOLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEENROUGHNESSMAP`:``,n.vertexTangents?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUvs?`#define USE_UV`:``,n.uvsVertexOnly?`#define UVS_VERTEX_ONLY`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.useVertexTexture?`#define BONE_TEXTURE`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&!1===n.flatShading?`#define USE_MORPHNORMALS`:``,n.morphTargets&&n.isWebGL2?`#define MORPHTARGETS_TEXTURE`:``,n.morphTargets&&n.isWebGL2?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )`,`	attribute vec3 morphTarget0;`,`	attribute vec3 morphTarget1;`,`	attribute vec3 morphTarget2;`,`	attribute vec3 morphTarget3;`,`	#ifdef USE_MORPHNORMALS`,`		attribute vec3 morphNormal0;`,`		attribute vec3 morphNormal1;`,`		attribute vec3 morphNormal2;`,`		attribute vec3 morphNormal3;`,`	#else`,`		attribute vec3 morphTarget4;`,`		attribute vec3 morphTarget5;`,`		attribute vec3 morphTarget6;`,`		attribute vec3 morphTarget7;`,`	#endif`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Jn).join(`
`),g=[f,nr(n),`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMap&&n.objectSpaceNormalMap?`#define OBJECTSPACE_NORMALMAP`:``,n.normalMap&&n.tangentSpaceNormalMap?`#define TANGENTSPACE_NORMALMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularIntensityMap?`#define USE_SPECULARINTENSITYMAP`:``,n.specularColorMap?`#define USE_SPECULARCOLORMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEENCOLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEENROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUvs?`#define USE_UV`:``,n.uvsVertexOnly?`#define UVS_VERTEX_ONLY`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.physicallyCorrectLights?`#define PHYSICALLY_CORRECT_LIGHTS`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?`#define USE_LOGDEPTHBUF_EXT`:``,(n.extensionShaderTextureLOD||n.envMap)&&n.rendererExtensionShaderTextureLod?`#define TEXTURE_LOD_EXT`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===ma?``:`#define TONE_MAPPING`,n.toneMapping===ma?``:Z.tonemapping_pars_fragment,n.toneMapping===ma?``:Wn(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.format===Ya?`#define OPAQUE`:``,Z.encodings_pars_fragment,n.map?Hn(`mapTexelToLinear`,n.mapEncoding):``,n.matcap?Hn(`matcapTexelToLinear`,n.matcapEncoding):``,n.envMap?Hn(`envMapTexelToLinear`,n.envMapEncoding):``,n.emissiveMap?Hn(`emissiveMapTexelToLinear`,n.emissiveMapEncoding):``,n.specularColorMap?Hn(`specularColorMapTexelToLinear`,n.specularColorMapEncoding):``,n.sheenColorMap?Hn(`sheenColorMapTexelToLinear`,n.sheenColorMapEncoding):``,n.lightMap?Hn(`lightMapTexelToLinear`,n.lightMapEncoding):``,Un(`linearToOutputTexel`,n.outputEncoding),n.depthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Jn).join(`
`)),o=Zn(o),o=Yn(o,n),o=Xn(o,n),s=Zn(s),s=Yn(s,n),s=Xn(s,n),o=$n(o),s=$n(s),n.isWebGL2&&!0!==n.isRawShaderMaterial&&(_=`#version 300 es
`,h=[`precision mediump sampler2DArray;`,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===gs?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===gs?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Rn(i,35633,v),x=Rn(i,35632,y);if(i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?!0===n.morphTargets&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m),e.debug.checkShaderErrors){let e=i.getProgramInfoLog(m).trim(),t=i.getShaderInfoLog(b).trim(),n=i.getShaderInfoLog(x).trim(),r=!0,a=!0;if(!1===i.getProgramParameter(m,35714)){r=!1;let t=Vn(i,b,`vertex`),n=Vn(i,x,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,35715)+`

Program Info Log: `+e+`
`+t+`
`+n)}else e===``?t!==``&&n!==``||(a=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,e);a&&(this.diagnostics={runnable:r,programLog:e,vertexShader:{log:t,prefix:h},fragmentShader:{log:n,prefix:g}})}i.deleteShader(b),i.deleteShader(x);let S;this.getUniforms=function(){return S===void 0&&(S=new Ln(i,m)),S};let C;return this.getAttributes=function(){return C===void 0&&(C=qn(i,m)),C},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=n.shaderName,this.id=xu++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}function cr(e,t,n,r,i,a,o){let s=new gc,c=new Eu,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.floatVertexTextures,p=i.maxVertexUniforms,m=i.vertexTextures,h=i.precision,g={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function _(e){let t=e.skeleton.bones;if(f)return 1024;{let e=p,n=Math.floor((e-20)/4),r=Math.min(n,t.length);return r<t.length?(console.warn(`THREE.WebGLRenderer: Skeleton has `+t.length+` bones. This GPU supports `+r+`.`),0):r}}function v(e){let t;return e&&e.isTexture?t=e.encoding:e&&e.isWebGLRenderTarget?(console.warn(`THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.`),t=e.texture.encoding):t=os,u&&e&&e.isTexture&&e.format===Xa&&e.type===Ia&&e.encoding===ss&&(t=os),t}function y(a,s,l,p,y){let b=p.fog,x=a.isMeshStandardMaterial?p.environment:null,S=(a.isMeshStandardMaterial?n:t).get(a.envMap||x),C=g[a.type],w=y.isSkinnedMesh?_(y):0;a.precision!==null&&(h=i.getMaxPrecision(a.precision),h!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,h,`instead.`));let T,E,D,O;if(C){let e=Ul[C];T=e.vertexShader,E=e.fragmentShader}else T=a.vertexShader,E=a.fragmentShader,c.update(a),D=c.getVertexShaderID(a),O=c.getFragmentShaderID(a);let k=e.getRenderTarget(),ee=a.alphaTest>0,A=a.clearcoat>0;return{isWebGL2:u,shaderID:C,shaderName:a.type,vertexShader:T,fragmentShader:E,defines:a.defines,customVertexShaderID:D,customFragmentShaderID:O,isRawShaderMaterial:!0===a.isRawShaderMaterial,glslVersion:a.glslVersion,precision:h,instancing:!0===y.isInstancedMesh,instancingColor:!0===y.isInstancedMesh&&y.instanceColor!==null,supportsVertexTextures:m,outputEncoding:k===null?e.outputEncoding:v(k.texture),map:!!a.map,mapEncoding:v(a.map),matcap:!!a.matcap,matcapEncoding:v(a.matcap),envMap:!!S,envMapMode:S&&S.mapping,envMapEncoding:v(S),envMapCubeUV:!!S&&(S.mapping===Ta||S.mapping===Ea),lightMap:!!a.lightMap,lightMapEncoding:v(a.lightMap),aoMap:!!a.aoMap,emissiveMap:!!a.emissiveMap,emissiveMapEncoding:v(a.emissiveMap),bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,objectSpaceNormalMap:a.normalMapType===ds,tangentSpaceNormalMap:a.normalMapType===us,clearcoat:A,clearcoatMap:A&&!!a.clearcoatMap,clearcoatRoughnessMap:A&&!!a.clearcoatRoughnessMap,clearcoatNormalMap:A&&!!a.clearcoatNormalMap,displacementMap:!!a.displacementMap,roughnessMap:!!a.roughnessMap,metalnessMap:!!a.metalnessMap,specularMap:!!a.specularMap,specularIntensityMap:!!a.specularIntensityMap,specularColorMap:!!a.specularColorMap,specularColorMapEncoding:v(a.specularColorMap),alphaMap:!!a.alphaMap,alphaTest:ee,gradientMap:!!a.gradientMap,sheen:a.sheen>0,sheenColorMap:!!a.sheenColorMap,sheenColorMapEncoding:v(a.sheenColorMap),sheenRoughnessMap:!!a.sheenRoughnessMap,transmission:a.transmission>0,transmissionMap:!!a.transmissionMap,thicknessMap:!!a.thicknessMap,combine:a.combine,vertexTangents:!!a.normalMap&&!!y.geometry&&!!y.geometry.attributes.tangent,vertexColors:a.vertexColors,vertexAlphas:!0===a.vertexColors&&!!y.geometry&&!!y.geometry.attributes.color&&y.geometry.attributes.color.itemSize===4,vertexUvs:!!a.map||!!a.bumpMap||!!a.normalMap||!!a.specularMap||!!a.alphaMap||!!a.emissiveMap||!!a.roughnessMap||!!a.metalnessMap||!!a.clearcoatMap||!!a.clearcoatRoughnessMap||!!a.clearcoatNormalMap||!!a.displacementMap||!!a.transmissionMap||!!a.thicknessMap||!!a.specularIntensityMap||!!a.specularColorMap||!!a.sheenColorMap||!!a.sheenRoughnessMap,uvsVertexOnly:!(a.map||a.bumpMap||a.normalMap||a.specularMap||a.alphaMap||a.emissiveMap||a.roughnessMap||a.metalnessMap||a.clearcoatNormalMap||a.transmission>0||a.transmissionMap||a.thicknessMap||a.specularIntensityMap||a.specularColorMap||a.sheen>0||a.sheenColorMap||a.sheenRoughnessMap)&&!!a.displacementMap,fog:!!b,useFog:a.fog,fogExp2:b&&b.isFogExp2,flatShading:!!a.flatShading,sizeAttenuation:a.sizeAttenuation,logarithmicDepthBuffer:d,skinning:!0===y.isSkinnedMesh&&w>0,maxBones:w,useVertexTexture:f,morphTargets:!!y.geometry&&!!y.geometry.morphAttributes.position,morphNormals:!!y.geometry&&!!y.geometry.morphAttributes.normal,morphTargetsCount:!y.geometry||!y.geometry.morphAttributes.position?0:y.geometry.morphAttributes.position.length,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,format:a.format,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:a.toneMapped?e.toneMapping:ma,physicallyCorrectLights:e.physicallyCorrectLights,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===Ni,flipSided:a.side===Mi,depthPacking:a.depthPacking!==void 0&&a.depthPacking,index0AttributeName:a.index0AttributeName,extensionDerivatives:a.extensions&&a.extensions.derivatives,extensionFragDepth:a.extensions&&a.extensions.fragDepth,extensionDrawBuffers:a.extensions&&a.extensions.drawBuffers,extensionShaderTextureLOD:a.extensions&&a.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||r.has(`EXT_frag_depth`),rendererExtensionDrawBuffers:u||r.has(`WEBGL_draw_buffers`),rendererExtensionShaderTextureLod:u||r.has(`EXT_shader_texture_lod`),customProgramCacheKey:a.customProgramCacheKey()}}function b(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(x(n,t),S(n,t),n.push(e.outputEncoding)),n.push(t.customProgramCacheKey),n.join()}function x(e,t){e.push(t.precision),e.push(t.outputEncoding),e.push(t.mapEncoding),e.push(t.matcapEncoding),e.push(t.envMapMode),e.push(t.envMapEncoding),e.push(t.lightMapEncoding),e.push(t.emissiveMapEncoding),e.push(t.combine),e.push(t.vertexUvs),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.maxBones),e.push(t.morphTargetsCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.format),e.push(t.specularColorMapEncoding),e.push(t.sheenColorMapEncoding)}function S(e,t){s.disableAll(),t.isWebGL2&&s.enable(0),t.supportsVertexTextures&&s.enable(1),t.instancing&&s.enable(2),t.instancingColor&&s.enable(3),t.map&&s.enable(4),t.matcap&&s.enable(5),t.envMap&&s.enable(6),t.envMapCubeUV&&s.enable(7),t.lightMap&&s.enable(8),t.aoMap&&s.enable(9),t.emissiveMap&&s.enable(10),t.bumpMap&&s.enable(11),t.normalMap&&s.enable(12),t.objectSpaceNormalMap&&s.enable(13),t.tangentSpaceNormalMap&&s.enable(14),t.clearcoat&&s.enable(15),t.clearcoatMap&&s.enable(16),t.clearcoatRoughnessMap&&s.enable(17),t.clearcoatNormalMap&&s.enable(18),t.displacementMap&&s.enable(19),t.specularMap&&s.enable(20),t.roughnessMap&&s.enable(21),t.metalnessMap&&s.enable(22),t.gradientMap&&s.enable(23),t.alphaMap&&s.enable(24),t.alphaTest&&s.enable(25),t.vertexColors&&s.enable(26),t.vertexAlphas&&s.enable(27),t.vertexUvs&&s.enable(28),t.vertexTangents&&s.enable(29),t.uvsVertexOnly&&s.enable(30),t.fog&&s.enable(31),e.push(s.mask),s.disableAll(),t.useFog&&s.enable(0),t.flatShading&&s.enable(1),t.logarithmicDepthBuffer&&s.enable(2),t.skinning&&s.enable(3),t.useVertexTexture&&s.enable(4),t.morphTargets&&s.enable(5),t.morphNormals&&s.enable(6),t.premultipliedAlpha&&s.enable(7),t.shadowMapEnabled&&s.enable(8),t.physicallyCorrectLights&&s.enable(9),t.doubleSided&&s.enable(10),t.flipSided&&s.enable(11),t.depthPacking&&s.enable(12),t.dithering&&s.enable(13),t.specularIntensityMap&&s.enable(14),t.specularColorMap&&s.enable(15),t.transmission&&s.enable(16),t.transmissionMap&&s.enable(17),t.thicknessMap&&s.enable(18),t.sheen&&s.enable(19),t.sheenColorMap&&s.enable(20),t.sheenRoughnessMap&&s.enable(21),e.push(s.mask)}function C(e){let t=g[e.type],n;if(t){let e=Ul[t];n=wl.clone(e.uniforms)}else n=e.uniforms;return n}function w(t,n){let r;for(let e=0,t=l.length;e<t;e++){let t=l[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new sr(e,n,t,a),l.push(r)),r}function T(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),e.destroy()}}function E(e){c.remove(e)}function D(){c.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:C,acquireProgram:w,releaseProgram:T,releaseShaderCache:E,programs:l,dispose:D}}function lr(){let e=new WeakMap;function t(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function n(t){e.delete(t)}function r(t,n,r){e.get(t)[n]=r}function i(){e=new WeakMap}return{get:t,remove:n,update:r,dispose:i}}function ur(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function dr(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function fr(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):!0===a.transparent?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):!0===a.transparent?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||ur),r.length>1&&r.sort(t||dr),i.length>1&&i.sort(t||dr)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function pr(){let e=new WeakMap;function t(t,n){let r;return!1===e.has(t)?(r=new fr,e.set(t,[r])):n>=e.get(t).length?(r=new fr,e.get(t).push(r)):r=e.get(t)[n],r}function n(){e=new WeakMap}return{get:t,dispose:n}}function mr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new W,color:new q};break;case`SpotLight`:n={position:new W,direction:new W,color:new q,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new W,color:new q,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new W,skyColor:new q,groundColor:new q};break;case`RectAreaLight`:n={color:new q,position:new W,halfWidth:new W,halfHeight:new W};break}return e[t.id]=n,n}}}function hr(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`SpotLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H};break;case`PointLight`:n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new H,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}function gr(e,t){return(t.castShadow?1:0)-(e.castShadow?1:0)}function _r(e,t){let n=new mr,r=hr(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let e=0;e<9;e++)i.probe.push(new W);let a=new W,o=new G,s=new G;function c(a,o){let s=0,c=0,l=0;for(let e=0;e<9;e++)i.probe[e].set(0,0,0);let u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0;a.sort(gr);let v=!0===o?1:Math.PI;for(let e=0,t=a.length;e<t;e++){let t=a[e],o=t.color,y=t.intensity,b=t.distance,x=t.shadow&&t.shadow.map?t.shadow.map.texture:null;if(t.isAmbientLight)s+=o.r*y*v,c+=o.g*y*v,l+=o.b*y*v;else if(t.isLightProbe)for(let e=0;e<9;e++)i.probe[e].addScaledVector(t.sh.coefficients[e],y);else if(t.isDirectionalLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*v),t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.directionalShadow[u]=n,i.directionalShadowMap[u]=x,i.directionalShadowMatrix[u]=t.shadow.matrix,h++}i.directional[u]=e,u++}else if(t.isSpotLight){let e=n.get(t);if(e.position.setFromMatrixPosition(t.matrixWorld),e.color.copy(o).multiplyScalar(y*v),e.distance=b,e.coneCos=Math.cos(t.angle),e.penumbraCos=Math.cos(t.angle*(1-t.penumbra)),e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,i.spotShadow[f]=n,i.spotShadowMap[f]=x,i.spotShadowMatrix[f]=t.shadow.matrix,_++}i.spot[f]=e,f++}else if(t.isRectAreaLight){let e=n.get(t);e.color.copy(o).multiplyScalar(y),e.halfWidth.set(.5*t.width,0,0),e.halfHeight.set(0,.5*t.height,0),i.rectArea[p]=e,p++}else if(t.isPointLight){let e=n.get(t);if(e.color.copy(t.color).multiplyScalar(t.intensity*v),e.distance=t.distance,e.decay=t.decay,t.castShadow){let e=t.shadow,n=r.get(t);n.shadowBias=e.bias,n.shadowNormalBias=e.normalBias,n.shadowRadius=e.radius,n.shadowMapSize=e.mapSize,n.shadowCameraNear=e.camera.near,n.shadowCameraFar=e.camera.far,i.pointShadow[d]=n,i.pointShadowMap[d]=x,i.pointShadowMatrix[d]=t.shadow.matrix,g++}i.point[d]=e,d++}else if(t.isHemisphereLight){let e=n.get(t);e.skyColor.copy(t.color).multiplyScalar(y*v),e.groundColor.copy(t.groundColor).multiplyScalar(y*v),i.hemi[m]=e,m++}}p>0&&(t.isWebGL2||!0===e.has(`OES_texture_float_linear`)?(i.rectAreaLTC1=Q.LTC_FLOAT_1,i.rectAreaLTC2=Q.LTC_FLOAT_2):!0===e.has(`OES_texture_half_float_linear`)?(i.rectAreaLTC1=Q.LTC_HALF_1,i.rectAreaLTC2=Q.LTC_HALF_2):console.error(`THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.`)),i.ambient[0]=s,i.ambient[1]=c,i.ambient[2]=l;let y=i.hash;(y.directionalLength!==u||y.pointLength!==d||y.spotLength!==f||y.rectAreaLength!==p||y.hemiLength!==m||y.numDirectionalShadows!==h||y.numPointShadows!==g||y.numSpotShadows!==_)&&(i.directional.length=u,i.spot.length=f,i.rectArea.length=p,i.point.length=d,i.hemi.length=m,i.directionalShadow.length=h,i.directionalShadowMap.length=h,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=h,i.pointShadowMatrix.length=g,i.spotShadowMatrix.length=_,y.directionalLength=u,y.pointLength=d,y.spotLength=f,y.rectAreaLength=p,y.hemiLength=m,y.numDirectionalShadows=h,y.numPointShadows=g,y.numSpotShadows=_,i.version=Ou++)}function l(e,t){let n=0,r=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=i.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=i.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),a.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(a),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=i.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s.identity(),o.copy(f.matrixWorld),o.premultiply(d),s.extractRotation(o),e.halfWidth.set(.5*f.width,0,0),e.halfHeight.set(0,.5*f.height,0),e.halfWidth.applyMatrix4(s),e.halfHeight.applyMatrix4(s),l++}else if(f.isPointLight){let e=i.point[r];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),r++}else if(f.isHemisphereLight){let e=i.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),e.direction.normalize(),u++}}}return{setup:c,setupView:l,state:i}}function vr(e,t){let n=new _r(e,t),r=[],i=[];function a(){r.length=0,i.length=0}function o(e){r.push(e)}function s(e){i.push(e)}function c(e){n.setup(r,e)}function l(e){n.setupView(r,e)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:n},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function yr(e,t){let n=new WeakMap;function r(r,i=0){let a;return!1===n.has(r)?(a=new vr(e,t),n.set(r,[a])):i>=n.get(r).length?(a=new vr(e,t),n.get(r).push(a)):a=n.get(r)[i],a}function i(){n=new WeakMap}return{get:r,dispose:i}}function br(e,t,n){let r=new Vl,i=new H,a=new H,o=new U,s=new ku({depthPacking:ls}),c=new Au,l={},u=n.maxTextureSize,d={0:Mi,1:ji,2:Ni},f=new Dl({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new H},radius:{value:4}},vertexShader:ju,fragmentShader:Mu}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new X;m.setAttribute(`position`,new Jc(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Sl(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oi,this.render=function(t,n,s){if(!1===g.enabled||!1===g.autoUpdate&&!1===g.needsUpdate||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(Fi),f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){console.warn(`THREE.WebGLShadowMap:`,l,`has no shadow.`);continue}if(!1===d.autoUpdate&&!1===d.needsUpdate)continue;i.copy(d.mapSize);let p=d.getFrameExtents();if(i.multiply(p),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/p.x),i.x=a.x*p.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/p.y),i.y=a.y*p.y,d.mapSize.y=a.y)),d.map===null&&!d.isPointLightShadow&&this.type===Ai){let e={minFilter:Na,magFilter:Na,format:Xa};d.map=new Ds(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.mapPass=new Ds(i.x,i.y,e),d.camera.updateProjectionMatrix()}if(d.map===null){let e={minFilter:Aa,magFilter:Aa,format:Xa};d.map=new Ds(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let m=d.getViewportCount();for(let e=0;e<m;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),y(n,s,d.camera,l,this.type)}d.isPointLightShadow||this.type!==Ai||_(d,s),d.needsUpdate=!1}g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function _(n,r){let i=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,p,h,null)}function v(t,n,r,i,a,o,u){let f=null,p=!0===i.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(f=p===void 0?!0===i.isPointLight?c:s:p,e.localClippingEnabled&&!0===r.clipShadows&&r.clippingPlanes.length!==0||r.displacementMap&&r.displacementScale!==0||r.alphaMap&&r.alphaTest>0){let e=f.uuid,t=r.uuid,n=l[e];n===void 0&&(n={},l[e]=n);let i=n[t];i===void 0&&(i=f.clone(),n[t]=i),f=i}return f.visible=r.visible,f.wireframe=r.wireframe,f.side=u===Ai?r.shadowSide===null?r.side:r.shadowSide:r.shadowSide===null?d[r.side]:r.shadowSide,f.alphaMap=r.alphaMap,f.alphaTest=r.alphaTest,f.clipShadows=r.clipShadows,f.clippingPlanes=r.clippingPlanes,f.clipIntersection=r.clipIntersection,f.displacementMap=r.displacementMap,f.displacementScale=r.displacementScale,f.displacementBias=r.displacementBias,f.wireframeLinewidth=r.wireframeLinewidth,f.linewidth=r.linewidth,!0===i.isPointLight&&!0===f.isMeshDistanceMaterial&&(f.referencePosition.setFromMatrixPosition(i.matrixWorld),f.nearDistance=a,f.farDistance=o),f}function y(n,i,a,o,s){if(!1===n.visible)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===Ai)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),i=n.material;if(Array.isArray(i)){let t=r.groups;for(let c=0,l=t.length;c<l;c++){let l=t[c],u=i[l.materialIndex];if(u&&u.visible){let t=v(n,r,u,o,a.near,a.far,s);e.renderBufferDirect(a,null,r,t,n,l)}}}else if(i.visible){let t=v(n,r,i,o,a.near,a.far,s);e.renderBufferDirect(a,null,r,t,n,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)y(c[e],i,a,o,s)}}function xr(e,t,n){let r=n.isWebGL2;function i(){let t=!1,n=new U,r=null,i=new U(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){!0===s&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),!1===i.equals(n)&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function a(){let t=!1,n=null,r=null,i=null;return{setTest:function(e){e?N(2929):P(2929)},setMask:function(r){n!==r&&!t&&(e.depthMask(r),n=r)},setFunc:function(t){if(r!==t){if(t)switch(t){case ra:e.depthFunc(512);break;case ia:e.depthFunc(519);break;case aa:e.depthFunc(513);break;case oa:e.depthFunc(515);break;case sa:e.depthFunc(514);break;case ca:e.depthFunc(518);break;case la:e.depthFunc(516);break;case ua:e.depthFunc(517);break;default:e.depthFunc(515)}else e.depthFunc(515);r=t}},setLocked:function(e){t=e},setClear:function(t){i!==t&&(e.clearDepth(t),i=t)},reset:function(){t=!1,n=null,r=null,i=null}}}function o(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(e){t||(e?N(2960):P(2960))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let s=new i,c=new a,l=new o,u={},d={},f=null,p=!1,m=null,h=null,g=null,_=null,v=null,y=null,b=null,x=!1,S=null,C=null,w=null,T=null,E=null,D=e.getParameter(35661),O=!1,k=0,ee=e.getParameter(7938);ee.indexOf(`WebGL`)===-1?ee.indexOf(`OpenGL ES`)!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),O=k>=2):(k=parseFloat(/^WebGL (\d)/.exec(ee)[1]),O=k>=1);let A=null,te={},j=e.getParameter(3088),M=e.getParameter(2978),ne=new U().fromArray(j),re=new U().fromArray(M);function ie(t,n,r){let i=new Uint8Array(4),a=e.createTexture();e.bindTexture(t,a),e.texParameteri(t,10241,9728),e.texParameteri(t,10240,9728);for(let t=0;t<r;t++)e.texImage2D(n+t,0,6408,1,1,0,6408,5121,i);return a}let ae={};ae[3553]=ie(3553,3553,1),ae[34067]=ie(34067,34069,6),s.setClear(0,0,0,1),c.setClear(1),l.setClear(0),N(2929),c.setFunc(oa),R(!1),le(Ei),N(2884),I(Fi);function N(t){!0!==u[t]&&(e.enable(t),u[t]=!0)}function P(t){!1!==u[t]&&(e.disable(t),u[t]=!1)}function oe(t,n){return d[t]===n?!1:(e.bindFramebuffer(t,n),d[t]=n,r&&(t===36009&&(d[36160]=n),t===36160&&(d[36009]=n)),!0)}function se(t){return f===t?!1:(e.useProgram(t),f=t,!0)}let F={[Vi]:32774,[Hi]:32778,[Ui]:32779};if(r)F[Wi]=32775,F[Gi]=32776;else{let e=t.get(`EXT_blend_minmax`);e!==null&&(F[Wi]=e.MIN_EXT,F[Gi]=e.MAX_EXT)}let ce={[Ki]:0,[qi]:1,[Ji]:768,[Xi]:770,[na]:776,[ea]:774,[Qi]:772,[Yi]:769,[Zi]:771,[ta]:775,[$i]:773};function I(t,n,r,i,a,o,s,c){if(t!==Fi){if(!1===p&&(N(3042),p=!0),t===Bi)a||=n,o||=r,s||=i,(n!==h||a!==v)&&(e.blendEquationSeparate(F[n],F[a]),h=n,v=a),(r!==g||i!==_||o!==y||s!==b)&&(e.blendFuncSeparate(ce[r],ce[i],ce[o],ce[s]),g=r,_=i,y=o,b=s),m=t,x=null;else if(t!==m||c!==x){if((h!==Vi||v!==Vi)&&(e.blendEquation(32774),h=Vi,v=Vi),c)switch(t){case Ii:e.blendFuncSeparate(1,771,1,771);break;case Li:e.blendFunc(1,1);break;case Ri:e.blendFuncSeparate(0,0,769,771);break;case zi:e.blendFuncSeparate(0,768,0,770);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}else switch(t){case Ii:e.blendFuncSeparate(770,771,1,771);break;case Li:e.blendFunc(770,1);break;case Ri:e.blendFunc(0,769);break;case zi:e.blendFunc(0,768);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t);break}g=null,_=null,y=null,b=null,m=t,x=c}}else !0===p&&(P(3042),p=!1)}function L(e,t){e.side===Ni?P(2884):N(2884);let n=e.side===Mi;t&&(n=!n),R(n),e.blending===Ii&&!1===e.transparent?I(Fi):I(e.blending,e.blendEquation,e.blendSrc,e.blendDst,e.blendEquationAlpha,e.blendSrcAlpha,e.blendDstAlpha,e.premultipliedAlpha),c.setFunc(e.depthFunc),c.setTest(e.depthTest),c.setMask(e.depthWrite),s.setMask(e.colorWrite);let r=e.stencilWrite;l.setTest(r),r&&(l.setMask(e.stencilWriteMask),l.setFunc(e.stencilFunc,e.stencilRef,e.stencilFuncMask),l.setOp(e.stencilFail,e.stencilZFail,e.stencilZPass)),B(e.polygonOffset,e.polygonOffsetFactor,e.polygonOffsetUnits),!0===e.alphaToCoverage?N(32926):P(32926)}function R(t){S!==t&&(t?e.frontFace(2304):e.frontFace(2305),S=t)}function le(t){t===Ti?P(2884):(N(2884),t!==C&&(t===Ei?e.cullFace(1029):t===Di?e.cullFace(1028):e.cullFace(1032))),C=t}function z(t){t!==w&&(O&&e.lineWidth(t),w=t)}function B(t,n,r){t?(N(32823),(T!==n||E!==r)&&(e.polygonOffset(n,r),T=n,E=r)):P(32823)}function ue(e){e?N(3089):P(3089)}function de(t){t===void 0&&(t=33984+D-1),A!==t&&(e.activeTexture(t),A=t)}function fe(t,n){A===null&&de();let r=te[A];r===void 0&&(r={type:void 0,texture:void 0},te[A]=r),(r.type!==t||r.texture!==n)&&(e.bindTexture(t,n||ae[t]),r.type=t,r.texture=n)}function pe(){let t=te[A];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function me(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function he(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ge(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function _e(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ve(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ye(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function be(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function xe(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Se(t){!1===ne.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),ne.copy(t))}function Ce(t){!1===re.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),re.copy(t))}function we(){e.disable(3042),e.disable(2884),e.disable(2929),e.disable(32823),e.disable(3089),e.disable(2960),e.disable(32926),e.blendEquation(32774),e.blendFunc(1,0),e.blendFuncSeparate(1,0,1,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(513),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(519,0,4294967295),e.stencilOp(7680,7680,7680),e.clearStencil(0),e.cullFace(1029),e.frontFace(2305),e.polygonOffset(0,0),e.activeTexture(33984),e.bindFramebuffer(36160,null),!0===r&&(e.bindFramebuffer(36009,null),e.bindFramebuffer(36008,null)),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},A=null,te={},d={},f=null,p=!1,m=null,h=null,g=null,_=null,v=null,y=null,b=null,x=!1,S=null,C=null,w=null,T=null,E=null,ne.set(0,0,e.canvas.width,e.canvas.height),re.set(0,0,e.canvas.width,e.canvas.height),s.reset(),c.reset(),l.reset()}return{buffers:{color:s,depth:c,stencil:l},enable:N,disable:P,bindFramebuffer:oe,useProgram:se,setBlending:I,setMaterial:L,setFlipSided:R,setCullFace:le,setLineWidth:z,setPolygonOffset:B,setScissorTest:ue,activeTexture:de,bindTexture:fe,unbindTexture:pe,compressedTexImage2D:me,texImage2D:be,texImage3D:xe,texStorage2D:ve,texStorage3D:ye,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:_e,scissor:Se,viewport:Ce,reset:we}}function Sr(e,t,n,r,i,a,o){let s=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,f=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):void 0,p=new WeakMap,m,h=!1;try{h=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return h?new OffscreenCanvas(e,t):at(`canvas`)}function _(e,t,n,r){let i=1;if((e.width>r||e.height>r)&&(i=r/Math.max(e.width,e.height)),i<1||!0===t){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let r=t?nt:Math.floor,a=r(i*e.width),o=r(i*e.height);m===void 0&&(m=g(a,o));let s=n?g(a,o):m;return s.width=a,s.height=o,s.getContext(`2d`).drawImage(e,0,0,a,o),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+e.width+`x`+e.height+`) to (`+a+`x`+o+`).`),s}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+e.width+`x`+e.height+`).`),e}return e}function v(e){return et(e.width)&&et(e.height)}function y(e){return!s&&(e.wrapS!==Oa||e.wrapT!==Oa||e.minFilter!==Aa&&e.minFilter!==Na)}function b(e,t){return e.generateMipmaps&&t&&e.minFilter!==Aa&&e.minFilter!==Na}function x(t){e.generateMipmap(t)}function S(n,r,i,a){if(!1===s)return r;if(n!==null){if(e[n]!==void 0)return e[n];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let o=r;return r===6403&&(i===5126&&(o=33326),i===5131&&(o=33325),i===5121&&(o=33321)),r===6407&&(i===5126&&(o=34837),i===5131&&(o=34843),i===5121&&(o=32849)),r===6408&&(i===5126&&(o=34836),i===5131&&(o=34842),i===5121&&(o=a===ss?35907:32856)),o!==33325&&o!==33326&&o!==34842&&o!==34836||t.get(`EXT_color_buffer_float`),o}function C(e,t,n){return!0===b(e,n)||e.isFramebufferTexture&&e.minFilter!==Aa&&e.minFilter!==Na?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function w(e){return e===Aa||e===ja||e===Ma?9728:9729}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),D(t),t.isVideoTexture&&p.delete(t),o.memory.textures--}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),O(t)}function D(t){let n=r.get(t);n.__webglInit!==void 0&&(e.deleteTexture(n.__webglTexture),r.remove(t))}function O(t){let n=t.texture,i=r.get(t),a=r.get(n);if(t){if(a.__webglTexture!==void 0&&(e.deleteTexture(a.__webglTexture),o.memory.textures--),t.depthTexture&&t.depthTexture.dispose(),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++)e.deleteFramebuffer(i.__webglFramebuffer[t]),i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer[t]);else e.deleteFramebuffer(i.__webglFramebuffer),i.__webglDepthbuffer&&e.deleteRenderbuffer(i.__webglDepthbuffer),i.__webglMultisampledFramebuffer&&e.deleteFramebuffer(i.__webglMultisampledFramebuffer),i.__webglColorRenderbuffer&&e.deleteRenderbuffer(i.__webglColorRenderbuffer),i.__webglDepthRenderbuffer&&e.deleteRenderbuffer(i.__webglDepthRenderbuffer);if(t.isWebGLMultipleRenderTargets)for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture&&(e.deleteTexture(i.__webglTexture),o.memory.textures--),r.remove(n[t])}r.remove(n),r.remove(t)}}let k=0;function ee(){k=0}function A(){let e=k;return e>=c&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+c),k+=1,e}function te(e,t){let i=r.get(e);if(e.isVideoTexture&&ue(e),e.version>0&&i.__version!==e.version){let n=e.image;if(n===void 0)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is undefined`);else{if(!1!==n.complete){P(i,e,t);return}console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`)}}n.activeTexture(33984+t),n.bindTexture(3553,i.__webglTexture)}function j(e,t){let i=r.get(e);e.version>0&&i.__version!==e.version?P(i,e,t):(n.activeTexture(33984+t),n.bindTexture(35866,i.__webglTexture))}function M(e,t){let i=r.get(e);e.version>0&&i.__version!==e.version?P(i,e,t):(n.activeTexture(33984+t),n.bindTexture(32879,i.__webglTexture))}function ne(e,t){let i=r.get(e);e.version>0&&i.__version!==e.version?oe(i,e,t):(n.activeTexture(33984+t),n.bindTexture(34067,i.__webglTexture))}let re={[Da]:10497,[Oa]:33071,[ka]:33648},ie={[Aa]:9728,[ja]:9984,[Ma]:9986,[Na]:9729,[Pa]:9985,[Fa]:9987};function ae(n,a,o){if(o?(e.texParameteri(n,10242,re[a.wrapS]),e.texParameteri(n,10243,re[a.wrapT]),n!==32879&&n!==35866||e.texParameteri(n,32882,re[a.wrapR]),e.texParameteri(n,10240,ie[a.magFilter]),e.texParameteri(n,10241,ie[a.minFilter])):(e.texParameteri(n,10242,33071),e.texParameteri(n,10243,33071),n!==32879&&n!==35866||e.texParameteri(n,32882,33071),a.wrapS===Oa&&a.wrapT===Oa||console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.`),e.texParameteri(n,10240,w(a.magFilter)),e.texParameteri(n,10241,w(a.minFilter)),a.minFilter!==Aa&&a.minFilter!==Na&&console.warn(`THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.`)),!0===t.has(`EXT_texture_filter_anisotropic`)){let o=t.get(`EXT_texture_filter_anisotropic`);if(a.type===Ha&&!1===t.has(`OES_texture_float_linear`)||!1===s&&a.type===Ua&&!1===t.has(`OES_texture_half_float_linear`))return;(a.anisotropy>1||r.get(a).__currentAnisotropy)&&(e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy)}}function N(t,n){t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,T),t.__webglTexture=e.createTexture(),o.memory.textures++)}function P(t,r,i){let o=3553;r.isDataTexture2DArray&&(o=35866),r.isDataTexture3D&&(o=32879),N(t,r),n.activeTexture(33984+i),n.bindTexture(o,t.__webglTexture),e.pixelStorei(37440,r.flipY),e.pixelStorei(37441,r.premultiplyAlpha),e.pixelStorei(3317,r.unpackAlignment),e.pixelStorei(37443,0);let c=y(r)&&!1===v(r.image),l=_(r.image,c,!1,u),d=v(l)||s,f=a.convert(r.format),p=a.convert(r.type),m=S(r.internalFormat,f,p,r.encoding);ae(o,r,d);let h,g=r.mipmaps,w=s&&!0!==r.isVideoTexture,T=t.__version===void 0,E=C(r,l,d);if(r.isDepthTexture)m=6402,s?m=r.type===Ha?36012:r.type===Va?33190:r.type===qa?35056:33189:r.type===Ha&&console.error(`WebGLRenderer: Floating point depth texture requires WebGL2.`),r.format===$a&&m===6402&&r.type!==za&&r.type!==Va&&(console.warn(`THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.`),r.type=za,p=a.convert(r.type)),r.format===eo&&m===6402&&(m=34041,r.type!==qa&&(console.warn(`THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.`),r.type=qa,p=a.convert(r.type))),w&&T?n.texStorage2D(3553,1,m,l.width,l.height):n.texImage2D(3553,0,m,l.width,l.height,0,f,p,null);else if(r.isDataTexture)if(g.length>0&&d){w&&T&&n.texStorage2D(3553,E,m,g[0].width,g[0].height);for(let e=0,t=g.length;e<t;e++)h=g[e],w?n.texSubImage2D(3553,0,0,0,h.width,h.height,f,p,h.data):n.texImage2D(3553,e,m,h.width,h.height,0,f,p,h.data);r.generateMipmaps=!1}else w?(T&&n.texStorage2D(3553,E,m,l.width,l.height),n.texSubImage2D(3553,0,0,0,l.width,l.height,f,p,l.data)):n.texImage2D(3553,0,m,l.width,l.height,0,f,p,l.data);else if(r.isCompressedTexture){w&&T&&n.texStorage2D(3553,E,m,g[0].width,g[0].height);for(let e=0,t=g.length;e<t;e++)h=g[e],r.format!==Xa&&r.format!==Ya?f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):w?n.compressedTexSubImage2D(3553,e,0,0,h.width,h.height,f,h.data):n.compressedTexImage2D(3553,e,m,h.width,h.height,0,h.data):w?n.texSubImage2D(3553,e,0,0,h.width,h.height,f,p,h.data):n.texImage2D(3553,e,m,h.width,h.height,0,f,p,h.data)}else if(r.isDataTexture2DArray)w?(T&&n.texStorage3D(35866,E,m,l.width,l.height,l.depth),n.texSubImage3D(35866,0,0,0,0,l.width,l.height,l.depth,f,p,l.data)):n.texImage3D(35866,0,m,l.width,l.height,l.depth,0,f,p,l.data);else if(r.isDataTexture3D)w?(T&&n.texStorage3D(32879,E,m,l.width,l.height,l.depth),n.texSubImage3D(32879,0,0,0,0,l.width,l.height,l.depth,f,p,l.data)):n.texImage3D(32879,0,m,l.width,l.height,l.depth,0,f,p,l.data);else if(r.isFramebufferTexture)w&&T?n.texStorage2D(3553,E,m,l.width,l.height):n.texImage2D(3553,0,m,l.width,l.height,0,f,p,null);else if(g.length>0&&d){w&&T&&n.texStorage2D(3553,E,m,g[0].width,g[0].height);for(let e=0,t=g.length;e<t;e++)h=g[e],w?n.texSubImage2D(3553,e,0,0,f,p,h):n.texImage2D(3553,e,m,f,p,h);r.generateMipmaps=!1}else w?(T&&n.texStorage2D(3553,E,m,l.width,l.height),n.texSubImage2D(3553,0,0,0,f,p,l)):n.texImage2D(3553,0,m,f,p,l);b(r,d)&&x(o),t.__version=r.version,r.onUpdate&&r.onUpdate(r)}function oe(t,r,i){if(r.image.length!==6)return;N(t,r),n.activeTexture(33984+i),n.bindTexture(34067,t.__webglTexture),e.pixelStorei(37440,r.flipY),e.pixelStorei(37441,r.premultiplyAlpha),e.pixelStorei(3317,r.unpackAlignment),e.pixelStorei(37443,0);let o=r&&(r.isCompressedTexture||r.image[0].isCompressedTexture),c=r.image[0]&&r.image[0].isDataTexture,u=[];for(let e=0;e<6;e++)u[e]=o||c?c?r.image[e].image:r.image[e]:_(r.image[e],!1,!0,l);let d=u[0],f=v(d)||s,p=a.convert(r.format),m=a.convert(r.type),h=S(r.internalFormat,p,m,r.encoding),g=s&&!0!==r.isVideoTexture,y=t.__version===void 0,w=C(r,d,f);ae(34067,r,f);let T;if(o){g&&y&&n.texStorage2D(34067,w,h,d.width,d.height);for(let e=0;e<6;e++){T=u[e].mipmaps;for(let t=0;t<T.length;t++){let i=T[t];r.format!==Xa&&r.format!==Ya?p===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):g?n.compressedTexSubImage2D(34069+e,t,0,0,i.width,i.height,p,i.data):n.compressedTexImage2D(34069+e,t,h,i.width,i.height,0,i.data):g?n.texSubImage2D(34069+e,t,0,0,i.width,i.height,p,m,i.data):n.texImage2D(34069+e,t,h,i.width,i.height,0,p,m,i.data)}}}else{T=r.mipmaps,g&&y&&(T.length>0&&w++,n.texStorage2D(34067,w,h,u[0].width,u[0].height));for(let e=0;e<6;e++)if(c){g?n.texSubImage2D(34069+e,0,0,0,u[e].width,u[e].height,p,m,u[e].data):n.texImage2D(34069+e,0,h,u[e].width,u[e].height,0,p,m,u[e].data);for(let t=0;t<T.length;t++){let r=T[t].image[e].image;g?n.texSubImage2D(34069+e,t+1,0,0,r.width,r.height,p,m,r.data):n.texImage2D(34069+e,t+1,h,r.width,r.height,0,p,m,r.data)}}else{g?n.texSubImage2D(34069+e,0,0,0,p,m,u[e]):n.texImage2D(34069+e,0,h,p,m,u[e]);for(let t=0;t<T.length;t++){let r=T[t];g?n.texSubImage2D(34069+e,t+1,0,0,p,m,r.image[e]):n.texImage2D(34069+e,t+1,h,p,m,r.image[e])}}}b(r,f)&&x(34067),t.__version=r.version,r.onUpdate&&r.onUpdate(r)}function se(t,i,o,s,c){let l=a.convert(o.format),u=a.convert(o.type),d=S(o.internalFormat,l,u,o.encoding);r.get(i).__hasExternalTextures||(c===32879||c===35866?n.texImage3D(c,0,d,i.width,i.height,i.depth,0,l,u,null):n.texImage2D(c,0,d,i.width,i.height,0,l,u,null)),n.bindFramebuffer(36160,t),i.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,s,c,r.get(o).__webglTexture,0,B(i)):e.framebufferTexture2D(36160,s,c,r.get(o).__webglTexture,0),n.bindFramebuffer(36160,null)}function F(t,n,r){if(e.bindRenderbuffer(36161,t),n.depthBuffer&&!n.stencilBuffer){let i=33189;if(r||n.useRenderToTexture){let t=n.depthTexture;t&&t.isDepthTexture&&(t.type===Ha?i=36012:t.type===Va&&(i=33190));let r=B(n);n.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,r,i,n.width,n.height):e.renderbufferStorageMultisample(36161,r,i,n.width,n.height)}else e.renderbufferStorage(36161,i,n.width,n.height);e.framebufferRenderbuffer(36160,36096,36161,t)}else if(n.depthBuffer&&n.stencilBuffer){let i=B(n);r&&n.useRenderbuffer?e.renderbufferStorageMultisample(36161,i,35056,n.width,n.height):n.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,i,35056,n.width,n.height):e.renderbufferStorage(36161,34041,n.width,n.height),e.framebufferRenderbuffer(36160,33306,36161,t)}else{let t=!0===n.isWebGLMultipleRenderTargets?n.texture[0]:n.texture,i=a.convert(t.format),o=a.convert(t.type),s=S(t.internalFormat,i,o,t.encoding),c=B(n);r&&n.useRenderbuffer?e.renderbufferStorageMultisample(36161,c,s,n.width,n.height):n.useRenderToTexture?f.renderbufferStorageMultisampleEXT(36161,c,s,n.width,n.height):e.renderbufferStorage(36161,s,n.width,n.height)}e.bindRenderbuffer(36161,null)}function ce(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(36160,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);(!r.get(i.depthTexture).__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),te(i.depthTexture,0);let a=r.get(i.depthTexture).__webglTexture,o=B(i);if(i.depthTexture.format===$a)i.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,a,0,o):e.framebufferTexture2D(36160,36096,3553,a,0);else{if(i.depthTexture.format!==eo)throw Error(`Unknown depthTexture format`);i.useRenderToTexture?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,a,0,o):e.framebufferTexture2D(36160,33306,3553,a,0)}}function I(t){let i=r.get(t),a=!0===t.isWebGLCubeRenderTarget;if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);ce(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)n.bindFramebuffer(36160,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]=e.createRenderbuffer(),F(i.__webglDepthbuffer[r],t,!1)}else n.bindFramebuffer(36160,i.__webglFramebuffer),i.__webglDepthbuffer=e.createRenderbuffer(),F(i.__webglDepthbuffer,t,!1);n.bindFramebuffer(36160,null)}function L(e,t,n){let i=r.get(e);t!==void 0&&se(i.__webglFramebuffer,e,e.texture,36064,3553),n!==void 0&&I(e)}function R(t){let c=t.texture,l=r.get(t),u=r.get(c);t.addEventListener(`dispose`,E),!0!==t.isWebGLMultipleRenderTargets&&(u.__webglTexture===void 0&&(u.__webglTexture=e.createTexture()),u.__version=c.version,o.memory.textures++);let d=!0===t.isWebGLCubeRenderTarget,f=!0===t.isWebGLMultipleRenderTargets,p=c.isDataTexture3D||c.isDataTexture2DArray,m=v(t)||s;if(s&&c.format===Ya&&(c.type===Ha||c.type===Ua)&&(c.format=Xa,console.warn(`THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead.`)),d){l.__webglFramebuffer=[];for(let t=0;t<6;t++)l.__webglFramebuffer[t]=e.createFramebuffer()}else if(l.__webglFramebuffer=e.createFramebuffer(),f)if(i.drawBuffers){let n=t.texture;for(let t=0,i=n.length;t<i;t++){let i=r.get(n[t]);i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture(),o.memory.textures++)}}else console.warn(`THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.`);else if(t.useRenderbuffer)if(s){l.__webglMultisampledFramebuffer=e.createFramebuffer(),l.__webglColorRenderbuffer=e.createRenderbuffer(),e.bindRenderbuffer(36161,l.__webglColorRenderbuffer);let r=a.convert(c.format),i=a.convert(c.type),o=S(c.internalFormat,r,i,c.encoding),s=B(t);e.renderbufferStorageMultisample(36161,s,o,t.width,t.height),n.bindFramebuffer(36160,l.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(36160,36064,36161,l.__webglColorRenderbuffer),e.bindRenderbuffer(36161,null),t.depthBuffer&&(l.__webglDepthRenderbuffer=e.createRenderbuffer(),F(l.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(36160,null)}else console.warn(`THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.`);if(d){n.bindTexture(34067,u.__webglTexture),ae(34067,c,m);for(let e=0;e<6;e++)se(l.__webglFramebuffer[e],t,c,36064,34069+e);b(c,m)&&x(34067),n.unbindTexture()}else if(f){let e=t.texture;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=r.get(a);n.bindTexture(3553,o.__webglTexture),ae(3553,a,m),se(l.__webglFramebuffer,t,a,36064+i,3553),b(a,m)&&x(3553)}n.unbindTexture()}else{let e=3553;p&&(s?e=c.isDataTexture3D?32879:35866:console.warn(`THREE.DataTexture3D and THREE.DataTexture2DArray only supported with WebGL2.`)),n.bindTexture(e,u.__webglTexture),ae(e,c,m),se(l.__webglFramebuffer,t,c,36064,e),b(c,m)&&x(e),n.unbindTexture()}t.depthBuffer&&I(t)}function le(e){let t=v(e)||s,i=!0===e.isWebGLMultipleRenderTargets?e.texture:[e.texture];for(let a=0,o=i.length;a<o;a++){let o=i[a];if(b(o,t)){let t=e.isWebGLCubeRenderTarget?34067:3553,i=r.get(o).__webglTexture;n.bindTexture(t,i),x(t),n.unbindTexture()}}}function z(t){if(t.useRenderbuffer)if(s){let i=t.width,a=t.height,o=16384,s=[36064],c=t.stencilBuffer?33306:36096;t.depthBuffer&&s.push(c),t.ignoreDepthForMultisampleCopy||(t.depthBuffer&&(o|=256),t.stencilBuffer&&(o|=1024));let l=r.get(t);n.bindFramebuffer(36008,l.__webglMultisampledFramebuffer),n.bindFramebuffer(36009,l.__webglFramebuffer),t.ignoreDepthForMultisampleCopy&&(e.invalidateFramebuffer(36008,[c]),e.invalidateFramebuffer(36009,[c])),e.blitFramebuffer(0,0,i,a,0,0,i,a,o,9728),e.invalidateFramebuffer(36008,s),n.bindFramebuffer(36008,null),n.bindFramebuffer(36009,l.__webglMultisampledFramebuffer)}else console.warn(`THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.`)}function B(e){return s&&(e.useRenderbuffer||e.useRenderToTexture)?Math.min(d,e.samples):0}function ue(e){let t=o.render.frame;p.get(e)!==t&&(p.set(e,t),e.update())}let de=!1,fe=!1;function pe(e,t){e&&e.isWebGLRenderTarget&&(!1===de&&(console.warn(`THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead.`),de=!0),e=e.texture),te(e,t)}function me(e,t){e&&e.isWebGLCubeRenderTarget&&(!1===fe&&(console.warn(`THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead.`),fe=!0),e=e.texture),ne(e,t)}this.allocateTextureUnit=A,this.resetTextureUnits=ee,this.setTexture2D=te,this.setTexture2DArray=j,this.setTexture3D=M,this.setTextureCube=ne,this.rebindTextures=L,this.setupRenderTarget=R,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=se,this.safeSetTexture2D=pe,this.safeSetTextureCube=me}function Cr(e,t,n){let r=n.isWebGL2;function i(e){let n;if(e===Ia)return 5121;if(e===Wa)return 32819;if(e===Ga)return 32820;if(e===Ka)return 33635;if(e===La)return 5120;if(e===Ra)return 5122;if(e===za)return 5123;if(e===Ba)return 5124;if(e===Va)return 5125;if(e===Ha)return 5126;if(e===Ua)return r?5131:(n=t.get(`OES_texture_half_float`),n===null?null:n.HALF_FLOAT_OES);if(e===Ja)return 6406;if(e===Ya)return 6407;if(e===Xa)return 6408;if(e===Za)return 6409;if(e===Qa)return 6410;if(e===$a)return 6402;if(e===eo)return 34041;if(e===to)return 6403;if(e===no)return 36244;if(e===ro)return 33319;if(e===io)return 33320;if(e===ao)return 36248;if(e===oo)return 36249;if(e===so||e===co||e===lo||e===uo){if(n=t.get(`WEBGL_compressed_texture_s3tc`),n===null)return null;if(e===so)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(e===co)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(e===lo)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(e===uo)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(e===fo||e===po||e===mo||e===ho){if(n=t.get(`WEBGL_compressed_texture_pvrtc`),n===null)return null;if(e===fo)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(e===po)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(e===mo)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(e===ho)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(e===go)return n=t.get(`WEBGL_compressed_texture_etc1`),n===null?null:n.COMPRESSED_RGB_ETC1_WEBGL;if((e===_o||e===vo)&&(n=t.get(`WEBGL_compressed_texture_etc`),n!==null)){if(e===_o)return n.COMPRESSED_RGB8_ETC2;if(e===vo)return n.COMPRESSED_RGBA8_ETC2_EAC}if(e===yo||e===bo||e===xo||e===So||e===Co||e===wo||e===To||e===Eo||e===Do||e===Oo||e===ko||e===Ao||e===jo||e===Mo||e===Po||e===Fo||e===Io||e===Lo||e===Ro||e===zo||e===Bo||e===Vo||e===Ho||e===Uo||e===Wo||e===Go||e===Ko||e===qo)return n=t.get(`WEBGL_compressed_texture_astc`),n===null?null:e;if(e===No)return n=t.get(`EXT_texture_compression_bptc`),n===null?null:e;if(e===qa)return r?34042:(n=t.get(`WEBGL_depth_texture`),n===null?null:n.UNSIGNED_INT_24_8_WEBGL)}return{convert:i}}function wr(e){function t(e,t){e.fogColor.value.copy(t.color),t.isFog?(e.fogNear.value=t.near,e.fogFar.value=t.far):t.isFogExp2&&(e.fogDensity.value=t.density)}function n(e,t,n,_,v){t.isMeshBasicMaterial?r(e,t):t.isMeshLambertMaterial?(r(e,t),c(e,t)):t.isMeshToonMaterial?(r(e,t),u(e,t)):t.isMeshPhongMaterial?(r(e,t),l(e,t)):t.isMeshStandardMaterial?(r(e,t),t.isMeshPhysicalMaterial?f(e,t,v):d(e,t)):t.isMeshMatcapMaterial?(r(e,t),p(e,t)):t.isMeshDepthMaterial?(r(e,t),m(e,t)):t.isMeshDistanceMaterial?(r(e,t),h(e,t)):t.isMeshNormalMaterial?(r(e,t),g(e,t)):t.isLineBasicMaterial?(i(e,t),t.isLineDashedMaterial&&a(e,t)):t.isPointsMaterial?o(e,t,n,_):t.isSpriteMaterial?s(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function r(t,n){t.opacity.value=n.opacity,n.color&&t.diffuse.value.copy(n.color),n.emissive&&t.emissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity),n.map&&(t.map.value=n.map),n.alphaMap&&(t.alphaMap.value=n.alphaMap),n.specularMap&&(t.specularMap.value=n.specularMap),n.alphaTest>0&&(t.alphaTest.value=n.alphaTest);let r=e.get(n).envMap;r&&(t.envMap.value=r,t.flipEnvMap.value=r.isCubeTexture&&!1===r.isRenderTargetTexture?-1:1,t.reflectivity.value=n.reflectivity,t.ior.value=n.ior,t.refractionRatio.value=n.refractionRatio),n.lightMap&&(t.lightMap.value=n.lightMap,t.lightMapIntensity.value=n.lightMapIntensity),n.aoMap&&(t.aoMap.value=n.aoMap,t.aoMapIntensity.value=n.aoMapIntensity);let i;n.map?i=n.map:n.specularMap?i=n.specularMap:n.displacementMap?i=n.displacementMap:n.normalMap?i=n.normalMap:n.bumpMap?i=n.bumpMap:n.roughnessMap?i=n.roughnessMap:n.metalnessMap?i=n.metalnessMap:n.alphaMap?i=n.alphaMap:n.emissiveMap?i=n.emissiveMap:n.clearcoatMap?i=n.clearcoatMap:n.clearcoatNormalMap?i=n.clearcoatNormalMap:n.clearcoatRoughnessMap?i=n.clearcoatRoughnessMap:n.specularIntensityMap?i=n.specularIntensityMap:n.specularColorMap?i=n.specularColorMap:n.transmissionMap?i=n.transmissionMap:n.thicknessMap?i=n.thicknessMap:n.sheenColorMap?i=n.sheenColorMap:n.sheenRoughnessMap&&(i=n.sheenRoughnessMap),i!==void 0&&(i.isWebGLRenderTarget&&(i=i.texture),!0===i.matrixAutoUpdate&&i.updateMatrix(),t.uvTransform.value.copy(i.matrix));let a;n.aoMap?a=n.aoMap:n.lightMap&&(a=n.lightMap),a!==void 0&&(a.isWebGLRenderTarget&&(a=a.texture),!0===a.matrixAutoUpdate&&a.updateMatrix(),t.uv2Transform.value.copy(a.matrix))}function i(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity}function a(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function o(e,t,n,r){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*n,e.scale.value=.5*r,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest);let i;t.map?i=t.map:t.alphaMap&&(i=t.alphaMap),i!==void 0&&(!0===i.matrixAutoUpdate&&i.updateMatrix(),e.uvTransform.value.copy(i.matrix))}function s(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map),t.alphaMap&&(e.alphaMap.value=t.alphaMap),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest);let n;t.map?n=t.map:t.alphaMap&&(n=t.alphaMap),n!==void 0&&(!0===n.matrixAutoUpdate&&n.updateMatrix(),e.uvTransform.value.copy(n.matrix))}function c(e,t){t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap)}function l(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===Mi&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===Mi&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function u(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap),t.emissiveMap&&(e.emissiveMap.value=t.emissiveMap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===Mi&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===Mi&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function d(t,n){t.roughness.value=n.roughness,t.metalness.value=n.metalness,n.roughnessMap&&(t.roughnessMap.value=n.roughnessMap),n.metalnessMap&&(t.metalnessMap.value=n.metalnessMap),n.emissiveMap&&(t.emissiveMap.value=n.emissiveMap),n.bumpMap&&(t.bumpMap.value=n.bumpMap,t.bumpScale.value=n.bumpScale,n.side===Mi&&(t.bumpScale.value*=-1)),n.normalMap&&(t.normalMap.value=n.normalMap,t.normalScale.value.copy(n.normalScale),n.side===Mi&&t.normalScale.value.negate()),n.displacementMap&&(t.displacementMap.value=n.displacementMap,t.displacementScale.value=n.displacementScale,t.displacementBias.value=n.displacementBias),e.get(n).envMap&&(t.envMapIntensity.value=n.envMapIntensity)}function f(e,t,n){d(e,t),e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap)),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap),t.clearcoatNormalMap&&(e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),e.clearcoatNormalMap.value=t.clearcoatNormalMap,t.side===Mi&&e.clearcoatNormalScale.value.negate())),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=n.texture,e.transmissionSamplerSize.value.set(n.width,n.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap)}function p(e,t){t.matcap&&(e.matcap.value=t.matcap),t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===Mi&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===Mi&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function m(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}function h(e,t){t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias),e.referencePosition.value.copy(t.referencePosition),e.nearDistance.value=t.nearDistance,e.farDistance.value=t.farDistance}function g(e,t){t.bumpMap&&(e.bumpMap.value=t.bumpMap,e.bumpScale.value=t.bumpScale,t.side===Mi&&(e.bumpScale.value*=-1)),t.normalMap&&(e.normalMap.value=t.normalMap,e.normalScale.value.copy(t.normalScale),t.side===Mi&&e.normalScale.value.negate()),t.displacementMap&&(e.displacementMap.value=t.displacementMap,e.displacementScale.value=t.displacementScale,e.displacementBias.value=t.displacementBias)}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Tr(){let e=at(`canvas`);return e.style.display=`block`,e}function V(e={}){let t=e.canvas===void 0?Tr():e.canvas,n=e.context===void 0?null:e.context,r=e.alpha!==void 0&&e.alpha,i=e.depth===void 0||e.depth,a=e.stencil===void 0||e.stencil,s=e.antialias!==void 0&&e.antialias,c=e.premultipliedAlpha===void 0||e.premultipliedAlpha,l=e.preserveDrawingBuffer!==void 0&&e.preserveDrawingBuffer,u=e.powerPreference===void 0?`default`:e.powerPreference,d=e.failIfMajorPerformanceCaveat!==void 0&&e.failIfMajorPerformanceCaveat,f=null,p=null,m=[],h=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=os,this.physicallyCorrectLights=!1,this.toneMapping=ma,this.toneMappingExposure=1;let g=this,_=!1,v=0,y=0,b=null,x=-1,S=null,C=new U,w=new U,T=null,E=t.width,D=t.height,O=1,k=null,ee=null,A=new U(0,0,E,D),te=new U(0,0,E,D),j=!1,M=[],ne=new Vl,re=!1,ie=!1,ae=null,N=new G,P=new W,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return b===null?O:1}let F=n;function ce(e,n){for(let r=0;r<e.length;r++){let i=e[r],a=t.getContext(i,n);if(a!==null)return a}return null}try{let e={alpha:r,depth:i,stencil:a,antialias:s,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r${wi}`),t.addEventListener(`webglcontextlost`,ke,!1),t.addEventListener(`webglcontextrestored`,Ae,!1),F===null){let t=[`webgl2`,`webgl`,`experimental-webgl`];if(!0===g.isWebGL1Renderer&&t.shift(),F=ce(t,e),F===null)throw ce(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let I,L,R,le,z,B,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee;function De(){I=new Mt(F),L=new bt(F,I,e),I.init(L),Te=new Cr(F,I,L),R=new xr(F,I,L),M[0]=1029,le=new Ft(F),z=new lr,B=new Sr(F,I,R,z,L,Te,le),ue=new St(g),de=new jt(g),fe=new gt(F,L),Ee=new vt(F,I,fe,L),pe=new Nt(F,fe,le,Ee),me=new Bt(F,pe,fe,le),Se=new zt(F,L,B),ye=new xt(z),he=new cr(g,ue,de,I,L,Ee,ye),ge=new wr(z),_e=new pr,ve=new yr(I,L),xe=new _t(g,ue,R,me,c),be=new br(g,me,L),Ce=new yt(F,I,le,L),we=new Pt(F,I,le,L),le.programs=he.programs,g.capabilities=L,g.extensions=I,g.properties=z,g.renderLists=_e,g.shadowMap=be,g.state=R,g.info=le}De();let Oe=new Ru(g,F);this.xr=Oe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=I.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=I.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(e){e!==void 0&&(O=e,this.setSize(E,D,!1))},this.getSize=function(e){return e.set(E,D)},this.setSize=function(e,n,r){Oe.isPresenting?console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`):(E=e,D=n,t.width=Math.floor(e*O),t.height=Math.floor(n*O),!1!==r&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(E*O,D*O).floor()},this.setDrawingBufferSize=function(e,n,r){E=e,D=n,O=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(C)},this.getViewport=function(e){return e.copy(A)},this.setViewport=function(e,t,n,r){e.isVector4?A.set(e.x,e.y,e.z,e.w):A.set(e,t,n,r),R.viewport(C.copy(A).multiplyScalar(O).floor())},this.getScissor=function(e){return e.copy(te)},this.setScissor=function(e,t,n,r){e.isVector4?te.set(e.x,e.y,e.z,e.w):te.set(e,t,n,r),R.scissor(w.copy(te).multiplyScalar(O).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(e){R.setScissorTest(j=e)},this.setOpaqueSort=function(e){k=e},this.setTransparentSort=function(e){ee=e},this.getClearColor=function(e){return e.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(e,t,n){let r=0;(e===void 0||e)&&(r|=16384),(t===void 0||t)&&(r|=256),(n===void 0||n)&&(r|=1024),F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ke,!1),t.removeEventListener(`webglcontextrestored`,Ae,!1),_e.dispose(),ve.dispose(),z.dispose(),ue.dispose(),de.dispose(),me.dispose(),Ee.dispose(),he.dispose(),Oe.dispose(),Oe.removeEventListener(`sessionstart`,Ie),Oe.removeEventListener(`sessionend`,Le),ae&&=(ae.dispose(),null),Re.stop()};function ke(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),_=!0}function Ae(){console.log(`THREE.WebGLRenderer: Context Restored.`),_=!1;let e=le.autoReset,t=be.enabled,n=be.autoUpdate,r=be.needsUpdate,i=be.type;De(),le.autoReset=e,be.enabled=t,be.autoUpdate=n,be.needsUpdate=r,be.type=i}function je(e){let t=e.target;t.removeEventListener(`dispose`,je),Me(t)}function Me(e){Ne(e),z.remove(e)}function Ne(e){let t=z.get(e).programs;t!==void 0&&(t.forEach((function(e){he.releaseProgram(e)})),e.isShaderMaterial&&he.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=oe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=Ke(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=n.attributes.position;if(c===null){if(l===void 0||l.count===0)return}else if(c.count===0)return;let u=1;!0===r.wireframe&&(c=pe.getWireframeAttribute(n),u=2),Ee.setup(i,r,s,n,c);let d,f=Ce;c!==null&&(d=fe.get(c),f=we,f.setIndex(d));let p=c===null?l.count:c.count,m=n.drawRange.start*u,h=n.drawRange.count*u,g=a===null?0:a.start*u,_=a===null?1/0:a.count*u,v=Math.max(m,g),y=Math.min(p,m+h,g+_)-1,b=Math.max(0,y-v+1);if(b!==0){if(i.isMesh)!0===r.wireframe?(R.setLineWidth(r.wireframeLinewidth*se()),f.setMode(1)):f.setMode(4);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*se()),i.isLineSegments?f.setMode(1):i.isLineLoop?f.setMode(2):f.setMode(3)}else i.isPoints?f.setMode(0):i.isSprite&&f.setMode(4);if(i.isInstancedMesh)f.renderInstances(v,b,i.count);else if(n.isInstancedBufferGeometry){let e=Math.min(n.instanceCount,n._maxInstanceCount);f.renderInstances(v,b,e)}else f.render(v,b)}},this.compile=function(e,t){p=ve.get(e),p.init(),h.push(p),e.traverseVisible((function(e){e.isLight&&e.layers.test(t.layers)&&(p.pushLight(e),e.castShadow&&p.pushShadow(e))})),p.setupLights(g.physicallyCorrectLights),e.traverse((function(t){let n=t.material;if(n)if(Array.isArray(n))for(let r=0;r<n.length;r++){let i=n[r];We(i,e,t)}else We(n,e,t)})),h.pop(),p=null};let Pe=null;function Fe(e){Pe&&Pe(e)}function Ie(){Re.stop()}function Le(){Re.start()}let Re=new ht;Re.setAnimationLoop(Fe),o!==void 0&&Re.setContext(o),this.setAnimationLoop=function(e){Pe=e,Oe.setAnimationLoop(e),e===null?Re.stop():Re.start()},Oe.addEventListener(`sessionstart`,Ie),Oe.addEventListener(`sessionend`,Le),this.render=function(e,t){if(t!==void 0&&!0!==t.isCamera){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(!0===_)return;!0===e.autoUpdate&&e.updateMatrixWorld(),t.parent===null&&t.updateMatrixWorld(),!0===Oe.enabled&&!0===Oe.isPresenting&&(!0===Oe.cameraAutoUpdate&&Oe.updateCamera(t),t=Oe.getCamera()),!0===e.isScene&&e.onBeforeRender(g,e,t,b),p=ve.get(e,h.length),p.init(),h.push(p),N.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),ne.setFromProjectionMatrix(N),ie=this.localClippingEnabled,re=ye.init(this.clippingPlanes,ie,t),f=_e.get(e,m.length),f.init(),m.push(f),ze(e,t,0,g.sortObjects),f.finish(),!0===g.sortObjects&&f.sort(k,ee),!0===re&&ye.beginShadows();let n=p.state.shadowsArray;if(be.render(n,e,t),!0===re&&ye.endShadows(),!0===this.info.autoReset&&this.info.reset(),xe.render(f,e),p.setupLights(g.physicallyCorrectLights),t.isArrayCamera){let n=t.cameras;for(let t=0,r=n.length;t<r;t++){let r=n[t];Be(f,e,r,r.viewport)}}else Be(f,e,t);b!==null&&(B.updateMultisampleRenderTarget(b),B.updateRenderTargetMipmap(b)),!0===e.isScene&&e.onAfterRender(g,e,t),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1),Ee.resetDefaultState(),x=-1,S=null,h.pop(),p=h.length>0?h[h.length-1]:null,m.pop(),f=m.length>0?m[m.length-1]:null};function ze(e,t,n,r){if(!1===e.visible)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLight)p.pushLight(e),e.castShadow&&p.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||ne.intersectsSprite(e)){r&&P.setFromMatrixPosition(e.matrixWorld).applyMatrix4(N);let t=me.update(e),i=e.material;i.visible&&f.push(e,t,i,n,P.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(e.isSkinnedMesh&&e.skeleton.frame!==le.render.frame&&(e.skeleton.update(),e.skeleton.frame=le.render.frame),!e.frustumCulled||ne.intersectsObject(e))){r&&P.setFromMatrixPosition(e.matrixWorld).applyMatrix4(N);let t=me.update(e),i=e.material;if(Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&f.push(e,t,s,n,P.z,o)}}else i.visible&&f.push(e,t,i,n,P.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ze(i[e],t,n,r)}function Be(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;p.setupLightsView(n),a.length>0&&Ve(i,t,n),r&&R.viewport(C.copy(r)),i.length>0&&He(i,t,n),a.length>0&&He(a,t,n),o.length>0&&He(o,t,n)}function Ve(e,t,n){ae===null&&(ae=new(!0===s&&!0===L.isWebGL2?ks:Ds)(1024,1024,{generateMipmaps:!0,type:Te.convert(Ua)===null?Ia:Ua,minFilter:Fa,magFilter:Aa,wrapS:Oa,wrapT:Oa,useRenderToTexture:I.has(`WEBGL_multisampled_render_to_texture`)}));let r=g.getRenderTarget();g.setRenderTarget(ae),g.clear();let i=g.toneMapping;g.toneMapping=ma,He(e,t,n),g.toneMapping=i,B.updateMultisampleRenderTarget(ae),B.updateRenderTargetMipmap(ae),g.setRenderTarget(r)}function He(e,t,n){let r=!0===t.isScene?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&Ue(o,t,n,s,c,l)}}function Ue(e,t,n,r,i,a){e.onBeforeRender(g,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(g,t,n,r,e,a),!0===i.transparent&&i.side===Ni?(i.side=Mi,i.needsUpdate=!0,g.renderBufferDirect(n,t,r,i,e,a),i.side=ji,i.needsUpdate=!0,g.renderBufferDirect(n,t,r,i,e,a),i.side=Ni):g.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(g,t,n,r,i,a)}function We(e,t,n){!0!==t.isScene&&(t=oe);let r=z.get(e),i=p.state.lights,a=p.state.shadowsArray,o=i.state.version,s=he.getParameters(e,i.state,a,t,n),c=he.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?de:ue).get(e.envMap||r.environment),l===void 0&&(e.addEventListener(`dispose`,je),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Ge(e,s),u}else s.uniforms=he.getUniforms(e),e.onBuild(n,s,g),e.onBeforeCompile(s,g),u=he.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(d.clippingPlanes=ye.uniform),Ge(e,s),r.needsLights=Je(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotShadowMatrix.value=i.state.spotShadowMatrix,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix);let f=u.getUniforms(),m=Ln.seqWithValue(f.seq,d);return r.currentProgram=u,r.uniformsList=m,u}function Ge(e,t){let n=z.get(e);n.outputEncoding=t.outputEncoding,n.instancing=t.instancing,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ke(e,t,n,r,i){!0!==t.isScene&&(t=oe),B.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=b===null?g.outputEncoding:b.texture.encoding,c=(r.isMeshStandardMaterial?de:ue).get(r.envMap||o),l=!0===r.vertexColors&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!r.normalMap&&!!n.attributes.tangent,d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,m=n.morphAttributes.position?n.morphAttributes.position.length:0,h=r.toneMapped?g.toneMapping:ma,_=z.get(r),v=p.state.lights;if(!0===re&&(!0===ie||e!==S)){let t=e===S&&r.id===x;ye.setState(r,e,t)}let y=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version||_.outputEncoding!==s||i.isInstancedMesh&&!1===_.instancing?y=!0:i.isInstancedMesh||!0!==_.instancing?i.isSkinnedMesh&&!1===_.skinning?y=!0:i.isSkinnedMesh||!0!==_.skinning?_.envMap!==c||r.fog&&_.fog!==a?y=!0:_.numClippingPlanes===void 0||_.numClippingPlanes===ye.numPlanes&&_.numIntersection===ye.numIntersection?(_.vertexAlphas!==l||_.vertexTangents!==u||_.morphTargets!==d||_.morphNormals!==f||_.toneMapping!==h||!0===L.isWebGL2&&_.morphTargetsCount!==m)&&(y=!0):y=!0:y=!0:y=!0:(y=!0,_.__version=r.version);let C=_.currentProgram;!0===y&&(C=We(r,t,i));let w=!1,T=!1,E=!1,k=C.getUniforms(),ee=_.uniforms;if(R.useProgram(C.program)&&(w=!0,T=!0,E=!0),r.id!==x&&(x=r.id,T=!0),w||S!==e){if(k.setValue(F,`projectionMatrix`,e.projectionMatrix),L.logarithmicDepthBuffer&&k.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),S!==e&&(S=e,T=!0,E=!0),r.isShaderMaterial||r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshStandardMaterial||r.envMap){let t=k.map.cameraPosition;t!==void 0&&t.setValue(F,P.setFromMatrixPosition(e.matrixWorld))}(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(F,`isOrthographic`,!0===e.isOrthographicCamera),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial||r.isShadowMaterial||i.isSkinnedMesh)&&k.setValue(F,`viewMatrix`,e.matrixWorldInverse)}if(i.isSkinnedMesh){k.setOptional(F,i,`bindMatrix`),k.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(L.floatVertexTextures?(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(F,`boneTexture`,e.boneTexture,B),k.setValue(F,`boneTextureSize`,e.boneTextureSize)):k.setOptional(F,e,`boneMatrices`))}return!n||n.morphAttributes.position===void 0&&n.morphAttributes.normal===void 0||Se.update(i,n,r,C),(T||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(F,`receiveShadow`,i.receiveShadow)),T&&(k.setValue(F,`toneMappingExposure`,g.toneMappingExposure),_.needsLights&&qe(ee,E),a&&r.fog&&ge.refreshFogUniforms(ee,a),ge.refreshMaterialUniforms(ee,r,O,D,ae),Ln.upload(F,_.uniformsList,ee,B)),r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(Ln.upload(F,_.uniformsList,ee,B),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(F,`center`,i.center),k.setValue(F,`modelViewMatrix`,i.modelViewMatrix),k.setValue(F,`normalMatrix`,i.normalMatrix),k.setValue(F,`modelMatrix`,i.matrixWorld),C}function qe(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Je(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(e,t,n){z.get(e.texture).__webglTexture=t,z.get(e.depthTexture).__webglTexture=n;let r=z.get(e);r.__hasExternalTextures=!0,r.__hasExternalTextures&&(r.__autoAllocateDepthBuffer=n===void 0,!r.__autoAllocateDepthBuffer&&e.useRenderToTexture&&(console.warn(`render-to-texture extension was disabled because an external texture was provided`),e.useRenderToTexture=!1,e.useRenderbuffer=!0))},this.setRenderTargetFramebuffer=function(e,t){let n=z.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){b=e,v=t,y=n;let r=!0;if(e){let t=z.get(e);t.__useDefaultFramebuffer===void 0?t.__webglFramebuffer===void 0?B.setupRenderTarget(e):t.__hasExternalTextures&&B.rebindTextures(e,z.get(e.texture).__webglTexture,z.get(e.depthTexture).__webglTexture):(R.bindFramebuffer(36160,null),r=!1)}let i=null,a=!1,o=!1;if(e){let n=e.texture;(n.isDataTexture3D||n.isDataTexture2DArray)&&(o=!0);let r=z.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=r[t],a=!0):i=e.useRenderbuffer?z.get(e).__webglMultisampledFramebuffer:r,C.copy(e.viewport),w.copy(e.scissor),T=e.scissorTest}else C.copy(A).multiplyScalar(O).floor(),w.copy(te).multiplyScalar(O).floor(),T=j;if(R.bindFramebuffer(36160,i)&&L.drawBuffers&&r){let t=!1;if(e)if(e.isWebGLMultipleRenderTargets){let n=e.texture;if(M.length!==n.length||M[0]!==36064){for(let e=0,t=n.length;e<t;e++)M[e]=36064+e;M.length=n.length,t=!0}}else (M.length!==1||M[0]!==36064)&&(M[0]=36064,M.length=1,t=!0);else (M.length!==1||M[0]!==1029)&&(M[0]=1029,M.length=1,t=!0);t&&(L.isWebGL2?F.drawBuffers(M):I.get(`WEBGL_draw_buffers`).drawBuffersWEBGL(M))}if(R.viewport(C),R.scissor(w),R.setScissorTest(T),a){let r=z.get(e.texture);F.framebufferTexture2D(36160,36064,34069+t,r.__webglTexture,n)}else if(o){let r=z.get(e.texture),i=t||0;F.framebufferTextureLayer(36160,36064,r.__webglTexture,n||0,i)}x=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=z.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){R.bindFramebuffer(36160,s);try{let o=e.texture,s=o.format,c=o.type;if(s!==Xa&&Te.convert(s)!==F.getParameter(35739)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}let l=c===Ua&&(I.has(`EXT_color_buffer_half_float`)||L.isWebGL2&&I.has(`EXT_color_buffer_float`));if(c!==Ia&&Te.convert(c)!==F.getParameter(35738)&&!(c===Ha&&(L.isWebGL2||I.has(`OES_texture_float`)||I.has(`WEBGL_color_buffer_float`)))&&!l){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}F.checkFramebufferStatus(36160)===36053?t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,Te.convert(s),Te.convert(c),a):console.error(`THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.`)}finally{let e=b===null?null:z.get(b).__webglFramebuffer;R.bindFramebuffer(36160,e)}}},this.copyFramebufferToTexture=function(e,t,n=0){if(!0!==t.isFramebufferTexture){console.error(`THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.`);return}let r=2**-n,i=Math.floor(t.image.width*r),a=Math.floor(t.image.height*r);B.setTexture2D(t,0),F.copyTexSubImage2D(3553,n,0,0,e.x,e.y,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n,r=0){let i=t.image.width,a=t.image.height,o=Te.convert(n.format),s=Te.convert(n.type);B.setTexture2D(n,0),F.pixelStorei(37440,n.flipY),F.pixelStorei(37441,n.premultiplyAlpha),F.pixelStorei(3317,n.unpackAlignment),t.isDataTexture?F.texSubImage2D(3553,r,e.x,e.y,i,a,o,s,t.image.data):t.isCompressedTexture?F.compressedTexSubImage2D(3553,r,e.x,e.y,t.mipmaps[0].width,t.mipmaps[0].height,o,t.mipmaps[0].data):F.texSubImage2D(3553,r,e.x,e.y,o,s,t.image),r===0&&n.generateMipmaps&&F.generateMipmap(3553),R.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n,r,i=0){if(g.isWebGL1Renderer){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.`);return}let a=e.max.x-e.min.x+1,o=e.max.y-e.min.y+1,s=e.max.z-e.min.z+1,c=Te.convert(r.format),l=Te.convert(r.type),u;if(r.isDataTexture3D)B.setTexture3D(r,0),u=32879;else{if(!r.isDataTexture2DArray){console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.`);return}B.setTexture2DArray(r,0),u=35866}F.pixelStorei(37440,r.flipY),F.pixelStorei(37441,r.premultiplyAlpha),F.pixelStorei(3317,r.unpackAlignment);let d=F.getParameter(3314),f=F.getParameter(32878),p=F.getParameter(3316),m=F.getParameter(3315),h=F.getParameter(32877),_=n.isCompressedTexture?n.mipmaps[0]:n.image;F.pixelStorei(3314,_.width),F.pixelStorei(32878,_.height),F.pixelStorei(3316,e.min.x),F.pixelStorei(3315,e.min.y),F.pixelStorei(32877,e.min.z),n.isDataTexture||n.isDataTexture3D?F.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,_.data):n.isCompressedTexture?(console.warn(`THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture.`),F.compressedTexSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,_.data)):F.texSubImage3D(u,i,t.x,t.y,t.z,a,o,s,c,l,_),F.pixelStorei(3314,d),F.pixelStorei(32878,f),F.pixelStorei(3316,p),F.pixelStorei(3315,m),F.pixelStorei(32877,h),i===0&&r.generateMipmaps&&F.generateMipmap(u),R.unbindTexture()},this.initTexture=function(e){B.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){v=0,y=0,b=null,R.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}function Er(e,t,n,r,i,a){Zu.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Qu.copy(Zu):(Qu.x=a*Zu.x-i*Zu.y,Qu.y=i*Zu.x+a*Zu.y),e.copy(t),e.x+=Qu.x,e.y+=Qu.y,e.applyMatrix4($u)}function Dr(e,t,n,r,i,a,o){let s=Pd.distanceSqToPoint(e);if(s<n){let n=new W;Pd.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,object:o})}}function Or(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}function kr(e,t,n,r,i){let a=.5*(r-t),o=.5*(i-n),s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ar(e,t){let n=1-e;return n*n*t}function jr(e,t){return 2*(1-e)*e*t}function Mr(e,t){return e*e*t}function Nr(e,t,n,r){return Ar(e,t)+jr(e,n)+Mr(e,r)}function Pr(e,t){let n=1-e;return n*n*n*t}function Fr(e,t){let n=1-e;return 3*n*n*e*t}function Ir(e,t){return 3*(1-e)*e*e*t}function Lr(e,t){return e*e*e*t}function Rr(e,t,n,r,i){return Pr(e,t)+Fr(e,n)+Ir(e,r)+Lr(e,i)}function zr(e,t,n,r,i){let a,o;if(i===hi(e,t,n,r)>0)for(a=t;a<n;a+=r)o=fi(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=fi(a,e[a],e[a+1],o);return o&&ii(o,o.next)&&(pi(o),o=o.next),o}function Br(e,t){if(!e)return e;t||=e;let n,r=e;do if(n=!1,r.steiner||!ii(r,r.next)&&ri(r.prev,r,r.next)!==0)r=r.next;else{if(pi(r),r=t=r.prev,r===r.next)break;n=!0}while(n||r!==t);return t}function Vr(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Zr(e,r,i,a);let s,c,l=e;for(;e.prev!==e.next;)if(s=e.prev,c=e.next,a?Ur(e,r,i,a):Hr(e))t.push(s.i/n),t.push(e.i/n),t.push(c.i/n),pi(e),e=c.next,l=c.next;else if(e=c,e===l){o?o===1?(e=Wr(Br(e),t,n),Vr(e,t,n,r,i,a,2)):o===2&&Gr(e,t,n,r,i,a):Vr(Br(e),t,n,r,i,a,1);break}}function Hr(e){let t=e.prev,n=e,r=e.next;if(ri(t,n,r)>=0)return!1;let i=e.next.next;for(;i!==e.prev;){if(ti(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&ri(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Ur(e,t,n,r){let i=e.prev,a=e,o=e.next;if(ri(i,a,o)>=0)return!1;let s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,c=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,l=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,u=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,d=$r(s,c,t,n,r),f=$r(l,u,t,n,r),p=e.prevZ,m=e.nextZ;for(;p&&p.z>=d&&m&&m.z<=f;){if(p!==e.prev&&p!==e.next&&ti(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&ri(p.prev,p,p.next)>=0||(p=p.prevZ,m!==e.prev&&m!==e.next&&ti(i.x,i.y,a.x,a.y,o.x,o.y,m.x,m.y)&&ri(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;p&&p.z>=d;){if(p!==e.prev&&p!==e.next&&ti(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&ri(p.prev,p,p.next)>=0)return!1;p=p.prevZ}for(;m&&m.z<=f;){if(m!==e.prev&&m!==e.next&&ti(i.x,i.y,a.x,a.y,o.x,o.y,m.x,m.y)&&ri(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function Wr(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!ii(i,a)&&ai(i,r,r.next,a)&&li(i,a)&&li(a,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(a.i/n),pi(r),pi(r.next),r=e=a),r=r.next}while(r!==e);return Br(r)}function Gr(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ni(o,e)){let s=di(o,e);o=Br(o,o.next),s=Br(s,s.next),Vr(o,t,n,r,i,a),Vr(s,t,n,r,i,a);return}e=e.next}o=o.next}while(o!==e)}function Kr(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=zr(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(ei(l));for(i.sort(qr),a=0;a<i.length;a++)Jr(i[a],n),n=Br(n,n.next);return n}function qr(e,t){return e.x-t.x}function Jr(e,t){if(t=Yr(e,t),t){let n=di(t,e);Br(t,t.next),Br(n,n.next)}}function Yr(e,t){let n=t,r=e.x,i=e.y,a,o=-1/0;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>o){if(o=e,e===r){if(i===n.y)return n;if(i===n.next.y)return n.next}a=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!a)return null;if(r===o)return a;let s=a,c=a.x,l=a.y,u,d=1/0;n=a;do r>=n.x&&n.x>=c&&r!==n.x&&ti(i<l?r:o,i,c,l,i<l?o:r,i,n.x,n.y)&&(u=Math.abs(i-n.y)/(r-n.x),li(n,e)&&(u<d||u===d&&(n.x>a.x||n.x===a.x&&Xr(a,n)))&&(a=n,d=u)),n=n.next;while(n!==s);return a}function Xr(e,t){return ri(e.prev,e,t.prev)<0&&ri(t.next,e,e.next)<0}function Zr(e,t,n,r){let i=e;do i.z===null&&(i.z=$r(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Qr(i)}function Qr(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function $r(e,t,n,r,i){return e=32767*(e-n)*i,t=32767*(t-r)*i,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e|t<<1}function ei(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ti(e,t,n,r,i,a,o,s){return(i-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(r-s)-(n-o)*(t-s)>=0&&(n-o)*(a-s)-(i-o)*(r-s)>=0}function ni(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ci(e,t)&&(li(e,t)&&li(t,e)&&ui(e,t)&&(ri(e.prev,e,t.prev)||ri(e,t.prev,t))||ii(e,t)&&ri(e.prev,e,e.next)>0&&ri(t.prev,t,t.next)>0)}function ri(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ii(e,t){return e.x===t.x&&e.y===t.y}function ai(e,t,n,r){let i=si(ri(e,t,n)),a=si(ri(e,t,r)),o=si(ri(n,r,e)),s=si(ri(n,r,t));return i!==a&&o!==s||!(i!==0||!oi(e,n,t))||!(a!==0||!oi(e,r,t))||!(o!==0||!oi(n,e,r))||!(s!==0||!oi(n,t,r))}function oi(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function si(e){return e>0?1:e<0?-1:0}function ci(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ai(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function li(e,t){return ri(e.prev,e,e.next)<0?ri(e,t,e.next)>=0&&ri(e,e.prev,t)>=0:ri(e,t,e.prev)<0||ri(e,e.next,t)<0}function ui(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function di(e,t){let n=new mi(e.i,e.x,e.y),r=new mi(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function fi(e,t,n,r){let i=new mi(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function pi(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function mi(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function hi(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function gi(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function _i(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}function vi(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}function yi(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}function bi(e,t,n){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return!0===n.has(r)||!0===n.has(i)?!1:(n.add(r,i),!0)}function xi(e){switch(e.toLowerCase()){case`scalar`:case`double`:case`float`:case`number`:case`integer`:return Xf;case`vector`:case`vector2`:case`vector3`:case`vector4`:return ep;case`color`:return Yf;case`quaternion`:return Qf;case`bool`:case`boolean`:return Jf;case`string`:return $f}throw Error(`THREE.KeyframeTrack: Unsupported typeName: `+e)}function Si(e){if(e.type===void 0)throw Error(`THREE.KeyframeTrack: track type undefined, can not parse`);let t=xi(e.type);if(e.times===void 0){let t=[],n=[];Hf.flattenJSON(e.keys,t,n,`value`),e.times=t,e.values=n}return t.parse===void 0?new t(e.name,e.times,e.values,e.interpolation):t.parse(e)}function Ci(e){let t=[];e&&e.isBone&&t.push(e);for(let n=0;n<e.children.length;n++)t.push.apply(t,Ci(e.children[n]));return t}var wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,H,Ss,Cs,ws,Ts,Es,U,Ds,Os,ks,As,W,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,G,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,K,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,q,Kc,J,qc,Jc,Yc,Xc,Zc,Y,Qc,$c,el,tl,nl,rl,il,X,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Z,Q,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,$,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,lm,um,dm,fm,pm,mm,hm=e((()=>{n(),wi=`136`,Ti=0,Ei=1,Di=2,Oi=1,ki=2,Ai=3,ji=0,Mi=1,Ni=2,Pi=1,Fi=0,Ii=1,Li=2,Ri=3,zi=4,Bi=5,Vi=100,Hi=101,Ui=102,Wi=103,Gi=104,Ki=200,qi=201,Ji=202,Yi=203,Xi=204,Zi=205,Qi=206,$i=207,ea=208,ta=209,na=210,ra=0,ia=1,aa=2,oa=3,sa=4,ca=5,la=6,ua=7,da=0,fa=1,pa=2,ma=0,ha=1,ga=2,_a=3,va=4,ya=5,ba=300,xa=301,Sa=302,Ca=303,wa=304,Ta=306,Ea=307,Da=1e3,Oa=1001,ka=1002,Aa=1003,ja=1004,Ma=1005,Na=1006,Pa=1007,Fa=1008,Ia=1009,La=1010,Ra=1011,za=1012,Ba=1013,Va=1014,Ha=1015,Ua=1016,Wa=1017,Ga=1018,Ka=1019,qa=1020,Ja=1021,Ya=1022,Xa=1023,Za=1024,Qa=1025,$a=1026,eo=1027,to=1028,no=1029,ro=1030,io=1031,ao=1032,oo=1033,so=33776,co=33777,lo=33778,uo=33779,fo=35840,po=35841,mo=35842,ho=35843,go=36196,_o=37492,vo=37496,yo=37808,bo=37809,xo=37810,So=37811,Co=37812,wo=37813,To=37814,Eo=37815,Do=37816,Oo=37817,ko=37818,Ao=37819,jo=37820,Mo=37821,No=36492,Po=37840,Fo=37841,Io=37842,Lo=37843,Ro=37844,zo=37845,Bo=37846,Vo=37847,Ho=37848,Uo=37849,Wo=37850,Go=37851,Ko=37852,qo=37853,Jo=2200,Yo=2201,Xo=2202,Zo=2300,Qo=2301,$o=2302,es=2400,ts=2401,ns=2402,rs=2500,is=2501,as=0,os=3e3,ss=3001,cs=3200,ls=3201,us=0,ds=1,fs=7680,ps=519,ms=35044,hs=35048,gs=`300 es`,_s=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},vs=[];for(let e=0;e<256;e++)vs[e]=(e<16?`0`:``)+e.toString(16);ys=1234567,bs=Math.PI/180,xs=180/Math.PI,Object.freeze({__proto__:null,DEG2RAD:bs,RAD2DEG:xs,generateUUID:Re,clamp:ze,euclideanModulo:Be,mapLinear:Ve,inverseLerp:He,lerp:Ue,damp:We,pingpong:Ge,smoothstep:Ke,smootherstep:qe,randInt:Je,randFloat:Ye,randFloatSpread:Xe,seededRandom:Ze,degToRad:Qe,radToDeg:$e,isPowerOfTwo:et,ceilPowerOfTwo:tt,floorPowerOfTwo:nt,setQuaternionFromProperEuler:rt}),H=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t===void 0?(this.x+=e.x,this.y+=e.y,this):(console.warn(`THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`),this.addVectors(e,t))}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t===void 0?(this.x-=e.x,this.y-=e.y,this):(console.warn(`THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`),this.subVectors(e,t))}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn(`THREE.Vector2: offset has been removed from .fromBufferAttribute().`),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},H.prototype.isVector2=!0,Ss=class{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error(`THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.`)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){let t=Math.cos(e),n=Math.sin(e),r=this.elements,i=r[0],a=r[3],o=r[6],s=r[1],c=r[4],l=r[7];return r[0]=t*i+n*s,r[3]=t*a+n*c,r[6]=t*o+n*l,r[1]=-n*i+t*s,r[4]=-n*a+t*c,r[7]=-n*o+t*l,this}translate(e,t){let n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ss.prototype.isMatrix3=!0,ws=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=at(`canvas`)),Cs.width=e.width,Cs.height=e.height;let n=Cs.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}},Ts=0,Es=class e extends _s{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Oa,i=Oa,a=Na,o=Fa,s=Xa,c=Ia,l=1,u=os){super(),Object.defineProperty(this,`id`,{value:Ts++}),this.uuid=Re(),this.name=``,this.image=t,this.mipmaps=[],this.mapping=n,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new H(0,0),this.repeat=new H(1,1),this.center=new H(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ss,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.image=e.image,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.5,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){let r=this.image;if(r.uuid===void 0&&(r.uuid=Re()),!t&&e.images[r.uuid]===void 0){let t;if(Array.isArray(r)){t=[];for(let e=0,n=r.length;e<n;e++)r[e].isDataTexture?t.push(ot(r[e].image)):t.push(ot(r[e]))}else t=ot(r);e.images[r.uuid]={uuid:r.uuid,url:t}}n.image=r.uuid}return JSON.stringify(this.userData)!==`{}`&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==ba)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Da:e.x-=Math.floor(e.x);break;case Oa:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Da:e.y-=Math.floor(e.y);break;case Oa:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&this.version++}},Es.DEFAULT_IMAGE=void 0,Es.DEFAULT_MAPPING=ba,Es.prototype.isTexture=!0,U=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e,t){return t===void 0?(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this):(console.warn(`THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`),this.addVectors(e,t))}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t===void 0?(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this):(console.warn(`THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`),this.subVectors(e,t))}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn(`THREE.Vector4: offset has been removed from .fromBufferAttribute().`),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},U.prototype.isVector4=!0,Ds=class extends _s{constructor(e,t,n={}){super(),this.width=e,this.height=t,this.depth=1,this.scissor=new U(0,0,e,t),this.scissorTest=!1,this.viewport=new U(0,0,e,t),this.texture=new Es(void 0,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.image={width:e,height:t,depth:1},this.texture.generateMipmaps=n.generateMipmaps!==void 0&&n.generateMipmaps,this.texture.internalFormat=n.internalFormat===void 0?null:n.internalFormat,this.texture.minFilter=n.minFilter===void 0?Na:n.minFilter,this.depthBuffer=n.depthBuffer===void 0||n.depthBuffer,this.stencilBuffer=n.stencilBuffer!==void 0&&n.stencilBuffer,this.depthTexture=n.depthTexture===void 0?null:n.depthTexture}setTexture(e){e.image={width:this.width,height:this.height,depth:this.depth},this.texture=e}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image={...this.texture.image},this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ds.prototype.isWebGLRenderTarget=!0,Os=class extends Ds{constructor(e,t,n){super(e,t);let r=this.texture;this.texture=[];for(let e=0;e<n;e++)this.texture[e]=r.clone()}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.texture.length;r<i;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone();return this}},Os.prototype.isWebGLMultipleRenderTargets=!0,ks=class extends Ds{constructor(e,t,n={}){super(e,t,n),this.samples=4,this.ignoreDepthForMultisampleCopy=n.ignoreDepth===void 0||n.ignoreDepth,this.useRenderToTexture=n.useRenderToTexture!==void 0&&n.useRenderToTexture,this.useRenderbuffer=!1===this.useRenderToTexture}copy(e){return super.copy.call(this,e),this.samples=e.samples,this.useRenderToTexture=e.useRenderToTexture,this.useRenderbuffer=e.useRenderbuffer,this}},ks.prototype.isWebGLMultisampleRenderTarget=!0,As=class{constructor(e=0,t=0,n=0,r=1){this._x=e,this._y=t,this._z=n,this._w=r}static slerp(e,t,n,r){return console.warn(`THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead.`),n.slerpQuaternions(e,t,r)}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o!==0)if(o!==1){if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}else e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;else e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw Error(`THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.`);let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return!1!==t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e,t){return t===void 0?this.multiplyQuaternions(this,e):(console.warn(`THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.`),this.multiplyQuaternions(e,t))}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this._onChangeCallback(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),i=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(i),n*Math.cos(i),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},As.prototype.isQuaternion=!0,W=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t===void 0?(this.x+=e.x,this.y+=e.y,this.z+=e.z,this):(console.warn(`THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.`),this.addVectors(e,t))}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t===void 0?(this.x-=e.x,this.y-=e.y,this.z-=e.z,this):(console.warn(`THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.`),this.subVectors(e,t))}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t===void 0?(this.x*=e.x,this.y*=e.y,this.z*=e.z,this):(console.warn(`THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.`),this.multiplyVectors(e,t))}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error(`THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.`),this.applyQuaternion(Ms.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ms.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=s*t+a*r-o*n,l=s*n+o*t-i*r,u=s*r+i*n-a*t,d=-i*t-a*n-o*r;return this.x=c*s+d*-i+l*-o-u*-a,this.y=l*s+d*-a+u*-i-c*-o,this.z=u*s+d*-o+c*-a-l*-i,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e,t){return t===void 0?this.crossVectors(this,e):(console.warn(`THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.`),this.crossVectors(e,t))}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return js.copy(this).projectOnVector(e),this.sub(js)}reflect(e){return this.sub(js.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,n){return n!==void 0&&console.warn(`THREE.Vector3: offset has been removed from .fromBufferAttribute().`),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},W.prototype.isVector3=!0,js=new W,Ms=new As,Ns=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let s=0,c=e.length;s<c;s+=3){let c=e[s],l=e[s+1],u=e[s+2];c<t&&(t=c),l<n&&(n=l),u<r&&(r=u),c>i&&(i=c),l>a&&(a=l),u>o&&(o=u)}return this.min.set(t,n,r),this.max.set(i,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,i=-1/0,a=-1/0,o=-1/0;for(let s=0,c=e.count;s<c;s++){let c=e.getX(s),l=e.getY(s),u=e.getZ(s);c<t&&(t=c),l<n&&(n=l),u<r&&(r=u),c>i&&(i=c),l>a&&(a=l),u>o&&(o=u)}return this.min.set(t,n,r),this.max.set(i,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e){return this.makeEmpty(),this.expandByObject(e)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e){e.updateWorldMatrix(!1,!1);let t=e.geometry;t!==void 0&&(t.boundingBox===null&&t.computeBoundingBox(),Is.copy(t.boundingBox),Is.applyMatrix4(e.matrixWorld),this.union(Is));let n=e.children;for(let e=0,t=n.length;e<t;e++)this.expandByObject(n[e]);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fs),Fs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Ws.subVectors(this.max,Us),Ls.subVectors(e.a,Us),Rs.subVectors(e.b,Us),zs.subVectors(e.c,Us),Bs.subVectors(Rs,Ls),Vs.subVectors(zs,Rs),Hs.subVectors(Ls,zs);let t=[0,-Bs.z,Bs.y,0,-Vs.z,Vs.y,0,-Hs.z,Hs.y,Bs.z,0,-Bs.x,Vs.z,0,-Vs.x,Hs.z,0,-Hs.x,-Bs.y,Bs.x,0,-Vs.y,Vs.x,0,-Hs.y,Hs.x,0];return!st(t,Ls,Rs,zs,Ws)||(t=[1,0,0,0,1,0,0,0,1],!st(t,Ls,Rs,zs,Ws))?!1:(Gs.crossVectors(Bs,Vs),t=[Gs.x,Gs.y,Gs.z],st(t,Ls,Rs,zs,Ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fs.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=.5*this.getSize(Fs).length(),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ns.prototype.isBox3=!0,Ps=[new W,new W,new W,new W,new W,new W,new W,new W],Fs=new W,Is=new Ns,Ls=new W,Rs=new W,zs=new W,Bs=new W,Vs=new W,Hs=new W,Us=new W,Ws=new W,Gs=new W,Ks=new W,qs=new Ns,Js=new W,Ys=new W,Xs=new W,Zs=class{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?qs.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Xs.subVectors(e,this.center);let t=Xs.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=.5*(e-this.radius);this.center.add(Xs.multiplyScalar(n/e)),this.radius+=n}return this}union(e){return!0===this.center.equals(e.center)?Ys.set(0,0,1).multiplyScalar(e.radius):Ys.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Js.copy(e.center).add(Ys)),this.expandByPoint(Js.copy(e.center).sub(Ys)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qs=new W,$s=new W,ec=new W,tc=new W,nc=new W,rc=new W,ic=new W,ac=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Qs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Qs.copy(this.direction).multiplyScalar(t).add(this.origin),Qs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$s.copy(e).add(t).multiplyScalar(.5),ec.copy(t).sub(e).normalize(),tc.copy(this.origin).sub($s);let i=.5*e.distanceTo(t),a=-this.direction.dot(ec),o=tc.dot(this.direction),s=-tc.dot(ec),c=tc.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),r&&r.copy(ec).multiplyScalar(d).add($s),f}intersectSphere(e,t){Qs.subVectors(e.center,this.origin);let n=Qs.dot(this.direction),r=Qs.dot(Qs)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return o<0&&s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||n!==n)&&(n=i),(a<r||r!==r)&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)?null:((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0?null:this.at(n>=0?n:r,t))}intersectsBox(e){return this.intersectBox(e,Qs)!==null}intersectTriangle(e,t,n,r,i){nc.subVectors(t,e),rc.subVectors(n,e),ic.crossVectors(nc,rc);let a=this.direction.dot(ic),o;if(a>0){if(r)return null;o=1}else{if(!(a<0))return null;o=-1,a=-a}tc.subVectors(this.origin,e);let s=o*this.direction.dot(rc.crossVectors(tc,rc));if(s<0)return null;let c=o*this.direction.dot(nc.cross(tc));if(c<0||s+c>a)return null;let l=-o*tc.dot(ic);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},G=class e{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error(`THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.`)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/oc.setFromMatrixColumn(e,0).length(),i=1/oc.setFromMatrixColumn(e,1).length(),a=1/oc.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error(`THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.`);let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cc,e,lc)}lookAt(e,t,n){let r=this.elements;return fc.subVectors(e,t),fc.lengthSq()===0&&(fc.z=1),fc.normalize(),uc.crossVectors(n,fc),uc.lengthSq()===0&&(Math.abs(n.z)===1?fc.x+=1e-4:fc.z+=1e-4,fc.normalize(),uc.crossVectors(n,fc)),uc.normalize(),dc.crossVectors(fc,uc),r[0]=uc.x,r[4]=dc.x,r[8]=fc.x,r[1]=uc.y,r[5]=dc.y,r[9]=fc.y,r[2]=uc.z,r[6]=dc.z,r[10]=fc.z,this}multiply(e,t){return t===void 0?this.multiplyMatrices(this,e):(console.warn(`THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.`),this.multiplyMatrices(e,t))}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],ee=r[6],A=r[10],te=r[14],j=r[3],M=r[7],ne=r[11],re=r[15];return i[0]=a*x+o*T+s*k+c*j,i[4]=a*S+o*E+s*ee+c*M,i[8]=a*C+o*D+s*A+c*ne,i[12]=a*w+o*O+s*te+c*re,i[1]=l*x+u*T+d*k+f*j,i[5]=l*S+u*E+d*ee+f*M,i[9]=l*C+u*D+d*A+f*ne,i[13]=l*w+u*O+d*te+f*re,i[2]=p*x+m*T+h*k+g*j,i[6]=p*S+m*E+h*ee+g*M,i[10]=p*C+m*D+h*A+g*ne,i[14]=p*w+m*O+h*te+g*re,i[3]=_*x+v*T+y*k+b*j,i[7]=_*S+v*E+y*ee+b*M,i[11]=_*C+v*D+y*A+b*ne,i[15]=_*w+v*O+y*te+b*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=oc.set(r[0],r[1],r[2]).length(),a=oc.set(r[4],r[5],r[6]).length(),o=oc.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],sc.copy(this);let s=1/i,c=1/a,l=1/o;return sc.elements[0]*=s,sc.elements[1]*=s,sc.elements[2]*=s,sc.elements[4]*=c,sc.elements[5]*=c,sc.elements[6]*=c,sc.elements[8]*=l,sc.elements[9]*=l,sc.elements[10]*=l,t.setFromRotationMatrix(sc),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a){a===void 0&&console.warn(`THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.`);let o=this.elements,s=2*i/(t-e),c=2*i/(n-r),l=(t+e)/(t-e),u=(n+r)/(n-r),d=-(a+i)/(a-i),f=-2*a*i/(a-i);return o[0]=s,o[4]=0,o[8]=l,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,r,i,a){let o=this.elements,s=1/(t-e),c=1/(n-r),l=1/(a-i),u=(t+e)*s,d=(n+r)*c,f=(a+i)*l;return o[0]=2*s,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*l,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},G.prototype.isMatrix4=!0,oc=new W,sc=new G,cc=new W(0,0,0),lc=new W(1,1,1),uc=new W,dc=new W,fc=new W,pc=new G,mc=new As,hc=class e{constructor(t=0,n=0,r=0,i=e.DefaultOrder){this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ze(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ze(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,!0===n&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}toVector3(e){return e?e.set(this._x,this._y,this._z):new W(this._x,this._y,this._z)}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}},hc.prototype.isEuler=!0,hc.DefaultOrder=`XYZ`,hc.RotationOrders=[`XYZ`,`YZX`,`ZXY`,`XZY`,`YXZ`,`ZYX`],gc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},_c=0,vc=new W,yc=new As,bc=new G,xc=new W,Sc=new W,Cc=new W,wc=new As,Tc=new W(1,0,0),Ec=new W(0,1,0),Dc=new W(0,0,1),Oc={type:`added`},kc={type:`removed`},K=class e extends _s{constructor(){super(),Object.defineProperty(this,`id`,{value:_c++}),this.uuid=Re(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DefaultUp.clone();let t=new W,n=new hc,r=new As,i=new W(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new G},normalMatrix:{value:new Ss}}),this.matrix=new G,this.matrixWorld=new G,this.matrixAutoUpdate=e.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new gc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yc.setFromAxisAngle(e,t),this.quaternion.multiply(yc),this}rotateOnWorldAxis(e,t){return yc.setFromAxisAngle(e,t),this.quaternion.premultiply(yc),this}rotateX(e){return this.rotateOnAxis(Tc,e)}rotateY(e){return this.rotateOnAxis(Ec,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return vc.copy(e).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tc,e)}translateY(e){return this.translateOnAxis(Ec,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(bc.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xc.copy(e):xc.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Sc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bc.lookAt(Sc,xc,this.up):bc.lookAt(xc,Sc,this.up),this.quaternion.setFromRotationMatrix(bc),r&&(bc.extractRotation(r.matrixWorld),yc.setFromRotationMatrix(bc),this.quaternion.premultiply(yc.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Oc)):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kc)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){let t=this.children[e];t.parent=null,t.dispatchEvent(kc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bc.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bc.multiply(e.parent.matrixWorld)),e.applyMatrix4(bc),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,e,Cc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sc,wc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(!0===e&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===t){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},n.metadata={version:4.5,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),!0===this.castShadow&&(r.castShadow=!0),!0===this.receiveShadow&&(r.receiveShadow=!0),!1===this.visible&&(r.visible=!1),!1===this.frustumCulled&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!==`{}`&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}},K.DefaultUp=new W(0,1,0),K.DefaultMatrixAutoUpdate=!0,K.prototype.isObject3D=!0,Ac=new W,jc=new W,Mc=new W,Nc=new W,Pc=new W,Fc=new W,Ic=new W,Lc=new W,Rc=new W,zc=new W,Bc=class e{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ac.subVectors(e,t),r.cross(Ac);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Ac.subVectors(r,t),jc.subVectors(n,t),Mc.subVectors(e,t);let a=Ac.dot(Ac),o=Ac.dot(jc),s=Ac.dot(Mc),c=jc.dot(jc),l=jc.dot(Mc),u=a*c-o*o;if(u===0)return i.set(-2,-1,-1);let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nc),Nc.x>=0&&Nc.y>=0&&Nc.x+Nc.y<=1}static getUV(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Nc),s.set(0,0),s.addScaledVector(i,Nc.x),s.addScaledVector(a,Nc.y),s.addScaledVector(o,Nc.z),s}static isFrontFacing(e,t,n,r){return Ac.subVectors(n,t),jc.subVectors(e,t),Ac.cross(jc).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ac.subVectors(this.c,this.b),jc.subVectors(this.a,this.b),.5*Ac.cross(jc).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getUV(t,n,r,i,a){return e.getUV(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Pc.subVectors(r,n),Fc.subVectors(i,n),Lc.subVectors(e,n);let s=Pc.dot(Lc),c=Fc.dot(Lc);if(s<=0&&c<=0)return t.copy(n);Rc.subVectors(e,r);let l=Pc.dot(Rc),u=Fc.dot(Rc);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Pc,a);zc.subVectors(e,i);let f=Pc.dot(zc),p=Fc.dot(zc);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Fc,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Ic.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Ic,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Pc,a).addScaledVector(Fc,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Vc=0,Hc=class extends _s{constructor(){super(),Object.defineProperty(this,`id`,{value:Vc++}),this.uuid=Re(),this.name=``,this.type=`Material`,this.fog=!0,this.blending=Ii,this.side=ji,this.vertexColors=!1,this.opacity=1,this.format=Xa,this.transparent=!1,this.blendSrc=Xi,this.blendDst=Zi,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ps,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fs,this.stencilZFail=fs,this.stencilZPass=fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: '`+t+`' parameter is undefined.`);continue}if(t===`shading`){console.warn(`THREE.`+this.type+`: .shading has been removed. Use the boolean .flatShading instead.`),this.flatShading=n===Pi;continue}let r=this[t];r===void 0?console.warn(`THREE.`+this.type+`: '`+t+`' is not a property of this material.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.5,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==ji&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.format!==Xa&&(n.format=this.format),!0===this.transparent&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.alphaToCoverage&&(n.alphaToCoverage=this.alphaToCoverage),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=this.premultipliedAlpha),!0===this.wireframe&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(n.flatShading=this.flatShading),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),JSON.stringify(this.userData)!==`{}`&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.format=e.format,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){!0===e&&this.version++}},Hc.prototype.isMaterial=!0,Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wc={h:0,s:0,l:0},Gc={h:0,s:0,l:0},q=class{constructor(e,t,n){return t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e==`number`?this.setHex(e):typeof e==`string`&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,this}setRGB(e,t,n){return this.r=e,this.g=t,this.b=n,this}setHSL(e,t,n){if(e=Be(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ct(i,r,e+1/3),this.g=ct(i,r,e),this.b=ct(i,r,e-1/3)}return this}setStyle(e){function t(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let e,r=n[1],i=n[2];switch(r){case`rgb`:case`rgba`:if(e=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(e[1],10))/255,this.g=Math.min(255,parseInt(e[2],10))/255,this.b=Math.min(255,parseInt(e[3],10))/255,t(e[4]),this;if(e=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(e[1],10))/100,this.g=Math.min(100,parseInt(e[2],10))/100,this.b=Math.min(100,parseInt(e[3],10))/100,t(e[4]),this;break;case`hsl`:case`hsla`:if(e=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){let n=parseFloat(e[1])/360,r=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100;return t(e[4]),this.setHSL(n,r,i)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let e=n[1],t=e.length;if(t===3)return this.r=parseInt(e.charAt(0)+e.charAt(0),16)/255,this.g=parseInt(e.charAt(1)+e.charAt(1),16)/255,this.b=parseInt(e.charAt(2)+e.charAt(2),16)/255,this;if(t===6)return this.r=parseInt(e.charAt(0)+e.charAt(1),16)/255,this.g=parseInt(e.charAt(2)+e.charAt(3),16)/255,this.b=parseInt(e.charAt(4)+e.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){let t=Uc[e.toLowerCase()];return t===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=lt(e.r),this.g=lt(e.g),this.b=lt(e.b),this}copyLinearToSRGB(e){return this.r=ut(e.r),this.g=ut(e.g),this.b=ut(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0}getHexString(){return(`000000`+this.getHex().toString(16)).slice(-6)}getHSL(e){let t=this.r,n=this.g,r=this.b,i=Math.max(t,n,r),a=Math.min(t,n,r),o,s,c=(a+i)/2;if(a===i)o=0,s=0;else{let e=i-a;switch(s=c<=.5?e/(i+a):e/(2-i-a),i){case t:o=(n-r)/e+(n<r?6:0);break;case n:o=(r-t)/e+2;break;case r:o=(t-n)/e+4;break}o/=6}return e.h=o,e.s=s,e.l=c,e}getStyle(){return`rgb(`+(255*this.r|0)+`,`+(255*this.g|0)+`,`+(255*this.b|0)+`)`}offsetHSL(e,t,n){return this.getHSL(Wc),Wc.h+=e,Wc.s+=t,Wc.l+=n,this.setHSL(Wc.h,Wc.s,Wc.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wc),e.getHSL(Gc);let n=Ue(Wc.h,Gc.h,t),r=Ue(Wc.s,Gc.s,t),i=Ue(Wc.l,Gc.l,t);return this.setHSL(n,r,i),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),!0===e.normalized&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}},q.NAMES=Uc,q.prototype.isColor=!0,q.prototype.r=1,q.prototype.g=1,q.prototype.b=1,Kc=class extends Hc{constructor(e){super(),this.type=`MeshBasicMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}},Kc.prototype.isMeshBasicMaterial=!0,J=new W,qc=new H,Jc=class{constructor(e,t,n){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=!0===n,this.usage=ms,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){let t=this.array,n=0;for(let r=0,i=e.length;r<i;r++){let i=e[r];i===void 0&&(console.warn(`THREE.BufferAttribute.copyColorsArray(): color is undefined`,r),i=new q),t[n++]=i.r,t[n++]=i.g,t[n++]=i.b}return this}copyVector2sArray(e){let t=this.array,n=0;for(let r=0,i=e.length;r<i;r++){let i=e[r];i===void 0&&(console.warn(`THREE.BufferAttribute.copyVector2sArray(): vector is undefined`,r),i=new H),t[n++]=i.x,t[n++]=i.y}return this}copyVector3sArray(e){let t=this.array,n=0;for(let r=0,i=e.length;r<i;r++){let i=e[r];i===void 0&&(console.warn(`THREE.BufferAttribute.copyVector3sArray(): vector is undefined`,r),i=new W),t[n++]=i.x,t[n++]=i.y,t[n++]=i.z}return this}copyVector4sArray(e){let t=this.array,n=0;for(let r=0,i=e.length;r<i;r++){let i=e[r];i===void 0&&(console.warn(`THREE.BufferAttribute.copyVector4sArray(): vector is undefined`,r),i=new U),t[n++]=i.x,t[n++]=i.y,t[n++]=i.z,t[n++]=i.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qc.fromBufferAttribute(this,t),qc.applyMatrix3(e),this.setXY(t,qc.x,qc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)J.fromBufferAttribute(this,t),J.applyMatrix3(e),this.setXYZ(t,J.x,J.y,J.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)J.x=this.getX(t),J.y=this.getY(t),J.z=this.getZ(t),J.applyMatrix4(e),this.setXYZ(t,J.x,J.y,J.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)J.x=this.getX(t),J.y=this.getY(t),J.z=this.getZ(t),J.applyNormalMatrix(e),this.setXYZ(t,J.x,J.y,J.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)J.x=this.getX(t),J.y=this.getY(t),J.z=this.getZ(t),J.transformDirection(e),this.setXYZ(t,J.x,J.y,J.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==ms&&(e.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(e.updateRange=this.updateRange),e}},Jc.prototype.isBufferAttribute=!0,Yc=class extends Jc{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Xc=class extends Jc{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Zc=class extends Jc{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Zc.prototype.isFloat16BufferAttribute=!0,Y=class extends Jc{constructor(e,t,n){super(new Float32Array(e),t,n)}},Qc=0,$c=new G,el=new K,tl=new W,nl=new Ns,rl=new Ns,il=new W,X=class e extends _s{constructor(){super(),Object.defineProperty(this,`id`,{value:Qc++}),this.uuid=Re(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(it(e)>65535?Xc:Yc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ss().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $c.makeRotationFromQuaternion(e),this.applyMatrix4($c),this}rotateX(e){return $c.makeRotationX(e),this.applyMatrix4($c),this}rotateY(e){return $c.makeRotationY(e),this.applyMatrix4($c),this}rotateZ(e){return $c.makeRotationZ(e),this.applyMatrix4($c),this}translate(e,t,n){return $c.makeTranslation(e,t,n),this.applyMatrix4($c),this}scale(e,t,n){return $c.makeScale(e,t,n),this.applyMatrix4($c),this}lookAt(e){return el.lookAt(e),el.updateMatrix(),this.applyMatrix4(el.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tl).negate(),this.translate(tl.x,tl.y,tl.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute(`position`,new Y(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ns);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];nl.setFromBufferAttribute(n),this.morphTargetsRelative?(il.addVectors(this.boundingBox.min,nl.min),this.boundingBox.expandByPoint(il),il.addVectors(this.boundingBox.max,nl.max),this.boundingBox.expandByPoint(il)):(this.boundingBox.expandByPoint(nl.min),this.boundingBox.expandByPoint(nl.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".`,this),this.boundingSphere.set(new W,1/0);else if(e){let n=this.boundingSphere.center;if(nl.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];rl.setFromBufferAttribute(n),this.morphTargetsRelative?(il.addVectors(nl.min,rl.min),nl.expandByPoint(il),il.addVectors(nl.max,rl.max),nl.expandByPoint(il)):(nl.expandByPoint(rl.min),nl.expandByPoint(rl.max))}nl.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)il.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(il));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)il.fromBufferAttribute(a,t),o&&(tl.fromBufferAttribute(e,t),il.add(tl)),r=Math.max(r,n.distanceToSquared(il))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.array,r=t.position.array,i=t.normal.array,a=t.uv.array,o=r.length/3;t.tangent===void 0&&this.setAttribute(`tangent`,new Jc(new Float32Array(4*o),4));let s=t.tangent.array,c=[],l=[];for(let e=0;e<o;e++)c[e]=new W,l[e]=new W;let u=new W,d=new W,f=new W,p=new H,m=new H,h=new H,g=new W,_=new W;function v(e,t,n){u.fromArray(r,3*e),d.fromArray(r,3*t),f.fromArray(r,3*n),p.fromArray(a,2*e),m.fromArray(a,2*t),h.fromArray(a,2*n),d.sub(u),f.sub(u),m.sub(p),h.sub(p);let i=1/(m.x*h.y-h.x*m.y);isFinite(i)&&(g.copy(d).multiplyScalar(h.y).addScaledVector(f,-m.y).multiplyScalar(i),_.copy(f).multiplyScalar(m.x).addScaledVector(d,-h.x).multiplyScalar(i),c[e].add(g),c[t].add(g),c[n].add(g),l[e].add(_),l[t].add(_),l[n].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)v(n[e+0],n[e+1],n[e+2])}let b=new W,x=new W,S=new W,C=new W;function w(e){S.fromArray(i,3*e),C.copy(S);let t=c[e];b.copy(t),b.sub(S.multiplyScalar(S.dot(t))).normalize(),x.crossVectors(C,t);let n=x.dot(l[e])<0?-1:1;s[4*e]=b.x,s[4*e+1]=b.y,s[4*e+2]=b.z,s[4*e+3]=n}for(let e=0,t=y.length;e<t;++e){let t=y[e],r=t.start,i=t.count;for(let e=r,t=r+i;e<t;e+=3)w(n[e+0]),w(n[e+1]),w(n[e+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new Jc(new Float32Array(3*t.count),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new W,i=new W,a=new W,o=new W,s=new W,c=new W,l=new W,u=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error(`THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.`,e);return}t===void 0&&(t=0,console.warn(`THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.`));let n=this.attributes;for(let r in n){if(e.attributes[r]===void 0)continue;let i=n[r].array,a=e.attributes[r],o=a.array,s=a.itemSize*t,c=Math.min(o.length,i.length-s);for(let e=0,t=s;e<c;e++,t++)i[t]=o[e]}return this}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)il.fromBufferAttribute(e,t),il.normalize(),e.setXYZ(t,il.x,il.y,il.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Jc(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.5,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:`dispose`})}},X.prototype.isBufferGeometry=!0,al=new G,ol=new ac,sl=new Zs,cl=new W,ll=new W,ul=new W,dl=new W,fl=new W,pl=new W,ml=new W,hl=new W,gl=new W,_l=new H,vl=new H,yl=new H,bl=new W,xl=new W,Sl=class extends K{constructor(e=new X,t=new Kc){super(),this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){let n=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error(`THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`)}}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(i),!1===e.ray.intersectsSphere(sl))||(al.copy(i).invert(),ol.copy(e.ray).applyMatrix4(al),n.boundingBox!==null&&!1===ol.intersectsBox(n.boundingBox)))return;let a;if(n.isBufferGeometry){let i=n.index,o=n.attributes.position,s=n.morphAttributes.position,c=n.morphTargetsRelative,l=n.attributes.uv,u=n.attributes.uv2,d=n.groups,f=n.drawRange;if(i!==null)if(Array.isArray(r))for(let n=0,p=d.length;n<p;n++){let p=d[n],m=r[p.materialIndex],h=Math.max(p.start,f.start),g=Math.min(i.count,Math.min(p.start+p.count,f.start+f.count));for(let n=h,r=g;n<r;n+=3){let r=i.getX(n),d=i.getX(n+1),f=i.getX(n+2);a=ft(this,m,e,ol,o,s,c,l,u,r,d,f),a&&(a.faceIndex=Math.floor(n/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{let n=Math.max(0,f.start),d=Math.min(i.count,f.start+f.count);for(let f=n,p=d;f<p;f+=3){let n=i.getX(f),d=i.getX(f+1),p=i.getX(f+2);a=ft(this,r,e,ol,o,s,c,l,u,n,d,p),a&&(a.faceIndex=Math.floor(f/3),t.push(a))}}else if(o!==void 0)if(Array.isArray(r))for(let n=0,i=d.length;n<i;n++){let i=d[n],p=r[i.materialIndex],m=Math.max(i.start,f.start),h=Math.min(o.count,Math.min(i.start+i.count,f.start+f.count));for(let n=m,r=h;n<r;n+=3){let r=n,d=n+1,f=n+2;a=ft(this,p,e,ol,o,s,c,l,u,r,d,f),a&&(a.faceIndex=Math.floor(n/3),a.face.materialIndex=i.materialIndex,t.push(a))}}else{let n=Math.max(0,f.start),i=Math.min(o.count,f.start+f.count);for(let d=n,f=i;d<f;d+=3){let n=d,i=d+1,f=d+2;a=ft(this,r,e,ol,o,s,c,l,u,n,i,f),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}else n.isGeometry&&console.error(`THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`)}},Sl.prototype.isMesh=!0,Cl=class e extends X{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Y(c,3)),this.setAttribute(`normal`,new Y(l,3)),this.setAttribute(`uv`,new Y(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new W;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},wl={clone:pt,merge:mt},Tl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,El=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Dl=class extends Hc{constructor(e){super(),this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.vertexShader=Tl,this.fragmentShader=El,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error(`THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.`),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pt(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);for(let n in t.glslVersion=this.glslVersion,t.uniforms={},this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;let n={};for(let e in this.extensions)!0===this.extensions[e]&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Dl.prototype.isShaderMaterial=!0,Ol=class extends K{constructor(){super(),this.type=`Camera`,this.matrixWorldInverse=new G,this.projectionMatrix=new G,this.projectionMatrixInverse=new G}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ol.prototype.isCamera=!0,kl=class extends Ol{constructor(e=50,t=1,n=.1,r=2e3){super(),this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*xs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*bs*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*xs*Math.atan(Math.tan(.5*bs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*bs*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kl.prototype.isPerspectiveCamera=!0,Al=90,jl=1,Ml=class extends K{constructor(e,t,n){if(super(),this.type=`CubeCamera`,!0!==n.isWebGLCubeRenderTarget){console.error(`THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.`);return}this.renderTarget=n;let r=new kl(Al,jl,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new W(1,0,0)),this.add(r);let i=new kl(Al,jl,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new W(-1,0,0)),this.add(i);let a=new kl(Al,jl,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new W(0,1,0)),this.add(a);let o=new kl(Al,jl,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new W(0,-1,0)),this.add(o);let s=new kl(Al,jl,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new W(0,0,1)),this.add(s);let c=new kl(Al,jl,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new W(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[r,i,a,o,s,c]=this.children,l=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;let d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,i),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,s),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=l}},Nl=class extends Es{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?xa:t,super(e,t,n,r,i,a,o,s,c,l),this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nl.prototype.isCubeTexture=!0,Pl=class extends Ds{constructor(e,t,n){Number.isInteger(t)&&(console.warn(`THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )`),t=n),super(e,e,t),t||={},this.texture=new Nl(void 0,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?Na:t.minFilter,this.texture._needsFlipEnvMap=!1}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=Xa,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cl(5,5,5),i=new Dl({name:`CubemapFromEquirect`,uniforms:pt(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mi,blending:Fi});i.uniforms.tEquirect.value=t;let a=new Sl(r,i),o=t.minFilter;return t.minFilter===Fa&&(t.minFilter=Na),new Ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Pl.prototype.isWebGLCubeRenderTarget=!0,Fl=new W,Il=new W,Ll=new Ss,Rl=class{constructor(e=new W(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Fl.subVectors(n,t).cross(Il.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){let n=e.delta(Fl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(n).multiplyScalar(i).add(e.start)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ll.getNormalMatrix(e),r=this.coplanarPoint(Fl).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rl.prototype.isPlane=!0,zl=new Zs,Bl=new W,Vl=class{constructor(e=new Rl,t=new Rl,n=new Rl,r=new Rl,i=new Rl,a=new Rl){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){let t=this.planes,n=e.elements,r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],c=n[5],l=n[6],u=n[7],d=n[8],f=n[9],p=n[10],m=n[11],h=n[12],g=n[13],_=n[14],v=n[15];return t[0].setComponents(o-r,u-s,m-d,v-h).normalize(),t[1].setComponents(o+r,u+s,m+d,v+h).normalize(),t[2].setComponents(o+i,u+c,m+f,v+g).normalize(),t[3].setComponents(o-i,u-c,m-f,v-g).normalize(),t[4].setComponents(o-a,u-l,m-p,v-_).normalize(),t[5].setComponents(o+a,u+l,m+p,v+_).normalize(),this}intersectsObject(e){let t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zl.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zl)}intersectsSprite(e){return zl.center.set(0,0,0),zl.radius=.7071067811865476,zl.applyMatrix4(e.matrixWorld),this.intersectsSphere(zl)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Bl.x=r.normal.x>0?e.max.x:e.min.x,Bl.y=r.normal.y>0?e.max.y:e.min.y,Bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hl=class e extends X{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Y(p,3)),this.setAttribute(`normal`,new Y(m,3)),this.setAttribute(`uv`,new Y(h,2))}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Z={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:`vec3 transformed = vec3( position );`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_maxMipLevel 8.0
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_maxTileSize 256.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		float texelSize = 1.0 / ( 3.0 * cubeUV_maxTileSize );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		if ( mipInt < cubeUV_maxMipLevel ) {
			uv.y += 2.0 * cubeUV_maxTileSize;
		}
		uv.y += filterInt * 2.0 * cubeUV_minTileSize;
		uv.x += 3.0 * max( 0.0, cubeUV_maxTileSize - 2.0 * faceSize );
		uv *= texelSize;
		return texture2D( envMap, uv ).rgb;
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, cubeUV_maxMipLevel );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		envColor = envMapTexelToLinear( envColor );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec;
			#ifdef ENVMAP_MODE_REFLECTION
				reflectVec = reflect( - viewDir, normal );
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			#else
				reflectVec = refract( - viewDir, normal, refractionRatio );
			#endif
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		lightMapIrradiance *= PI;
	#endif
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_vertex:`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= specularColorMapTexelToLinear( texture2D( specularColorMap, vUv ) ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= sheenColorMapTexelToLinear( texture2D( sheenColorMap, vUv ) ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] > 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1, 2 ) * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;
		vec3 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset, const in int stride ) {
			float texelIndex = float( vertexIndex * stride + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;
			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV ).xyz;
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			#ifndef USE_MORPHNORMALS
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 1 ) * morphTargetInfluences[ i ];
			#else
				if ( morphTargetInfluences[ i ] > 0.0 ) transformed += getMorph( gl_VertexID, i, 0, 2 ) * morphTargetInfluences[ i ];
			#endif
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( vec3 n, vec3 v, float thickness, float ior, mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( float roughness, float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( vec2 fragCoord, float roughness, float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef TEXTURE_LOD_EXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( vec3 radiance, float transmissionDistance, vec3 attenuationColor, float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( vec3 n, vec3 v, float roughness, vec3 diffuseColor, vec3 specularColor, float specularF90,
		vec3 position, mat4 modelMatrix, mat4 viewMatrix, mat4 projMatrix, float ior, float thickness,
		vec3 attenuationColor, float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new q(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ss},uv2Transform:{value:new Ss},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new H(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new q(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new q(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ss}},sprite:{diffuse:{value:new q(16777215)},opacity:{value:1},center:{value:new H(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ss}}},Ul={basic:{uniforms:mt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:mt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.fog,Q.lights,{emissive:{value:new q(0)}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:mt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new q(0)},specular:{value:new q(1118481)},shininess:{value:30}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:mt([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new q(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:mt([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new q(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:mt([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:mt([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:mt([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:mt([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:mt([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:mt([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new Ss},t2D:{value:null}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},cube:{uniforms:mt([Q.envmap,{opacity:{value:1}}]),vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distanceRGBA:{uniforms:mt([Q.common,Q.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distanceRGBA_vert,fragmentShader:Z.distanceRGBA_frag},shadow:{uniforms:mt([Q.lights,Q.fog,{color:{value:new q(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}},Ul.physical={uniforms:mt([Ul.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new H(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new q(0)},sheenColorMap:{value:null},sheenRoughness:{value:0},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new H},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new q(0)},specularIntensity:{value:0},specularIntensityMap:{value:null},specularColor:{value:new q(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},Wl=class extends Ol{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wl.prototype.isOrthographicCamera=!0,Gl=class extends Dl{constructor(e){super(e),this.type=`RawShaderMaterial`}},Gl.prototype.isRawShaderMaterial=!0,Kl=4,ql=8,Jl=2**ql,Yl=[.125,.215,.35,.446,.526,.582],Xl=ql-Kl+1+Yl.length,Zl=20,Ql={[os]:0,[ss]:1},$l=new Wl,{_lodPlanes:eu,_sizeLods:tu,_sigmas:nu}=Ct(),ru=new q,iu=null,au=(1+Math.sqrt(5))/2,ou=1/au,su=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,au,ou),new W(0,au,-ou),new W(ou,0,au),new W(-ou,0,au),new W(au,ou,0),new W(-au,ou,0)],cu=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._blurMaterial=Et(Zl),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){iu=this._renderer.getRenderTarget();let i=this._allocateTargets();return this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e){return this._fromTexture(e)}fromCubemap(e){return this._fromTexture(e)}compileCubemapShader(){this._cubemapShader===null&&(this._cubemapShader=Ot(),this._compileMaterial(this._cubemapShader))}compileEquirectangularShader(){this._equirectShader===null&&(this._equirectShader=Dt(),this._compileMaterial(this._equirectShader))}dispose(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let e=0;e<eu.length;e++)eu[e].dispose()}_cleanup(e){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(iu),e.scissorTest=!1,Tt(e,0,0,e.width,e.height)}_fromTexture(e){iu=this._renderer.getRenderTarget();let t=this._allocateTargets(e);return this._textureToCubeUV(e,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(e){let t={magFilter:Na,minFilter:Na,generateMipmaps:!1,type:Ua,format:Xa,encoding:os,depthBuffer:!1},n=wt(t);return n.depthBuffer=!e,this._pingPongRenderTarget=wt(t),n}_compileMaterial(e){let t=new Sl(eu[0],e);this._renderer.compile(t,$l)}_sceneToCubeUV(e,t,n,r){let i=new kl(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(ru),s.toneMapping=ma,s.autoClear=!1;let u=new Kc({name:`PMREM.Background`,side:Mi,depthWrite:!1,depthTest:!1}),d=new Sl(new Cl,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(ru),f=!0);for(let t=0;t<6;t++){let n=t%3;n==0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n==1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t])),Tt(r,n*Jl,t>2?Jl:0,Jl,Jl),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_setEncoding(e,t){!0===this._renderer.capabilities.isWebGL2&&t.format===Xa&&t.type===Ia&&t.encoding===ss?e.value=Ql[os]:e.value=Ql[t.encoding]}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===xa||e.mapping===Sa;r?this._cubemapShader??=Ot():this._equirectShader??=Dt();let i=r?this._cubemapShader:this._equirectShader,a=new Sl(eu[0],i),o=i.uniforms;o.envMap.value=e,r||o.texelSize.value.set(1/e.image.width,1/e.image.height),this._setEncoding(o.inputEncoding,e),Tt(t,0,0,3*Jl,2*Jl),n.setRenderTarget(t),n.render(a,$l)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let t=1;t<Xl;t++){let n=Math.sqrt(nu[t]*nu[t]-nu[t-1]*nu[t-1]),r=su[(t-1)%su.length];this._blur(e,t-1,t,n,r)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new Sl(eu[r],c),u=c.uniforms,d=tu[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*Zl-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):Zl;m>Zl&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zl}`);let h=[],g=0;for(let e=0;e<Zl;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e==0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o),u.dTheta.value=f,u.mipInt.value=ql-n;let _=tu[r];Tt(t,3*Math.max(0,Jl-2*_),(r===0?0:2*Jl)+2*_*(r>ql-Kl?r-ql+Kl:0),3*_,2*_),s.setRenderTarget(t),s.render(l,$l)}},lu=class extends Es{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=Aa,this.minFilter=Aa,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},lu.prototype.isDataTexture2DArray=!0,uu=class extends Es{constructor(e=null,t=1,n=1,r=1){super(null),this.image={data:e,width:t,height:n,depth:r},this.magFilter=Aa,this.minFilter=Aa,this.wrapR=Oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},uu.prototype.isDataTexture3D=!0,du=new Es,fu=new lu,pu=new uu,mu=new Nl,hu=[],gu=[],_u=new Float32Array(16),vu=new Float32Array(9),yu=new Float32Array(4),Nn.prototype.updateCache=function(e){let t=this.cache;e instanceof Float32Array&&t.length!==e.length&&(this.cache=new Float32Array(e.length)),Ut(t,e)},Pn.prototype.setValue=function(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}},bu=/(\w+)(\])?(\[|\.)?/g,Ln.prototype.setValue=function(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)},Ln.prototype.setOptional=function(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)},Ln.upload=function(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];!1!==o.needsUpdate&&a.setValue(e,o.value,r)}},Ln.seqWithValue=function(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n},xu=0,Su=/^[ \t]*#include +<([\w\d./]+)>/gm,Cu=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,wu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,Tu=0,Eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return!1===a.has(r)&&(a.add(r),r.usedTimes++),!1===a.has(i)&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache;return!1===t.has(e)&&t.set(e,new Set),t.get(e)}_getShaderStage(e){let t=this.shaderCache;if(!1===t.has(e)){let n=new Du;t.set(e,n)}return t.get(e)}},Du=class{constructor(){this.id=Tu++,this.usedTimes=0}},Ou=0,ku=class extends Hc{constructor(e){super(),this.type=`MeshDepthMaterial`,this.depthPacking=cs,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ku.prototype.isMeshDepthMaterial=!0,Au=class extends Hc{constructor(e){super(),this.type=`MeshDistanceMaterial`,this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Au.prototype.isMeshDistanceMaterial=!0,ju=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,Nu=class extends kl{constructor(e=[]){super(),this.cameras=e}},Nu.prototype.isArrayCamera=!0,Pu=class extends K{constructor(){super(),this.type=`Group`}},Pu.prototype.isGroup=!0,Fu={type:`move`},Iu=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`)if(o!==null&&(r=t.getPose(e.targetRaySpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fu))),c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n);if(c.joints[r.jointName]===void 0){let e=new Pu;e.matrixAutoUpdate=!1,e.visible=!1,c.joints[r.jointName]=e,c.add(e)}let i=c.joints[r.jointName];e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position),s=.02,l=.005;c.inputState.pinching&&o>s+l?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=s-l&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}},Lu=class extends Es{constructor(e,t,n,r,i,a,o,s,c,l){if(l=l===void 0?$a:l,l!==$a&&l!==eo)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&l===$a&&(n=za),n===void 0&&l===eo&&(n=qa),super(null,r,i,a,o,s,l,n,c),this.image={width:e,height:t},this.magFilter=o===void 0?Aa:o,this.minFilter=s===void 0?Aa:s,this.flipY=!1,this.generateMipmaps=!1}},Lu.prototype.isDepthTexture=!0,Ru=class extends _s{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=e.extensions.has(`WEBGL_multisampled_render_to_texture`),c=null,l=null,u=null,d=null,f=!1,p=null,m=t.getContextAttributes(),h=null,g=null,_=[],v=new Map,y=new kl;y.layers.enable(1),y.viewport=new U;let b=new kl;b.layers.enable(2),b.viewport=new U;let x=[y,b],S=new Nu;S.layers.enable(1),S.layers.enable(2);let C=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=_[e];return t===void 0&&(t=new Iu,_[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=_[e];return t===void 0&&(t=new Iu,_[e]=t),t.getGripSpace()},this.getHand=function(e){let t=_[e];return t===void 0&&(t=new Iu,_[e]=t),t.getHandSpace()};function T(e){let t=v.get(e.inputSource);t&&t.dispatchEvent({type:e.type,data:e.inputSource})}function E(){v.forEach((function(e,t){e.disconnect(t)})),v.clear(),C=null,w=null,e.setRenderTarget(h),d=null,u=null,l=null,r=null,g=null,M.stop(),n.isPresenting=!1,n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,!0===n.isPresenting&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,!0===n.isPresenting&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return u===null?d:u},this.getBinding=function(){return l},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(c){if(r=c,r!==null){if(h=e.getRenderTarget(),r.addEventListener(`select`,T),r.addEventListener(`selectstart`,T),r.addEventListener(`selectend`,T),r.addEventListener(`squeeze`,T),r.addEventListener(`squeezestart`,T),r.addEventListener(`squeezeend`,T),r.addEventListener(`end`,E),r.addEventListener(`inputsourceschange`,D),!0!==m.xrCompatible&&await t.makeXRCompatible(),r.renderState.layers===void 0||!1===e.capabilities.isWebGL2){let n={antialias:r.renderState.layers!==void 0||m.antialias,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:d}),g=new Ds(d.framebufferWidth,d.framebufferHeight,{format:Xa,type:Ia,encoding:e.outputEncoding})}else{f=m.antialias;let n=null,a=null,o=null;m.depth&&(o=m.stencil?35056:33190,n=m.stencil?eo:$a,a=m.stencil?qa:za);let c={colorFormat:m.alpha||f?32856:32849,depthFormat:o,scaleFactor:i};l=new XRWebGLBinding(r,t),u=l.createProjectionLayer(c),r.updateRenderState({layers:[u]}),g=f?new ks(u.textureWidth,u.textureHeight,{format:Xa,type:Ia,depthTexture:new Lu(u.textureWidth,u.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:m.stencil,ignoreDepth:u.ignoreDepthValues,useRenderToTexture:s,encoding:e.outputEncoding}):new Ds(u.textureWidth,u.textureHeight,{format:m.alpha?Xa:Ya,type:Ia,depthTexture:new Lu(u.textureWidth,u.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:m.stencil,ignoreDepth:u.ignoreDepthValues,encoding:e.outputEncoding})}this.setFoveation(1),a=await r.requestReferenceSpace(o),M.setContext(r),M.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}};function D(e){let t=r.inputSources;for(let e=0;e<_.length;e++)v.set(t[e],_[e]);for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=v.get(n);r&&(r.dispatchEvent({type:`disconnected`,data:n}),v.delete(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=v.get(n);r&&r.dispatchEvent({type:`connected`,data:n})}}let O=new W,k=new W;function ee(e,t,n){O.setFromMatrixPosition(t.matrixWorld),k.setFromMatrixPosition(n.matrixWorld);let r=O.distanceTo(k),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert();let g=o+m,_=s+m,v=f-h,y=p+(r-h),b=c*s/_*g,x=l*s/_*g;e.projectionMatrix.makePerspective(v,y,b,x,g,_)}function A(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;S.near=b.near=y.near=e.near,S.far=b.far=y.far=e.far,(C!==S.near||w!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,w=S.far);let t=e.parent,n=S.cameras;A(S,t);for(let e=0;e<n.length;e++)A(n[e],t);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),e.position.copy(S.position),e.quaternion.copy(S.quaternion),e.scale.copy(S.scale),e.matrix.copy(S.matrix),e.matrixWorld.copy(S.matrixWorld);let i=e.children;for(let e=0,t=i.length;e<t;e++)i[e].updateMatrixWorld(!0);n.length===2?ee(S,y,b):S.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){return u===null?d===null?void 0:d.fixedFoveation:u.fixedFoveation},this.setFoveation=function(e){u!==null&&(u.fixedFoveation=e),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=e)};let te=null;function j(t,n){if(c=n.getViewerPose(a),p=n,c!==null){let t=c.views;d!==null&&(e.setRenderTargetFramebuffer(g,d.framebuffer),e.setRenderTarget(g));let n=!1;t.length!==S.cameras.length&&(S.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(d!==null)a=d.getViewport(i);else{let t=l.getViewSubImage(u,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(g,t.colorTexture,u.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(g))}let o=x[r];o.matrix.fromArray(i.transform.matrix),o.projectionMatrix.fromArray(i.projectionMatrix),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&S.matrix.copy(o.matrix),!0===n&&S.cameras.push(o)}}let i=r.inputSources;for(let e=0;e<_.length;e++){let t=_[e],r=i[e];t.update(r,n,a)}te&&te(t,n),p=null}let M=new ht;M.setAnimationLoop(j),this.setAnimationLoop=function(e){te=e},this.dispose=function(){}}},V.prototype.isWebGLRenderer=!0,zu=class extends V{},zu.prototype.isWebGL1Renderer=!0,Bu=class e{constructor(e,t=25e-5){this.name=``,this.color=new q(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,color:this.color.getHex(),density:this.density}}},Bu.prototype.isFogExp2=!0,Vu=class e{constructor(e,t=1,n=1e3){this.name=``,this.color=new q(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,color:this.color.getHex(),near:this.near,far:this.far}}},Vu.prototype.isFog=!0,Hu=class extends K{constructor(){super(),this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}},Hu.prototype.isScene=!0,Uu=class{constructor(e,t){this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=ms,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Re()}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Re()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Re()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Uu.prototype.isInterleavedBuffer=!0,Wu=new W,Gu=class e{constructor(e,t,n,r=!1){this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=!0===r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Wu.x=this.getX(t),Wu.y=this.getY(t),Wu.z=this.getZ(t),Wu.applyMatrix4(e),this.setXYZ(t,Wu.x,Wu.y,Wu.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wu.x=this.getX(t),Wu.y=this.getY(t),Wu.z=this.getZ(t),Wu.applyNormalMatrix(e),this.setXYZ(t,Wu.x,Wu.y,Wu.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wu.x=this.getX(t),Wu.y=this.getY(t),Wu.z=this.getZ(t),Wu.transformDirection(e),this.setXYZ(t,Wu.x,Wu.y,Wu.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Jc(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gu.prototype.isInterleavedBufferAttribute=!0,Ku=class extends Hc{constructor(e){super(),this.type=`SpriteMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}},Ku.prototype.isSpriteMaterial=!0,Ju=new W,Yu=new W,Xu=new W,Zu=new H,Qu=new H,$u=new G,ed=new W,td=new W,nd=new W,rd=new H,id=new H,ad=new H,od=class extends K{constructor(e){if(super(),this.type=`Sprite`,qu===void 0){qu=new X;let e=new Uu(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);qu.setIndex([0,1,2,0,2,3]),qu.setAttribute(`position`,new Gu(e,3,0,!1)),qu.setAttribute(`uv`,new Gu(e,2,3,!1))}this.geometry=qu,this.material=e===void 0?new Ku:e,this.center=new H(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Yu.setFromMatrixScale(this.matrixWorld),$u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xu.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&Yu.multiplyScalar(-Xu.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Er(ed.set(-.5,-.5,0),Xu,a,Yu,r,i),Er(td.set(.5,-.5,0),Xu,a,Yu,r,i),Er(nd.set(.5,.5,0),Xu,a,Yu,r,i),rd.set(0,0),id.set(1,0),ad.set(1,1);let o=e.ray.intersectTriangle(ed,td,nd,!1,Ju);if(o===null&&(Er(td.set(-.5,.5,0),Xu,a,Yu,r,i),id.set(0,1),o=e.ray.intersectTriangle(ed,nd,td,!1,Ju),o===null))return;let s=e.ray.origin.distanceTo(Ju);s<e.near||s>e.far||t.push({distance:s,point:Ju.clone(),uv:Bc.getUV(Ju,ed,td,nd,rd,id,ad,new H),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}},od.prototype.isSprite=!0,new W,new W,sd=new W,cd=new U,ld=new U,ud=new W,dd=new G,fd=class extends Sl{constructor(e,t){super(e,t),this.type=`SkinnedMesh`,this.bindMode=`attached`,this.bindMatrix=new G,this.bindMatrixInverse=new G}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new U,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.x=t.getX(n),e.y=t.getY(n),e.z=t.getZ(n),e.w=t.getW(n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn(`THREE.SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}boneTransform(e,t){let n=this.skeleton,r=this.geometry;cd.fromBufferAttribute(r.attributes.skinIndex,e),ld.fromBufferAttribute(r.attributes.skinWeight,e),sd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let e=0;e<4;e++){let r=ld.getComponent(e);if(r!==0){let i=cd.getComponent(e);dd.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(ud.copy(sd).applyMatrix4(dd),r)}}return t.applyMatrix4(this.bindMatrixInverse)}},fd.prototype.isSkinnedMesh=!0,pd=class extends K{constructor(){super(),this.type=`Bone`}},pd.prototype.isBone=!0,md=class extends Es{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Aa,l=Aa,u,d){super(null,a,o,s,c,l,r,i,u,d),this.image={data:e,width:t,height:n},this.magFilter=c,this.minFilter=l,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},md.prototype.isDataTexture=!0,new G,new G,hd=class extends Jc{constructor(e,t,n,r=1){typeof n==`number`&&(r=n,n=!1,console.error(`THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.`)),super(e,t,n),this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hd.prototype.isInstancedBufferAttribute=!0,gd=new G,_d=new G,vd=[],yd=new Sl,bd=class extends Sl{constructor(e,t,n){super(e,t),this.instanceMatrix=new hd(new Float32Array(16*n),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let n=this.matrixWorld,r=this.count;if(yd.geometry=this.geometry,yd.material=this.material,yd.material!==void 0)for(let i=0;i<r;i++){this.getMatrixAt(i,gd),_d.multiplyMatrices(n,gd),yd.matrixWorld=_d,yd.raycast(e,vd);for(let e=0,n=vd.length;e<n;e++){let n=vd[e];n.instanceId=i,n.object=this,t.push(n)}vd.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hd(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`})}},bd.prototype.isInstancedMesh=!0,xd=class extends Hc{constructor(e){super(),this.type=`LineBasicMaterial`,this.color=new q(16777215),this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}},xd.prototype.isLineBasicMaterial=!0,Sd=new W,Cd=new W,wd=new G,Td=new ac,Ed=new Zs,Dd=class extends K{constructor(e=new X,t=new xd){super(),this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)Sd.fromBufferAttribute(t,e-1),Cd.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=Sd.distanceTo(Cd);e.setAttribute(`lineDistance`,new Y(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);else e.isGeometry&&console.error(`THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ed.copy(n.boundingSphere),Ed.applyMatrix4(r),Ed.radius+=i,!1===e.ray.intersectsSphere(Ed))return;wd.copy(r).invert(),Td.copy(e.ray).applyMatrix4(wd);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=new W,l=new W,u=new W,d=new W,f=this.isLineSegments?2:1;if(n.isBufferGeometry){let r=n.index,i=n.attributes.position;if(r!==null){let n=Math.max(0,a.start),o=Math.min(r.count,a.start+a.count);for(let a=n,p=o-1;a<p;a+=f){let n=r.getX(a),o=r.getX(a+1);if(c.fromBufferAttribute(i,n),l.fromBufferAttribute(i,o),Td.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let f=e.ray.origin.distanceTo(d);f<e.near||f>e.far||t.push({distance:f,point:u.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this})}}else{let n=Math.max(0,a.start),r=Math.min(i.count,a.start+a.count);for(let a=n,o=r-1;a<o;a+=f){if(c.fromBufferAttribute(i,a),l.fromBufferAttribute(i,a+1),Td.distanceSqToSegment(c,l,d,u)>s)continue;d.applyMatrix4(this.matrixWorld);let n=e.ray.origin.distanceTo(d);n<e.near||n>e.far||t.push({distance:n,point:u.clone().applyMatrix4(this.matrixWorld),index:a,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error(`THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`)}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){let n=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error(`THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.`)}}},Dd.prototype.isLine=!0,Od=new W,kd=new W,Ad=class extends Dd{constructor(e,t){super(e,t),this.type=`LineSegments`}computeLineDistances(){let e=this.geometry;if(e.isBufferGeometry)if(e.index===null){let t=e.attributes.position,n=[];for(let e=0,r=t.count;e<r;e+=2)Od.fromBufferAttribute(t,e),kd.fromBufferAttribute(t,e+1),n[e]=e===0?0:n[e-1],n[e+1]=n[e]+Od.distanceTo(kd);e.setAttribute(`lineDistance`,new Y(n,1))}else console.warn(`THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);else e.isGeometry&&console.error(`THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`);return this}},Ad.prototype.isLineSegments=!0,jd=class extends Dd{constructor(e,t){super(e,t),this.type=`LineLoop`}},jd.prototype.isLineLoop=!0,Md=class extends Hc{constructor(e){super(),this.type=`PointsMaterial`,this.color=new q(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}},Md.prototype.isPointsMaterial=!0,Nd=new G,Pd=new ac,Fd=new Zs,Id=new W,Ld=class extends K{constructor(e=new X,t=new Md){super(),this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fd.copy(n.boundingSphere),Fd.applyMatrix4(r),Fd.radius+=i,!1===e.ray.intersectsSphere(Fd))return;Nd.copy(r).invert(),Pd.copy(e.ray).applyMatrix4(Nd);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o;if(n.isBufferGeometry){let i=n.index,o=n.attributes.position;if(i!==null){let n=Math.max(0,a.start),c=Math.min(i.count,a.start+a.count);for(let a=n,l=c;a<l;a++){let n=i.getX(a);Id.fromBufferAttribute(o,n),Dr(Id,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(o.count,a.start+a.count);for(let a=n,c=i;a<c;a++)Id.fromBufferAttribute(o,a),Dr(Id,a,s,r,e,t,this)}}else console.error(`THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.`)}updateMorphTargets(){let e=this.geometry;if(e.isBufferGeometry){let t=e.morphAttributes,n=Object.keys(t);if(n.length>0){let e=t[n[0]];if(e!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let t=0,n=e.length;t<n;t++){let n=e[t].name||String(t);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=t}}}}else{let t=e.morphTargets;t!==void 0&&t.length>0&&console.error(`THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.`)}}},Ld.prototype.isPoints=!0,Rd=class extends Es{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.format=o===void 0?Ya:o,this.minFilter=a===void 0?Na:a,this.magFilter=i===void 0?Na:i,this.generateMipmaps=!1;let l=this;function u(){l.needsUpdate=!0,e.requestVideoFrameCallback(u)}`requestVideoFrameCallback`in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;`requestVideoFrameCallback`in e==0&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}},Rd.prototype.isVideoTexture=!0,zd=class extends Es{constructor(e,t,n){super({width:e,height:t}),this.format=n,this.magFilter=Aa,this.minFilter=Aa,this.generateMipmaps=!1,this.needsUpdate=!0}},zd.prototype.isFramebufferTexture=!0,Bd=class extends Es{constructor(e,t,n,r,i,a,o,s,c,l,u,d){super(null,a,o,s,c,l,r,i,u,d),this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}},Bd.prototype.isCompressedTexture=!0,Vd=class extends Es{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.needsUpdate=!0}},Vd.prototype.isCanvasTexture=!0,Hd=class e extends X{constructor(e=1,t=8,n=0,r=2*Math.PI){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new W,l=new H;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new Y(a,3)),this.setAttribute(`normal`,new Y(o,3)),this.setAttribute(`uv`,new Y(s,2))}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ud=class e extends X{constructor(e=1,t=1,n=1,r=8,i=1,a=!1,o=0,s=2*Math.PI){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),!1===a&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Y(u,3)),this.setAttribute(`normal`,new Y(d,3)),this.setAttribute(`uv`,new Y(f,2));function _(){let a=new W,_=new W,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=m[t][e],r=m[t+1][e],i=m[t+1][e+1],a=m[t][e+1];l.push(n,r,a),l.push(r,i,a),v+=6}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new H,m=new W,_=0,v=!0===n?e:t,y=!0===n?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=.5*n+.5,a.y=.5*i*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;!0===n?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,!0===n?1:2),g+=_}}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wd=class e extends Ud{constructor(e=1,t=1,n=8,r=1,i=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gd=class e extends X{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Y(i,3)),this.setAttribute(`normal`,new Y(i.slice(),3)),this.setAttribute(`uv`,new Y(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new W,r=new W,i=new W;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)a[r][e]=e===0&&r===i?o:o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new W;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new W;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=3*t;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new W,t=new W,n=new W,r=new W,o=new H,s=new H,c=new H;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},Kd=class e extends Gd{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},qd=new W,Jd=new W,Yd=new W,Xd=new Bc,Zd=class extends X{constructor(e=null,t=1){if(super(),this.type=`EdgesGeometry`,this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=10**4,r=Math.cos(bs*t),i=e.getIndex(),a=e.getAttribute(`position`),o=i?i.count:a.count,s=[0,0,0],c=[`a`,`b`,`c`],l=[,,,],u={},d=[];for(let e=0;e<o;e+=3){i?(s[0]=i.getX(e),s[1]=i.getX(e+1),s[2]=i.getX(e+2)):(s[0]=e,s[1]=e+1,s[2]=e+2);let{a:t,b:o,c:f}=Xd;if(t.fromBufferAttribute(a,s[0]),o.fromBufferAttribute(a,s[1]),f.fromBufferAttribute(a,s[2]),Xd.getNormal(Yd),l[0]=`${Math.round(t.x*n)},${Math.round(t.y*n)},${Math.round(t.z*n)}`,l[1]=`${Math.round(o.x*n)},${Math.round(o.y*n)},${Math.round(o.z*n)}`,l[2]=`${Math.round(f.x*n)},${Math.round(f.y*n)},${Math.round(f.z*n)}`,l[0]!==l[1]&&l[1]!==l[2]&&l[2]!==l[0])for(let e=0;e<3;e++){let t=(e+1)%3,n=l[e],i=l[t],a=Xd[c[e]],o=Xd[c[t]],f=`${n}_${i}`,p=`${i}_${n}`;p in u&&u[p]?(Yd.dot(u[p].normal)<=r&&(d.push(a.x,a.y,a.z),d.push(o.x,o.y,o.z)),u[p]=null):f in u||(u[f]={index0:s[e],index1:s[t],normal:Yd.clone()})}}for(let e in u)if(u[e]){let{index0:t,index1:n}=u[e];qd.fromBufferAttribute(a,t),Jd.fromBufferAttribute(a,n),d.push(qd.x,qd.y,qd.z),d.push(Jd.x,Jd.y,Jd.z)}this.setAttribute(`position`,new Y(d,3))}}},Qd=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o,s=0,c=i-1;for(;s<=c;)if(r=Math.floor(s+(c-s)/2),o=n[r]-a,o<0)s=r+1;else{if(!(o>0)){c=r;break}c=r-1}if(r=c,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new H:new W);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new W,r=[],i=[],a=[],o=new W,s=new G;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new W)}i[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ze(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(!0===t){let t=Math.acos(ze(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.5,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$d=class extends Qd{constructor(e=0,t=0,n=1,r=1,i=0,a=2*Math.PI,o=!1,s=0){super(),this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t){let n=t||new H,r=2*Math.PI,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),!0!==this.aClockwise||a||(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},$d.prototype.isEllipseCurve=!0,ef=class extends $d{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.type=`ArcCurve`}},ef.prototype.isArcCurve=!0,tf=new W,nf=new Or,rf=new Or,af=new Or,of=class extends Qd{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new W){let n=t,r=this.points,i=r.length,a=(i-(this.closed?0:1))*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(tf.subVectors(r[0],r[1]).add(r[0]),c=tf);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(tf.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=tf),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),nf.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),rf.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),af.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(nf.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),rf.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),af.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(nf.calc(s),rf.calc(s),af.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}},of.prototype.isCatmullRomCurve3=!0,sf=class extends Qd{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,r.x,i.x,a.x,o.x),Rr(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sf.prototype.isCubicBezierCurve=!0,cf=class extends Qd{constructor(e=new W,t=new W,n=new W,r=new W){super(),this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Rr(e,r.x,i.x,a.x,o.x),Rr(e,r.y,i.y,a.y,o.y),Rr(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cf.prototype.isCubicBezierCurve3=!0,lf=class extends Qd{constructor(e=new H,t=new H){super(),this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){let n=t||new H;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lf.prototype.isLineCurve=!0,uf=class extends Qd{constructor(e=new W,t=new W){super(),this.type=`LineCurve3`,this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},df=class extends Qd{constructor(e=new H,t=new H,n=new H){super(),this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Nr(e,r.x,i.x,a.x),Nr(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},df.prototype.isQuadraticBezierCurve=!0,ff=class extends Qd{constructor(e=new W,t=new W,n=new W){super(),this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Nr(e,r.x,i.x,a.x),Nr(e,r.y,i.y,a.y),Nr(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ff.prototype.isQuadraticBezierCurve3=!0,pf=class extends Qd{constructor(e=[]){super(),this.type=`SplineCurve`,this.points=e}getPoint(e,t=new H){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(kr(o,s.x,c.x,l.x,u.x),kr(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this}},pf.prototype.isSplineCurve=!0,mf=Object.freeze({__proto__:null,ArcCurve:ef,CatmullRomCurve3:of,CubicBezierCurve:sf,CubicBezierCurve3:cf,EllipseCurve:$d,LineCurve:lf,LineCurve3:uf,QuadraticBezierCurve:df,QuadraticBezierCurve3:ff,SplineCurve:pf}),hf=class extends Qd{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new lf(t,e))}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a&&a.isEllipseCurve?2*e:a&&(a.isLineCurve||a.isLineCurve3)?1:a&&a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];(!n||!n.equals(r))&&(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new mf[n.type]().fromJSON(n))}return this}},gf=class extends hf{constructor(e){super(),this.type=`Path`,this.currentPoint=new H,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new lf(this.currentPoint.clone(),new H(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new df(this.currentPoint.clone(),new H(e,t),new H(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new sf(this.currentPoint.clone(),new H(e,t),new H(n,r),new H(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new pf([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new $d(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_f=class extends gf{constructor(e){super(e),this.uuid=Re(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new gf().fromJSON(n))}return this}},vf={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=zr(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=Kr(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:1/p}return Vr(a,o,n,s,c,p),o}},yf=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return .5*n}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];gi(e),_i(n,e);let a=e.length;t.forEach(gi);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,_i(n,t[e]);let o=vf.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}},bf=class e extends X{constructor(e=new _f([new H(.5,.5),new H(-.5,.5),new H(-.5,-.5),new H(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new Y(r,3)),this.setAttribute(`uv`,new Y(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?xf:t.UVGenerator;t.amount!==void 0&&(console.warn(`THREE.ExtrudeBufferGeometry: amount has been renamed to depth.`),c=t.amount);let g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new W,b=new W,x=new W),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!yf.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];yf.isClockWise(t)&&(w[e]=t.reverse())}}let T=yf.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function D(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),t.clone().multiplyScalar(n).add(e)}let O=C.length,k=T.length;function ee(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new H(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new H(r/a,i/a)}let A=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),A[e]=ee(E[e],E[n],E[r]);let te=[],j,M=A.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];j=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),j[e]=ee(t[e],t[r],t[i]);te.push(j),M=M.concat(j)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],A[e],r);N(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],j[e],r);N(i.x,i.y,-n)}}}let ne=d+f;for(let e=0;e<O;e++){let t=l?D(C[e],M[e],ne):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),N(x.x,x.y,x.z)):N(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<O;t++){let n=l?D(C[t],M[t],ne):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),N(x.x,x.y,x.z)):N(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=D(E[e],A[e],r);N(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];j=te[e];for(let e=0,i=t.length;e<i;e++){let i=D(t[e],j[e],r);_?N(i.x,i.y+g[s-1].y,g[s-1].x+n):N(i.x,i.y,c+n)}}}re(),ie();function re(){let e=r.length/3;if(l){let e=0,t=O*e;for(let e=0;e<k;e++){let n=T[e];P(n[2]+t,n[1]+t,n[0]+t)}e=s+2*p,t=O*e;for(let e=0;e<k;e++){let n=T[e];P(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<k;e++){let t=T[e];P(t[2],t[1],t[0])}for(let e=0;e<k;e++){let t=T[e];P(t[0]+O*s,t[1]+O*s,t[2]+O*s)}}n.addGroup(e,r.length/3-e,0)}function ie(){let e=r.length/3,t=0;ae(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ae(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ae(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+2*p;e<n;e++){let n=O*e,a=O*(e+1);oe(t+r+n,t+i+n,t+i+a,t+r+a)}}}function N(e,t,n){a.push(e),a.push(t),a.push(n)}function P(e,t,i){se(e),se(t),se(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);F(o[0]),F(o[1]),F(o[2])}function oe(e,t,i,a){se(e),se(t),se(a),se(t),se(i),se(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);F(s[0]),F(s[1]),F(s[3]),F(s[1]),F(s[2]),F(s[3])}function se(e){r.push(a[3*e+0]),r.push(a[3*e+1]),r.push(a[3*e+2])}function F(e){i.push(e.x),i.push(e.y)}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vi(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new mf[i.type]().fromJSON(i)),new e(r,t.options)}},xf={generateTopUV:function(e,t,n,r,i){let a=t[3*n],o=t[3*n+1],s=t[3*r],c=t[3*r+1],l=t[3*i],u=t[3*i+1];return[new H(a,o),new H(s,c),new H(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[3*n],s=t[3*n+1],c=t[3*n+2],l=t[3*r],u=t[3*r+1],d=t[3*r+2],f=t[3*i],p=t[3*i+1],m=t[3*i+2],h=t[3*a],g=t[3*a+1],_=t[3*a+2];return Math.abs(s-u)<Math.abs(o-l)?[new H(o,1-c),new H(l,1-d),new H(f,1-m),new H(h,1-_)]:[new H(s,1-c),new H(u,1-d),new H(p,1-m),new H(g,1-_)]}},Sf=class e extends Gd{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Cf=class e extends X{constructor(e=[new H(0,.5),new H(.5,0),new H(0,-.5)],t=12,n=0,r=2*Math.PI){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ze(r,0,2*Math.PI);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new W,d=new H,f=new W,p=new W,m=new W,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=1*g,f.y=-h,f.z=0*g,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=1*g,f.y=-h,f.z=0*g,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(o,s,c)}this.setIndex(i),this.setAttribute(`position`,new Y(a,3)),this.setAttribute(`uv`,new Y(o,2)),this.setAttribute(`normal`,new Y(c,3))}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},wf=class e extends Gd{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Tf=class e extends X{constructor(e=.5,t=1,n=8,r=1,i=0,a=2*Math.PI){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new W,p=new H;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Y(s,3)),this.setAttribute(`normal`,new Y(c,3)),this.setAttribute(`uv`,new Y(l,2))}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Ef=class e extends X{constructor(e=new _f([new H(0,.5),new H(-.5,-.5),new H(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(!1===Array.isArray(e))c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new Y(r,3)),this.setAttribute(`normal`,new Y(i,3)),this.setAttribute(`uv`,new Y(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;!1===yf.isClockWise(l)&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];!0===yf.isClockWise(t)&&(u[e]=t.reverse())}let d=yf.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return yi(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}},Df=class e extends X{constructor(e=1,t=32,n=16,r=0,i=2*Math.PI,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new W,d=new W,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f==0&&a==0?v=.5/t:f==n&&s==Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Y(p,3)),this.setAttribute(`normal`,new Y(m,3)),this.setAttribute(`uv`,new Y(h,2))}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Of=class e extends Gd{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},kf=class e extends X{constructor(e=1,t=.4,n=8,r=6,i=2*Math.PI){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new W,u=new W,d=new W;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new Y(o,3)),this.setAttribute(`normal`,new Y(s,3)),this.setAttribute(`uv`,new Y(c,2))}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Af=class e extends X{constructor(e=1,t=.4,n=64,r=8,i=2,a=3){super(),this.type=`TorusKnotGeometry`,this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:i,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],s=[],c=[],l=[],u=new W,d=new W,f=new W,p=new W,m=new W,h=new W,g=new W;for(let o=0;o<=n;++o){let v=o/n*i*Math.PI*2;_(v,i,a,e,f),_(v+.01,i,a,e,p),h.subVectors(p,f),g.addVectors(p,f),m.crossVectors(h,g),g.crossVectors(m,h),m.normalize(),g.normalize();for(let e=0;e<=r;++e){let i=e/r*Math.PI*2,a=-t*Math.cos(i),p=t*Math.sin(i);u.x=f.x+(a*g.x+p*m.x),u.y=f.y+(a*g.y+p*m.y),u.z=f.z+(a*g.z+p*m.z),s.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),l.push(o/n),l.push(e/r)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,s=(r+1)*(e-1)+t;o.push(n,i,s),o.push(i,a,s)}this.setIndex(o),this.setAttribute(`position`,new Y(s,3)),this.setAttribute(`normal`,new Y(c,3)),this.setAttribute(`uv`,new Y(l,2));function _(e,t,n,r,i){let a=Math.cos(e),o=Math.sin(e),s=n/t*e,c=Math.cos(s);i.x=r*(2+c)*.5*a,i.y=r*(2+c)*o*.5,i.z=r*Math.sin(s)*.5}}static fromJSON(t){return new e(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},jf=class e extends X{constructor(e=new ff(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new W,s=new W,c=new H,l=new W,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new Y(u,3)),this.setAttribute(`normal`,new Y(d,3)),this.setAttribute(`uv`,new Y(f,2));function m(){for(let e=0;e<t;e++)h(e);h(!1===i?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new mf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},Mf=class extends X{constructor(e=null){if(super(),this.type=`WireframeGeometry`,this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new W,i=new W;if(e.index!==null){let a=e.attributes.position,o=e.index,s=e.groups;s.length===0&&(s=[{start:0,count:o.count,materialIndex:0}]);for(let e=0,c=s.length;e<c;++e){let c=s[e],l=c.start,u=c.count;for(let e=l,s=l+u;e<s;e+=3)for(let s=0;s<3;s++){let c=o.getX(e+s),l=o.getX(e+(s+1)%3);r.fromBufferAttribute(a,c),i.fromBufferAttribute(a,l),!0===bi(r,i,n)&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}}else{let a=e.attributes.position;for(let e=0,o=a.count/3;e<o;e++)for(let o=0;o<3;o++){let s=3*e+o,c=3*e+(o+1)%3;r.fromBufferAttribute(a,s),i.fromBufferAttribute(a,c),!0===bi(r,i,n)&&(t.push(r.x,r.y,r.z),t.push(i.x,i.y,i.z))}}this.setAttribute(`position`,new Y(t,3))}}},Object.freeze({__proto__:null,BoxGeometry:Cl,BoxBufferGeometry:Cl,CircleGeometry:Hd,CircleBufferGeometry:Hd,ConeGeometry:Wd,ConeBufferGeometry:Wd,CylinderGeometry:Ud,CylinderBufferGeometry:Ud,DodecahedronGeometry:Kd,DodecahedronBufferGeometry:Kd,EdgesGeometry:Zd,ExtrudeGeometry:bf,ExtrudeBufferGeometry:bf,IcosahedronGeometry:Sf,IcosahedronBufferGeometry:Sf,LatheGeometry:Cf,LatheBufferGeometry:Cf,OctahedronGeometry:wf,OctahedronBufferGeometry:wf,PlaneGeometry:Hl,PlaneBufferGeometry:Hl,PolyhedronGeometry:Gd,PolyhedronBufferGeometry:Gd,RingGeometry:Tf,RingBufferGeometry:Tf,ShapeGeometry:Ef,ShapeBufferGeometry:Ef,SphereGeometry:Df,SphereBufferGeometry:Df,TetrahedronGeometry:Of,TetrahedronBufferGeometry:Of,TorusGeometry:kf,TorusBufferGeometry:kf,TorusKnotGeometry:Af,TorusKnotBufferGeometry:Af,TubeGeometry:jf,TubeBufferGeometry:jf,WireframeGeometry:Mf}),Nf=class extends Hc{constructor(e){super(),this.type=`ShadowMaterial`,this.color=new q(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}},Nf.prototype.isShadowMaterial=!0,Pf=class extends Hc{constructor(e){super(),this.defines={STANDARD:``},this.type=`MeshStandardMaterial`,this.color=new q(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=us,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}},Pf.prototype.isMeshStandardMaterial=!0,Ff=class extends Pf{constructor(e){super(),this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new H(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,`reflectivity`,{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new q(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new q(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new q(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ff.prototype.isMeshPhysicalMaterial=!0,If=class extends Hc{constructor(e){super(),this.type=`MeshPhongMaterial`,this.color=new q(16777215),this.specular=new q(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=us,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}},If.prototype.isMeshPhongMaterial=!0,Lf=class extends Hc{constructor(e){super(),this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new q(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=us,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}},Lf.prototype.isMeshToonMaterial=!0,Rf=class extends Hc{constructor(e){super(),this.type=`MeshNormalMaterial`,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=us,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Rf.prototype.isMeshNormalMaterial=!0,zf=class extends Hc{constructor(e){super(),this.type=`MeshLambertMaterial`,this.color=new q(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new q(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}},zf.prototype.isMeshLambertMaterial=!0,Bf=class extends Hc{constructor(e){super(),this.defines={MATCAP:``},this.type=`MeshMatcapMaterial`,this.color=new q(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=us,this.normalScale=new H(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:``},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}},Bf.prototype.isMeshMatcapMaterial=!0,Vf=class extends xd{constructor(e){super(),this.type=`LineDashedMaterial`,this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}},Vf.prototype.isLineDashedMaterial=!0,Object.freeze({__proto__:null,ShadowMaterial:Nf,SpriteMaterial:Ku,RawShaderMaterial:Gl,ShaderMaterial:Dl,PointsMaterial:Md,MeshPhysicalMaterial:Ff,MeshStandardMaterial:Pf,MeshPhongMaterial:If,MeshToonMaterial:Lf,MeshNormalMaterial:Rf,MeshLambertMaterial:zf,MeshDepthMaterial:ku,MeshDistanceMaterial:Au,MeshBasicMaterial:Kc,MeshMatcapMaterial:Bf,LineDashedMaterial:Vf,LineBasicMaterial:xd,Material:Hc}),Hf={arraySlice:function(e,t,n){return Hf.isTypedArray(e)?new e.constructor(e.subarray(t,n===void 0?e.length:n)):e.slice(t,n)},convertArray:function(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)},isTypedArray:function(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)},getKeyframeOrder:function(e){function t(t,n){return e[t]-e[n]}let n=e.length,r=Array(n);for(let e=0;e!==n;++e)r[e]=e;return r.sort(t),r},sortedArray:function(e,t,n){let r=e.length,i=new e.constructor(r);for(let a=0,o=0;o!==r;++a){let r=n[a]*t;for(let n=0;n!==t;++n)i[o++]=e[r+n]}return i},flattenJSON:function(e,t,n,r){let i=1,a=e[0];for(;a!==void 0&&a[r]===void 0;)a=e[i++];if(a===void 0)return;let o=a[r];if(o!==void 0)if(Array.isArray(o))do o=a[r],o!==void 0&&(t.push(a.time),n.push.apply(n,o)),a=e[i++];while(a!==void 0);else if(o.toArray!==void 0)do o=a[r],o!==void 0&&(t.push(a.time),o.toArray(n,n.length)),a=e[i++];while(a!==void 0);else do o=a[r],o!==void 0&&(t.push(a.time),n.push(o)),a=e[i++];while(a!==void 0)},subclip:function(e,t,n,r,i=30){let a=e.clone();a.name=t;let o=[];for(let e=0;e<a.tracks.length;++e){let t=a.tracks[e],s=t.getValueSize(),c=[],l=[];for(let e=0;e<t.times.length;++e){let a=t.times[e]*i;if(!(a<n||a>=r)){c.push(t.times[e]);for(let n=0;n<s;++n)l.push(t.values[e*s+n])}}c.length!==0&&(t.times=Hf.convertArray(c,t.times.constructor),t.values=Hf.convertArray(l,t.values.constructor),o.push(t))}a.tracks=o;let s=1/0;for(let e=0;e<a.tracks.length;++e)s>a.tracks[e].times[0]&&(s=a.tracks[e].times[0]);for(let e=0;e<a.tracks.length;++e)a.tracks[e].shift(-1*s);return a.resetDuration(),a},makeClipAdditive:function(e,t=0,n=e,r=30){r<=0&&(r=30);let i=n.tracks.length,a=t/r;for(let t=0;t<i;++t){let r=n.tracks[t],i=r.ValueTypeName;if(i===`bool`||i===`string`)continue;let o=e.tracks.find((function(e){return e.name===r.name&&e.ValueTypeName===i}));if(o===void 0)continue;let s=0,c=r.getValueSize();r.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(s=c/3);let l=0,u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(l=u/3);let d=r.times.length-1,f;if(a<=r.times[0]){let e=s,t=c-s;f=Hf.arraySlice(r.values,e,t)}else if(a>=r.times[d]){let e=d*c+s,t=e+c-s;f=Hf.arraySlice(r.values,e,t)}else{let e=r.createInterpolant(),t=s,n=c-s;e.evaluate(a),f=Hf.arraySlice(e.resultBuffer,t,n)}i===`quaternion`&&new As().fromArray(f).normalize().conjugate().toArray(f);let p=o.times.length;for(let e=0;e<p;++e){let t=e*u+l;if(i===`quaternion`)As.multiplyQuaternionsFlat(o.values,t,f,0,o.values,t);else{let e=u-2*l;for(let n=0;n<e;++n)o.values[t+n]-=f[n]}}}return e.blendMode=is,e}},Uf=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];e:{t:{let a;n:{r:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break r;return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,e,i)}if(n===a)break;if(i=r,r=t[++n],e<r)break t}a=t.length;break n}if(e>=i)break e;{let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break t}a=n,n=0}}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,r);if(r===void 0)return n=t.length,this._cachedIndex=n,this.afterEnd_(n-1,i,e)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Uf.prototype.beforeStart_=Uf.prototype.copySampleValue_,Uf.prototype.afterEnd_=Uf.prototype.copySampleValue_,Wf=class extends Uf{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:es,endingEnd:es}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case ts:i=e,o=2*t-n;break;case ns:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case ts:a=e,s=2*n-t;break;case ns:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=.5*(n-t),l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Gf=class extends Uf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Kf=class extends Uf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qf=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Hf.convertArray(t,this.TimeBufferType),this.values=Hf.convertArray(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hf.convertArray(e.times,Array),values:Hf.convertArray(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Gf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zo:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw Error(t);this.setInterpolation(this.DefaultInterpolation)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zo;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=Hf.arraySlice(n,i,a),this.values=Hf.arraySlice(this.values,i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Hf.isTypedArray(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=Hf.arraySlice(this.times),t=Hf.arraySlice(this.values),n=this.getValueSize(),r=this.getInterpolation()===$o,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=Hf.arraySlice(e,0,a),this.values=Hf.arraySlice(t,0,a*n)),this}clone(){let e=Hf.arraySlice(this.times,0),t=Hf.arraySlice(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}},qf.prototype.TimeBufferType=Float32Array,qf.prototype.ValueBufferType=Float32Array,qf.prototype.DefaultInterpolation=Qo,Jf=class extends qf{},Jf.prototype.ValueTypeName=`bool`,Jf.prototype.ValueBufferType=Array,Jf.prototype.DefaultInterpolation=Zo,Jf.prototype.InterpolantFactoryMethodLinear=void 0,Jf.prototype.InterpolantFactoryMethodSmooth=void 0,Yf=class extends qf{},Yf.prototype.ValueTypeName=`color`,Xf=class extends qf{},Xf.prototype.ValueTypeName=`number`,Zf=class extends Uf{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)As.slerpFlat(i,0,a,c-o,a,c,s);return i}},Qf=class extends qf{InterpolantFactoryMethodLinear(e){return new Zf(this.times,this.values,this.getValueSize(),e)}},Qf.prototype.ValueTypeName=`quaternion`,Qf.prototype.DefaultInterpolation=Qo,Qf.prototype.InterpolantFactoryMethodSmooth=void 0,$f=class extends qf{},$f.prototype.ValueTypeName=`string`,$f.prototype.ValueBufferType=Array,$f.prototype.DefaultInterpolation=Zo,$f.prototype.InterpolantFactoryMethodLinear=void 0,$f.prototype.InterpolantFactoryMethodSmooth=void 0,ep=class extends qf{},ep.prototype.ValueTypeName=`vector`,tp=class{constructor(e,t=-1,n,r=rs){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Re(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,r=1/(e.fps||1);for(let e=0,i=n.length;e!==i;++e)t.push(Si(n[e]).scale(r));let i=new this(e.name,e.duration,t,e.blendMode);return i.uuid=e.uuid,i}static toJSON(e){let t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let e=0,r=n.length;e!==r;++e)t.push(qf.toJSON(n[e]));return r}static CreateFromMorphTargetSequence(e,t,n,r){let i=t.length,a=[];for(let e=0;e<i;e++){let o=[],s=[];o.push((e+i-1)%i,e,(e+1)%i),s.push(0,1,0);let c=Hf.getKeyframeOrder(o);o=Hf.sortedArray(o,1,c),s=Hf.sortedArray(s,1,c),!r&&o[0]===0&&(o.push(i),s.push(s[0])),a.push(new Xf(`.morphTargetInfluences[`+t[e].name+`]`,o,s).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let t=e;n=t.geometry&&t.geometry.animations||t.animations}for(let e=0;e<n.length;e++)if(n[e].name===t)return n[e];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let r={},i=/^([\w-]*?)([\d]+)$/;for(let t=0,n=e.length;t<n;t++){let n=e[t],a=n.name.match(i);if(a&&a.length>1){let e=a[1],t=r[e];t||(r[e]=t=[]),t.push(n)}}let a=[];for(let e in r)a.push(this.CreateFromMorphTargetSequence(e,r[e],t,n));return a}static parseAnimation(e,t){if(!e)return console.error(`THREE.AnimationClip: No animation in JSONLoader data.`),null;let n=function(e,t,n,r,i){if(n.length!==0){let a=[],o=[];Hf.flattenJSON(n,a,o,r),a.length!==0&&i.push(new e(t,a,o))}},r=[],i=e.name||`default`,a=e.fps||30,o=e.blendMode,s=e.length||-1,c=e.hierarchy||[];for(let e=0;e<c.length;e++){let i=c[e].keys;if(i&&i.length!==0)if(i[0].morphTargets){let e={},t;for(t=0;t<i.length;t++)if(i[t].morphTargets)for(let n=0;n<i[t].morphTargets.length;n++)e[i[t].morphTargets[n]]=-1;for(let n in e){let e=[],a=[];for(let r=0;r!==i[t].morphTargets.length;++r){let r=i[t];e.push(r.time),a.push(r.morphTarget===n?1:0)}r.push(new Xf(`.morphTargetInfluence[`+n+`]`,e,a))}s=e.length*(a||1)}else{let a=`.bones[`+t[e].name+`]`;n(ep,a+`.position`,i,`pos`,r),n(Qf,a+`.quaternion`,i,`rot`,r),n(ep,a+`.scale`,i,`scl`,r)}}return r.length===0?null:new this(i,s,r,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,r=e.length;n!==r;++n){let e=this.tracks[n];t=Math.max(t,e.times[e.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e&&=this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}},np={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},rp=class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(e){o++,!1===i&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null}}},ip=new rp,ap=class{constructor(e){this.manager=e===void 0?ip:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise((function(r,i){n.load(e,r,t,i)}))}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}},op={},sp=class extends ap{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=np.get(e);if(i!==void 0)return this.manager.itemStart(e),setTimeout((()=>{t&&t(i),this.manager.itemEnd(e)}),0),i;if(op[e]!==void 0){op[e].push({onLoad:t,onProgress:n,onError:r});return}op[e]=[],op[e].push({onLoad:t,onProgress:n,onError:r});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?`include`:`same-origin`});fetch(a).then((t=>{if(t.status===200||t.status===0){if(t.status===0&&console.warn(`THREE.FileLoader: HTTP Status 0 received.`),typeof ReadableStream>`u`||t.body.getReader===void 0)return t;let n=op[e],r=t.body.getReader(),i=t.headers.get(`Content-Length`),a=i?parseInt(i):0,o=a!==0,s=0,c=new ReadableStream({start(e){t();function t(){r.read().then((({done:r,value:i})=>{if(r)e.close();else{s+=i.byteLength;let r=new ProgressEvent(`progress`,{lengthComputable:o,loaded:s,total:a});for(let e=0,t=n.length;e<t;e++){let t=n[e];t.onProgress&&t.onProgress(r)}e.enqueue(i),t()}}))}}});return new Response(c)}throw Error(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`)})).then((e=>{switch(this.responseType){case`arraybuffer`:return e.arrayBuffer();case`blob`:return e.blob();case`document`:return e.text().then((e=>new DOMParser().parseFromString(e,this.mimeType)));case`json`:return e.json();default:return e.text()}})).then((t=>{np.add(e,t);let n=op[e];delete op[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onLoad&&r.onLoad(t)}})).catch((t=>{let n=op[e];if(n===void 0)throw this.manager.itemError(e),t;delete op[e];for(let e=0,r=n.length;e<r;e++){let r=n[e];r.onError&&r.onError(t)}this.manager.itemError(e)})).finally((()=>{this.manager.itemEnd(e)})),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}},cp=class extends ap{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=np.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout((function(){t&&t(a),i.manager.itemEnd(e)}),0),a;let o=at(`img`);function s(){l(),np.add(e,this),t&&t(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.substr(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),i.manager.itemStart(e),o.src=e,o}},lp=class extends ap{constructor(e){super(e)}load(e,t,n,r){let i=new Nl,a=new cp(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function s(n){a.load(e[n],(function(e){i.images[n]=e,o++,o===6&&(i.needsUpdate=!0,t&&t(i))}),void 0,r)}for(let t=0;t<e.length;++t)s(t);return i}},up=class extends ap{constructor(e){super(e)}load(e,t,n,r){let i=new Es,a=new cp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,(function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)}),n,r),i}},dp=class extends K{constructor(e,t=1){super(),this.type=`Light`,this.color=new q(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},dp.prototype.isLight=!0,fp=class extends dp{constructor(e,t,n){super(e,n),this.type=`HemisphereLight`,this.position.copy(K.DefaultUp),this.updateMatrix(),this.groundColor=new q(t)}copy(e){return dp.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}},fp.prototype.isHemisphereLight=!0,pp=new G,mp=new W,hp=new W,gp=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new H(512,512),this.map=null,this.mapPass=null,this.matrix=new G,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vl,this._frameExtents=new H(1,1),this._viewportCount=1,this._viewports=[new U(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(mp),hp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hp),t.updateMatrixWorld(),pp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pp),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(t.projectionMatrix),n.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},_p=class extends gp{constructor(){super(new kl(50,1,.5,500)),this.focus=1}updateMatrices(e){let t=this.camera,n=2*xs*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,i=e.distance||t.far;(n!==t.fov||r!==t.aspect||i!==t.far)&&(t.fov=n,t.aspect=r,t.far=i,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},_p.prototype.isSpotLightShadow=!0,vp=class extends dp{constructor(e,t,n=0,r=Math.PI/3,i=0,a=1){super(e,t),this.type=`SpotLight`,this.position.copy(K.DefaultUp),this.updateMatrix(),this.target=new K,this.distance=n,this.angle=r,this.penumbra=i,this.decay=a,this.shadow=new _p}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},vp.prototype.isSpotLight=!0,yp=new G,bp=new W,xp=new W,Sp=class extends gp{constructor(){super(new kl(90,1,.5,500)),this._frameExtents=new H(4,2),this._viewportCount=6,this._viewports=[new U(2,1,1,1),new U(0,1,1,1),new U(3,1,1,1),new U(1,1,1,1),new U(3,0,1,1),new U(1,0,1,1)],this._cubeDirections=[new W(1,0,0),new W(-1,0,0),new W(0,0,1),new W(0,0,-1),new W(0,1,0),new W(0,-1,0)],this._cubeUps=[new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,1,0),new W(0,0,1),new W(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),bp.setFromMatrixPosition(e.matrixWorld),n.position.copy(bp),xp.copy(n.position),xp.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xp),n.updateMatrixWorld(),r.makeTranslation(-bp.x,-bp.y,-bp.z),yp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yp)}},Sp.prototype.isPointLightShadow=!0,Cp=class extends dp{constructor(e,t,n=0,r=1){super(e,t),this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Sp}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Cp.prototype.isPointLight=!0,wp=class extends gp{constructor(){super(new Wl(-5,5,5,-5,.5,500))}},wp.prototype.isDirectionalLightShadow=!0,Tp=class extends dp{constructor(e,t){super(e,t),this.type=`DirectionalLight`,this.position.copy(K.DefaultUp),this.updateMatrix(),this.target=new K,this.shadow=new wp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Tp.prototype.isDirectionalLight=!0,Ep=class extends dp{constructor(e,t){super(e,t),this.type=`AmbientLight`}},Ep.prototype.isAmbientLight=!0,Dp=class extends dp{constructor(e,t,n=10,r=10){super(e,t),this.type=`RectAreaLight`,this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){let t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}},Dp.prototype.isRectAreaLight=!0,Op=class{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new W)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){let n=e.x,r=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*i),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],n*r*1.092548),t.addScaledVector(a[5],r*i*1.092548),t.addScaledVector(a[6],.315392*(3*i*i-1)),t.addScaledVector(a[7],n*i*1.092548),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){let n=e.x,r=e.y,i=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],1.023328*r),t.addScaledVector(a[2],1.023328*i),t.addScaledVector(a[3],1.023328*n),t.addScaledVector(a[4],.858086*n*r),t.addScaledVector(a[5],.858086*r*i),t.addScaledVector(a[6],.743125*i*i-.247708),t.addScaledVector(a[7],.858086*n*i),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+3*r);return this}toArray(e=[],t=0){let n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+3*r);return e}static getBasisAt(e,t){let n=e.x,r=e.y,i=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*i,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*i,t[6]=.315392*(3*i*i-1),t[7]=1.092548*n*i,t[8]=.546274*(n*n-r*r)}},Op.prototype.isSphericalHarmonics3=!0,kp=class extends dp{constructor(e=new Op,t=1){super(void 0,t),this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){let t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}},kp.prototype.isLightProbe=!0,Ap=class{static decodeText(e){if(typeof TextDecoder<`u`)return new TextDecoder().decode(e);let t=``;for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf(`/`);return t===-1?`./`:e.substr(0,t+1)}static resolveURL(e,t){return typeof e!=`string`||e===``?``:(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,`$1`)),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},jp=class extends X{constructor(){super(),this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){let e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},jp.prototype.isInstancedBufferGeometry=!0,Mp=class extends ap{constructor(e){super(e),typeof createImageBitmap>`u`&&console.warn(`THREE.ImageBitmapLoader: createImageBitmap() not supported.`),typeof fetch>`u`&&console.warn(`THREE.ImageBitmapLoader: fetch() not supported.`),this.options={premultiplyAlpha:`none`}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=``),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=np.get(e);if(a!==void 0)return i.manager.itemStart(e),setTimeout((function(){t&&t(a),i.manager.itemEnd(e)}),0),a;let o={};o.credentials=this.crossOrigin===`anonymous`?`same-origin`:`include`,o.headers=this.requestHeader,fetch(e,o).then((function(e){return e.blob()})).then((function(e){return createImageBitmap(e,Object.assign(i.options,{colorSpaceConversion:`none`}))})).then((function(n){np.add(e,n),t&&t(n),i.manager.itemEnd(e)})).catch((function(t){r&&r(t),i.manager.itemError(e),i.manager.itemEnd(e)})),i.manager.itemStart(e)}},Mp.prototype.isImageBitmapLoader=!0,Pp={getContext:function(){return Np===void 0&&(Np=new(o.AudioContext||o.webkitAudioContext)),Np},setContext:function(e){Np=e}},Fp=class extends ap{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new sp(this.manager);a.setResponseType(`arraybuffer`),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,(function(n){try{let e=n.slice(0);Pp.getContext().decodeAudioData(e,(function(e){t(e)}))}catch(t){r?r(t):console.error(t),i.manager.itemError(e)}}),n,r)}},Ip=class extends kp{constructor(e,t,n=1){super(void 0,n);let r=new q().set(e),i=new q().set(t),a=new W(r.r,r.g,r.b),o=new W(i.r,i.g,i.b),s=Math.sqrt(Math.PI),c=s*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(s),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}},Ip.prototype.isHemisphereLightProbe=!0,Lp=class extends kp{constructor(e,t=1){super(void 0,t);let n=new q().set(e);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}},Lp.prototype.isAmbientLightProbe=!0,new G,new G,new G,new W,new As,new W,new W,Rp=class extends K{constructor(e){super(),this.type=`Audio`,this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType=`empty`,this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType=`audioNode`,this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType=`mediaNode`,this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType=`mediaStreamNode`,this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType=`buffer`,this.autoplay&&this.play(),this}play(e=0){if(!0===this.isPlaying){console.warn(`THREE.Audio: Audio is already playing.`);return}if(!1===this.hasPlaybackControl){console.warn(`THREE.Audio: this Audio has no playback control.`);return}this._startedAt=this.context.currentTime+e;let t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(!1!==this.hasPlaybackControl)return!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress%=this.duration||this.buffer.duration),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this;console.warn(`THREE.Audio: this Audio has no playback control.`)}stop(){if(!1!==this.hasPlaybackControl)return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this;console.warn(`THREE.Audio: this Audio has no playback control.`)}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||=[],!0===this._connected?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(!1!==this.hasPlaybackControl)return this.playbackRate=e,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this;console.warn(`THREE.Audio: this Audio has no playback control.`)}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return!1===this.hasPlaybackControl?(console.warn(`THREE.Audio: this Audio has no playback control.`),!1):this.loop}setLoop(e){if(!1!==this.hasPlaybackControl)return this.loop=e,!0===this.isPlaying&&(this.source.loop=this.loop),this;console.warn(`THREE.Audio: this Audio has no playback control.`)}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}},new W,new As,new W,new W,zp=class{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0,t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}},Bp=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,i,a;switch(t){case`quaternion`:r=this._slerp,i=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(6*n),this._workIndex=5;break;case`string`:case`bool`:r=this._select,i=this._select,a=this._setAdditiveIdentityOther,this.buffer=Array(5*n);break;default:r=this._lerp,i=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*n)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=i,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,r=this.valueSize,i=e*r+r,a=this.cumulativeWeight;if(a===0){for(let e=0;e!==r;++e)n[i+e]=n[e];a=t}else{a+=t;let e=t/a;this._mixBufferRegion(n,i,0,e,r)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,r=e*t+t,i=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,i<1){let e=t*this._origIndex;this._mixBufferRegion(n,r,e,1-i,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let e=t,i=t+t;e!==i;++e)if(n[e]!==n[e+t]){o.setValue(n,r);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let e=n,i=r;e!==i;++e)t[e]=t[r+e%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=3*this.valueSize;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,i){if(r>=.5)for(let r=0;r!==i;++r)e[t+r]=e[n+r]}_slerp(e,t,n,r){As.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,i){let a=this._workIndex*i;As.multiplyQuaternionsFlat(e,a,e,t,e,n),As.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,i){let a=1-r;for(let o=0;o!==i;++o){let i=t+o;e[i]=e[i]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,i){for(let a=0;a!==i;++a){let i=t+a;e[i]=e[i]+e[n+a]*r}}},Vp=`\\[\\]\\.:\\/`,Hp=RegExp(`[`+Vp+`]`,`g`),Up=`[^`+Vp+`]`,Wp=`[^`+Vp.replace(`\\.`,``)+`]`,Gp=`((?:WC+[\\/:])*)`.replace(`WC`,Up),Kp=`(WCOD+)?`.replace(`WCOD`,Wp),qp=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Up),Jp=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Up),Yp=RegExp(`^`+Gp+Kp+qp+Jp+`$`),Xp=[`material`,`materials`,`bones`],Zp=class{constructor(e,t,n){let r=n||$.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},$=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Hp,``)}static parseTrackName(e){let t=Yp.exec(e);if(!t)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Xp.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(!t||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error(`THREE.PropertyBinding: Trying to update node for track: `+this.path+` but it wasn't found.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.isBufferGeometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}},$.Composite=Zp,$.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},$.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},$.prototype.GetterByBindingType=[$.prototype._getValue_direct,$.prototype._getValue_array,$.prototype._getValue_arrayElement,$.prototype._getValue_toArray],$.prototype.SetterByBindingTypeAndVersioning=[[$.prototype._setValue_direct,$.prototype._setValue_direct_setNeedsUpdate,$.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$.prototype._setValue_array,$.prototype._setValue_array_setNeedsUpdate,$.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$.prototype._setValue_arrayElement,$.prototype._setValue_arrayElement_setNeedsUpdate,$.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$.prototype._setValue_fromArray,$.prototype._setValue_fromArray_setNeedsUpdate,$.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],Qp=class{constructor(){this.uuid=Re(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;let e={};this._indicesByUUID=e;for(let t=0,n=arguments.length;t!==n;++t)e[arguments[t].uuid]=t;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};let t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){let e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,i=this._bindings,a=i.length,o,s=e.length,c=this.nCachedObjects_;for(let l=0,u=arguments.length;l!==u;++l){let u=arguments[l],d=u.uuid,f=t[d];if(f===void 0){f=s++,t[d]=f,e.push(u);for(let e=0,t=a;e!==t;++e)i[e].push(new $(u,n[e],r[e]))}else if(f<c){o=e[f];let s=--c,l=e[s];t[l.uuid]=f,e[f]=l,t[d]=s,e[s]=u;for(let e=0,t=a;e!==t;++e){let t=i[e],a=t[s],o=t[f];t[f]=a,o===void 0&&(o=new $(u,n[e],r[e])),t[s]=o}}else e[f]!==o&&console.error(`THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.`)}this.nCachedObjects_=c}remove(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,i=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){let o=arguments[a],s=o.uuid,c=t[s];if(c!==void 0&&c>=i){let a=i++,l=e[a];t[l.uuid]=c,e[c]=l,t[s]=a,e[a]=o;for(let e=0,t=r;e!==t;++e){let t=n[e],r=t[a],i=t[c];t[c]=r,t[a]=i}}}this.nCachedObjects_=i}uncache(){let e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length,i=this.nCachedObjects_,a=e.length;for(let o=0,s=arguments.length;o!==s;++o){let s=arguments[o].uuid,c=t[s];if(c!==void 0)if(delete t[s],c<i){let o=--i,s=e[o],l=--a,u=e[l];t[s.uuid]=c,e[c]=s,t[u.uuid]=o,e[o]=u,e.pop();for(let e=0,t=r;e!==t;++e){let t=n[e],r=t[o],i=t[l];t[c]=r,t[o]=i,t.pop()}}else{let i=--a,o=e[i];i>0&&(t[o.uuid]=c),e[c]=o,e.pop();for(let e=0,t=r;e!==t;++e){let t=n[e];t[c]=t[i],t.pop()}}}this.nCachedObjects_=i}subscribe_(e,t){let n=this._bindingsIndicesByPath,r=n[e],i=this._bindings;if(r!==void 0)return i[r];let a=this._paths,o=this._parsedPaths,s=this._objects,c=s.length,l=this.nCachedObjects_,u=Array(c);r=i.length,n[e]=r,a.push(e),o.push(t),i.push(u);for(let n=l,r=s.length;n!==r;++n){let r=s[n];u[n]=new $(r,e,t)}return u}unsubscribe_(e){let t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){let r=this._paths,i=this._parsedPaths,a=this._bindings,o=a.length-1,s=a[o],c=e[o];t[c]=n,a[n]=s,a.pop(),i[n]=i[o],i.pop(),r[n]=r[o],r.pop()}}},Qp.prototype.isAnimationObjectGroup=!0,$p=class{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;let i=t.tracks,a=i.length,o=Array(a),s={endingStart:es,endingEnd:es};for(let e=0;e!==a;++e){let t=i[e].createInterpolant(null);o[e]=t,t.settings=s}this._interpolantSettings=s,this._interpolants=o,this._propertyBindings=Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Yo,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let n=this._clip.duration,r=e._clip.duration,i=r/n,a=n/r;e.warp(1,i,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let r=this._mixer,i=r.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);let s=o.parameterPositions,c=o.sampleValues;return s[0]=i,s[1]=i+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}let i=this._startTime;if(i!==null){let r=(e-i)*n;if(r<0||n===0)return;this._startTime=null,t=n*r}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let e=this._interpolants,t=this._propertyBindings;switch(this.blendMode){case is:for(let n=0,r=e.length;n!==r;++n)e[n].evaluate(a),t[n].accumulateAdditive(o);break;case rs:default:for(let n=0,i=e.length;n!==i;++n)e[n].evaluate(a),t[n].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,r=this.time+e,i=this._loopCount,a=n===Xo;if(e===0)return i===-1?r:a&&(1&i)==1?t-r:r;if(n===Jo){i===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else{if(!(r<0)){this.time=r;break e}r=0}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e<0?-1:1})}}else{if(i===-1&&(e>=0?(i=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){let n=Math.floor(r/t);r-=t*n,i+=Math.abs(n);let o=this.repetitions-i;if(o<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:`finished`,action:this,direction:e>0?1:-1});else{if(o===1){let t=e<0;this._setEndings(t,!t,a)}else this._setEndings(!1,!1,a);this._loopCount=i,this.time=r,this._mixer.dispatchEvent({type:`loop`,action:this,loopDelta:n})}}else this.time=r;if(a&&(1&i)==1)return t-r}return r}_setEndings(e,t,n){let r=this._interpolantSettings;n?(r.endingStart=ts,r.endingEnd=ts):(r.endingStart=e?this.zeroSlopeAtStart?ts:es:ns,r.endingEnd=t?this.zeroSlopeAtEnd?ts:es:ns)}_scheduleFading(e,t,n){let r=this._mixer,i=r.time,a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,s=a.sampleValues;return o[0]=i,s[0]=t,o[1]=i+e,s[1]=n,this}},em=class extends _s{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,r=e._clip.tracks,i=r.length,a=e._propertyBindings,o=e._interpolants,s=n.uuid,c=this._bindingsByRootAndName,l=c[s];l===void 0&&(l={},c[s]=l);for(let e=0;e!==i;++e){let i=r[e],c=i.name,u=l[c];if(u!==void 0)a[e]=u;else{if(u=a[e],u!==void 0){u._cacheIndex===null&&(++u.referenceCount,this._addInactiveBinding(u,s,c));continue}let r=t&&t._propertyBindings[e].binding.parsedPath;u=new Bp($.create(n,c,r),i.ValueTypeName,i.getValueSize()),++u.referenceCount,this._addInactiveBinding(u,s,c),a[e]=u}o[e].resultBuffer=u.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let t=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,t)}let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];n.useCount++===0&&(this._lendBinding(n),n.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.useCount===0&&(n.restoreOriginalState(),this._takeBackBinding(n))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let r=this._actions,i=this._actionsByClip,a=i[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,i[t]=a;else{let t=a.knownActions;e._byClipCacheIndex=t.length,t.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;let i=e._clip.uuid,a=this._actionsByClip,o=a[i],s=o.knownActions,c=s[s.length-1],l=e._byClipCacheIndex;c._byClipCacheIndex=l,s[l]=c,s.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],s.length===0&&delete a[i],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let e=0,n=t.length;e!==n;++e){let n=t[e];--n.referenceCount===0&&this._removeInactiveBinding(n)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_addInactiveBinding(e,t,n){let r=this._bindingsByRootAndName,i=this._bindings,a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=i.length,i.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,r=n.rootNode.uuid,i=n.path,a=this._bindingsByRootAndName,o=a[r],s=t[t.length-1],c=e._cacheIndex;s._cacheIndex=c,t[c]=s,t.pop(),delete o[i],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,i=t[r];e._cacheIndex=r,t[r]=e,i._cacheIndex=n,t[n]=i}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Gf(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,i=t[r];e.__cacheIndex=r,t[r]=e,i.__cacheIndex=n,t[n]=i}clipAction(e,t,n){let r=t||this._root,i=r.uuid,a=typeof e==`string`?tp.findByName(r,e):e,o=a===null?e:a.uuid,s=this._actionsByClip[o],c=null;if(n===void 0&&(n=a===null?rs:a.blendMode),s!==void 0){let e=s.actionByRoot[i];if(e!==void 0&&e.blendMode===n)return e;c=s.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;let l=new $p(this,a,t,n);return this._bindAction(l,c),this._addInactiveAction(l,o,i),l}existingAction(e,t){let n=t||this._root,r=n.uuid,i=typeof e==`string`?tp.findByName(n,e):e,a=i?i.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,r=this.time+=e,i=Math.sign(e),a=this._accuIndex^=1;for(let o=0;o!==n;++o)t[o]._update(r,e,i,a);let o=this._bindings,s=this._nActiveBindings;for(let e=0;e!==s;++e)o[e].apply(a);return this}setTime(e){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,r=this._actionsByClip,i=r[n];if(i!==void 0){let e=i.knownActions;for(let n=0,r=e.length;n!==r;++n){let r=e[n];this._deactivateAction(r);let i=r._cacheIndex,a=t[t.length-1];r._cacheIndex=null,r._byClipCacheIndex=null,a._cacheIndex=i,t[i]=a,t.pop(),this._removeInactiveBindingsForAction(r)}delete r[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let e in n){let r=n[e].actionByRoot[t];r!==void 0&&(this._deactivateAction(r),this._removeInactiveAction(r))}let r=this._bindingsByRootAndName[t];if(r!==void 0)for(let e in r){let t=r[e];t.restoreOriginalState(),this._removeInactiveBinding(t)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},em.prototype._controlInterpolantsResultBuffer=new Float32Array(1),tm=class e{constructor(e){typeof e==`string`&&(console.warn(`THREE.Uniform: Type parameter is no longer needed.`),e=arguments[1]),this.value=e}clone(){return new e(this.value.clone===void 0?this.value:this.value.clone())}},nm=class extends Uu{constructor(e,t,n=1){super(e,t),this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){let t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){let t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}},nm.prototype.isInstancedInterleavedBuffer=!0,rm=class{constructor(e,t,n,r,i){this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=i,this.version=0}set needsUpdate(e){!0===e&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}},rm.prototype.isGLBufferAttribute=!0,im=new H,am=class{constructor(e=new H(1/0,1/0),t=new H(-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=im.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return im.copy(e).clamp(this.min,this.max).sub(e).length()}intersect(e){return this.min.max(e.min),this.max.min(e.max),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},am.prototype.isBox2=!0,om=new W,sm=new W,cm=class{constructor(e=new W,t=new W){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){om.subVectors(e,this.start),sm.subVectors(this.end,this.start);let n=sm.dot(sm),r=sm.dot(om)/n;return t&&(r=ze(r,0,1)),r}closestPointToPoint(e,t,n){let r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}},new W,lm=new W,um=new G,dm=new G,fm=class extends Ad{constructor(e){let t=Ci(e),n=new X,r=[],i=[],a=new q(0,0,1),o=new q(0,1,0);for(let e=0;e<t.length;e++){let n=t[e];n.parent&&n.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),i.push(a.r,a.g,a.b),i.push(o.r,o.g,o.b))}n.setAttribute(`position`,new Y(r,3)),n.setAttribute(`color`,new Y(i,3));let s=new xd({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,s),this.type=`SkeletonHelper`,this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){let t=this.bones,n=this.geometry,r=n.getAttribute(`position`);dm.copy(this.root.matrixWorld).invert();for(let e=0,n=0;e<t.length;e++){let i=t[e];i.parent&&i.parent.isBone&&(um.multiplyMatrices(dm,i.matrixWorld),lm.setFromMatrixPosition(um),r.setXYZ(n,lm.x,lm.y,lm.z),um.multiplyMatrices(dm,i.parent.matrixWorld),lm.setFromMatrixPosition(um),r.setXYZ(n+1,lm.x,lm.y,lm.z),n+=2)}n.getAttribute(`position`).needsUpdate=!0,super.updateMatrixWorld(e)}},new W,new q,new q,pm=class extends Ad{constructor(e=10,t=10,n=4473924,r=8947848){n=new q(n),r=new q(r);let i=t/2,a=e/t,o=e/2,s=[],c=[];for(let e=0,l=0,u=-o;e<=t;e++,u+=a){s.push(-o,0,u,o,0,u),s.push(u,0,-o,u,0,o);let t=e===i?n:r;t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3,t.toArray(c,l),l+=3}let l=new X;l.setAttribute(`position`,new Y(s,3)),l.setAttribute(`color`,new Y(c,3));let u=new xd({vertexColors:!0,toneMapped:!1});super(l,u),this.type=`GridHelper`}},new W,new W,new W,new W,new Ol,new Ns,new W,mm=new Float32Array(1),new Int32Array(mm.buffer),Qd.create=function(e,t){return console.log(`THREE.Curve.create() has been deprecated`),e.prototype=Object.create(Qd.prototype),e.prototype.constructor=e,e.prototype.getPoint=t,e},gf.prototype.fromPoints=function(e){return console.warn(`THREE.Path: .fromPoints() has been renamed to .setFromPoints().`),this.setFromPoints(e)},pm.prototype.setColors=function(){console.error(`THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.`)},fm.prototype.update=function(){console.error(`THREE.SkeletonHelper: update() no longer needs to be called.`)},ap.prototype.extractUrlBase=function(e){return console.warn(`THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.`),Ap.extractUrlBase(e)},ap.Handlers={add:function(){console.error(`THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.`)},get:function(){console.error(`THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.`)}},am.prototype.center=function(e){return console.warn(`THREE.Box2: .center() has been renamed to .getCenter().`),this.getCenter(e)},am.prototype.empty=function(){return console.warn(`THREE.Box2: .empty() has been renamed to .isEmpty().`),this.isEmpty()},am.prototype.isIntersectionBox=function(e){return console.warn(`THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().`),this.intersectsBox(e)},am.prototype.size=function(e){return console.warn(`THREE.Box2: .size() has been renamed to .getSize().`),this.getSize(e)},Ns.prototype.center=function(e){return console.warn(`THREE.Box3: .center() has been renamed to .getCenter().`),this.getCenter(e)},Ns.prototype.empty=function(){return console.warn(`THREE.Box3: .empty() has been renamed to .isEmpty().`),this.isEmpty()},Ns.prototype.isIntersectionBox=function(e){return console.warn(`THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().`),this.intersectsBox(e)},Ns.prototype.isIntersectionSphere=function(e){return console.warn(`THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().`),this.intersectsSphere(e)},Ns.prototype.size=function(e){return console.warn(`THREE.Box3: .size() has been renamed to .getSize().`),this.getSize(e)},Zs.prototype.empty=function(){return console.warn(`THREE.Sphere: .empty() has been renamed to .isEmpty().`),this.isEmpty()},Vl.prototype.setFromMatrix=function(e){return console.warn(`THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().`),this.setFromProjectionMatrix(e)},cm.prototype.center=function(e){return console.warn(`THREE.Line3: .center() has been renamed to .getCenter().`),this.getCenter(e)},Ss.prototype.flattenToArrayOffset=function(e,t){return console.warn(`THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.`),this.toArray(e,t)},Ss.prototype.multiplyVector3=function(e){return console.warn(`THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.`),e.applyMatrix3(this)},Ss.prototype.multiplyVector3Array=function(){console.error(`THREE.Matrix3: .multiplyVector3Array() has been removed.`)},Ss.prototype.applyToBufferAttribute=function(e){return console.warn(`THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.`),e.applyMatrix3(this)},Ss.prototype.applyToVector3Array=function(){console.error(`THREE.Matrix3: .applyToVector3Array() has been removed.`)},Ss.prototype.getInverse=function(e){return console.warn(`THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.`),this.copy(e).invert()},G.prototype.extractPosition=function(e){return console.warn(`THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().`),this.copyPosition(e)},G.prototype.flattenToArrayOffset=function(e,t){return console.warn(`THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.`),this.toArray(e,t)},G.prototype.getPosition=function(){return console.warn(`THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.`),new W().setFromMatrixColumn(this,3)},G.prototype.setRotationFromQuaternion=function(e){return console.warn(`THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().`),this.makeRotationFromQuaternion(e)},G.prototype.multiplyToArray=function(){console.warn(`THREE.Matrix4: .multiplyToArray() has been removed.`)},G.prototype.multiplyVector3=function(e){return console.warn(`THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.`),e.applyMatrix4(this)},G.prototype.multiplyVector4=function(e){return console.warn(`THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.`),e.applyMatrix4(this)},G.prototype.multiplyVector3Array=function(){console.error(`THREE.Matrix4: .multiplyVector3Array() has been removed.`)},G.prototype.rotateAxis=function(e){console.warn(`THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.`),e.transformDirection(this)},G.prototype.crossVector=function(e){return console.warn(`THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.`),e.applyMatrix4(this)},G.prototype.translate=function(){console.error(`THREE.Matrix4: .translate() has been removed.`)},G.prototype.rotateX=function(){console.error(`THREE.Matrix4: .rotateX() has been removed.`)},G.prototype.rotateY=function(){console.error(`THREE.Matrix4: .rotateY() has been removed.`)},G.prototype.rotateZ=function(){console.error(`THREE.Matrix4: .rotateZ() has been removed.`)},G.prototype.rotateByAxis=function(){console.error(`THREE.Matrix4: .rotateByAxis() has been removed.`)},G.prototype.applyToBufferAttribute=function(e){return console.warn(`THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.`),e.applyMatrix4(this)},G.prototype.applyToVector3Array=function(){console.error(`THREE.Matrix4: .applyToVector3Array() has been removed.`)},G.prototype.makeFrustum=function(e,t,n,r,i,a){return console.warn(`THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.`),this.makePerspective(e,t,r,n,i,a)},G.prototype.getInverse=function(e){return console.warn(`THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead.`),this.copy(e).invert()},Rl.prototype.isIntersectionLine=function(e){return console.warn(`THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().`),this.intersectsLine(e)},As.prototype.multiplyVector3=function(e){return console.warn(`THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.`),e.applyQuaternion(this)},As.prototype.inverse=function(){return console.warn(`THREE.Quaternion: .inverse() has been renamed to invert().`),this.invert()},ac.prototype.isIntersectionBox=function(e){return console.warn(`THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().`),this.intersectsBox(e)},ac.prototype.isIntersectionPlane=function(e){return console.warn(`THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().`),this.intersectsPlane(e)},ac.prototype.isIntersectionSphere=function(e){return console.warn(`THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().`),this.intersectsSphere(e)},Bc.prototype.area=function(){return console.warn(`THREE.Triangle: .area() has been renamed to .getArea().`),this.getArea()},Bc.prototype.barycoordFromPoint=function(e,t){return console.warn(`THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().`),this.getBarycoord(e,t)},Bc.prototype.midpoint=function(e){return console.warn(`THREE.Triangle: .midpoint() has been renamed to .getMidpoint().`),this.getMidpoint(e)},Bc.prototypenormal=function(e){return console.warn(`THREE.Triangle: .normal() has been renamed to .getNormal().`),this.getNormal(e)},Bc.prototype.plane=function(e){return console.warn(`THREE.Triangle: .plane() has been renamed to .getPlane().`),this.getPlane(e)},Bc.barycoordFromPoint=function(e,t,n,r,i){return console.warn(`THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().`),Bc.getBarycoord(e,t,n,r,i)},Bc.normal=function(e,t,n,r){return console.warn(`THREE.Triangle: .normal() has been renamed to .getNormal().`),Bc.getNormal(e,t,n,r)},_f.prototype.extractAllPoints=function(e){return console.warn(`THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.`),this.extractPoints(e)},_f.prototype.extrude=function(e){return console.warn(`THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.`),new bf(this,e)},_f.prototype.makeGeometry=function(e){return console.warn(`THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.`),new Ef(this,e)},H.prototype.fromAttribute=function(e,t,n){return console.warn(`THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().`),this.fromBufferAttribute(e,t,n)},H.prototype.distanceToManhattan=function(e){return console.warn(`THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().`),this.manhattanDistanceTo(e)},H.prototype.lengthManhattan=function(){return console.warn(`THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().`),this.manhattanLength()},W.prototype.setEulerFromRotationMatrix=function(){console.error(`THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.`)},W.prototype.setEulerFromQuaternion=function(){console.error(`THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.`)},W.prototype.getPositionFromMatrix=function(e){return console.warn(`THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().`),this.setFromMatrixPosition(e)},W.prototype.getScaleFromMatrix=function(e){return console.warn(`THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().`),this.setFromMatrixScale(e)},W.prototype.getColumnFromMatrix=function(e,t){return console.warn(`THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().`),this.setFromMatrixColumn(t,e)},W.prototype.applyProjection=function(e){return console.warn(`THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.`),this.applyMatrix4(e)},W.prototype.fromAttribute=function(e,t,n){return console.warn(`THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().`),this.fromBufferAttribute(e,t,n)},W.prototype.distanceToManhattan=function(e){return console.warn(`THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().`),this.manhattanDistanceTo(e)},W.prototype.lengthManhattan=function(){return console.warn(`THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().`),this.manhattanLength()},U.prototype.fromAttribute=function(e,t,n){return console.warn(`THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().`),this.fromBufferAttribute(e,t,n)},U.prototype.lengthManhattan=function(){return console.warn(`THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().`),this.manhattanLength()},K.prototype.getChildByName=function(e){return console.warn(`THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().`),this.getObjectByName(e)},K.prototype.renderDepth=function(){console.warn(`THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.`)},K.prototype.translate=function(e,t){return console.warn(`THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.`),this.translateOnAxis(t,e)},K.prototype.getWorldRotation=function(){console.error(`THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.`)},K.prototype.applyMatrix=function(e){return console.warn(`THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().`),this.applyMatrix4(e)},Object.defineProperties(K.prototype,{eulerOrder:{get:function(){return console.warn(`THREE.Object3D: .eulerOrder is now .rotation.order.`),this.rotation.order},set:function(e){console.warn(`THREE.Object3D: .eulerOrder is now .rotation.order.`),this.rotation.order=e}},useQuaternion:{get:function(){console.warn(`THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.`)},set:function(){console.warn(`THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.`)}}}),Sl.prototype.setDrawMode=function(){console.error(`THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.`)},Object.defineProperties(Sl.prototype,{drawMode:{get:function(){return console.error(`THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.`),as},set:function(){console.error(`THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.`)}}}),fd.prototype.initBones=function(){console.error(`THREE.SkinnedMesh: initBones() has been removed.`)},kl.prototype.setLens=function(e,t){console.warn(`THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.`),t!==void 0&&(this.filmGauge=t),this.setFocalLength(e)},Object.defineProperties(dp.prototype,{onlyShadow:{set:function(){console.warn(`THREE.Light: .onlyShadow has been removed.`)}},shadowCameraFov:{set:function(e){console.warn(`THREE.Light: .shadowCameraFov is now .shadow.camera.fov.`),this.shadow.camera.fov=e}},shadowCameraLeft:{set:function(e){console.warn(`THREE.Light: .shadowCameraLeft is now .shadow.camera.left.`),this.shadow.camera.left=e}},shadowCameraRight:{set:function(e){console.warn(`THREE.Light: .shadowCameraRight is now .shadow.camera.right.`),this.shadow.camera.right=e}},shadowCameraTop:{set:function(e){console.warn(`THREE.Light: .shadowCameraTop is now .shadow.camera.top.`),this.shadow.camera.top=e}},shadowCameraBottom:{set:function(e){console.warn(`THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.`),this.shadow.camera.bottom=e}},shadowCameraNear:{set:function(e){console.warn(`THREE.Light: .shadowCameraNear is now .shadow.camera.near.`),this.shadow.camera.near=e}},shadowCameraFar:{set:function(e){console.warn(`THREE.Light: .shadowCameraFar is now .shadow.camera.far.`),this.shadow.camera.far=e}},shadowCameraVisible:{set:function(){console.warn(`THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.`)}},shadowBias:{set:function(e){console.warn(`THREE.Light: .shadowBias is now .shadow.bias.`),this.shadow.bias=e}},shadowDarkness:{set:function(){console.warn(`THREE.Light: .shadowDarkness has been removed.`)}},shadowMapWidth:{set:function(e){console.warn(`THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.`),this.shadow.mapSize.width=e}},shadowMapHeight:{set:function(e){console.warn(`THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.`),this.shadow.mapSize.height=e}}}),Object.defineProperties(Jc.prototype,{length:{get:function(){return console.warn(`THREE.BufferAttribute: .length has been deprecated. Use .count instead.`),this.array.length}},dynamic:{get:function(){return console.warn(`THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.`),this.usage===hs},set:function(){console.warn(`THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.`),this.setUsage(hs)}}}),Jc.prototype.setDynamic=function(e){return console.warn(`THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.`),this.setUsage(!0===e?hs:ms),this},Jc.prototype.copyIndicesArray=function(){console.error(`THREE.BufferAttribute: .copyIndicesArray() has been removed.`)},Jc.prototype.setArray=function(){console.error(`THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers`)},X.prototype.addIndex=function(e){console.warn(`THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().`),this.setIndex(e)},X.prototype.addAttribute=function(e,t){return console.warn(`THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().`),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn(`THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).`),this.setAttribute(e,new Jc(arguments[1],arguments[2]))):e===`index`?(console.warn(`THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.`),this.setIndex(t),this):this.setAttribute(e,t)},X.prototype.addDrawCall=function(e,t,n){n!==void 0&&console.warn(`THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.`),console.warn(`THREE.BufferGeometry: .addDrawCall() is now .addGroup().`),this.addGroup(e,t)},X.prototype.clearDrawCalls=function(){console.warn(`THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().`),this.clearGroups()},X.prototype.computeOffsets=function(){console.warn(`THREE.BufferGeometry: .computeOffsets() has been removed.`)},X.prototype.removeAttribute=function(e){return console.warn(`THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().`),this.deleteAttribute(e)},X.prototype.applyMatrix=function(e){return console.warn(`THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().`),this.applyMatrix4(e)},Object.defineProperties(X.prototype,{drawcalls:{get:function(){return console.error(`THREE.BufferGeometry: .drawcalls has been renamed to .groups.`),this.groups}},offsets:{get:function(){return console.warn(`THREE.BufferGeometry: .offsets has been renamed to .groups.`),this.groups}}}),Uu.prototype.setDynamic=function(e){return console.warn(`THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.`),this.setUsage(!0===e?hs:ms),this},Uu.prototype.setArray=function(){console.error(`THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers`)},bf.prototype.getArrays=function(){console.error(`THREE.ExtrudeGeometry: .getArrays() has been removed.`)},bf.prototype.addShapeList=function(){console.error(`THREE.ExtrudeGeometry: .addShapeList() has been removed.`)},bf.prototype.addShape=function(){console.error(`THREE.ExtrudeGeometry: .addShape() has been removed.`)},Hu.prototype.dispose=function(){console.error(`THREE.Scene: .dispose() has been removed.`)},tm.prototype.onUpdate=function(){return console.warn(`THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.`),this},Object.defineProperties(Hc.prototype,{wrapAround:{get:function(){console.warn(`THREE.Material: .wrapAround has been removed.`)},set:function(){console.warn(`THREE.Material: .wrapAround has been removed.`)}},overdraw:{get:function(){console.warn(`THREE.Material: .overdraw has been removed.`)},set:function(){console.warn(`THREE.Material: .overdraw has been removed.`)}},wrapRGB:{get:function(){return console.warn(`THREE.Material: .wrapRGB has been removed.`),new q}},shading:{get:function(){console.error(`THREE.`+this.type+`: .shading has been removed. Use the boolean .flatShading instead.`)},set:function(e){console.warn(`THREE.`+this.type+`: .shading has been removed. Use the boolean .flatShading instead.`),this.flatShading=e===Pi}},stencilMask:{get:function(){return console.warn(`THREE.`+this.type+`: .stencilMask has been removed. Use .stencilFuncMask instead.`),this.stencilFuncMask},set:function(e){console.warn(`THREE.`+this.type+`: .stencilMask has been removed. Use .stencilFuncMask instead.`),this.stencilFuncMask=e}},vertexTangents:{get:function(){console.warn(`THREE.`+this.type+`: .vertexTangents has been removed.`)},set:function(){console.warn(`THREE.`+this.type+`: .vertexTangents has been removed.`)}}}),Object.defineProperties(Dl.prototype,{derivatives:{get:function(){return console.warn(`THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.`),this.extensions.derivatives},set:function(e){console.warn(`THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.`),this.extensions.derivatives=e}}}),V.prototype.clearTarget=function(e,t,n,r){console.warn(`THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.`),this.setRenderTarget(e),this.clear(t,n,r)},V.prototype.animate=function(e){console.warn(`THREE.WebGLRenderer: .animate() is now .setAnimationLoop().`),this.setAnimationLoop(e)},V.prototype.getCurrentRenderTarget=function(){return console.warn(`THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().`),this.getRenderTarget()},V.prototype.getMaxAnisotropy=function(){return console.warn(`THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().`),this.capabilities.getMaxAnisotropy()},V.prototype.getPrecision=function(){return console.warn(`THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.`),this.capabilities.precision},V.prototype.resetGLState=function(){return console.warn(`THREE.WebGLRenderer: .resetGLState() is now .state.reset().`),this.state.reset()},V.prototype.supportsFloatTextures=function(){return console.warn(`THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).`),this.extensions.get(`OES_texture_float`)},V.prototype.supportsHalfFloatTextures=function(){return console.warn(`THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).`),this.extensions.get(`OES_texture_half_float`)},V.prototype.supportsStandardDerivatives=function(){return console.warn(`THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).`),this.extensions.get(`OES_standard_derivatives`)},V.prototype.supportsCompressedTextureS3TC=function(){return console.warn(`THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).`),this.extensions.get(`WEBGL_compressed_texture_s3tc`)},V.prototype.supportsCompressedTexturePVRTC=function(){return console.warn(`THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).`),this.extensions.get(`WEBGL_compressed_texture_pvrtc`)},V.prototype.supportsBlendMinMax=function(){return console.warn(`THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).`),this.extensions.get(`EXT_blend_minmax`)},V.prototype.supportsVertexTextures=function(){return console.warn(`THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.`),this.capabilities.vertexTextures},V.prototype.supportsInstancedArrays=function(){return console.warn(`THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).`),this.extensions.get(`ANGLE_instanced_arrays`)},V.prototype.enableScissorTest=function(e){console.warn(`THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().`),this.setScissorTest(e)},V.prototype.initMaterial=function(){console.warn(`THREE.WebGLRenderer: .initMaterial() has been removed.`)},V.prototype.addPrePlugin=function(){console.warn(`THREE.WebGLRenderer: .addPrePlugin() has been removed.`)},V.prototype.addPostPlugin=function(){console.warn(`THREE.WebGLRenderer: .addPostPlugin() has been removed.`)},V.prototype.updateShadowMap=function(){console.warn(`THREE.WebGLRenderer: .updateShadowMap() has been removed.`)},V.prototype.setFaceCulling=function(){console.warn(`THREE.WebGLRenderer: .setFaceCulling() has been removed.`)},V.prototype.allocTextureUnit=function(){console.warn(`THREE.WebGLRenderer: .allocTextureUnit() has been removed.`)},V.prototype.setTexture=function(){console.warn(`THREE.WebGLRenderer: .setTexture() has been removed.`)},V.prototype.setTexture2D=function(){console.warn(`THREE.WebGLRenderer: .setTexture2D() has been removed.`)},V.prototype.setTextureCube=function(){console.warn(`THREE.WebGLRenderer: .setTextureCube() has been removed.`)},V.prototype.getActiveMipMapLevel=function(){return console.warn(`THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().`),this.getActiveMipmapLevel()},Object.defineProperties(V.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(e){console.warn(`THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.`),this.shadowMap.enabled=e}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(e){console.warn(`THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.`),this.shadowMap.type=e}},shadowMapCullFace:{get:function(){console.warn(`THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.`)},set:function(){console.warn(`THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.`)}},context:{get:function(){return console.warn(`THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.`),this.getContext()}},vr:{get:function(){return console.warn(`THREE.WebGLRenderer: .vr has been renamed to .xr`),this.xr}},gammaInput:{get:function(){return console.warn(`THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.`),!1},set:function(){console.warn(`THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.`)}},gammaOutput:{get:function(){return console.warn(`THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.`),!1},set:function(e){console.warn(`THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.`),this.outputEncoding=!0===e?ss:os}},toneMappingWhitePoint:{get:function(){return console.warn(`THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.`),1},set:function(){console.warn(`THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.`)}},gammaFactor:{get:function(){return console.warn(`THREE.WebGLRenderer: .gammaFactor has been removed.`),2},set:function(){console.warn(`THREE.WebGLRenderer: .gammaFactor has been removed.`)}}}),Object.defineProperties(br.prototype,{cullFace:{get:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.`)},set:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.`)}},renderReverseSided:{get:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.`)},set:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.`)}},renderSingleSided:{get:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.`)},set:function(){console.warn(`THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.`)}}}),Object.defineProperties(Ds.prototype,{wrapS:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.`),this.texture.wrapS},set:function(e){console.warn(`THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.`),this.texture.wrapS=e}},wrapT:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.`),this.texture.wrapT},set:function(e){console.warn(`THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.`),this.texture.wrapT=e}},magFilter:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.`),this.texture.magFilter},set:function(e){console.warn(`THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.`),this.texture.magFilter=e}},minFilter:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.`),this.texture.minFilter},set:function(e){console.warn(`THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.`),this.texture.minFilter=e}},anisotropy:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.`),this.texture.anisotropy},set:function(e){console.warn(`THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.`),this.texture.anisotropy=e}},offset:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .offset is now .texture.offset.`),this.texture.offset},set:function(e){console.warn(`THREE.WebGLRenderTarget: .offset is now .texture.offset.`),this.texture.offset=e}},repeat:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .repeat is now .texture.repeat.`),this.texture.repeat},set:function(e){console.warn(`THREE.WebGLRenderTarget: .repeat is now .texture.repeat.`),this.texture.repeat=e}},format:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .format is now .texture.format.`),this.texture.format},set:function(e){console.warn(`THREE.WebGLRenderTarget: .format is now .texture.format.`),this.texture.format=e}},type:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .type is now .texture.type.`),this.texture.type},set:function(e){console.warn(`THREE.WebGLRenderTarget: .type is now .texture.type.`),this.texture.type=e}},generateMipmaps:{get:function(){return console.warn(`THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.`),this.texture.generateMipmaps},set:function(e){console.warn(`THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.`),this.texture.generateMipmaps=e}}}),Rp.prototype.load=function(e){console.warn(`THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.`);let t=this;return new Fp().load(e,(function(e){t.setBuffer(e)})),this},zp.prototype.getData=function(){return console.warn(`THREE.AudioAnalyser: .getData() is now .getFrequencyData().`),this.getFrequencyData()},Ml.prototype.updateCubeMap=function(e,t){return console.warn(`THREE.CubeCamera: .updateCubeMap() is now .update().`),this.update(e,t)},Ml.prototype.clear=function(e,t,n,r){return console.warn(`THREE.CubeCamera: .clear() is now .renderTarget.clear().`),this.renderTarget.clear(e,t,n,r)},ws.crossOrigin=void 0,ws.loadTexture=function(e,t,n,r){console.warn(`THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.`);let i=new up;i.setCrossOrigin(this.crossOrigin);let a=i.load(e,n,void 0,r);return t&&(a.mapping=t),a},ws.loadTextureCube=function(e,t,n,r){console.warn(`THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.`);let i=new lp;i.setCrossOrigin(this.crossOrigin);let a=i.load(e,n,void 0,r);return t&&(a.mapping=t),a},ws.loadCompressedTexture=function(){console.error(`THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.`)},ws.loadCompressedTextureCube=function(){console.error(`THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.`)},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:wi}})),o!==void 0&&(o.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):o.__THREE__=wi)}));function gm(e){let{raysColor:n}=e,r=t(null),a=t(null),o=t(null),s=t(null),c=t(null),u=t(),p=ym(),[m,h]=i(!1),g=t(e.animation);d(()=>(h(!0),()=>h(!1)),[]),d(()=>{g.current=e.animation},[e.animation]);let[_,v]=f(()=>{if(n.mode===`random`){let e=Math.random()*360,t=60+Math.random()*40;return[bm(e,t,50),bm(e,t,65)]}else return[[1,1,1],[1,1,1]]},[n]),[y,b,x]=f(()=>{if(n.mode===`random`)return[_,v,1];{let e=``,t=``;switch(n.mode){case`single`:e=n.color,t=n.color;break;case`multi`:e=n.color1,t=n.color2;break}let[i,a,o,s]=wm(_m(e,r)),[c,l,u,d]=wm(_m(t,r));return[[i,a,o],[c,l,u],Math.max(s,d)]}},[n,p,r]);return d(()=>{h(!0);let t=r.current;if(!t)return;let n=new Hu,i=new kl(75,t.clientWidth/t.clientHeight,.1,1e3);i.position.z=5;let l=new V({preserveDrawingBuffer:!0,premultipliedAlpha:!0,alpha:!0,antialias:!0,precision:`highp`,powerPreference:`high-performance`});l.setSize(t.clientWidth,t.clientHeight),l.setPixelRatio(1),t.appendChild(l.domElement);let d=new Hl(1024,1024),f=new Dl({fragmentShader:Em,vertexShader:Tm,uniforms:{u_colors:{value:[new U(y[0],y[1],y[2],1),new U(b[0],b[1],b[2],1)]},u_intensity:{value:xm(e.intensity,0,100,0,.5)},u_rays:{value:xm(e.rays,0,100,0,.3)},u_reach:{value:xm(e.reach,0,100,0,.5)},u_time:{value:Math.random()*1e4},u_mouse:{value:[0,0]},u_resolution:{value:[t.clientWidth,t.clientHeight]},u_rayPos1:{value:[e.position/100*t.clientWidth,Sm*t.clientHeight]},u_rayPos2:{value:[(e.position/100+.02)*t.clientWidth,Cm*t.clientHeight]}},wireframe:!1,wireframeLinewidth:0,dithering:!1,flatShading:!0,side:Ni}),p=new Sl(d,f);n.add(p),o.current=n,s.current=i,a.current=l,c.current=p;let m=0,_=e=>{let t=g.current;t.animate||(m=e);let r=e-m;m=e,p.material instanceof Dl&&t.animate&&(p.material.uniforms.u_time.value+=r*t.speed/1e3/10),l.render(n,i),u.current=requestAnimationFrame(_)};return u.current=requestAnimationFrame(_),()=>{u.current&&cancelAnimationFrame(u.current),l.dispose(),d.dispose(),f.dispose(),t.removeChild(l.domElement)}},[m]),d(()=>{if(c.current?.material instanceof Dl){let t=c.current.material,n=r.current;if(!n)return;t.uniforms.u_colors.value=[new U(y[0],y[1],y[2],1),new U(b[0],b[1],b[2],1)],t.uniforms.u_intensity.value=xm(e.intensity,0,100,0,.5),t.uniforms.u_rays.value=xm(e.rays,0,100,0,.3),t.uniforms.u_reach.value=xm(e.reach,0,100,0,.5),t.uniforms.u_rayPos1.value=[e.position/100*n.clientWidth,Sm*n.clientHeight],t.uniforms.u_rayPos2.value=[(e.position/100+.02)*n.clientWidth,Cm*n.clientHeight]}},[e.intensity,e.rays,e.reach,e.position,y,b]),l(`div`,{ref:r,style:{borderRadius:e.radius,overflow:`hidden`,backgroundColor:e.backgroundColor,...e.style}})}function _m(e,t){if(e.startsWith(`var(`)){let{variableName:n,defaultValue:r}=vm(e),i=r||``;if(n&&typeof document<`u`){let e=getComputedStyle(t?.current||document.body);return e&&e.getPropertyValue(n).trim()||i}return i}else return e}function vm(e){let t=/var\s*\(\s*(--[\w-]+)(?:\s*,\s*((?:"[^"]*"|'[^']*'|[^)]+)))?\s*\)/.exec(e);if(t){let e=t[1],n=t[2]||null;return n&&=(n=n.replace(/^["']|["']$/g,``),n.trim()),{variableName:e,defaultValue:n}}return{variableName:``,defaultValue:``}}function ym(){let[e,t]=i(!1);return d(()=>{let e=o.matchMedia(`(prefers-color-scheme: dark)`),n=e=>{requestAnimationFrame(()=>{setTimeout(()=>{t(e.matches)},80)})};return t(e.matches),e.addListener(n),()=>e.removeListener(n)},[]),e}function bm(e,t,n){t/=100,n/=100;let r=(1-Math.abs(2*n-1))*t,i=r*(1-Math.abs(e/60%2-1)),a=n-r/2,o=0,s=0,c=0;return e>=0&&e<60?(o=r,s=i,c=0):e>=60&&e<120?(o=i,s=r,c=0):e>=120&&e<180?(o=0,s=r,c=i):e>=180&&e<240?(o=0,s=i,c=r):e>=240&&e<300?(o=i,s=0,c=r):e>=300&&e<360&&(o=r,s=0,c=i),[o+a,s+a,c+a]}function xm(e,t,n,r,i){return r+(e-t)/(n-t)*(i-r)}var Sm,Cm,wm,Tm,Em,Dm=e((()=>{n(),m(),C(),s(),hm(),Sm=-.4,Cm=-.5,gm.displayName=`Light Rays`,T(gm,{raysColor:{type:j.Object,title:`Color`,controls:{mode:{type:j.Enum,defaultValue:`single`,options:[`random`,`single`,`multi`],optionTitles:[`Random`,`Single`,`Multi`],displaySegmentedControl:!0,segmentedControlDirection:`vertical`},color:{type:j.Color,defaultValue:`#FFF`,hidden:e=>e.mode!==`single`},color1:{type:j.Color,defaultValue:`#FFF`,hidden:e=>e.mode!==`multi`},color2:{type:j.Color,defaultValue:`#FFCB47`,hidden:e=>e.mode!==`multi`}}},backgroundColor:{type:j.Color,defaultValue:`#000`,optional:!0,title:`Background`},animation:{type:j.Object,icon:`effect`,controls:{animate:{type:j.Boolean,defaultValue:!0},speed:{type:j.Number,defaultValue:10,min:1,max:100,step:1,hidden:e=>!e.animate}}},intensity:{type:j.Number,defaultValue:50,min:0,max:100,step:1},rays:{type:j.Number,defaultValue:30,min:0,max:100,step:1},reach:{type:j.Number,defaultValue:40,min:0,max:100,step:1},position:{type:j.Number,defaultValue:80,min:0,max:100,step:1,unit:`%`},radius:{type:j.BorderRadius,defaultValue:`0px`,description:`More components at [Framer University](https://frameruni.link/cc).`}}),g.Component,wm=e=>{let t=1,n=1,r=1,i=1;if(e&&typeof e==`string`){if(e.startsWith(`rgba(`)){let a=e.slice(5,-1).split(`,`);t=parseInt(a[0])/255,n=parseInt(a[1])/255,r=parseInt(a[2])/255,i=parseFloat(a[3])}else if(e.startsWith(`rgb(`)){let i=e.slice(4,-1).split(`,`);t=parseInt(i[0])/255,n=parseInt(i[1])/255,r=parseInt(i[2])/255}else if(e.startsWith(`#`)){let a=e.slice(1);a.length===3?(t=parseInt(a[0]+a[0],16)/255,n=parseInt(a[1]+a[1],16)/255,r=parseInt(a[2]+a[2],16)/255):a.length===6?(t=parseInt(a.slice(0,2),16)/255,n=parseInt(a.slice(2,4),16)/255,r=parseInt(a.slice(4,6),16)/255):a.length===8&&(t=parseInt(a.slice(0,2),16)/255,n=parseInt(a.slice(2,4),16)/255,r=parseInt(a.slice(4,6),16)/255,i=parseInt(a.slice(6,8),16)/255)}}return[t,n,r,i]},Tm=`
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,Em=`
// Uniforms

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform vec4 u_colors[2];
uniform float u_intensity;
uniform float u_rays;
uniform float u_reach;
uniform vec2 u_rayPos1;
uniform vec2 u_rayPos2;

#ifndef FNC_MOD289
#define FNC_MOD289

float mod289(const in float x) { return x - floor(x * (1. / 289.)) * 289.; }
vec2 mod289(const in vec2 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec3 mod289(const in vec3 x) { return x - floor(x * (1. / 289.)) * 289.; }
vec4 mod289(const in vec4 x) { return x - floor(x * (1. / 289.)) * 289.; }

#endif

#ifndef FNC_PERMUTE
#define FNC_PERMUTE

float permute(const in float x) { return mod289(((x * 34.0) + 1.0) * x); }
vec2 permute(const in vec2 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec3 permute(const in vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 permute(const in vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }

#endif

#ifndef FNC_TAYLORINVSQRT
#define FNC_TAYLORINVSQRT
float taylorInvSqrt(in float r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 taylorInvSqrt(in vec2 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec3 taylorInvSqrt(in vec3 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec4 taylorInvSqrt(in vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
#endif

#ifndef FNC_QUINTIC
#define FNC_QUINTIC 

float quintic(const in float v) { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec2  quintic(const in vec2 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec3  quintic(const in vec3 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }
vec4  quintic(const in vec4 v)  { return v*v*v*(v*(v*6.0-15.0)+10.0); }

#endif

#ifndef FNC_PNOISE
#define FNC_PNOISE

float pnoise(in vec2 P, in vec2 rep) {
    vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
    vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
    Pi = mod(Pi, rep.xyxy); 
    Pi = mod289(Pi);        
    vec4 ix = Pi.xzxz;
    vec4 iy = Pi.yyww;
    vec4 fx = Pf.xzxz;
    vec4 fy = Pf.yyww;

    vec4 i = permute(permute(ix) + iy);

    vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
    vec4 gy = abs(gx) - 0.5 ;
    vec4 tx = floor(gx + 0.5);
    gx = gx - tx;

    vec2 g00 = vec2(gx.x,gy.x);
    vec2 g10 = vec2(gx.y,gy.y);
    vec2 g01 = vec2(gx.z,gy.z);
    vec2 g11 = vec2(gx.w,gy.w);

    vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
    g00 *= norm.x;
    g01 *= norm.y;
    g10 *= norm.z;
    g11 *= norm.w;

    float n00 = dot(g00, vec2(fx.x, fy.x));
    float n10 = dot(g10, vec2(fx.y, fy.y));
    float n01 = dot(g01, vec2(fx.z, fy.z));
    float n11 = dot(g11, vec2(fx.w, fy.w));

    vec2 fade_xy = quintic(Pf.xy);
    vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
    float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
    return 2.3 * n_xy;
}

float pnoise(in vec3 P, in vec3 rep) {
    vec3 Pi0 = mod(floor(P), rep); 
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = quintic(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}

float pnoise(in vec4 P, in vec4 rep) {
    vec4 Pi0 = mod(floor(P), rep); 
    vec4 Pi1 = mod(Pi0 + 1.0, rep); 
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec4 Pf0 = fract(P); 
    vec4 Pf1 = Pf0 - 1.0; 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = vec4(Pi0.zzzz);
    vec4 iz1 = vec4(Pi1.zzzz);
    vec4 iw0 = vec4(Pi0.wwww);
    vec4 iw1 = vec4(Pi1.wwww);

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 ixy00 = permute(ixy0 + iw0);
    vec4 ixy01 = permute(ixy0 + iw1);
    vec4 ixy10 = permute(ixy1 + iw0);
    vec4 ixy11 = permute(ixy1 + iw1);

    vec4 gx00 = ixy00 * (1.0 / 7.0);
    vec4 gy00 = floor(gx00) * (1.0 / 7.0);
    vec4 gz00 = floor(gy00) * (1.0 / 6.0);
    gx00 = fract(gx00) - 0.5;
    gy00 = fract(gy00) - 0.5;
    gz00 = fract(gz00) - 0.5;
    vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
    vec4 sw00 = step(gw00, vec4(0.0));
    gx00 -= sw00 * (step(0.0, gx00) - 0.5);
    gy00 -= sw00 * (step(0.0, gy00) - 0.5);

    vec4 gx01 = ixy01 * (1.0 / 7.0);
    vec4 gy01 = floor(gx01) * (1.0 / 7.0);
    vec4 gz01 = floor(gy01) * (1.0 / 6.0);
    gx01 = fract(gx01) - 0.5;
    gy01 = fract(gy01) - 0.5;
    gz01 = fract(gz01) - 0.5;
    vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
    vec4 sw01 = step(gw01, vec4(0.0));
    gx01 -= sw01 * (step(0.0, gx01) - 0.5);
    gy01 -= sw01 * (step(0.0, gy01) - 0.5);

    vec4 gx10 = ixy10 * (1.0 / 7.0);
    vec4 gy10 = floor(gx10) * (1.0 / 7.0);
    vec4 gz10 = floor(gy10) * (1.0 / 6.0);
    gx10 = fract(gx10) - 0.5;
    gy10 = fract(gy10) - 0.5;
    gz10 = fract(gz10) - 0.5;
    vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
    vec4 sw10 = step(gw10, vec4(0.0));
    gx10 -= sw10 * (step(0.0, gx10) - 0.5);
    gy10 -= sw10 * (step(0.0, gy10) - 0.5);

    vec4 gx11 = ixy11 * (1.0 / 7.0);
    vec4 gy11 = floor(gx11) * (1.0 / 7.0);
    vec4 gz11 = floor(gy11) * (1.0 / 6.0);
    gx11 = fract(gx11) - 0.5;
    gy11 = fract(gy11) - 0.5;
    gz11 = fract(gz11) - 0.5;
    vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
    vec4 sw11 = step(gw11, vec4(0.0));
    gx11 -= sw11 * (step(0.0, gx11) - 0.5);
    gy11 -= sw11 * (step(0.0, gy11) - 0.5);

    vec4 g0000 = vec4(gx00.x,gy00.x,gz00.x,gw00.x);
    vec4 g1000 = vec4(gx00.y,gy00.y,gz00.y,gw00.y);
    vec4 g0100 = vec4(gx00.z,gy00.z,gz00.z,gw00.z);
    vec4 g1100 = vec4(gx00.w,gy00.w,gz00.w,gw00.w);
    vec4 g0010 = vec4(gx10.x,gy10.x,gz10.x,gw10.x);
    vec4 g1010 = vec4(gx10.y,gy10.y,gz10.y,gw10.y);
    vec4 g0110 = vec4(gx10.z,gy10.z,gz10.z,gw10.z);
    vec4 g1110 = vec4(gx10.w,gy10.w,gz10.w,gw10.w);
    vec4 g0001 = vec4(gx01.x,gy01.x,gz01.x,gw01.x);
    vec4 g1001 = vec4(gx01.y,gy01.y,gz01.y,gw01.y);
    vec4 g0101 = vec4(gx01.z,gy01.z,gz01.z,gw01.z);
    vec4 g1101 = vec4(gx01.w,gy01.w,gz01.w,gw01.w);
    vec4 g0011 = vec4(gx11.x,gy11.x,gz11.x,gw11.x);
    vec4 g1011 = vec4(gx11.y,gy11.y,gz11.y,gw11.y);
    vec4 g0111 = vec4(gx11.z,gy11.z,gz11.z,gw11.z);
    vec4 g1111 = vec4(gx11.w,gy11.w,gz11.w,gw11.w);

    vec4 norm00 = taylorInvSqrt(vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100)));
    g0000 *= norm00.x;
    g0100 *= norm00.y;
    g1000 *= norm00.z;
    g1100 *= norm00.w;

    vec4 norm01 = taylorInvSqrt(vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101)));
    g0001 *= norm01.x;
    g0101 *= norm01.y;
    g1001 *= norm01.z;
    g1101 *= norm01.w;

    vec4 norm10 = taylorInvSqrt(vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110)));
    g0010 *= norm10.x;
    g0110 *= norm10.y;
    g1010 *= norm10.z;
    g1110 *= norm10.w;

    vec4 norm11 = taylorInvSqrt(vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111)));
    g0011 *= norm11.x;
    g0111 *= norm11.y;
    g1011 *= norm11.z;
    g1111 *= norm11.w;

    float n0000 = dot(g0000, Pf0);
    float n1000 = dot(g1000, vec4(Pf1.x, Pf0.yzw));
    float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.zw));
    float n1100 = dot(g1100, vec4(Pf1.xy, Pf0.zw));
    float n0010 = dot(g0010, vec4(Pf0.xy, Pf1.z, Pf0.w));
    float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
    float n0110 = dot(g0110, vec4(Pf0.x, Pf1.yz, Pf0.w));
    float n1110 = dot(g1110, vec4(Pf1.xyz, Pf0.w));
    float n0001 = dot(g0001, vec4(Pf0.xyz, Pf1.w));
    float n1001 = dot(g1001, vec4(Pf1.x, Pf0.yz, Pf1.w));
    float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
    float n1101 = dot(g1101, vec4(Pf1.xy, Pf0.z, Pf1.w));
    float n0011 = dot(g0011, vec4(Pf0.xy, Pf1.zw));
    float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.zw));
    float n0111 = dot(g0111, vec4(Pf0.x, Pf1.yzw));
    float n1111 = dot(g1111, Pf1);

    vec4 fade_xyzw = quintic(Pf0);
    vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
    vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
    vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
    vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
    float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
    return 2.2 * n_xyzw;
}
#endif

#ifndef SRGB_EPSILON 
#define SRGB_EPSILON 0.00000001
#endif

#ifndef FNC_SRGB2RGB
#define FNC_SRGB2RGB

float srgb2rgb(float channel) {
    return (channel < 0.04045) ? channel * 0.0773993808 : pow((channel + 0.055) * 0.947867298578199, 2.4);
}

vec3 srgb2rgb(vec3 srgb) {
    return vec3(srgb2rgb(srgb.r + SRGB_EPSILON), 
                srgb2rgb(srgb.g + SRGB_EPSILON),
                srgb2rgb(srgb.b + SRGB_EPSILON));
}

vec4 srgb2rgb(vec4 srgb) {
    return vec4(srgb2rgb(srgb.rgb), srgb.a);
}

#endif

#if !defined(FNC_SATURATE) && !defined(saturate)
#define FNC_SATURATE
#define saturate(x) clamp(x, 0.0, 1.0)
#endif

#ifndef SRGB_EPSILON 
#define SRGB_EPSILON 0.00000001
#endif

#ifndef FNC_RGB2SRGB
#define FNC_RGB2SRGB

float rgb2srgb(float channel) {
    return (channel < 0.0031308) ? channel * 12.92 : 1.055 * pow(channel, 0.4166666666666667) - 0.055;
}

vec3 rgb2srgb(vec3 rgb) {
    return saturate(vec3(rgb2srgb(rgb.r - SRGB_EPSILON), rgb2srgb(rgb.g - SRGB_EPSILON), rgb2srgb(rgb.b - SRGB_EPSILON)));
}

vec4 rgb2srgb(vec4 rgb) {
    return vec4(rgb2srgb(rgb.rgb), rgb.a);
}

#endif

#ifndef FNC_MIXOKLAB
#define FNC_MIXOKLAB
vec3 mixOklab( vec3 colA, vec3 colB, float h ) {

    #ifdef MIXOKLAB_COLORSPACE_SRGB
    colA = srgb2rgb(colA);
    colB = srgb2rgb(colB);
    #endif

    const mat3 kCONEtoLMS = mat3(                
         0.4121656120,  0.2118591070,  0.0883097947,
         0.5362752080,  0.6807189584,  0.2818474174,
         0.0514575653,  0.1074065790,  0.6302613616);
    const mat3 kLMStoCONE = mat3(
         4.0767245293, -1.2681437731, -0.0041119885,
        -3.3072168827,  2.6093323231, -0.7034763098,
         0.2307590544, -0.3411344290,  1.7068625689);

    vec3 lmsA = pow( kCONEtoLMS * colA, vec3(1.0/3.0) );
    vec3 lmsB = pow( kCONEtoLMS * colB, vec3(1.0/3.0) );
    
    vec3 lms = mix( lmsA, lmsB, h );

    vec3 rgb = kLMStoCONE*(lms*lms*lms);

    #ifdef MIXOKLAB_COLORSPACE_SRGB
    return rgb2srgb(rgb);
    #else
    return rgb;
    #endif
}

vec4 mixOklab( vec4 colA, vec4 colB, float h ) {
    return vec4( mixOklab(colA.rgb, colB.rgb, h), mix(colA.a, colB.a, h) );
}
#endif


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
}
`})),Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm;e((()=>{m(),C(),b(),s(),we(),pe(),Dm(),ye(),z(),ve(),ke(),B(),me(),De(),de(),Me(),Ie(),Om=L(ce),km=x(xe),Am=x(Ee),jm=x(le),Mm=x(Te),Nm=F(N),Pm=x(gm),Fm={BCcJfxXFs:`(min-width: 1200px)`,Jdj3ILm3J:`(min-width: 810px) and (max-width: 1199.98px)`,Wt5eIvrfX:`(max-width: 809.98px)`},Im=[],Lm=`framer-ovXfe`,Rm={BCcJfxXFs:`framer-v-ekygux`,Jdj3ILm3J:`framer-v-c34hmc`,Wt5eIvrfX:`framer-v-jpm1ng`},zm=(e,t,n)=>e&&t?`position`:n,Bm={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{bounce:.2,delay:0,duration:.4,type:`spring`},x:0,y:0},Vm={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0},Hm=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Um=(e,t,n)=>{switch(e.state){case`success`:return t.success??n;case`pending`:return t.pending??n;case`error`:return t.error??n;case`incomplete`:return t.incomplete??n;default:return n}},Wm=(e,t)=>`translateX(-50%) ${t}`,Gm={Desktop:`BCcJfxXFs`,Phone:`Wt5eIvrfX`,Tablet:`Jdj3ILm3J`},Km=({value:e})=>ne()?null:l(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),qm=({height:e,id:t,width:n,...r})=>({...r,variant:Gm[r.variant]??r.variant??`BCcJfxXFs`}),Jm=O(u(function(e,n){let i=t(null),o=n??i,s=c(),{activeLocale:u,setLocale:d}=se(),m=k(),{style:g,className:b,layoutId:x,variant:S,...C}=qm(e);te(f(()=>Le({},u),[u]));let[T,E]=A(S,Fm,!1),D=w(Lm,Se,je,he,Fe),O=a(M)?.isLayoutTemplate,j=zm(O,!!a(v)?.transition?.layout),ne=re(`aOqU6IClr`),F=t(null);return oe({}),l(M.Provider,{value:{activeVariantId:T,humanReadableVariantMap:Gm,primaryVariantId:`BCcJfxXFs`,variantClassNames:Rm},children:p(y,{id:x??s,children:[l(Km,{value:`html body { background: var(--token-def4a580-dff0-4933-a38d-c93032be5c1e, rgb(21, 21, 22)); }`}),p(_.div,{...C,className:w(D,`framer-ekygux`,b),ref:o,style:{...g},children:[p(_.div,{className:`framer-iu8nyv`,layout:j,children:[p(`div`,{className:`framer-radunj`,children:[p(`div`,{className:`framer-16bo8zj`,children:[l(Om,{__fromCanvasComponent:!0,animate:Bm,children:l(r,{children:l(`h1`,{className:`framer-styles-preset-94fo1t`,"data-styles-preset":`bvG7neqIe`,dir:`auto`,style:{"--framer-text-alignment":`left`,"--framer-text-color":`var(--token-d699886b-d97d-4a2c-be7c-3ef61f529427, rgb(253, 219, 151))`},children:`Support`})}),className:`framer-1lvvr3o`,"data-framer-appear-id":`1lvvr3o`,"data-framer-name":`If You Know Stocks, You Already Understand Crypto.`,fonts:[`Inter`],initial:Vm,optimized:!0,verticalAlignment:`top`,withExternalLayout:!0}),l(Om,{__fromCanvasComponent:!0,animate:Bm,children:l(r,{children:l(`h5`,{className:`framer-styles-preset-1o153d5`,"data-styles-preset":`eN868h0yO`,style:{"--framer-text-alignment":`left`,"--framer-text-color":`var(--token-ce60e0c2-9c3d-48f2-87dd-56167c2371db, rgb(121, 123, 134))`},children:`Awesome people at Grade Capital are ready to help you out`})}),className:`framer-1ykjjhp`,"data-framer-appear-id":`1ykjjhp`,"data-framer-name":`If You Know Stocks, You Already Understand Crypto.`,fonts:[`Inter`],initial:Vm,optimized:!0,verticalAlignment:`top`,withExternalLayout:!0})]}),p(`div`,{className:`framer-1stu2g6`,children:[p(`div`,{className:`framer-31jspb`,"data-border":!0,children:[p(`div`,{className:`framer-1h0r12s`,children:[l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{style:{"--font-selector":`R0Y7UG9wcGlucy1yZWd1bGFy`,"--framer-font-family":`"Poppins", "Poppins Placeholder", sans-serif`,"--framer-font-size":`13px`,"--framer-letter-spacing":`-0.01em`,"--framer-line-height":`18px`,"--framer-text-color":`var(--token-ce60e0c2-9c3d-48f2-87dd-56167c2371db, rgb(151, 151, 151))`,"--framer-text-transform":`uppercase`},children:`mail`})}),className:`framer-7spbc1`,"data-framer-name":`Available on`,fonts:[`GF;Poppins-regular`],verticalAlignment:`top`,withExternalLayout:!0}),l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,children:`hi@Grade.Capital`})}),className:`framer-1nt0lp5`,"data-framer-name":`If You Know Stocks, You Already Understand Crypto.`,fonts:[`Inter`],verticalAlignment:`center`,withExternalLayout:!0})]}),p(`div`,{className:`framer-afntj3`,children:[l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{style:{"--font-selector":`R0Y7UG9wcGlucy1yZWd1bGFy`,"--framer-font-family":`"Poppins", "Poppins Placeholder", sans-serif`,"--framer-font-size":`13px`,"--framer-letter-spacing":`-0.01em`,"--framer-line-height":`18px`,"--framer-text-color":`var(--token-ce60e0c2-9c3d-48f2-87dd-56167c2371db, rgb(151, 151, 151))`,"--framer-text-transform":`uppercase`},children:`Phone number`})}),className:`framer-1n0i6v9`,"data-framer-name":`Available on`,fonts:[`GF;Poppins-regular`],verticalAlignment:`top`,withExternalLayout:!0}),l(ce,{__fromCanvasComponent:!0,children:p(r,{children:[l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,dir:`auto`,children:`+91 8058071055`}),l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,dir:`auto`,children:`+91 9876365657`})]}),className:`framer-pgpcny`,"data-framer-name":`If You Know Stocks, You Already Understand Crypto.`,fonts:[`Inter`],verticalAlignment:`center`,withExternalLayout:!0})]})]}),p(`div`,{className:`framer-jvzzn5`,children:[p(`div`,{className:`framer-11jz4i4`,"data-framer-name":`Available on`,children:[l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{style:{"--font-selector":`R0Y7UG9wcGlucy1yZWd1bGFy`,"--framer-font-family":`"Poppins", "Poppins Placeholder", sans-serif`,"--framer-font-size":`13px`,"--framer-letter-spacing":`-0.01em`,"--framer-line-height":`18px`,"--framer-text-color":`var(--token-ce60e0c2-9c3d-48f2-87dd-56167c2371db, rgb(151, 151, 151))`,"--framer-text-transform":`uppercase`},children:`Operations Office (India)\xA0`})}),className:`framer-irzyug`,"data-framer-name":`Available on`,fonts:[`GF;Poppins-regular`],verticalAlignment:`top`,withExternalLayout:!0}),l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,dir:`auto`,style:{"--framer-text-alignment":`left`,"--framer-text-color":`rgb(242, 242, 242)`},children:`Office 530, Spaze I Tech, Sector 49, Gurugram`})}),className:`framer-797qdl`,"data-framer-name":`If You Know Stocks, You Already Understand Crypto.`,fonts:[`Inter`],verticalAlignment:`center`,withExternalLayout:!0})]}),p(`div`,{className:`framer-hwizpw`,"data-framer-name":`Available on`,children:[l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{style:{"--font-selector":`R0Y7UG9wcGlucy1yZWd1bGFy`,"--framer-font-family":`"Poppins", "Poppins Placeholder", sans-serif`,"--framer-font-size":`13px`,"--framer-letter-spacing":`-0.01em`,"--framer-line-height":`18px`,"--framer-text-color":`var(--token-ce60e0c2-9c3d-48f2-87dd-56167c2371db, rgb(151, 151, 151))`,"--framer-text-transform":`uppercase`},children:`International Operations (USA)`})}),className:`framer-p8kwl3`,"data-framer-name":`Available on`,fonts:[`GF;Poppins-regular`],verticalAlignment:`top`,withExternalLayout:!0}),l(ce,{__fromCanvasComponent:!0,children:p(r,{children:[l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,children:`8 THE GREEN STE, A`}),l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,children:`DOVER, DE, 19901`}),l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,children:`United States of America`})]}),className:`framer-2g9o4w`,"data-framer-name":`If You Know Stocks, You Already Understand Crypto.`,fonts:[`Inter`],verticalAlignment:`center`,withExternalLayout:!0})]}),p(`div`,{className:`framer-16w9g95`,children:[l(ie,{height:32,width:`32px`,children:l(N,{className:`framer-1hpf46k-container`,nodeId:`F1SmFAP6R`,scopeId:`y5dGAvvS_`,children:l(xe,{GtEQla9RO:R,height:`100%`,id:`F1SmFAP6R`,layoutId:`F1SmFAP6R`,style:{height:`100%`,width:`100%`},width:`100%`,XWI9Mfiff:`https://x.com/gradecapital`})})}),l(ie,{height:32,width:`32px`,children:l(N,{className:`framer-1tgt7il-container`,nodeId:`ZKDcMPAAi`,scopeId:`y5dGAvvS_`,children:l(xe,{GtEQla9RO:ge,height:`100%`,id:`ZKDcMPAAi`,layoutId:`ZKDcMPAAi`,style:{height:`100%`,width:`100%`},width:`100%`,XWI9Mfiff:`https://www.linkedin.com/company/grade-capital/`})})}),l(ie,{height:32,width:`32px`,children:l(N,{className:`framer-njkh32-container`,nodeId:`qxbeg7PtJ`,scopeId:`y5dGAvvS_`,children:l(xe,{GtEQla9RO:fe,height:`100%`,id:`qxbeg7PtJ`,layoutId:`qxbeg7PtJ`,style:{height:`100%`,width:`100%`},width:`100%`,XWI9Mfiff:`https://www.instagram.com/gradecapital/`})})})]})]})]})]}),l(ae,{className:`framer-1iebteq`,"data-border":!0,nodeId:`xXYc50QkC`,children:e=>p(h,{children:[p(`label`,{className:`framer-64f7yu`,children:[l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{className:`framer-styles-preset-po693k`,"data-styles-preset":`pZmxZBxnK`,dir:`auto`,style:{"--framer-text-color":`rgb(255, 255, 255)`},children:`Select User and Query Type`})}),className:`framer-mn6glk`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),p(`div`,{className:`framer-1y5ynkv`,children:[l(ee,{className:`framer-1tbutgq`,defaultValue:`Select Here`,inputName:`Location`,required:!0,selectOptions:[{disabled:!0,type:`option`,value:`Select Here`},{title:`Visitor`,type:`option`,value:`Visitor`},{title:`Advisor`,type:`option`,value:`Advisor`}]}),l(ee,{className:`framer-pyuo9q`,defaultValue:`Reason to be listed here`,inputName:`Location`,required:!0,selectOptions:[{disabled:!0,type:`option`,value:`Reason to be listed here`},{title:`General Query`,type:`option`,value:`General Query`},{title:`Need Guidance`,type:`option`,value:`Need Guidance`},{title:`Transaction Related`,type:`option`,value:`Transaction Related`},{title:`Transaction Related - High Priority`,type:`option`,value:`Transaction Related - High Priority`}]})]})]}),p(`div`,{className:`framer-z235m3`,children:[p(`label`,{className:`framer-1so6il0`,children:[l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,dir:`auto`,style:{"--framer-text-color":`rgb(255, 255, 255)`},children:`Name`})}),className:`framer-16ybz6g`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),l(P,{className:`framer-1oyggeh`,inputName:`Name`,placeholder:`Your Name`,required:!0,type:`text`})]}),p(`label`,{className:`framer-ksosyw`,children:[l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,dir:`auto`,style:{"--framer-text-color":`rgb(255, 255, 255)`},children:`Phone Number`})}),className:`framer-1nyxsa`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),l(`div`,{className:`framer-nth7mc`,children:l(P,{className:`framer-r6kzs1`,inputName:`Number`,placeholder:`1234567890`,required:!0,type:`number`})})]}),p(`label`,{className:`framer-l534js`,children:[l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,style:{"--framer-text-color":`var(--token-83f9f549-52a4-4d2d-8b34-9187c0f176a6, rgb(178, 179, 189))`},children:`Your Message`})}),className:`framer-bda87a`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0}),l(P,{className:`framer-15p4ip2`,inputName:`Your Message`,placeholder:`Your message here`,type:`textarea`})]}),l(I,{breakpoint:T,overrides:{Jdj3ILm3J:{width:`calc((min(${m?.width||`100vw`} * 0.83, 1200px) - 80px) / 2)`},Wt5eIvrfX:{width:`calc(min(${m?.width||`100vw`} * 0.9, 1200px) - 48px)`}},children:l(ie,{height:45,width:`calc((min(${m?.width||`100vw`} * 0.83, 1200px) * 0.55 - 80px) / 2)`,children:l(N,{className:`framer-9t9ena-container`,nodeId:`UHyVrGLaD`,scopeId:`y5dGAvvS_`,children:l(Ee,{height:`100%`,id:`UHyVrGLaD`,iLYqSQt5h:`Get Help`,layoutId:`UHyVrGLaD`,style:{width:`100%`},type:`submit`,variant:Um(e,{pending:`DoBmhUuVM`,success:`Y1mML3DoQ`},Hm(`XBdx2VRNi`)),width:`100%`})})})})]}),l(ce,{__fromCanvasComponent:!0,children:l(r,{children:l(`p`,{className:`framer-styles-preset-d7059j`,"data-styles-preset":`hBWmZvYKq`,style:{"--framer-text-color":`var(--token-83f9f549-52a4-4d2d-8b34-9187c0f176a6, rgb(178, 179, 189))`},children:`The typical response time is 24 hours. Please relax while your issue is being addressed.`})}),className:`framer-1j9vmlz`,fonts:[`Inter`],verticalAlignment:`top`,withExternalLayout:!0})]})})]}),l(ie,{height:681,width:m?.width||`100vw`,children:l(N,{className:`framer-13vsl9d-container`,id:ne,layout:j,nodeId:`aOqU6IClr`,ref:F,scopeId:`y5dGAvvS_`,children:l(I,{breakpoint:T,overrides:{Jdj3ILm3J:{variant:Hm(`v4fHSagxB`)},Wt5eIvrfX:{variant:Hm(`qXygGToxr`)}},children:l(le,{bmpGubBO6:`cYuAaZEfD`,height:`100%`,id:`aOqU6IClr`,KERebtB28:`cYuAaZEfD`,layoutId:`aOqU6IClr`,nh8xxKDkS:`cYuAaZEfD`,style:{width:`100%`},variant:Hm(`BpLK2tsca`),width:`100%`,X3sTErq03:`cYuAaZEfD`,XKkBUCK3l:`SawZiGxUs`,ZXxGAeN2u:`zArpTwFkP`})})})}),l(ie,{height:77,width:`100vw`,y:0,children:l(Nm,{__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0}},{ref:F,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:-80}}],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:1,__perspectiveFX:!1,__targetOpacity:1,className:`framer-dkjiq6-container`,layout:j,layoutScroll:!0,nodeId:`FZx1uD2m0`,rendersWithMotion:!0,scopeId:`y5dGAvvS_`,transformTemplate:Wm,children:l(I,{breakpoint:T,overrides:{Jdj3ILm3J:{variant:Hm(`tnJxSU0Pc`)},Wt5eIvrfX:{variant:Hm(`tnJxSU0Pc`)}},children:l(Te,{height:`100%`,id:`FZx1uD2m0`,layoutId:`FZx1uD2m0`,style:{width:`100%`},variant:Hm(`T7iYU1VY_`),width:`100%`})})})}),l(ie,{children:l(N,{className:`framer-1nag2sa-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:j,nodeId:`pcDpL2N6Q`,scopeId:`y5dGAvvS_`,children:l(gm,{animation:{animate:!0,speed:10},backgroundColor:`var(--token-def4a580-dff0-4933-a38d-c93032be5c1e, rgb(21, 21, 22))`,height:`100%`,id:`pcDpL2N6Q`,intensity:50,layoutId:`pcDpL2N6Q`,position:48,radius:`0px`,rays:22,raysColor:{color:`var(--token-a0662b8f-1008-40ab-8807-fe050d7cd119, rgb(32, 34, 39))`,color1:`rgb(255, 255, 255)`,color2:`rgb(255, 203, 71)`,mode:`single`},reach:25,style:{height:`100%`,maxWidth:`100%`,width:`100%`},width:`100%`})})})]}),l(`div`,{id:`overlay`})]})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-ovXfe.framer-xmi71u, .framer-ovXfe .framer-xmi71u { display: block; }`,`.framer-ovXfe.framer-ekygux { align-content: center; align-items: center; background-color: var(--token-def4a580-dff0-4933-a38d-c93032be5c1e, #151516); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,`.framer-ovXfe .framer-iu8nyv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1200px; overflow: visible; padding: 160px 0px 0px 0px; position: relative; width: 83%; z-index: 2; }`,`.framer-ovXfe .framer-radunj { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 40%; }`,`.framer-ovXfe .framer-16bo8zj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-1lvvr3o, .framer-ovXfe .framer-1ykjjhp { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,`.framer-ovXfe .framer-1stu2g6 { align-content: flex-start; align-items: flex-start; background-color: var(--token-a0662b8f-1008-40ab-8807-fe050d7cd119, #202227); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,`.framer-ovXfe .framer-31jspb { --border-bottom-width: 1px; --border-color: var(--token-021eed6c-6640-4183-a20e-86449662deeb, #343844); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 32px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-1h0r12s, .framer-ovXfe .framer-afntj3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-7spbc1, .framer-ovXfe .framer-1nt0lp5, .framer-ovXfe .framer-1n0i6v9, .framer-ovXfe .framer-pgpcny, .framer-ovXfe .framer-irzyug, .framer-ovXfe .framer-p8kwl3 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-ovXfe .framer-jvzzn5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 32px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-11jz4i4, .framer-ovXfe .framer-hwizpw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-797qdl { --framer-paragraph-spacing: 0px; flex: none; height: 14px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-ovXfe .framer-2g9o4w { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-ovXfe .framer-16w9g95 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,`.framer-ovXfe .framer-1hpf46k-container, .framer-ovXfe .framer-1tgt7il-container, .framer-ovXfe .framer-njkh32-container { flex: none; height: 32px; position: relative; width: 32px; }`,`.framer-ovXfe .framer-1iebteq { --border-bottom-width: 1px; --border-color: var(--token-021eed6c-6640-4183-a20e-86449662deeb, #343844); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background: linear-gradient(137deg, rgba(31, 33, 38, 0) -3%, rgba(70, 72, 79, 0.09) 100%); border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 40px; position: relative; width: 55%; will-change: var(--framer-will-change-override, transform); }`,`.framer-ovXfe .framer-64f7yu, .framer-ovXfe .framer-1so6il0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-mn6glk, .framer-ovXfe .framer-16ybz6g, .framer-ovXfe .framer-1nyxsa, .framer-ovXfe .framer-bda87a { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,`.framer-ovXfe .framer-1y5ynkv, .framer-ovXfe .framer-nth7mc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-1tbutgq { --framer-input-background: #f2f2f2; --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-543ef2ba-176d-4974-a295-54521b6dbadb, #46484f); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #000000; --framer-input-font-family: "Poppins"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: var(--token-def4a580-dff0-4933-a38d-c93032be5c1e, #151516); --framer-input-invalid-text-color: var(--token-def4a580-dff0-4933-a38d-c93032be5c1e, #151516); --framer-input-padding: 12px 16px 12px 16px; --framer-input-wrapper-height: auto; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,`.framer-ovXfe .framer-pyuo9q { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-ce60e0c2-9c3d-48f2-87dd-56167c2371db, #797b86); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: #0099ff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #ffffff; --framer-input-font-family: "Poppins"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: var(--token-ce60e0c2-9c3d-48f2-87dd-56167c2371db, #797b86); --framer-input-invalid-text-color: var(--token-def4a580-dff0-4933-a38d-c93032be5c1e, #151516); --framer-input-padding: 12px 16px 12px 16px; --framer-input-wrapper-height: auto; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,`.framer-ovXfe .framer-z235m3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-1oyggeh { --framer-input-background: var(--token-8bdf50a6-504a-4ccf-9cec-1ae61458419c, #19191b); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-021eed6c-6640-4183-a20e-86449662deeb, #343844); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-d699886b-d97d-4a2c-be7c-3ef61f529427, #fddb97); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #ffffff; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-a37e6c3e-a10c-437b-b258-07d1d49555da, #fcebef); flex: none; height: 50px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-ksosyw, .framer-ovXfe .framer-l534js { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-r6kzs1 { --framer-input-background: var(--token-8bdf50a6-504a-4ccf-9cec-1ae61458419c, #19191b); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-021eed6c-6640-4183-a20e-86449662deeb, #343844); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-d699886b-d97d-4a2c-be7c-3ef61f529427, #fddb97); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-37a12d8a-a3bf-4094-90d7-1c0691b8d553, #151516); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-a37e6c3e-a10c-437b-b258-07d1d49555da, #fcebef); flex: 1 0 0px; height: 50px; position: relative; width: 1px; }`,`.framer-ovXfe .framer-15p4ip2 { --framer-input-background: var(--token-8bdf50a6-504a-4ccf-9cec-1ae61458419c, #19191b); --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-021eed6c-6640-4183-a20e-86449662deeb, #343844); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 8px; --framer-input-border-radius-bottom-right: 8px; --framer-input-border-radius-top-left: 8px; --framer-input-border-radius-top-right: 8px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-d699886b-d97d-4a2c-be7c-3ef61f529427, #fddb97); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: #ffffff; --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px; --framer-input-placeholder-color: var(--token-a37e6c3e-a10c-437b-b258-07d1d49555da, #fcebef); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 122px; position: relative; width: 100%; }`,`.framer-ovXfe .framer-9t9ena-container { flex: none; height: auto; position: relative; width: 50%; }`,`.framer-ovXfe .framer-1j9vmlz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,`.framer-ovXfe .framer-13vsl9d-container { flex: none; height: auto; position: relative; width: 100%; }`,`.framer-ovXfe .framer-dkjiq6-container { flex: none; height: auto; left: 50%; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 9; }`,`.framer-ovXfe .framer-1nag2sa-container { -webkit-user-select: none; flex: none; height: 100vh; left: 0px; max-width: 4000px; position: absolute; top: 0px; user-select: none; width: 100%; z-index: 1; }`,..._e,...Oe,...Ce,...Ne,`.framer-ovXfe[data-border="true"]::after, .framer-ovXfe [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ovXfe.framer-ekygux { width: 810px; } .framer-ovXfe .framer-iu8nyv { flex-direction: column; gap: 56px; justify-content: flex-start; padding: 112px 0px 0px 0px; } .framer-ovXfe .framer-radunj { align-self: unset; gap: 40px; height: min-content; justify-content: flex-start; width: 100%; } .framer-ovXfe .framer-1iebteq { width: 100%; } .framer-ovXfe .framer-1oyggeh, .framer-ovXfe .framer-r6kzs1, .framer-ovXfe .framer-15p4ip2 { --framer-input-placeholder-color: #ffffff; }}`,`@media (max-width: 809.98px) { .framer-ovXfe.framer-ekygux { width: 390px; } .framer-ovXfe .framer-iu8nyv { flex-direction: column; gap: 56px; justify-content: flex-start; padding: 112px 0px 0px 0px; width: 90%; } .framer-ovXfe .framer-radunj { align-self: unset; gap: 40px; height: min-content; justify-content: flex-start; width: 100%; } .framer-ovXfe .framer-797qdl { height: auto; } .framer-ovXfe .framer-1iebteq { padding: 24px; width: 100%; } .framer-ovXfe .framer-1y5ynkv { flex-direction: column; } .framer-ovXfe .framer-1tbutgq, .framer-ovXfe .framer-pyuo9q { flex: none; width: 100%; } .framer-ovXfe .framer-1oyggeh, .framer-ovXfe .framer-r6kzs1, .framer-ovXfe .framer-15p4ip2 { --framer-input-placeholder-color: #ffffff; } .framer-ovXfe .framer-9t9ena-container { width: 100%; } .framer-ovXfe .framer-1nag2sa-container { height: 90.87677725118483vh; }}`],`framer-ovXfe`),Ym=Jm,Jm.displayName=`Support`,Jm.defaultProps={height:1630,width:1200},S(Jm,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`},{cssFamilyName:`Poppins`,source:`google`,style:`normal`,uiFamilyName:`Poppins`,url:`https://fonts.gstatic.com/s/poppins/v24/pxiEyp8kv8JHgFVrFJXUc1NECPY.woff2`,weight:`400`},{cssFamilyName:`Poppins`,source:`fontshare`,style:`normal`,uiFamilyName:`Poppins`,url:`https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2`,weight:`400`}]},...km,...Am,...jm,...Mm,...Pm,...D(be),...D(Ae),...D(ue),...D(Pe)],{supportsExplicitInterCodegen:!0}),Jm.loader={load:(e,t)=>(t.locale,Promise.allSettled([E(xe,{},t),E(Ee,{},t),E(le,{},t),E(Te,{},t)]))},Xm={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`Framery5dGAvvS_`,slots:[],annotations:{framerContractVersion:`1`,framerComponentViewportWidth:`true`,framerScrollSections:`{"aOqU6IClr":{"pattern":":aOqU6IClr","name":"footer"}}`,framerAcceptsLayoutTemplate:`true`,framerLayoutTemplateFlowEffect:`true`,framerColorSyntax:`true`,framerIntrinsicWidth:`1200`,framerAutoSizeImages:`true`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Jdj3ILm3J":{"layout":["fixed","auto"]},"Wt5eIvrfX":{"layout":["fixed","auto"]}}}`,framerIntrinsicHeight:`1630`,framerResponsiveScreen:`true`,framerImmutableVariables:`true`,framerDisplayContentsDiv:`false`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{Xm as __FramerMetadata__,Ym as default,Im as queryParamNames};
//# sourceMappingURL=JJtELeKH6QqJY86ugtlFmPP-Vyd7EHeaBZdilloqn0c.CPGio0u0.mjs.map