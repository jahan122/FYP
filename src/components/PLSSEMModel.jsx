import React, { useState } from 'react'
import { CheckCircle, BarChart, Table } from 'lucide-react'

function PLSSEMModel() {
  const [selectedPath, setSelectedPath] = useState('dpe_pop')

  const paths = {
    dpe_pop: {
      label: 'Digital Port Ecosystem (DPE) → Port Operational Performance (POP)',
      hypothesis: 'H2 (Direct Relationship)', beta: '0.460', tStat: '7.770', pValue: '0.000 (< 0.001)',
      status: 'Supported', strength: 'Strongest Direct Path',
      description: 'Shows that digital transformations like Port Community Systems, IoT telemetry, and predictive AI algorithms have the immediate strongest direct impact internally inside Malaysian ports.'
    },
    pop_sce: {
      label: 'Port Operational Performance (POP) → Supply Chain Efficiency (SCE)',
      hypothesis: 'H3 (Direct Relationship)', beta: '0.456', tStat: '8.608', pValue: '0.000 (< 0.001)',
      status: 'Supported', strength: 'Very Strong Direct Path',
      description: 'Confirms that internal operational improvements (reducing vessel turnaround times, improving berth productivity) are primary conduits that transmit efficiency gains to external shipping lines.'
    },
    dpe_sce: {
      label: 'Digital Port Ecosystem (DPE) → Supply Chain Efficiency (SCE)',
      hypothesis: 'H1 (Direct Relationship)', beta: '0.238', tStat: '3.936', pValue: '0.000 (< 0.001)',
      status: 'Supported', strength: 'Moderate Direct Path',
      description: 'Identifies that digital ecosystems also directly improve supply chain visibility and document processing speed.'
    },
    mediation: {
      label: 'DPE → POP → Supply Chain Efficiency (SCE)',
      hypothesis: 'H4 (Mediation Relationship)', beta: '0.210', tStat: '5.485', pValue: '0.000 (< 0.001)',
      status: 'Supported (Partial Mediation)', strength: 'Significant Mediation Effect',
      description: 'Proves the critical role of port operational performance as a mediator. Digital investments generate the most supply chain value when translated into operational efficiency first.'
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 stat-card p-6 relative flex flex-col items-center">
          <div className="self-start font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-1.5">
            <BarChart className="h-3 w-3 text-brand-500" /> Figure 4-5: Structural Model Results (SmartPLS Output)
          </div>

          <div className="w-full max-w-[560px] aspect-[16/7] relative z-10 select-none">
            <svg viewBox="0 0 540 200" className="w-full h-full">
              <g className="cursor-pointer" onClick={() => setSelectedPath('dpe_pop')}>
                <rect x="10" y="60" width="100" height="60" rx="8" fill="#f8fafc" stroke={selectedPath === 'dpe_pop' || selectedPath === 'dpe_sce' ? '#00d4cb' : '#e2e8f0'} strokeWidth="1.5" />
                <text x="60" y="85" fill="#1e293b" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">DIGITAL PORT</text>
                <text x="60" y="98" fill="#1e293b" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">ECOSYSTEM</text>
                <text x="60" y="110" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">Indicators B1-B5</text>
              </g>

              <g className="cursor-pointer" onClick={() => setSelectedPath('dpe_pop')}>
                <rect x="220" y="60" width="100" height="60" rx="8" fill="#f8fafc" stroke={selectedPath === 'dpe_pop' || selectedPath === 'pop_sce' ? '#f59e0b' : '#e2e8f0'} strokeWidth="1.5" />
                <text x="270" y="80" fill="#1e293b" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PORT OPERATIONAL</text>
                <text x="270" y="92" fill="#1e293b" fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">PERFORMANCE</text>
                <text x="270" y="104" fill="#d97706" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">R² = 0.212</text>
                <text x="270" y="113" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">Indicators C1-C5</text>
              </g>

              <g className="cursor-pointer" onClick={() => setSelectedPath('pop_sce')}>
                <rect x="430" y="60" width="100" height="60" rx="8" fill="#f8fafc" stroke={selectedPath === 'pop_sce' || selectedPath === 'dpe_sce' ? '#818cf8' : '#e2e8f0'} strokeWidth="1.5" />
                <text x="480" y="80" fill="#1e293b" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">SUPPLY CHAIN</text>
                <text x="480" y="92" fill="#1e293b" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">EFFICIENCY</text>
                <text x="480" y="104" fill="#6366f1" fontSize="9" fontWeight="bold" fontFamily="monospace" textAnchor="middle">R² = 0.364</text>
                <text x="480" y="113" fill="#64748b" fontSize="7" fontFamily="monospace" textAnchor="middle">Indicators D1-D5</text>
              </g>

              <g className="cursor-pointer" onClick={() => setSelectedPath('dpe_pop')}>
                <line x1="110" y1="90" x2="220" y2="90" stroke={selectedPath === 'dpe_pop' ? '#00d4cb' : '#94a3b8'} strokeWidth={selectedPath === 'dpe_pop' ? '2.5' : '1.5'} />
                <polygon points="220,90 212,85 212,95" fill={selectedPath === 'dpe_pop' ? '#00d4cb' : '#94a3b8'} />
                <rect x="145" y="78" width="30" height="13" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
                <text x="160" y="88" fill={selectedPath === 'dpe_pop' ? '#00d4cb' : '#64748b'} fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">0.460</text>
              </g>

              <g className="cursor-pointer" onClick={() => setSelectedPath('pop_sce')}>
                <line x1="320" y1="90" x2="430" y2="90" stroke={selectedPath === 'pop_sce' ? '#818cf8' : '#94a3b8'} strokeWidth={selectedPath === 'pop_sce' ? '2.5' : '1.5'} />
                <polygon points="430,90 422,85 422,95" fill={selectedPath === 'pop_sce' ? '#818cf8' : '#94a3b8'} />
                <rect x="355" y="78" width="30" height="13" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
                <text x="370" y="88" fill={selectedPath === 'pop_sce' ? '#818cf8' : '#64748b'} fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">0.456</text>
              </g>

              <g className="cursor-pointer" onClick={() => setSelectedPath('dpe_sce')}>
                <path d="M 60 120 Q 270 180 480 120" fill="none" stroke={selectedPath === 'dpe_sce' ? '#00d4cb' : '#94a3b8'} strokeWidth={selectedPath === 'dpe_sce' ? '2.5' : '1.5'} />
                <polygon points="480,120 470,125 474,117" fill={selectedPath === 'dpe_sce' ? '#00d4cb' : '#94a3b8'} />
                <rect x="255" y="143" width="30" height="13" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
                <text x="270" y="153" fill={selectedPath === 'dpe_sce' ? '#00d4cb' : '#64748b'} fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">0.238</text>
              </g>

              <g className="cursor-pointer" onClick={() => setSelectedPath('mediation')}>
                <path d="M 60 60 Q 270 10 480 60" fill="none" stroke={selectedPath === 'mediation' ? '#64748b' : '#cbd5e1'} strokeWidth={selectedPath === 'mediation' ? '2' : '1'} strokeDasharray="3,3" />
                <polygon points="480,60 474,52 470,57" fill={selectedPath === 'mediation' ? '#64748b' : '#cbd5e1'} />
                <rect x="255" y="23" width="30" height="13" rx="3" fill="#fff" stroke="#e2e8f0" strokeWidth="0.5" />
                <text x="270" y="33" fill={selectedPath === 'mediation' ? '#475569' : '#94a3b8'} fontSize="8" fontWeight="bold" fontFamily="monospace" textAnchor="middle">0.210</text>
              </g>
            </svg>
          </div>

          <div className="w-full flex justify-around mt-4 pt-3 border-t border-slate-100 font-mono text-[9px] text-slate-500">
            {[
              { key: 'dpe_pop', label: 'PATH H2' }, { key: 'pop_sce', label: 'PATH H3' },
              { key: 'dpe_sce', label: 'PATH H1' }, { key: 'mediation', label: 'PATH H4 (MEDIATION)' }
            ].map(item => (
              <button key={item.key} onClick={() => setSelectedPath(item.key)}
                className={`transition-colors ${selectedPath === item.key ? 'text-brand-600 font-bold' : 'hover:text-slate-700'}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 stat-card p-6 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[10px] text-brand-600 font-bold uppercase tracking-wider">
              Path Assessment Context
            </span>
            <h4 className="text-base font-bold font-display text-slate-800 leading-tight">
              {paths[selectedPath].label}
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100 font-mono text-xs">
            <div className="flex flex-col gap-1">
              <span className="text-[9px] text-slate-400 uppercase">Hypothesis Ref</span>
              <span className="font-bold text-slate-700">{paths[selectedPath].hypothesis}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] text-slate-400 uppercase">Path Coeff (β)</span>
              <span className="font-bold text-brand-600">{paths[selectedPath].beta}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] text-slate-400 uppercase">T-Statistic</span>
              <span className="font-bold text-slate-700">{paths[selectedPath].tStat}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[9px] text-slate-400 uppercase">P-Value</span>
              <span className="font-bold text-brand-600">{paths[selectedPath].pValue}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-slate-400 uppercase">Hypothesis Status</span>
            <span className="text-xs font-bold text-brand-600 flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 shrink-0" />
              {paths[selectedPath].status} — {paths[selectedPath].strength}
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-mono text-[9px] text-slate-400 uppercase">Implication</span>
            <p className="text-xs text-slate-500 leading-relaxed font-mono">{paths[selectedPath].description}</p>
          </div>
        </div>
      </div>

      <div className="stat-card rounded-xl p-6">
        <div className="flex items-center gap-2 mb-4 font-mono text-xs font-bold uppercase tracking-wider text-slate-400">
          <Table className="h-4 w-4 text-brand-500" /> Summary Table: Structural Path Results & Significance
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs text-slate-600 border-collapse">
            <thead>
              <tr className="border-b border-slate-200 text-slate-400 uppercase text-[10px]">
                <th className="pb-3 pr-4">Hypothesis</th>
                <th className="pb-3 px-4">Path Relationship</th>
                <th className="pb-3 px-4 text-center">Path Coeff (β)</th>
                <th className="pb-3 px-4 text-center">T-Statistic</th>
                <th className="pb-3 px-4 text-center">P-Value</th>
                <th className="pb-3 pl-4 text-right">Empirical Decision</th>
              </tr>
            </thead>
            <tbody>
              {[
                { h: 'H1', path: 'DPE → Supply Chain Efficiency (SCE)', beta: '0.238', t: '3.936', p: '0.000', decision: 'SUPPORTED', highlight: false },
                { h: 'H2', path: 'DPE → Port Operational Performance (POP)', beta: '0.460', t: '7.770', p: '0.000', decision: 'SUPPORTED (STRONGEST)', highlight: true },
                { h: 'H3', path: 'POP → Supply Chain Efficiency (SCE)', beta: '0.456', t: '8.608', p: '0.000', decision: 'SUPPORTED', highlight: false },
                { h: 'H4', path: 'DPE → POP → Supply Chain Efficiency (SCE)', beta: '0.210', t: '5.485', p: '0.000', decision: 'SUPPORTED (MEDIATED)', highlight: false }
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className={`py-3 pr-4 font-bold ${row.highlight ? 'text-brand-600' : 'text-brand-500'}`}>{row.h}</td>
                  <td className="py-3 px-4">{row.path}</td>
                  <td className={`py-3 px-4 text-center font-semibold ${row.highlight ? 'text-brand-600' : 'text-slate-600'}`}>{row.beta}</td>
                  <td className="py-3 px-4 text-center">{row.t}</td>
                  <td className="py-3 px-4 text-center">{row.p}</td>
                  <td className="py-3 pl-4 text-right text-brand-600 font-bold">{row.decision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default PLSSEMModel
