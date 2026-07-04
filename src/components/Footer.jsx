import React, { useState } from 'react'
import { Anchor, Copy, Check } from 'lucide-react'

function Footer({ onNavigate }) {
  const [copied, setCopied] = useState(false)
  const citationText = `Sultan, M. J. (2026). The Influence of Digital Port Ecosystems on the Global Supply Chain: A Quantitative Investigation at Port Klang, Port Tanjung Pelepas, and Penang Port. Master's Thesis, Universiti Kuala Lumpur.`

  const copyCitation = () => {
    navigator.clipboard.writeText(citationText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative z-20 border-t border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 border-b border-slate-100">

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg border border-slate-200 bg-white">
                <Anchor className="h-4 w-4 text-brand-600" />
              </div>
              <span className="font-display font-bold tracking-wider text-slate-800">
                PORT 4.0 RESEARCH
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm font-mono">
              Submitted in partial fulfillment of the requirements for the degree of <strong className="text-slate-700">Master of Maritime Operations and Management</strong> at Universiti Kuala Lumpur, Malaysian Institute of Marine Engineering Technology (Feb 2026).
            </p>
            <div className="text-[11px] font-mono text-slate-400">
              &copy; {new Date().getFullYear()} Muhammad Jahanzaib Sultan. All rights reserved.
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Thesis Chapters
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'home', label: '1. Thesis Overview' },
                { id: 'framework', label: '2. Research Model' },
                { id: 'methodology', label: '3. Methodology' },
                { id: 'findings', label: '4. Quantitative Findings' },
                { id: 'roadmap', label: '5. Roadmap & Paradox' }
              ].map((item) => (
                <button key={item.id} onClick={() => onNavigate(item.id)}
                  className="text-left text-slate-500 hover:text-brand-600 transition-colors py-1 font-mono">
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
              Cite This Work
            </span>
            <div className="relative bg-slate-50 border border-slate-200 p-3 rounded text-[11px] font-mono text-slate-500 leading-normal flex justify-between gap-4">
              <span className="select-all">{citationText}</span>
              <button onClick={copyCitation}
                className="self-start p-1.5 rounded hover:bg-slate-200 text-slate-500 hover:text-brand-600 transition-all shrink-0"
                title="Copy Citation">
                {copied ? <Check className="h-3.5 w-3.5 text-brand-500" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <div className="text-[11px] text-slate-500 leading-normal bg-slate-50 p-2.5 rounded border border-slate-200 font-mono">
              <strong className="text-slate-700">Supervisors:</strong> Dr. Norazizah Che Mat (Supervisor) &amp; Dr. Asmalina Mohamed (Co-Supervisor)
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
