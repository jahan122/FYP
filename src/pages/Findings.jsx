import React, { useEffect, useRef } from 'react'
import { BarChart, TrendingUp, Award } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PLSSEMModel from '../components/PLSSEMModel'

gsap.registerPlugin(ScrollTrigger)

function Findings() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.find-fade', {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 find-fade">
        <div className="section-label">
          <span className="h-px w-8 bg-brand-400" />
          <BarChart className="h-3 w-3" />
          <span>Chapter 4 — Results & Data Analysis</span>
        </div>
        <h2 className="text-display-lg font-bold font-display tracking-tight text-slate-800 text-balance">
          PLS-SEM Inner Model Assessment
        </h2>
        <p className="text-sm text-slate-500 font-mono leading-relaxed max-w-4xl">
          Using PLS-SEM (Partial Least Squares Structural Equation Modeling) via SmartPLS, the measurement model and structural model were evaluated. Click the path diagram nodes and arrows below to explore the statistical weights.
        </p>
      </div>

      <div className="find-fade">
        <PLSSEMModel />
      </div>

      <div className="find-fade grid grid-cols-1 md:grid-cols-2 gap-6 stat-card p-6 sm:p-8">
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-700 uppercase tracking-wider text-sm flex items-center gap-2 border-b border-slate-100 pb-3">
            <TrendingUp className="h-4 w-4 text-brand-500" /> Synthesis: The Transmission of Digital Value
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            The structural results prove that all hypothesized connections are positive and statistically significant (p &lt; 0.001). However, the strength of the paths reveals the core mechanics of digitization.
          </p>
          <p className="text-xs sm:text-sm text-brand-700 font-semibold font-mono leading-relaxed">
            The strongest direct path in the model is H2 (DPE &rarr; POP, &beta; = 0.460), while the direct path from technology to supply chains is weaker (H1, DPE &rarr; SCE, &beta; = 0.238).
          </p>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            This confirms that digital ecosystems primarily strengthen global supply chain outcomes <em>indirectly</em> by first improving internal operational performance (vessel turnaround, berth productivity). The significant indirect mediation path (H4, DPE &rarr; POP &rarr; SCE, &beta; = 0.210) validates this conceptual model.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-slate-700 uppercase tracking-wider text-sm flex items-center gap-2 border-b border-slate-100 pb-3">
            <Award className="h-4 w-4 text-brand-500" /> Model Explanatory Power (R&sup2; and Q&sup2;)
          </h4>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            The coefficient of determination (R&sup2;) for the dependent variable, Supply Chain Efficiency, is <strong className="text-slate-900">0.364 (36.4%)</strong>. This represents moderate explanatory power in PLS-SEM guidelines (Hair et al., 2022).
          </p>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            It acknowledges that while digital integration and internal operations are vital drivers explaining 36.4% of supply chain efficiency variations, other external macro-environmental factors also play substantial roles.
          </p>
          <p className="text-xs sm:text-sm text-slate-700 font-mono leading-relaxed">
            The predictive relevance (Q&sup2;) calculated via PLSpredict yielded positive values for all indicators, validating the model's out-of-sample predictive capability.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Findings
