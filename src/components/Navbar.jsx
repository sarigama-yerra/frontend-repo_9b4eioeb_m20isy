import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/70 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">Ari Studio</a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors text-sm">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="text-sm px-3 py-1.5 rounded-full border border-white/15 text-white hover:border-white/30 transition-colors">Let’s talk</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-full border border-white/15 text-white text-center">Let’s talk</a>
          </div>
        </div>
      )}
    </header>
  )
}
