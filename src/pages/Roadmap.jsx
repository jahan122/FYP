import React, { useEffect, useRef } from 'react'
import { Shield, ShieldAlert, Cpu, Landmark } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import RiskEfficiencyParadox from '../components/RiskEfficiencyParadox'

gsap.registerPlugin(ScrollTrigger)

function Roadmap() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.road-fade', {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 road-fade">
        <div className="section-label">
          <span className="h-px w-8 bg-brand-400" />
          <Shield className="h-3 w-3" />
          <span>Chapter 5 — Discussion & Roadmap</span>
        </div>
        <h2 className="text-display-lg font-bold font-display tracking-tight text-slate-800 text-balance">
          Theoretical Duality & Managerial Recommendations
        </h2>
        <p className="text-sm text-slate-500 font-mono leading-relaxed max-w-4xl">
          We synthesize the quantitative results into actionable policies for port executives and national administrators, balancing operational acceleration with necessary cybersecurity safeguards.
        </p>
      </div>

      <div className="road-fade">
        <RiskEfficiencyParadox />
      </div>

      <div className="road-fade flex flex-col gap-6">
        <h3 className="text-display-md font-bold font-display text-slate-800 flex items-center gap-3">
          <span className="h-2 w-2 bg-brand-500 rounded-full" />
          A Roadmap for Malaysia: 3 Strategic Actions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            { tag: 'POLICY', tagClass: 'bg-brand-50 text-brand-700 border-brand-200', icon: Landmark, iconClass: 'text-brand-600', title: '1. Mandatory PCS Harmonization', desc: 'Since Port Operational Performance acts as a critical mediator, the Ministry of Transport should mandate a unified Port Community System standard across all 13 major ports in Malaysia. This will eliminate data ownership disputes and technical silos.' },
            { tag: 'INCENTIVES', tagClass: 'bg-amber-50 text-amber-700 border-amber-200', icon: Cpu, iconClass: 'text-amber-600', title: '2. Incentivize Cognitive Tech', desc: 'Based on the significant weight of indicators B3 (AI yard allocation) and B4 (Blockchain verification), the government should provide tax breaks for terminal operators to invest in AI-driven predictive maintenance.' },
            { tag: 'SECURITY', tagClass: 'bg-red-50 text-red-700 border-red-200', icon: ShieldAlert, iconClass: 'text-red-500', title: '3. Cyber-Physical Audits', desc: 'To resolve the Risk-Efficiency Paradox, hubs like PTP and Port Klang must execute integrated risk intelligence audits. Standard physical security must be combined with IoT sensor encryption.' }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="stat-card p-6 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <span className={`font-mono text-[9px] font-bold px-2 py-1 rounded border ${item.tagClass}`}>{item.tag}</span>
                  <Icon className={`h-5 w-5 ${item.iconClass}`} />
                </div>
                <h4 className="text-sm font-bold text-slate-800 leading-tight font-display">{item.title}</h4>
                <p className="text-xs text-slate-500 font-mono leading-relaxed">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="road-fade grid grid-cols-1 md:grid-cols-2 gap-6 stat-card p-6 sm:p-8">
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[10px] font-mono">
            Research Limitations & Future Directions
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 font-mono leading-relaxed">
            <strong className="text-slate-700">Cross-Sectional Limitation:</strong> The study captured a snapshot of digital maturity. Future research should utilize longitudinal data to evaluate progress as Digital Twins and autonomous cargo networks develop.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-mono leading-relaxed">
            <strong className="text-slate-700">Regional Digital Divide:</strong> While load hubs like PTP and Port Klang represent the nation's core cargo centers, smaller regional ports in East Malaysia face unique local digital divide challenges.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-slate-400 uppercase tracking-wider text-[10px] font-mono">
            Concluding Summary
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 font-mono leading-relaxed">
            The transition to <strong className="text-slate-800">Port 4.0</strong> is no longer a strategic luxury, but a survival necessity for Malaysia's logistics industry.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-mono leading-relaxed">
            By proving that the path to supply chain efficiency is mediated by internal operational excellence, this thesis shifts focus from sheer technology acquisition to process-driven integration. Securing this digital layer via cyber-resilience ensures sustainable competitiveness.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
