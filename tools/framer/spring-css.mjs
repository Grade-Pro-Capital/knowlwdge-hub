// Print a Motion spring as a CSS linear() easing + its duration, so CSS
// transitions/animations follow exactly the same curve as Framer.
//   node tools/framer/spring-css.mjs bounce=0.3 duration=2.7
//   node tools/framer/spring-css.mjs stiffness=400 damping=50 mass=1
//   add from=0 to=18 to use the real value range (affects when the spring counts as settled)
import { spring } from "motion";
const opts = Object.fromEntries(process.argv.slice(2).map((a) => a.split("=")).map(([k, v]) => [k, Number(v)]));
const from = opts.from ?? 0;
const to = opts.to ?? 100;
delete opts.from;
delete opts.to;
if (opts.duration) opts.duration *= 1000; // generator expects ms
const gen = spring({ keyframes: [from, to], ...opts });
let t = 0;
while (!gen.next(t).done && t < 20000) t += 10;
const n = 40;
const vals = [];
for (let i = 0; i <= n; i++) vals.push(Math.round(((gen.next((t * i) / n).value - from) / (to - from)) * 10000) / 10000);
console.log(`duration: ${t}ms`);
console.log(`linear(${vals.join(", ")})`);
