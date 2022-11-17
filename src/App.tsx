import { useRef } from 'react'
import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'
import MySkill from './components/MySkill'
import ContactMe from './components/ContactMe'
// import { Route, Routes } from 'react-router-loading'
import LandingSection from './components/LandingSection'

function App() {
  const navRef = useRef(null)
  // const projectRef = useRef(null)
  const aboutRef = useRef(null)
  // const serviceRef = useRef(null)
  const contactRef = useRef(null)
  // console.log(contactRef)

  return (
    <Box fontFamily="manrope" width="1366px" color="#000000">
      <Box ref={navRef}><Navbar navREF={navRef} aboutREF={aboutRef} contactREF={contactRef} serviceREF={{
        current: undefined
      }} projectREF={{
        current: undefined
      }}/></Box>
      <Box><LandingSection/></Box>
      <Box ref={aboutRef}><AboutMe /></Box>
      <Box><MySkill /></Box>
      <Box ref={contactRef}><ContactMe /></Box>
      <Footer />
    </Box>
  )
}

export default App
