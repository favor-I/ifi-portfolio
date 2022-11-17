import React,{ useRef, useState, useEffect } from 'react'
import { Flex, Text, Link } from '@chakra-ui/react'
import { linkedIn, twitter } from '../assets/svg/Socials'

interface Props {
  navREF: {
    current: any
  },
  aboutREF: {
    current: any
  },
  contactREF: {
    current: any
  },
  serviceREF: {
    current: any
  },
  projectREF: {
    current: any
  }
}

const Navbar:React.FC<Props> = ({navREF, aboutREF, contactREF, serviceREF, projectREF}) => {

  const [bgColor, setBgColor] = useState('')
  useEffect(() => {
    window.addEventListener('scroll', handleNavBg)
  }, [])
  
  const handleNavRef = () => {
    navREF.current.scrollIntoView()
    // console.log(navREF)
  }
  const handleAboutRef = () => {
    aboutREF.current.scrollIntoView()
    // console.log(aboutREF)
  }
  const handleConcactRef = () => {
    contactREF.current.scrollIntoView()
    // console.log(contactREF)
  }
  // const handleServicetRef = () => {
  //   contactREF.current.scrollIntoView()
  //   // console.log(contactREF)
  // }
  // const handleProjectRef = () => {
  //   contactREF.current.scrollIntoView()
  //   // console.log(contactREF)
  // }
  const handleNavBg = () => {
    window.scrollY > 20 ? setBgColor('#F6F8FE'): bgColor
    window.scrollY < 20 ? setBgColor(bgColor): bgColor
    // console.log(window.scrollY)
  }

  return (
    <>
        <Flex width="full" bg={bgColor}  color="" position="fixed" paddingRight="80px" paddingLeft="100px"  height="5em" align="center">
            <Link onClick={handleNavRef} _hover={{'cursor': 'pointer', 'color':'blue'}}><Text display="flex" fontWeight="800" fontFamily="" fontSize="20px" width="8em" colorScheme="" marginRight="">Favour<Text color="black">.I</Text></Text></Link>
            <Flex  width="30em" marginRight="23em" justifyContent="space-between">
                <Link onClick={handleAboutRef} _hover={{'cursor': 'pointer', 'color':'blue'}} width="">About Me</Link>
                <Link _hover={{'cursor': 'pointer', 'color':'blue'}} width="">Services</Link>
                <Link _hover={{'cursor': 'pointer', 'color':'blue'}} width="">Projects</Link>
                <Link onClick={handleConcactRef} _hover={{'cursor': 'pointer', 'color':'blue'}} width=""><Text>Contact Me</Text></Link>
            </Flex>
            <Flex>
                <img src={twitter} alt="Twitter icon svg"/>
                <img src={linkedIn} alt="Twitter icon svg"/>
            </Flex>
        </Flex>
    </>
  )
}

export default Navbar