import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function AnimatedCounter({ value, suffix = '', prefix = '', decimals = 0, duration = 2 }) {
  const [displayed, setDisplayed] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el || animated.current) return

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        animated.current = true
        const obj = { val: 0 }
        gsap.to(obj, {
          val: value,
          duration,
          ease: 'power3.out',
          onUpdate: () => setDisplayed(obj.val),
          onComplete: () => setDisplayed(value)
        })
      }
    })
  }, [value, duration])

  const formatted = displayed.toFixed(decimals)

  return (
    <span ref={ref} className="mono-stat">
      {prefix}{formatted}{suffix}
    </span>
  )
}

function TickerDigit({ digit = 0 }) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <span className="inline-flex flex-col items-center justify-center overflow-hidden h-[1em] w-[0.6em] font-mono font-bold">
      <span
        className="transition-all duration-500 ease-out"
        style={{ transform: `translateY(-${digit * 10}%)` }}
      >
        {digits.map((d, i) => (
          <span key={i} className="h-[1em] flex items-center justify-center">{d}</span>
        ))}
      </span>
    </span>
  )
}

function AnimatedCounterTicker({ value, label, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const [currentValue, setCurrentValue] = useState(0)
  const animated = useRef(false)

  const digits = String(Math.floor(currentValue)).padStart(String(Math.floor(value)).length, '0').split('').map(Number)

  useEffect(() => {
    const el = ref.current
    if (!el || animated.current) return

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        animated.current = true
        const obj = { val: 0 }
        gsap.to(obj, {
          val: value,
          duration: 2.5,
          ease: 'power3.out',
          onUpdate: () => setCurrentValue(Math.floor(obj.val))
        })
      }
    })
  }, [value])

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="flex items-baseline gap-1">
        {prefix && <span className="text-lg sm:text-2xl font-mono font-bold text-slate-400">{prefix}</span>}
        <div className="flex items-baseline">
          {digits.map((d, i) => (
            <TickerDigit key={i} digit={d} />
          ))}
        </div>
        {suffix && <span className="text-lg sm:text-2xl font-mono font-bold text-brand-500">{suffix}</span>}
      </div>
      {label && <span className="text-xs font-mono text-slate-500 mt-1">{label}</span>}
    </div>
  )
}

export { AnimatedCounter, TickerDigit, AnimatedCounterTicker }
export default AnimatedCounterTicker
