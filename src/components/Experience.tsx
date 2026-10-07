import { useState } from 'react'
import { jobs } from '../data'
import { Reveal, SplitHeading } from './ui'

export function Experience() {
  const [i, setI] = useState(0)
  const job = jobs[i]
  const go = (d: number) => setI((n) => (n + d + jobs.length) % jobs.length)

  return (
    <section id="experience" className="snap-slide flex min-h-svh items-center bg-cream">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-14 px-4 pt-28 pb-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-16">
        <Reveal>
          <SplitHeading thin="Work" bold="History" />
          <div aria-live="polite" className="mt-10 min-h-[15rem] sm:min-h-[12rem]">
            <h3 className="text-[clamp(1.25rem,2.2vw,1.9rem)] font-semibold tracking-[0.06em] [overflow-wrap:normal]">{job.company}</h3>
            <p className="mt-1 text-xs tracking-[0.06em] sm:text-sm">
              {job.role} · {job.dates}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 tracking-[0.03em] sm:text-base sm:leading-8">{job.summary}</p>
          </div>
          <div className="mt-6 flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous role"
              className="grid size-11 place-items-center border-[3px] border-ink text-xl transition-colors hover:bg-ink hover:text-cream"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next role"
              className="grid size-11 place-items-center border-[3px] border-ink text-xl transition-colors hover:bg-ink hover:text-cream"
            >
              ›
            </button>
            <span className="ml-3 text-xs font-semibold tracking-[0.1em] whitespace-nowrap">
              {String(i + 1).padStart(2, '0')} / {String(jobs.length).padStart(2, '0')}
            </span>
            <img src="/shapes/s11.png" alt="" aria-hidden="true" className="ml-auto w-24 sm:w-28" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <ul className="grid grid-cols-2 gap-px bg-ink/15 sm:grid-cols-3" aria-label="Companies">
            {jobs.map((j, n) => (
              <li key={j.company} className="bg-cream">
                <button
                  type="button"
                  onClick={() => setI(n)}
                  aria-pressed={n === i}
                  className={`flex h-24 w-full items-center justify-center px-3 text-center text-xs leading-snug tracking-[0.08em] uppercase transition-colors sm:h-32 sm:text-sm ${
                    n === i ? 'bg-ink font-black text-cream' : 'font-light hover:bg-butter'
                  }`}
                >
                  {j.company}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
