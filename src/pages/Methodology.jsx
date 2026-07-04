import React, { useState, useEffect, useRef } from 'react'
import { Map, Layers, Users, ClipboardCheck, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PortCard from '../components/PortCard'

gsap.registerPlugin(ScrollTrigger)

function Methodology() {
  const [selectedPort, setSelectedPort] = useState('klang')
  const sectionRef = useRef(null)

  const portDetails = {
    klang: {
      name: 'Port Klang', location: 'Selangor, Malaysia (West Coast)', throughput: '14.0M+ TEUs',
      role: 'Malaysia\'s primary load center and maritime gateway, handling diverse international container flows and general cargo.',
      focus: 'Port Community System (PCS) Hub', digitalStatus: 'High Maturity',
      details: [
        'Central hub for national shipping clearance and automated customs integration.',
        'Characterized by a mature physical infrastructure transitioning to a unified electronic documentation gateway.',
        'High participant density of freight forwarders, logistics brokers, and terminal operators.'
      ]
    },
    ptp: {
      name: 'Port of Tanjung Pelepas (PTP)', location: 'Johor, Malaysia (South Coast)', throughput: '12.5M+ TEUs',
      role: 'A major global transshipment hub located strategically on the Malacca Straits, specializing in high-velocity container transfers.',
      focus: 'Yard Automation & IoT', digitalStatus: 'Advanced Automation',
      details: [
        'Leader in automating quay crane telemetry and automated guided vehicles (AGVs).',
        'Extensive implementation of IoT sensors on container stacks and RTG cranes to reduce container re-handling.',
        'Highly integrated with global shipping line scheduling platforms (such as Maersk/APM Terminals).'
      ]
    },
    penang: {
      name: 'Penang Port', location: 'Penang, Malaysia (North Coast)', throughput: '1.5M+ TEUs',
      role: 'The primary gateway for northern regional trade, feeding industrial logistics channels and connecting regional SMEs to international routes.',
      focus: 'Document Speed & Integration', digitalStatus: 'Medium Maturity',
      details: [
        'Plays a vital role in regional food processing, electronics, and semiconductor supply chains.',
        'Focuses on cross-border paperwork expediency, cargo tracking, and customs clearing portals.',
        'Serves as an illustrative model for digital port ecosystems in smaller feeder ports.'
      ]
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.meth-fade', {
        opacity: 0, y: 30, duration: 0.8, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="flex flex-col gap-10">
      <div className="flex flex-col gap-3 meth-fade">
        <div className="section-label">
          <span className="h-px w-8 bg-brand-400" />
          <Layers className="h-3 w-3" />
          <span>Chapter 3 — Research Methodology</span>
        </div>
        <h2 className="text-display-lg font-bold font-display tracking-tight text-slate-800 text-balance">
          Methodological Framework & Sample Design
        </h2>
        <p className="text-sm text-slate-500 font-mono leading-relaxed max-w-4xl">
          A quantitative, cross-sectional survey design was deployed to operationalize the variables. The target population comprised maritime professionals directly involved in the operations and tech integration of Malaysia's load centers.
        </p>
      </div>

      <div className="meth-fade grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {[
          { icon: ClipboardCheck, label: 'Survey Design', title: '5-point Likert Questionnaire', desc: 'Structured scales measuring DPE adoption, perceived POP gains, and downstream GSCE efficiency.' },
          { icon: Users, label: 'Participants', title: 'N = 200 Respondents', desc: 'Purposive sampling of Port Authorities, Terminal Operators, Freight Forwarders, and Shipping Line executives.' },
          { icon: Map, label: 'Locations', title: '3 Key Malaysian Ports', desc: 'Selected load hubs represent varied operational scales, geographic locations, and levels of automation.' }
        ].map((item, i) => {
          const Icon = item.icon
          return (
            <div key={i} className="stat-card p-5 sm:p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-brand-600 mb-1">
                <Icon className="h-4 w-4" />
                <span className="font-mono text-xs font-bold uppercase tracking-wider">{item.label}</span>
              </div>
              <span className="text-sm font-bold text-slate-800 font-display">{item.title}</span>
              <p className="text-xs text-slate-500 font-mono leading-relaxed">{item.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="meth-fade flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-display-md font-bold font-display text-slate-800 flex items-center gap-3">
            <span className="h-2 w-2 bg-brand-500 rounded-full" />
            Port Case Studies Explorer
          </h3>
          <p className="text-xs text-slate-400 font-mono">
            Click on a port card to view the specific operational profile and digital footprint in this study.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <PortCard id="klang" name="Port Klang" location="Selangor, Malaysia" throughput="14.0 Million TEUs" role="National Container Gateway and Primary Load Center of Malaysia." focus="Port Community System (PCS)" digitalStatus="High Maturity" isActive={selectedPort === 'klang'} onClick={() => setSelectedPort('klang')} />
          <PortCard id="ptp" name="Port of Tanjung Pelepas" location="Johor, Malaysia" throughput="12.5 Million TEUs" role="Transshipment Hub specializing in automation and yard crane telemetry." focus="AI & Yard Crane Automation" digitalStatus="Advanced Automation" isActive={selectedPort === 'ptp'} onClick={() => setSelectedPort('ptp')} />
          <PortCard id="penang" name="Penang Port" location="Penang, Malaysia" throughput="1.5 Million TEUs" role="Northern gateway catering to industrial manufacturing logistics and regional SMEs." focus="Documentation Speed" digitalStatus="Medium Maturity" isActive={selectedPort === 'penang'} onClick={() => setSelectedPort('penang')} />
        </div>

        <div className="stat-card p-6 transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4 mb-4">
            <span className="text-base font-bold text-brand-700 uppercase tracking-wider font-display">
              {portDetails[selectedPort].name}
            </span>
            <span className="text-[10px] text-slate-400 bg-slate-50 px-2 py-1 rounded border border-slate-200 font-mono">
              {portDetails[selectedPort].location}
            </span>
          </div>

          <p className="text-sm text-slate-600 font-mono leading-relaxed mb-4">
            {portDetails[selectedPort].role}
          </p>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-slate-400 text-[10px] uppercase tracking-widest font-mono">Digital Footprint Studied:</span>
            <div className="flex flex-col gap-2">
              {portDetails[selectedPort].details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <ArrowRight className="h-4 w-4 text-brand-500 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-600 font-mono leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Methodology
