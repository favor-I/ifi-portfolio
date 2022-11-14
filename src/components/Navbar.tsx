import { Flex, Box, Text } from '@chakra-ui/react'
import { linkedIn, twitter } from '../assets/svg/Socials'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <Flex color="blue" position="fixed" marginRight="80px" marginLeft="100px"  height="4em" align="center">
            <Text display="flex" fontWeight="800" fontFamily="" fontSize="20px" width="8em" colorScheme="" marginRight="">Favour<Text color="black">.I</Text></Text>
            <Flex  width="30em" marginRight="23em" justifyContent="space-between">
                <Text width="">About Me</Text>
                <Text width="">Services</Text>
                <Text width="">Projects</Text>
                <Text width="">Contact Me</Text>
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