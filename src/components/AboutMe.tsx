import React from 'react'
import { linkedIn, twitter } from '../assets/svg/Socials'
import { Box, Center, Flex, Text } from '@chakra-ui/react'

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
                        <img src={linkedIn} alt="" />
                        <img src={twitter} alt="" />
                    </Flex>
                </Center>
            </Flex>
        </Center>
    </Box>
  )
}

export default AboutMe