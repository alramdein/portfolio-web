import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PortfolioSection from './components/PortfolioSection'
import YoutubeVideos from './components/YoutubeVideos'
import MediumArticles from './components/MediumArticles'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <PortfolioSection />
      <YoutubeVideos />
      <MediumArticles />
      <About />
      <Experience />
      <Contact />
      <Footer />
      <div className="accent-circle"></div>
    </div>
  )
}

export default App
