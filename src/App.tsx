import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import LandingSection from './components/LandingSection'
import MySkill from './components/MySkill'
import Footer from './components/Footer'
import ContactMe from './components/ContactMe'

function App() {
  return (
    <Box fontFamily="manrope" width="1366px" color="#000000">
      <Navbar/>
      <LandingSection/>
      <AboutMe />
      <MySkill />
      <ContactMe />
      <Footer />
    </Box>
  )
}

export default App
