import { useState } from 'react'
import { profile } from '../data'
import { Shape } from './ui'

const line = 'block text-[clamp(2.4rem,10.5vw,8.75rem)] leading-[0.98]'

export function Hero() {
  // Drop a transparent cut-out at public/me.png and it appears in front of the type, as in the template.
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <section id="hello" className="snap-slide relative flex min-h-svh items-center justify-center overflow-hidden bg-mint px-4 pt-24 pb-28">
      <Shape src="/shapes/s03.png" className="top-24 left-[4%] w-16 animate-rise sm:w-24 lg:w-32" />
      <Shape src="/shapes/s05.png" className="top-28 right-[6%] w-12 animate-rise sm:w-16 lg:w-20" />
      <Shape src="/shapes/s04.png" className="bottom-[34%] left-[3%] hidden w-10 sm:block lg:w-14" />
      <Shape src="/shapes/s02.png" className="right-[4%] bottom-20 w-24 sm:w-32 lg:w-40" />

      <h1 className="relative text-center uppercase tracking-[0.02em]">
        <span className={`${line} animate-rise font-extralight`}>Fullstack</span>
        <span className={`${line} animate-rise font-black [animation-delay:120ms]`}>Software</span>
        <span className={`${line} animate-rise font-extralight [animation-delay:240ms]`}>Engineer</span>
      </h1>

      {hasPhoto && (
        <img
          src="/me.png"
          alt={profile.name}
          onError={() => setHasPhoto(false)}
          className="pointer-events-none absolute bottom-0 left-1/2 z-10 h-[70%] max-w-none -translate-x-1/2 object-contain sm:h-[82%]"
        />
      )}

      <p className="absolute bottom-6 left-4 z-20 max-w-[22rem] text-xs leading-relaxed tracking-[0.04em] sm:left-8 sm:text-sm">
        <span className="font-black">{profile.name}</span>
        <br />
        Node.js · TypeScript · React · Lagos, Nigeria
      </p>
    </section>
  )
}
