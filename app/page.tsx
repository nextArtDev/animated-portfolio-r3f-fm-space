import Encryption from '@/_components/Encryption'
import Hero from '@/_components/Hero'
import Projects from '@/_components/Projects'
import Skills from '@/_components/Skills'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="h-full w-full ">
      <div className="flex flex-col gap-20 text-white ">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  )
}
