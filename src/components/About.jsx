export default function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-5 text-slate-300 leading-relaxed">
              I’m Ari, a designer-engineer focused on simple, beautiful interfaces. I work end‑to‑end: from product thinking and visual direction to design systems and front‑end implementation. My approach is minimal on the surface, expressive in motion, and rigorous in systems.
            </p>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Tools I trust: Figma, Framer, React, Tailwind, Radix, and a lot of white space.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-white font-medium">Capabilities</h3>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-300 text-sm">
              <li>Design Systems</li>
              <li>Interaction Design</li>
              <li>Prototyping</li>
              <li>Accessibility</li>
              <li>Frontend Architecture</li>
              <li>Performance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
