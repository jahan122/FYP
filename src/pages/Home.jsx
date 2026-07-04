import React, { useEffect, useRef } from 'react'
import { ArrowRight, User, BookOpen, Landmark, HelpCircle, Ship, Container, Globe, BarChart3 } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedCounterTicker from '../components/AnimatedCounter'

gsap.registerPlugin(ScrollTrigger)

function Home({ onScrollTo }) {
  const sectionRef = useRef(null)
  const tickerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-fade', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 1.1
      })

      gsap.from('.ticker-row', {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 1.8
      })

      gsap.from('.meta-card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.meta-grid', start: 'top 85%' }
      })

      gsap.from('.detail-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.detail-grid', start: 'top 85%' }
      })

      gsap.from('.scope-item', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.scope-list', start: 'top 85%' }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="w-full">
      <div className="flex flex-col gap-16 sm:gap-20">

        {/* Hero */}
        <div className="relative flex flex-col gap-8 pt-8 sm:pt-16">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-navy-500/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-col gap-4 hero-fade">
            <div className="section-label">
              <span className="h-px w-8 bg-brand-400" />
              <span>Master's Thesis Presentation</span>
              <span className="h-px w-8 bg-brand-400" />
            </div>

            <h1 className="text-hero font-black font-display tracking-tight text-balance leading-[0.9] max-w-6xl">
              <span className="text-slate-900">The Influence of</span>{' '}
              <span className="text-gradient">Digital Port Ecosystems</span>{' '}
              <span className="text-slate-900">on the Global Supply Chain</span>
            </h1>

            <p className="text-base sm:text-lg font-mono text-slate-500 border-l-2 border-brand-400 pl-5 max-w-3xl leading-relaxed">
              A Quantitative Investigation at Port Klang, Port Tanjung Pelepas, and Penang Port
            </p>
          </div>

          <button
            onClick={() => onScrollTo('framework')}
            className="group flex items-center gap-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-300 text-sm tracking-wider font-mono hero-fade self-start shadow-soft hover:shadow-glow-brand"
          >
            Explore Research Model
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

        </div>

        {/* Meta Grid */}
        <div className="meta-grid grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: User, label: 'Candidate', title: 'Muhammad Jahanzaib Sultan', sub: 'ID: 56360125009' },
            { icon: BookOpen, label: 'Degree', title: 'M.S. Maritime Operations', sub: 'Maritime Management' },
            { icon: Landmark, label: 'University', title: 'Universiti Kuala Lumpur', sub: 'MIMET Campus' }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="meta-card stat-card p-5 sm:p-6 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-brand-50 border border-brand-100 text-brand-600 shrink-0">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-bold text-slate-800 mt-1">{item.title}</span>
                  <span className="font-mono text-xs text-slate-500 mt-0.5">{item.sub}</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detail Grid */}
        <div className="detail-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="stat-card p-6 sm:p-8">
              <h3 className="text-display-md font-bold font-display text-slate-800 flex items-center gap-3 mb-4">
                <span className="h-2 w-2 bg-brand-500 rounded-full" />
                Research Context
              </h3>
              <div className="space-y-4 text-sm text-slate-600 font-mono leading-relaxed">
                <p>
                  Global supply chains are heavily reliant on maritime trade, with ports serving as critical nodes. As maritime operations enter the era of <strong className="text-slate-900">Industry 4.0 (Port 4.0)</strong>, physical infrastructure (berths, cranes, yards) must merge with digital infrastructure.
                </p>
                <p>
                  This research conducts a quantitative examination of how the implementation of <strong className="text-slate-900">Digital Port Ecosystems (DPE)</strong> (encompassing Port Community Systems, Internet of Things, Artificial Intelligence, and Blockchain documentation) impacts <strong className="text-slate-900">Global Supply Chain Efficiency (GSCE)</strong> in the Malaysian maritime gateway, specifically analyzing if this relationship is mediated by internal <strong className="text-slate-900">Port Operational Performance (POP)</strong>.
                </p>
              </div>
            </div>

            <div className="stat-card p-6 sm:p-8">
              <h3 className="text-display-md font-bold font-display text-slate-800 flex items-center gap-3 mb-4">
                <span className="h-2 w-2 bg-brand-500 rounded-full" />
                The Problem Statement
              </h3>
              <div className="space-y-4 text-sm text-slate-600 font-mono leading-relaxed">
                <p>
                  Despite high investments in port technologies, digitization in the maritime sector is often fragmented. Many ports adopt a <strong className="text-slate-900">patchwork approach</strong> — installing siloed solutions that create technical bottlenecks.
                </p>
                <p>
                  Furthermore, this fragmentation results in <strong className="text-slate-900">information asymmetry</strong> between port regulatory authorities (principals) and private terminal operator companies (agents), generating administrative friction and delaying container flows. This thesis investigates whether technology adoption translates into supply chain gains directly, or whether it requires a mediating operational layer of process coordination.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="stat-card p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-brand-500" /> Grounding Theory
              </h4>
              <h5 className="text-base font-bold text-slate-800 mb-2 font-display">
                Principal-Agent Theory (PAT)
              </h5>
              <p className="text-xs text-slate-500 font-mono leading-relaxed">
                Historically, port authorities (principals) suffer from information asymmetry regarding terminal productivity. Private terminal operators (agents) lack incentives to share transparent data. The thesis uses PAT to explain how a unified Digital Port Ecosystem (incorporating IoT sensors and Port Community Systems) reduces information asymmetry, increasing trust and accelerating container turnaround efficiency.
              </p>
            </div>

            <div className="stat-card p-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
                Research Scope
              </h4>
              <div className="scope-list flex flex-col gap-3 font-mono text-xs">
                {[
                  { label: 'Method', value: 'Quantitative (Survey-Based)' },
                  { label: 'Sample Size', value: 'N = 200 Respondents' },
                  { label: 'Key Ports', value: 'Klang, PTP, Penang' },
                  { label: 'Analysis', value: 'SmartPLS (PLS-SEM)' }
                ].map((item, i) => (
                  <div key={i} className="scope-item flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                    <span className="text-slate-500">{item.label}</span>
                    <span className="text-brand-700 font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
