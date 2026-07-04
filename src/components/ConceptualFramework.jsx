import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Activity, Cpu } from 'lucide-react'

function ConceptualFramework() {
  const [selectedNode, setSelectedNode] = useState('dpe')
  const [hoveredPath, setHoveredPath] = useState(null)

  const dpeNodeRef = useRef(null)
  const popNodeRef = useRef(null)
  const gsceNodeRef = useRef(null)

  useEffect(() => {
    const floatAnim = (ref, delay, yVal = 6) =>
      gsap.to(ref.current, { y: yVal, duration: 2.5 + delay, repeat: -1, yoyo: true, ease: 'sine.inOut', delay })

    const anims = [
      floatAnim(dpeNodeRef, 0, 6),
      floatAnim(popNodeRef, 0.4, -5),
      floatAnim(gsceNodeRef, 0.8, 5)
    ]
    return () => anims.forEach(a => a.kill())
  }, [])

  const nodes = {
    dpe: {
      title: 'Digital Port Ecosystem (DPE)', type: 'Independent Variable (IV)',
      desc: 'The degree of integration and adoption of advanced technologies into the port operational ecosystem.',
      indicators: [
        { code: 'B1', label: 'Port Community Systems (PCS)', desc: 'Centralized electronic platforms connecting port stakeholders.' },
        { code: 'B2', label: 'IoT & Cyber-Physical Systems', desc: 'Real-time telemetry from cranes, berths, and terminal sensors.' },
        { code: 'B3', label: 'Artificial Intelligence (AI)', desc: 'Machine learning for predictive yard allocation and container flow planning.' },
        { code: 'B4', label: 'Blockchain-Based Documentation', desc: 'Secure, immutable sharing of custom clearance bills and bill of lading.' },
        { code: 'B5', label: 'Integrated Digital Ecosystem', desc: 'Cohesion and standardisation across all active technological stacks.' }
      ], color: '#00d4cb', textColor: 'text-brand-600', borderColor: 'border-brand-200'
    },
    pop: {
      title: 'Port Operational Performance (POP)', type: 'Mediating Variable (MV)',
      desc: 'Perceived internal efficiency and productivity gains resulting from digital infrastructure improvements.',
      indicators: [
        { code: 'C1', label: 'Vessel Turnaround Time', desc: 'Average time a container ship spends at berth from arrival to departure.' },
        { code: 'C2', label: 'Berth & Yard Productivity', desc: 'Containers moved per hour per crane and density optimization in yard storage.' },
        { code: 'C3', label: 'Equipment Utilization', desc: 'Active runtime optimization of Quay Cranes and Rubber Tyred Gantry (RTG).' },
        { code: 'C4', label: 'Container Throughput Efficiency', desc: 'Speed of loading, unloading, gate-in, and gate-out movements.' },
        { code: 'C5', label: 'Cost Reduction in Operations', desc: 'Lower administrative overhead, less fuel wastage, and minimized idle resource costs.' }
      ], color: '#f59e0b', textColor: 'text-amber-600', borderColor: 'border-amber-200'
    },
    gsce: {
      title: 'Global Supply Chain Efficiency (GSCE)', type: 'Dependent Variable (DV)',
      desc: 'The external downstream network improvements and seamless integration with global logistics providers.',
      indicators: [
        { code: 'D1', label: 'End-to-End Visibility', desc: 'Cargo tracking transparency for cargo owners (BCOs) across transit legs.' },
        { code: 'D2', label: 'Real-Time Information Exchange', desc: 'Instant transmission of arrival estimates, delays, and container releases.' },
        { code: 'D3', label: 'Shipping Line Collaboration', desc: 'Coordinated stowage planning and automatic scheduling interfaces.' },
        { code: 'D4', label: 'Logistics Expenditure Minimization', desc: 'Minimized demurrage, detention charges, and document processing friction.' },
        { code: 'D5', label: 'Customs & Stakeholder Integration', desc: 'Automated cross-border filings, customs approvals, and inland haulage sync.' }
      ], color: '#6366f1', textColor: 'text-indigo-600', borderColor: 'border-indigo-200'
    }
  }

  const hypotheses = {
    H1: { label: 'Hypothesis 1 (Direct Effect)', path: 'DPE → GSCE', desc: 'Digital Port Ecosystem implementation significantly positively affects Global Supply Chain Efficiency directly.', status: 'Supported (β = 0.238, p < 0.001)' },
    H2: { label: 'Hypothesis 2 (Direct Effect - Strongest)', path: 'DPE → POP', desc: 'Digital Port Ecosystem implementation significantly positively affects Port Operational Performance directly.', status: 'Supported (β = 0.460, p < 0.001)' },
    H3: { label: 'Hypothesis 3 (Direct Effect)', path: 'POP → GSCE', desc: 'Port Operational Performance significantly positively affects Global Supply Chain Efficiency directly.', status: 'Supported (β = 0.456, p < 0.001)' },
    H4: { label: 'Hypothesis 4 (Mediation Effect)', path: 'DPE → POP → GSCE', desc: 'Port Operational Performance significantly mediates the relationship between DPE and GSCE.', status: 'Supported (Partial Mediation, β = 0.210, p < 0.001)' }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-7 stat-card p-6 sm:p-8 relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] sm:min-h-[480px]">
        <div className="absolute top-4 left-6 font-mono text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
          <Activity className="h-3 w-3 text-brand-500" /> Click nodes or hover paths to interact
        </div>

        <div className="w-full max-w-[560px] aspect-[4/3] relative z-10 select-none">
          <svg viewBox="0 0 400 300" className="w-full h-full">
            <defs>
              <linearGradient id="dpeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4cb" /><stop offset="100%" stopColor="#009990" />
              </linearGradient>
              <linearGradient id="popGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" /><stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="gsceGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#818cf8" /><stop offset="100%" stopColor="#4f46e5" />
              </linearGradient>
            </defs>

            <g className="cursor-pointer" onMouseEnter={() => setHoveredPath('H2')} onMouseLeave={() => setHoveredPath(null)}>
              <line x1="110" y1="80" x2="290" y2="80" stroke={hoveredPath === 'H2' ? '#00d4cb' : '#cbd5e1'} strokeWidth={hoveredPath === 'H2' ? '3' : '2'} className="transition-all" />
              <polygon points="290,80 282,75 282,85" fill={hoveredPath === 'H2' ? '#00d4cb' : '#94a3b8'} />
              <rect x="185" y="65" width="30" height="15" rx="3" fill="#fff" stroke={hoveredPath === 'H2' ? '#00d4cb' : '#e2e8f0'} strokeWidth="1" />
              <text x="200" y="76" fill={hoveredPath === 'H2' ? '#00d4cb' : '#64748b'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">H2</text>
            </g>

            <g className="cursor-pointer" onMouseEnter={() => setHoveredPath('H1')} onMouseLeave={() => setHoveredPath(null)}>
              <line x1="90" y1="110" x2="175" y2="195" stroke={hoveredPath === 'H1' ? '#00d4cb' : '#cbd5e1'} strokeWidth={hoveredPath === 'H1' ? '3' : '2'} className="transition-all" />
              <polygon points="175,195 166,190 171,185" fill={hoveredPath === 'H1' ? '#00d4cb' : '#94a3b8'} />
              <rect x="110" y="145" width="30" height="15" rx="3" fill="#fff" stroke={hoveredPath === 'H1' ? '#00d4cb' : '#e2e8f0'} strokeWidth="1" />
              <text x="125" y="156" fill={hoveredPath === 'H1' ? '#00d4cb' : '#64748b'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">H1</text>
            </g>

            <g className="cursor-pointer" onMouseEnter={() => setHoveredPath('H3')} onMouseLeave={() => setHoveredPath(null)}>
              <line x1="310" y1="110" x2="225" y2="195" stroke={hoveredPath === 'H3' ? '#f59e0b' : '#cbd5e1'} strokeWidth={hoveredPath === 'H3' ? '3' : '2'} className="transition-all" />
              <polygon points="225,195 229,185 234,190" fill={hoveredPath === 'H3' ? '#f59e0b' : '#94a3b8'} />
              <rect x="260" y="145" width="30" height="15" rx="3" fill="#fff" stroke={hoveredPath === 'H3' ? '#f59e0b' : '#e2e8f0'} strokeWidth="1" />
              <text x="275" y="156" fill={hoveredPath === 'H3' ? '#f59e0b' : '#64748b'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">H3</text>
            </g>

            <g className="cursor-pointer" onMouseEnter={() => setHoveredPath('H4')} onMouseLeave={() => setHoveredPath(null)}>
              <path d="M 100 90 A 150 150 0 0 0 200 200" fill="none" stroke={hoveredPath === 'H4' ? '#818cf8' : '#cbd5e1'} strokeWidth={hoveredPath === 'H4' ? '3' : '2'} strokeDasharray="4,4" className="transition-all" />
              <polygon points="200,200 193,193 198,190" fill={hoveredPath === 'H4' ? '#818cf8' : '#94a3b8'} />
              <rect x="185" y="125" width="30" height="15" rx="3" fill="#fff" stroke={hoveredPath === 'H4' ? '#818cf8' : '#e2e8f0'} strokeWidth="1" />
              <text x="200" y="136" fill={hoveredPath === 'H4' ? '#818cf8' : '#64748b'} fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">H4</text>
            </g>

            <g ref={dpeNodeRef} className="cursor-pointer" onClick={() => setSelectedNode('dpe')}>
              <circle cx="90" cy="80" r="36" fill="url(#dpeGrad)" stroke={selectedNode === 'dpe' ? '#1e293b' : 'transparent'} strokeWidth="2.5" className="transition-all" />
              <text x="90" y="76" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">DIGITAL PORT</text>
              <text x="90" y="88" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ECOSYSTEM</text>
              <text x="90" y="101" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="monospace" textAnchor="middle">[DPE / IV]</text>
            </g>

            <g ref={popNodeRef} className="cursor-pointer" onClick={() => setSelectedNode('pop')}>
              <circle cx="310" cy="80" r="36" fill="url(#popGrad)" stroke={selectedNode === 'pop' ? '#1e293b' : 'transparent'} strokeWidth="2.5" className="transition-all" />
              <text x="310" y="76" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PORT OPERATIONAL</text>
              <text x="310" y="88" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PERFORMANCE</text>
              <text x="310" y="101" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="monospace" textAnchor="middle">[POP / MV]</text>
            </g>

            <g ref={gsceNodeRef} className="cursor-pointer" onClick={() => setSelectedNode('gsce')}>
              <circle cx="200" cy="210" r="36" fill="url(#gsceGrad)" stroke={selectedNode === 'gsce' ? '#1e293b' : 'transparent'} strokeWidth="2.5" className="transition-all" />
              <text x="200" y="206" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SUPPLY CHAIN</text>
              <text x="200" y="218" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EFFICIENCY</text>
              <text x="200" y="231" fill="rgba(255,255,255,0.8)" fontSize="7" fontFamily="monospace" textAnchor="middle">[GSCE / DV]</text>
            </g>
          </svg>
        </div>

        {hoveredPath && (
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-slate-200 bg-white/95 shadow-soft animate-fade-in z-20">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-brand-700 font-mono tracking-wide">{hypotheses[hoveredPath].label}</span>
              <span className="text-[10px] font-mono bg-brand-50 text-brand-600 px-1.5 py-0.5 rounded border border-brand-200">{hypotheses[hoveredPath].path}</span>
            </div>
            <p className="text-xs text-slate-500 mb-2 font-mono leading-relaxed">{hypotheses[hoveredPath].desc}</p>
            <div className="text-xs font-semibold text-brand-600 flex items-center gap-1">
              <span className="h-1.5 w-1.5 bg-brand-500 rounded-full" />
              {hypotheses[hoveredPath].status}
            </div>
          </div>
        )}
      </div>

      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className={`stat-card p-6 border ${nodes[selectedNode].borderColor} transition-all duration-300`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-slate-400 bg-slate-50 px-2.5 py-1 rounded border border-slate-200">
              {nodes[selectedNode].type}
            </span>
            <Cpu className={`h-5 w-5 ${nodes[selectedNode].textColor}`} />
          </div>
          <h3 className={`text-xl font-bold font-display ${nodes[selectedNode].textColor} mb-2`}>
            {nodes[selectedNode].title}
          </h3>
          <p className="text-sm text-slate-500 leading-relaxed font-mono">
            {nodes[selectedNode].desc}
          </p>
        </div>

        <div className="stat-card rounded-xl p-6 max-h-[380px] overflow-y-auto">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">
            Construct Indicators
          </h4>
          <div className="flex flex-col gap-3.5">
            {nodes[selectedNode].indicators.map((ind) => (
              <div key={ind.code} className="flex items-start gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 text-white"
                  style={{ background: nodes[selectedNode].color }}>
                  {ind.code}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-slate-800">{ind.label}</span>
                  <span className="text-xs text-slate-500 font-mono leading-relaxed">{ind.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConceptualFramework
