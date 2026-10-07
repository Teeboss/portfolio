import { siNodedotjs, siPostgresql, siReact, siTypescript } from 'simple-icons'
import { profile, stack } from '../data'
import { IconBox, Marquee, Reveal, SimpleIcon, SplitHeading } from './ui'

const icons = [siTypescript, siNodedotjs, siReact, siPostgresql]

export function About() {
  return (
    <section id="about" className="snap-slide flex min-h-svh flex-col bg-lavender">
      <div className="mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 content-center gap-12 px-4 pt-28 pb-16 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,0.7fr)] lg:gap-14 lg:px-16">
        <Reveal>
          <SplitHeading thin="About" bold="Me" />
          <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 tracking-[0.03em] sm:text-base sm:leading-8">
            {profile.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ul className="flex gap-5 sm:gap-7" aria-label="Core stack">
            {icons.map((i) => (
              <li key={i.slug}>
                <IconBox label={i.title}>
                  <SimpleIcon path={i.path} title={i.title} />
                </IconBox>
              </li>
            ))}
          </ul>
          <dl className="mt-10 space-y-6">
            {stack.map((s) => (
              <div key={s.label} className="border-b-[3px] border-ink pb-2">
                <dt className="text-sm font-black tracking-[0.06em] sm:text-base">{s.label}</dt>
                <dd className="mt-1 text-xs leading-6 tracking-[0.03em] text-ink-soft sm:text-sm">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={240} className="relative">
          <p className="text-[clamp(3.5rem,7vw,6rem)] leading-none font-black tracking-[0.02em]">{profile.years}</p>
          <p className="mt-3 text-sm tracking-[0.04em] sm:text-base">Years shipping software</p>
          <img src="/shapes/s11.png" alt="" aria-hidden="true" className="mt-6 w-28" />
        </Reveal>
      </div>
      <Marquee items={['available for collaborations', "let's build something solid"]} />
    </section>
  )
}
