import { useEffect } from 'react'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Experience from '../components/Experience'
import Expertise from '../components/Expertise'
import Content from '../components/Content'
import Contact from '../components/Contact'

const TITLE = 'Alif Ramdani — Backend Engineer | Distributed & Scalable Systems'

function Home() {
  useEffect(() => {
    document.title = TITLE
  }, [])

  return (
    <>
      <Hero />
      <Work />
      <Experience />
      <Expertise />
      <Content />
      <Contact />
    </>
  )
}

export default Home
