export default function Work() {
  const projects = [
    {
      title: 'Nova Photos',
      desc: 'A clean, modular gallery system with motion and keyboard navigation.',
      tags: ['React', 'Framer Motion', 'Design System'],
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Minimal Commerce',
      desc: 'Lightweight storefront components focusing on clarity and speed.',
      tags: ['Next.js', 'Tailwind', 'UX'],
      image: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNaW5pbWFsJTIwQ29tbWVyY2V8ZW58MHwwfHx8MTc2MzQxMzI5OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      title: 'Slate OS',
      desc: 'A desktop-like UI kit for web apps built with accessibility in mind.',
      tags: ['Accessibility', 'TypeScript', 'Radix'],
      image: 'https://images.unsplash.com/photo-1756326468169-7df9809465b9?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjM0MTMyOTl8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ]

  return (
    <section id="work" className="relative py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Selected Work</h2>
          <a href="#" className="text-slate-300 text-sm hover:text-white">All projects →</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-medium tracking-tight">{p.title}</h3>
                <p className="mt-2 text-slate-300 text-sm">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs text-slate-300/90 bg-white/5 border border-white/10 px-2 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
