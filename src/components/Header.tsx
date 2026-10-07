import { useEffect, useRef, useState } from 'react'
import { profile, sections } from '../data'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  // Transparent over the hero like the template; a solid bar once content scrolls beneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 transition-[background-color,padding] duration-300 sm:px-8 ${
          scrolled ? 'border-b border-ink/10 bg-paper/90 py-2 backdrop-blur sm:py-3' : 'pointer-events-none py-5 sm:py-7'
        }`}
      >
        <a href="#hello" className="pointer-events-auto flex items-center gap-2 text-base tracking-[0.06em] uppercase sm:text-lg">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-none stroke-ink stroke-2">
            <path d="M12 2.5 21.5 9.4 17.9 20.5H6.1L2.5 9.4Z M2.5 9.4h19 M12 2.5 6.1 20.5 M12 2.5l5.9 18" />
          </svg>
          <span>
            <span className="font-light">{profile.short}</span>
            <span className="font-black">Habib</span>
          </span>
        </a>
        <div className="pointer-events-auto flex items-center gap-3 sm:gap-5">
        <a
          href={profile.cv}
          download
          className="inline-flex items-center gap-2 border-[3px] border-ink px-3 py-1.5 text-[0.65rem] font-black tracking-[0.12em] whitespace-nowrap uppercase transition-colors hover:bg-ink hover:text-paper sm:px-4 sm:py-2 sm:text-xs"
        >
          <span className="sm:hidden">CV</span>
          <span className="hidden sm:inline">Download CV</span>
          <span aria-hidden="true">↓</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="grid size-11 place-items-center"
        >
          <span aria-hidden="true" className="flex w-8 flex-col gap-[6px]">
            <span className="h-[3px] bg-ink" />
            <span className="h-[3px] bg-ink" />
            <span className="h-[3px] bg-ink" />
          </span>
        </button>
        </div>
      </header>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        inert={!open}
        className={`fixed inset-0 z-50 flex flex-col bg-ink text-paper transition-[opacity,transform] duration-300 ease-out ${
          open ? 'opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="flex justify-end px-4 py-5 sm:px-8 sm:py-7">
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid size-11 place-items-center text-4xl font-extralight"
          >
            ×
          </button>
        </div>
        <nav className="flex flex-1 items-center overflow-y-auto px-6 pb-10 sm:px-16">
          <ul className="space-y-1 sm:space-y-2">
            {sections.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 py-1 text-[clamp(1.5rem,4.5vw,3rem)] font-extralight whitespace-nowrap uppercase transition-colors hover:text-mint"
                >
                  <span className="w-8 text-sm font-semibold text-paper/50">{String(i + 1).padStart(2, '0')}</span>
                  <span className="group-hover:font-black">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export function DotNav({ active }: { active: string }) {
  return (
    <nav aria-label="Sections" className="fixed top-1/2 right-6 z-30 hidden -translate-y-1/2 lg:block">
      <ul className="flex flex-col gap-3">
        {sections.map((s) => {
          const on = s.id === active
          return (
            <li key={s.id} className="group relative flex items-center justify-end">
              <span className="pointer-events-none absolute right-6 rounded-sm bg-ink px-2 py-1 text-xs whitespace-nowrap text-paper opacity-0 transition-opacity group-hover:opacity-100">
                {s.label}
              </span>
              <a
                href={`#${s.id}`}
                aria-label={s.label}
                aria-current={on ? 'true' : undefined}
                className="grid size-5 place-items-center"
              >
                <span className={`block rounded-full transition-all ${on ? 'size-2.5 bg-ink ring-2 ring-ink/30 ring-offset-2' : 'size-2.5 bg-ink/35 hover:bg-ink/70'}`} />
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
