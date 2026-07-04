import React, { useEffect, useRef } from 'react'
import { Layers, Activity, HelpCircle } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ConceptualFramework from '../components/ConceptualFramework'

gsap.registerPlugin(ScrollTrigger)

function Framework() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.fw-fade', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 fw-fade">
        <div className="section-label">
          <span className="h-px w-8 bg-brand-400" />
          <Layers className="h-3 w-3" />
          <span>Chapter 2 — Literature & Framework</span>
        </div>
        <h2 className="text-display-lg font-bold font-display tracking-tight text-slate-800 text-balance">
          The Research Conceptual Framework
        </h2>
        <p className="text-sm text-slate-500 font-mono leading-relaxed max-w-4xl">
          Based on empirical literature and Principal-Agent Theory, a conceptual framework was constructed. It models the relationships between the implementation of a Digital Port Ecosystem (DPE), Port Operational Performance (POP), and Global Supply Chain Efficiency (GSCE).
        </p>
      </div>

      <div className="fw-fade">
        <ConceptualFramework />
      </div>

      <div className="fw-fade grid grid-cols-1 md:grid-cols-2 gap-6 stat-card p-6 sm:p-8">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-700 uppercase tracking-wider text-sm flex items-center gap-2 border-b border-slate-100 pb-3">
            <Activity className="h-4 w-4 text-brand-500" /> Defining the Path Relationships
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            Prior studies in maritime digitization (e.g. Nguyen & Pham, 2025) often hypothesize a direct line of value between digital maturity and global supply chain results. However, this study argues that a digital ecosystem cannot directly impact supply chains in a vacuum.
          </p>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            The model establishes <strong className="text-slate-900">Port Operational Performance (POP)</strong> as a mediator. This is because technological investments (DPE) must be absorbed and operationalized by ports first (reducing vessel loading bottlenecks, speeding up gate throughputs) before downstream logistics chains can observe improvements in visibility and documentation speed.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-700 uppercase tracking-wider text-sm flex items-center gap-2 border-b border-slate-100 pb-3">
            <HelpCircle className="h-4 w-4 text-brand-500" /> Literature Gap Addressed
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            Most empirical studies analyze digital ports in isolation, focusing only on internal terminal logistics metrics (like crane moves per hour) or regional logistics corridors.
          </p>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            This thesis addresses the gap by connecting <strong className="text-slate-900">internal port operations (POP)</strong> with <strong className="text-slate-900">external global supply chain outcomes (GSCE)</strong> in a single path model, validated using PLS-SEM. This allows cargo owners (BCOs), terminal operators, and ministries of transport to see the direct and indirect transmission of digital value in a unified, quantitative framework.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Framework
