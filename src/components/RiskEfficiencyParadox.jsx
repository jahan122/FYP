import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Shield, ShieldAlert, Zap, Lock, Server } from 'lucide-react'

function RiskEfficiencyParadox() {
  const [sliderVal, setSliderVal] = useState(50)
  const particleContainerRef = useRef(null)

  const vesselTurnaround = Math.max(12, Math.round(36 - (sliderVal * 0.24)))
  const documentSpeed = Math.round(100 + (sliderVal * 2.2))
  const openIoTVulnerabilities = Math.round(sliderVal * 8.5)

  let statusColor = 'border-brand-200 bg-brand-50/50'
  let statusText = 'Resilient Cohesion (Optimized & Protected)'
  let statusDesc = 'Digital systems are fully integrated with localized validation protocols, maintaining high operational speed under a robust cyber defense shield.'
  let statusIcon = Shield
  let iconColor = 'text-brand-600'

  if (sliderVal < 40) {
    statusColor = 'border-amber-200 bg-amber-50/50'
    statusText = 'Security Silos (Sluggish & Containment)'
    statusDesc = 'Digitalization is restricted. Information silos prevent seamless collaboration, causing high vessel turnaround delays but eliminating external network vulnerabilities.'
    statusIcon = Lock
    iconColor = 'text-amber-600'
  } else if (sliderVal > 70) {
    statusColor = 'border-red-200 bg-red-50/50'
    statusText = 'Vulnerable Hyper-Connectivity (Fast & Dangerous)'
    statusDesc = 'Digital ecosystems are open and fast, but cybersecurity is treated as an isolated IT function. Threat vectors are highly expanded, creating structural risks.'
    statusIcon = ShieldAlert
    iconColor = 'text-red-500'
  }

  useEffect(() => {
    const container = particleContainerRef.current
    if (!container) return
    container.innerHTML = ''

    const particleCount = Math.max(2, Math.round(sliderVal / 5))
    const speed = Math.max(0.5, (100 - sliderVal) / 15)

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'absolute w-2 h-2 bg-brand-400/60 rounded-sm pointer-events-none'
      container.appendChild(particle)

      const animateParticle = (p) => {
        const startX = -10
        const startY = Math.random() * 80 + 10
        gsap.set(p, { x: startX, y: startY, opacity: 0.8 })
        const pathTl = gsap.timeline({ repeat: -1, delay: Math.random() * 2 })
        pathTl.to(p, { x: 120, y: startY, duration: speed * 1.5, ease: 'power1.inOut' })
          .to(p, { x: 220, y: startY + (Math.random() * 30 - 15), duration: speed * 1.2, ease: 'power1.inOut' })
          .to(p, { x: 340, opacity: 0, duration: speed, ease: 'power1.in' })
      }
      animateParticle(particle)
    }
  }, [sliderVal])

  return (
    <div className="stat-card p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-brand-500/5 blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-amber-500/5 blur-[80px] pointer-events-none" />

      <div className="flex flex-col gap-6 relative z-10">
        <div className="flex flex-col gap-1">
          <div className="font-mono text-[10px] sm:text-xs font-semibold text-brand-600 tracking-[0.2em] uppercase flex items-center gap-1.5">
            <Zap className="h-3 w-3" /> The Duality of Port 4.0
          </div>
          <h3 className="text-display-md font-bold font-display tracking-tight text-slate-800">
            The Risk-Efficiency Paradox
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-mono max-w-3xl">
            In Malaysian ports, increasing digital integration improves external supply chain visibility but exponentially increases the threat vectors. Drag the slider to observe this tension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7 bg-slate-900 border border-slate-800 rounded-xl p-4 sm:p-6 aspect-[16/9] relative overflow-hidden flex flex-col justify-between">
            <div className="flex justify-between items-center z-10 font-mono text-[9px] text-slate-500">
              <span>SIMULATION: PORT CARGO TELEMETRY</span>
              <span className="flex items-center gap-1"><Server className="h-3 w-3" /> STATUS: {sliderVal > 70 ? 'CRITICAL RISK' : 'STABLE'}</span>
            </div>

            <div className="relative w-full h-32 my-2 border-b border-slate-800">
              <div className="absolute bottom-0 left-6 w-36 h-8 bg-slate-800 rounded-tr-lg border-t border-r border-slate-700/50 flex items-center justify-center font-mono text-[9px] text-slate-500">
                CONTAINER HULL
              </div>
              <div className="absolute bottom-0 right-16 w-16 h-24 border-l border-r border-t border-brand-500/20">
                <div className="absolute top-0 -left-16 w-36 h-[2px] bg-brand-500/20" />
                <div className="absolute top-0 left-0 w-3 h-3 bg-brand-400/60 rounded-sm" />
              </div>
              <div ref={particleContainerRef} className="absolute inset-0 z-10 overflow-hidden" />
              {sliderVal > 60 && (
                <div className="absolute inset-0 z-20">
                  <div className="absolute top-6 left-12 h-3 w-3 bg-red-500 rounded-full animate-ping opacity-75" />
                  <div className="absolute top-6 left-12 h-3 w-3 bg-red-600 rounded-full flex items-center justify-center text-[7px] text-white font-bold font-mono">!</div>
                  {sliderVal > 80 && (
                    <>
                      <div className="absolute top-16 right-32 h-3 w-3 bg-red-500 rounded-full animate-ping opacity-75" />
                      <div className="absolute top-16 right-32 h-3 w-3 bg-red-600 rounded-full flex items-center justify-center text-[7px] text-white font-bold font-mono">!</div>
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 bg-slate-950/80 p-3 rounded-lg border border-slate-800 z-10">
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-slate-500 uppercase">Operational Speed</span>
                <span className="text-sm font-bold font-display text-brand-300">
                  {sliderVal > 80 ? 'HYPER FLOW' : sliderVal < 30 ? 'SLUGGISH DOCK' : 'BALANCED FLOW'}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-slate-500 uppercase">Active Cyber-Threats</span>
                <span className={`text-sm font-bold font-display ${sliderVal > 70 ? 'text-red-400' : 'text-brand-300'}`}>
                  {sliderVal > 70 ? 'CRITICAL WARN' : sliderVal < 35 ? 'ZERO VECTOR' : 'SHIELD SECURE'}
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4">
            {[
              { label: 'Vessel Turnaround', value: `${vesselTurnaround} Hours`, sub: sliderVal > 70 ? 'Optimized (-66%)' : 'Standard Turn', valClass: 'text-slate-800' },
              { label: 'Document Speed', value: `+${documentSpeed}%`, sub: 'β DPE → POP = 0.460', valClass: 'text-brand-600' },
              { label: 'IoT Vulnerabilities', value: `${openIoTVulnerabilities} open nodes`, sub: sliderVal > 70 ? 'Vector High' : 'Contained', valClass: sliderVal > 70 ? 'text-red-500' : 'text-slate-700' }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-400 uppercase">{item.label}</span>
                  <span className={`text-lg font-bold font-display ${item.valClass}`}>{item.value}</span>
                </div>
                <div className="text-right text-[10px] font-mono text-slate-400">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 p-5 rounded-xl flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Adjust System Balance
            </span>
            <div className="flex gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> Security Focus</span>
              <span className="flex items-center gap-1"><Zap className="h-3.5 w-3.5 text-brand-500" /> Efficiency Focus</span>
            </div>
          </div>

          <div className="relative py-2 flex items-center">
            <input type="range" min="0" max="100" value={sliderVal} onChange={(e) => setSliderVal(parseInt(e.target.value))}
              className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500 focus:outline-none" />
          </div>

          <div className={`p-4 rounded-xl border ${statusColor} transition-all duration-300 flex items-start gap-4`}>
            {React.createElement(statusIcon, { className: `h-5 w-5 shrink-0 mt-0.5 ${iconColor}` })}
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold uppercase font-mono tracking-wider text-slate-700">{statusText}</span>
              <p className="text-xs font-mono leading-relaxed text-slate-500">{statusDesc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiskEfficiencyParadox
