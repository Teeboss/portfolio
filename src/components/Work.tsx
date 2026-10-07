import type { Project } from '../data'
import { projects } from '../data'
import { Reveal, Shape } from './ui'

const tones: Record<Project['tone'], string> = {
  mint: 'bg-mint',
  sand: 'bg-sand',
  lavender: 'bg-lavender',
  pink: 'bg-pink',
  stone: 'bg-stone',
  aqua: 'bg-aqua',
  cream: 'bg-cream',
  butter: 'bg-butter',
}

function ProjectRow({ p, flip }: { p: Project; flip: boolean }) {
  return (
    <article
      className={`grid min-h-0 flex-1 grid-cols-1 ${
        flip ? 'lg:grid-cols-[minmax(0,56fr)_minmax(0,44fr)]' : 'lg:grid-cols-[minmax(0,44fr)_minmax(0,56fr)]'
      }`}
    >
      <div
        className={`relative flex flex-col justify-center overflow-hidden px-4 py-12 sm:px-8 lg:px-12 lg:py-16 ${tones[p.tone]} ${
          flip ? 'lg:order-2 lg:items-end lg:text-right' : ''
        }`}
      >
        <Shape
          src={p.shape}
          className={`bottom-5 w-14 sm:w-16 lg:bottom-8 lg:w-20 ${flip ? 'left-5 lg:left-8' : 'right-5 lg:right-8'}`}
        />
        <Reveal className="relative max-w-md">
          <h3 className="text-[clamp(1.6rem,3vw,2.75rem)] leading-tight font-semibold tracking-[0.06em]">{p.title}</h3>
          <p className="mt-2 text-sm font-semibold tracking-[0.08em] sm:text-base">{p.subtitle}</p>
          <p className="mt-4 text-xs leading-6 tracking-[0.03em] text-ink-soft sm:text-sm">{p.summary}</p>
          {p.stack && <p className="mt-3 text-xs font-semibold tracking-[0.04em]">{p.stack}</p>}
          <a
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 border-b-[3px] border-ink pb-0.5 text-xs font-black tracking-[0.12em] whitespace-nowrap uppercase transition-[gap] hover:gap-3"
          >
            Visit site <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
      <a
        href={p.url}
        target="_blank"
        rel="noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className={`group relative block aspect-[16/10] overflow-hidden bg-stone lg:aspect-auto ${flip ? 'lg:order-1' : ''}`}
      >
        <img
          src={p.image}
          alt=""
          loading="lazy"
          className="absolute inset-0 size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </a>
    </article>
  )
}

export function Work() {
  const slides = [0, 2, 4, 6].map((i) => projects.slice(i, i + 2))
  return (
    <>
      {slides.map((pair, s) => (
        <section
          key={s}
          id={`work-${s + 1}`}
          aria-label={`Portfolio ${s + 1}`}
          className="snap-slide flex flex-col [@media(min-width:1024px)_and_(min-height:760px)]:h-svh"
        >
          {pair.map((p, i) => (
            <ProjectRow key={p.title} p={p} flip={i % 2 === 1} />
          ))}
        </section>
      ))}
    </>
  )
}
