import { services } from '../data'
import { Reveal, Shape, SplitHeading } from './ui'

const tones = { sage: 'bg-sage', periwinkle: 'bg-periwinkle', butter: 'bg-butter' } as const

export function Services() {
  return (
    <section id="services" className="snap-slide flex min-h-svh flex-col bg-paper">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-end gap-6 px-4 pt-28 pb-12 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:pb-16">
        <Reveal>
          <SplitHeading thin="Services" bold="My" boldFirst />
        </Reveal>
        <Reveal delay={120}>
          <p className="max-w-xl text-sm leading-7 tracking-[0.03em] sm:text-base sm:leading-8">
            Six years across fintech, education and SaaS. I take products from database schema to the screen a customer
            taps, and I stay for the part where it has to keep working.
          </p>
        </Reveal>
      </div>
      <div className="grid flex-1 grid-cols-1 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.title.join(' ')} className={`relative overflow-hidden px-4 py-14 sm:px-8 lg:px-12 lg:py-20 ${tones[s.tone]}`}>
            <Shape src={s.shape} className="top-8 right-6 w-16 sm:w-20 lg:top-12 lg:right-10 lg:w-24" />
            <Reveal delay={i * 120} className="relative">
              <h3 className="text-[clamp(1.6rem,2.6vw,2.5rem)] leading-tight font-semibold tracking-[0.06em]">
                {s.title[0]}
                <br />
                {s.title[1]}
              </h3>
              <ul className="mt-8 space-y-3 text-sm tracking-[0.04em] sm:text-base">
                {s.items.map((it) => (
                  <li key={it}>+ {it}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  )
}
