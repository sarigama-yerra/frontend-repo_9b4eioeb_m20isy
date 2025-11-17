import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Ari Studio</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Dribbble</a>
            <a href="#" className="hover:text-white">Behance</a>
            <a href="#" className="hover:text-white">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
