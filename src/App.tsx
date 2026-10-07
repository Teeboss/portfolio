import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { DotNav, Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { sections } from './data'
import { useActiveSection } from './hooks'

const ids = sections.map((s) => s.id)

export default function App() {
  const active = useActiveSection(ids)
  return (
    <>
      <Header />
      <DotNav active={active} />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
