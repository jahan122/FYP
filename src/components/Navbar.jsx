import React, { useState, useEffect } from 'react'
import { Anchor, Menu, X, BarChart2, Compass, Layers, ShieldAlert } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Overview', icon: Compass },
  { id: 'framework', label: 'Research Model', icon: Anchor },
  { id: 'methodology', label: 'Methodology', icon: Layers },
  { id: 'findings', label: 'Findings', icon: BarChart2 },
  { id: 'roadmap', label: 'Paradox', icon: ShieldAlert }
]

function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-soft'
          : 'bg-white/40 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="p-2 rounded-lg border border-slate-200 bg-white/80 group-hover:border-brand-300 group-hover:bg-brand-50 transition-all duration-300">
              <Anchor className="h-4 w-4 text-brand-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm sm:text-base tracking-wider text-slate-800 group-hover:text-brand-600 transition-colors">
                PORT 4.0
              </span>
              <span className="font-mono text-[8px] text-slate-400 uppercase tracking-[0.2em]">
                M.J. Sultan Thesis
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activePage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 border border-brand-200'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? 'text-brand-500' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              )
            })}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded text-slate-500 hover:text-brand-600 hover:bg-slate-100 transition-all"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-soft animate-fade-in">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activePage === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => { onNavigate(item.id); setMobileMenuOpen(false) }}
                  className={`flex items-center gap-3 w-full px-4 py-3 rounded text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-brand-50 border-l-2 border-brand-500 text-brand-700'
                      : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50 border-l-2 border-transparent'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
