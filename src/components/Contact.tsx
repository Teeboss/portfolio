import { siGithub } from 'simple-icons'
import { profile } from '../data'
import { IconBox, Marquee, Reveal, Shape, SimpleIcon, SplitHeading } from './ui'

export function Contact() {
  return (
    <section id="contact" className="snap-slide relative flex min-h-svh flex-col overflow-hidden bg-lavender">
      <Shape src="/shapes/s14.png" className="top-24 right-[6%] hidden w-28 sm:block lg:w-40" />
      <Shape src="/shapes/s05.png" className="right-[12%] bottom-24 hidden w-14 md:block" />
      <div className="mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 content-center gap-12 px-4 pt-28 pb-16 sm:px-8 lg:grid-cols-2 lg:px-16">
        <Reveal>
          <SplitHeading thin="Want to" bold="Say hello?" stacked />
          <ul className="mt-10 flex gap-5 sm:gap-7">
            <li>
              <IconBox label="LinkedIn" href={profile.linkedin}>
                <span aria-hidden="true" className="text-xl font-black tracking-tight sm:text-2xl">
                  in
                </span>
              </IconBox>
            </li>
            <li>
              <IconBox label="GitHub" href={profile.github}>
                <SimpleIcon path={siGithub.path} title="GitHub" />
              </IconBox>
            </li>
            <li>
              <IconBox label="Email" href={`mailto:${profile.email}`}>
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-ink stroke-[2.5] sm:size-7">
                  <path d="M3 5.5h18v13H3z M3.5 6l8.5 7 8.5-7" />
                </svg>
              </IconBox>
            </li>
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="mt-12 inline-block border-b-[3px] border-ink pb-1 text-sm font-black tracking-[0.06em] uppercase sm:text-lg"
          >
            {profile.email}
          </a>
          <div className="mt-8">
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-xs font-black tracking-[0.14em] whitespace-nowrap text-paper uppercase transition-transform hover:-translate-y-0.5 active:translate-y-0 sm:text-sm"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Reveal>
        <Reveal delay={150} className="lg:self-end">
          <p className="text-[clamp(1.4rem,2.6vw,2.4rem)] leading-snug font-semibold tracking-[0.04em]">
            It’s time to start making something solid together.
          </p>
        </Reveal>
      </div>
      <Marquee items={[`${new Date().getFullYear()} © ${profile.name}`]} />
    </section>
  )
}
