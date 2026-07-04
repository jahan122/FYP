import React, { useState, useEffect, useRef } from 'react'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Framework from './pages/Framework'
import Methodology from './pages/Methodology'
import Findings from './pages/Findings'
import Roadmap from './pages/Roadmap'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const leftDoorRef = useRef(null)
  const rightDoorRef = useRef(null)
  const transitionContainerRef = useRef(null)
  const logoTextRef = useRef(null)

  const lenis = useLenis(({ scroll, limit }) => {
    if (limit > 0) setScrollProgress((scroll / limit) * 100)
  })

  const handleScrollTo = (sectionId) => {
    if (lenis) {
      lenis.scrollTo(`#${sectionId}`, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  useEffect(() => {
    gsap.set(leftDoorRef.current, { x: '0%' })
    gsap.set(rightDoorRef.current, { x: '0%' })
    gsap.set(logoTextRef.current, { opacity: 1, scale: 1 })

    const tl = gsap.timeline({ delay: 0.5, defaults: { duration: 0.9, ease: 'power3.inOut' } })
    tl.to(logoTextRef.current, { opacity: 0, scale: 0.8, duration: 0.4 })
      .to(leftDoorRef.current, { x: '-100%' })
      .to(rightDoorRef.current, { x: '100%' }, '<')
      .set(transitionContainerRef.current, { pointerEvents: 'none' })
  }, [])

  useEffect(() => {
    const sections = ['home', 'framework', 'methodology', 'findings', 'roadmap']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { root: null, rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      <div className="relative min-h-screen bg-white text-slate-800">

        {/* Subtle background texture */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,212,203,0.04),transparent_70%)]" />
          <div className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(0,212,203,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,212,203,0.04) 1px, transparent 1px)',
              backgroundSize: '6rem 6rem'
            }}
          />
        </div>

        <Navbar activePage={activeSection} onNavigate={handleScrollTo} />

        <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <section id="home" className="scroll-mt-28 min-h-screen flex items-center">
            <Home onScrollTo={handleScrollTo} />
          </section>

          <div className="section-divider my-24 sm:my-32" />

          <section id="framework" className="scroll-mt-28">
            <Framework />
          </section>

          <div className="section-divider my-24 sm:my-32" />

          <section id="methodology" className="scroll-mt-28">
            <Methodology />
          </section>

          <div className="section-divider my-24 sm:my-32" />

          <section id="findings" className="scroll-mt-28">
            <Findings />
          </section>

          <div className="section-divider my-24 sm:my-32" />

          <section id="roadmap" className="scroll-mt-28">
            <Roadmap />
          </section>
        </main>

        <Footer onNavigate={handleScrollTo} />

        {/* Scroll progress indicator */}
        <div className="fixed right-0 top-0 h-full w-[3px] z-40 hidden md:block">
          <div className="w-full bg-gradient-to-b from-brand-400 to-brand-600 transition-all duration-150" style={{ height: `${scrollProgress}%` }} />
        </div>

        {/* Initial door transition */}
        <div ref={transitionContainerRef} className="fixed inset-0 z-50 flex overflow-hidden">
          <div ref={leftDoorRef} className="w-1/2 h-full bg-white flex flex-col justify-center items-end pr-8 sm:pr-16 relative">
            <div className="absolute inset-y-0 left-0 w-full flex justify-between pointer-events-none opacity-[0.03]">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-full w-10 bg-navy-900 border-x border-white" />
              ))}
            </div>
            <div className="border border-slate-200 p-3 sm:p-5 rounded bg-white font-mono text-[9px] sm:text-xs text-slate-400 select-none max-w-xs text-right">
              <div className="tracking-widest">CONTAINER ID: MY-PK-2026</div>
              <div className="tracking-widest">OPERATOR: MAS-LOGISTICS</div>
              <div className="tracking-widest">DESTINATION: PORT KLANG</div>
              <div className="tracking-widest text-brand-600">STATUS: TRANSIT</div>
            </div>
          </div>

          <div ref={rightDoorRef} className="w-1/2 h-full bg-white flex flex-col justify-center items-start pl-8 sm:pl-16 relative">
            <div className="absolute inset-y-0 right-0 w-full flex justify-between pointer-events-none opacity-[0.03]">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-full w-10 bg-navy-900 border-x border-white" />
              ))}
            </div>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 h-24 w-[2px] bg-amber-400 shadow rounded" />
            <div className="border border-slate-200 p-3 sm:p-5 rounded bg-white font-mono text-[9px] sm:text-xs text-slate-400 select-none max-w-xs text-left">
              <div className="tracking-widest">GROSS WT: 200,125 KG</div>
              <div className="tracking-widest">NET WT: 189,500 KG</div>
              <div className="tracking-widest">SEAL NO: 56360125009</div>
              <div className="tracking-widest text-brand-600">TRANSIT LOAD: COMPLETE</div>
            </div>
          </div>

          <div ref={logoTextRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none text-center">
            <div className="text-4xl sm:text-6xl font-black font-display tracking-wider text-brand-600">
              PORT 4.0
            </div>
            <div className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-slate-400 mt-3 uppercase">
              Digital Transformation Loading
            </div>
          </div>
        </div>

      </div>
    </ReactLenis>
  )
}

export default App
