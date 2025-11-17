import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending…')
    // This is a visual demo only; wire to backend later if needed
    setTimeout(() => setStatus('Thanks — I will get back to you soon.'), 800)
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">Let’s build something minimal</h2>
        <p className="mt-3 text-slate-300">Tell me about your project. I usually respond within 24 hours.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Name" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20"/>
            <input required type="email" placeholder="Email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20"/>
          </div>
          <input placeholder="Company / Website" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20"/>
          <textarea required placeholder="Project details" rows="5" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/20"/>
          <div className="flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-medium hover:bg-slate-200 transition-colors">Send</button>
            <span className="text-slate-300 text-sm">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
