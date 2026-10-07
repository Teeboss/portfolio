import type { ReactNode } from 'react'
import { useInView } from '../hooks'

/** Fades content up the first time it enters the viewport. */
export function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? 'animate-rise' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/** Decorative template shape. */
export function Shape({ src, className = '' }: { src: string; className?: string }) {
  return <img src={src} alt="" aria-hidden="true" className={`pointer-events-none absolute select-none ${className}`} />
}

/** The template's boxed icon: heavy square outline over an offset lavender square. */
export function IconBox({ children, label, href }: { children: ReactNode; label: string; href?: string }) {
  const box = (
    <span className="relative grid size-12 place-items-center sm:size-14">
      <span aria-hidden="true" className="absolute -top-1.5 -right-1.5 size-1/2 bg-periwinkle" />
      <span className="relative grid size-full place-items-center border-[3px] border-ink">{children}</span>
    </span>
  )
  if (!href) return <span title={label}>{box}</span>
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      aria-label={label}
      className="transition-transform duration-200 ease-out hover:-translate-y-1 active:translate-y-0"
    >
      {box}
    </a>
  )
}

export function SimpleIcon({ path, title }: { path: string; title: string }) {
  return (
    <svg viewBox="0 0 24 24" role="img" aria-label={title} className="size-6 fill-ink sm:size-7">
      <path d={path} />
    </svg>
  )
}

/** Black ticker strip from the template. */
export function Marquee({ items }: { items: string[] }) {
  const run = [...items, ...items, ...items, ...items]
  return (
    <div className="overflow-hidden bg-ink py-3 text-paper sm:py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((k) => (
          <ul key={k} className="flex shrink-0">
            {run.map((t, i) => (
              <li key={i} className="flex items-center whitespace-nowrap text-lg font-semibold tracking-[0.04em] sm:text-2xl">
                <span className="px-6 sm:px-10">{t}</span>
                <span>*</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

/** Thin/black alternating display heading, the template's signature. */
export function SplitHeading({
  thin,
  bold,
  boldFirst = false,
  stacked = false,
  className = '',
}: {
  thin: string
  bold: string
  boldFirst?: boolean
  stacked?: boolean
  className?: string
}) {
  const a = <span className="font-extralight">{thin}</span>
  const b = <span className="font-black">{bold}</span>
  const gap = stacked ? <br /> : ' '
  return (
    <h2 className={`text-[clamp(2.25rem,5.2vw,4.75rem)] leading-[1.05] tracking-[0.02em] uppercase ${className}`}>
      {boldFirst ? b : a}
      {gap}
      {boldFirst ? a : b}
    </h2>
  )
}
