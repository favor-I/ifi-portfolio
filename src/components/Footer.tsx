import React from 'react'
import Line from '../assets/svg/footer/line.svg'
import Copyright from '../assets/copyright/copyrightIcon.svg'
import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { linkedInWhite, mail, twitterWhite } from '../assets/svg/Socials'

const Footer = () => {
  return (
    <Box color="#ffffff" px="100px" py="125px" height="380px" bg="#07102C">
        <Center>
            <Flex direction="column" position='relative'>
                <Flex direction="column" >
                    <img src={Line} alt='line svg' />
                    <Center ><Text paddingBottom=".31em" bg="#07102C" position="absolute" fontSize="26" fontWeight="800"  display="flex" >Favour Ifeanacho <Text color="#2351DC">.</Text></Text></Center>
                </Flex>
                <Center marginTop="3em">
                    <Flex width="11.5em" direction="row" justifyContent="space-between">
                        <img src={linkedInWhite} alt="linkedIn svg"></img>
                        <img src={twitterWhite} alt="twitter svg"></img>
                        <img src={mail} alt="mail svg"></img>
                    </Flex>
                </Center>
                <Center marginTop="2.5em">
                    <Text display="flex">Copyright <Box mx=".3em" marginTop=".2em"><img  src={Copyright} alt=""></img></Box> 2021  |  All rights Reserved</Text>
                </Center>
            </Flex>
        </Center>
    </Box>
  )
}

export default Footer