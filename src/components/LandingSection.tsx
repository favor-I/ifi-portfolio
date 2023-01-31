import React from 'react'
import Navbar from './Navbar'
import { linkedIn, twitter } from '../assets/svg/Socials'
import { Box, Center, Flex, Text, Link } from '@chakra-ui/react'
import profilePicture from '../assets/image/profile.png'
const LandingSection = () => {
    const name: string = 'Favour Ifeanacho' 
  return (
    <Box height="40em">
        <Flex height="inherit" paddingLeft="100px" >
            <Flex direction="row"  justifyContent="space-between" width="100%">
                <Box paddingTop="10em">
                    <Text color="#2351DC" fontSize="15px" fontWeight="400">HI THERE</Text>
                    <Text color="#2351DC" fontSize="25px" fontWeight="700" textTransform="uppercase">I AM {name}</Text>
                    <Box fontWeight="800" fontSize="45px" lineHeight="60px">
                        <Text >A Software Engineer</Text>
                        <Text >and I love  Photography.</Text>
                    </Box>
                    <Flex paddingTop="1em" width="7em" justifyContent="space-between">
                        <Link href="https://www.twitter.com/iconictechie" isExternal><img src={twitter} alt="Twitter icon svg"/></Link>
                        <Link href="https://www.linkedin.com/in/ifeanacho-favour/" isExternal><img src={linkedIn} alt="Twitter icon svg"/></Link>
                    </Flex>
                </Box>
                <Box paddingTop="8.3em" bg="#D3DCF8" width="565px" height="">
                    <Center>
                    <img width="100%" height="inherit" src={profilePicture} alt="profile picture"></img>
                    </Center>
                </Box>
            </Flex>
        </Flex>
    </Box>
  )
}

export default LandingSection