import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[85vh] lg:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast; pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-300/80 mb-4">
              Creative UI Designer • Frontend Developer
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.05]">
              Crafting minimal, human interfaces for modern products
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              I blend design systems, interaction, and code to deliver calm, considered experiences. Available for select collaborations.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#work" className="px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-medium hover:bg-slate-200 transition-colors">View Work</a>
              <a href="#contact" className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm hover:border-white/40 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
