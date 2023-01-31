import React from 'react'
import { linkedIn, twitter } from '../assets/svg/Socials'
import { Box, Center, Flex, Text, Link } from '@chakra-ui/react'

const AboutMe = () => {
    const name: string = 'Favour Ifeanacho' 
  return (
    <Box bg="#F6F8FE" px="100px" height="424px" py="120px">
        <Center width="">
            <Flex direction="column" justifyContent="space-between" height="10em" width="400px" textAlign="center">
                <Text fontWeight="700" fontSize="40px">About Me</Text>
                <Text>{name} is a passionate and goal driven Techpreneur whose interest is in using technology to build solutions to  solve real world problems.</Text>
                <Center>
                    <Flex width="7em" justifyContent="space-between">
                        <Link href="https://www.linkedin.com/in/ifeanacho-favour/" isExternal><img src={linkedIn} alt="Twitter icon svg"/></Link>
                        <Link href="https://www.twitter.com/iconictechie" isExternal><img src={twitter} alt="Twitter icon svg"/></Link>
                    </Flex>
                </Center>
            </Flex>
        </Center>
    </Box>
  )
}

export default AboutMe