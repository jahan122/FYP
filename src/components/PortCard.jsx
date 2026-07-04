import React from 'react'
import { Ship, Radio, Cpu } from 'lucide-react'

function PortCard({ id, name, location, role, digitalStatus, throughput, focus, isActive, onClick }) {
  const getPortIcon = () => {
    switch (id) {
      case 'klang': return Ship
      case 'ptp': return Cpu
      case 'penang': return Radio
      default: return Ship
    }
  }

  const Icon = getPortIcon()

  return (
    <button
      onClick={onClick}
      className={`text-left p-5 sm:p-6 rounded-xl stat-card flex flex-col gap-4 select-none transition-all duration-300 ${
        isActive
          ? 'border-brand-300 ring-1 ring-brand-200 bg-brand-50/30'
          : 'border-slate-100'
      }`}
    >
      <div className="flex justify-between items-start">
        <div className={`p-2.5 rounded-lg border transition-colors ${
          isActive
            ? 'border-brand-200 text-brand-600 bg-brand-50'
            : 'border-slate-200 text-slate-400 bg-slate-50'
        }`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="text-right flex flex-col gap-0.5 font-mono text-[9px] text-slate-400">
          <span className="tracking-wider">THROUGHPUT</span>
          <span className="font-bold text-slate-600">{throughput}</span>
        </div>
      </div>

      <div className="flex flex-col gap-0.5">
        <h4 className="text-base font-bold font-display text-slate-800">{name}</h4>
        <span className="font-mono text-[10px] text-slate-400">{location}</span>
      </div>

      <p className="text-xs text-slate-500 font-mono leading-relaxed min-h-[40px]">
        {role}
      </p>

      <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 font-mono text-[10px]">
        <div className="flex justify-between">
          <span className="text-slate-400">DIGITAL FOCUS</span>
          <span className="font-semibold text-brand-600">{focus}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">TRANSFORMATION</span>
          <span className={`font-semibold ${isActive ? 'text-brand-600' : 'text-slate-400'}`}>{digitalStatus}</span>
        </div>
      </div>
    </button>
  )
}

export default PortCard
