import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Skills from './components/Skills/Skills'
import WorkExperience from './components/WorkExperience/WorkExperience'
import { ContactMe } from './components/ContactMe/ContactMe'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container">
        <Hero/>
        <Skills/>
        <WorkExperience/>
        <ContactMe/>
      </div>
      <Footer/>
    </>
  )
}

export default App
