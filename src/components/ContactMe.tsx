import React,{ FormEvent, useState } from 'react'
import msgIcon from '../assets/svg/contact/mailIcon.svg'
import { linkedIn, twitter } from '../assets/svg/Socials'
import phoneIcon from '../assets/svg/contact/phoneIcon.svg'
import { Box, Button, Flex, FormControl, Input, Text, Textarea } from '@chakra-ui/react'

const ContactMe = () => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        // event.preventDefault();
        console.log(event)

        console.log('Check');

    }
  return (
    <Box px="">
        <Flex direction="row">
            <Box paddingLeft="100px" height="550px" width="58%">
            <Flex paddingTop="130px" direction="column" width="457px">
                <Text fontWeight="700" fontSize="38px">Get In Touch.</Text>
                <Text width="350px" lineHeight="27px">You could reach out to me on the following social media platforms </Text>
                <Flex marginTop="1em" justifyContent="space-between" width="6.8em">
                    <img src={linkedIn} alt="linked svg" /> 
                    <img src={twitter} alt="twitter svg" /> 
                </Flex>
                <Box>
                    <Flex direction="column" marginTop="3em">
                        <Flex direction="row">
                            <img src={msgIcon} alt="mail icon svg"/>
                            <Flex direction="column" mx="1em">
                                <Text>favour.franki3@gmail.com</Text>
                                <Text>Send a message anytime!</Text>
                            </Flex>
                        </Flex>
                        <Flex direction="row" marginTop="1em">
                            <img src={phoneIcon} alt="mail icon svg"/>
                            <Flex direction="column" mx="1em">
                                <Text>+234-9028-416176</Text>
                                <Text>Send a message anytime!</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            </Flex>
            </Box>
            <Box color="#ffffff" width="42%" px="4em" py="5em" height="inherit" bg="#1C41B0">
            <Flex direction="column" >
                <Flex direction="column" fontWeight="700">
                    <marquee>Form functionality in construction. Please send direct mail. Thanks</marquee>
                    <Text fontSize="20px" color="#FFFFFFB2">Need a Service?</Text>
                    <Text fontSize="26px">Send  A Message</Text>
                </Flex>
                <Flex>
                    <form onSubmit={()=>handleSubmit} >
                        <FormControl borderColor="#FFFFFF" marginTop="1em"  width="20em" isRequired={true}>
                            {/* <Flex height="20em" direction="column" > */}
                                <FormControl>
                                    <Input type="text" paddingLeft="0px" _placeholder={{color:"#FFFFFF", fontWeight:"small"}} border="none" borderBottom="1px" borderRadius="none" placeholder='Enter Full name' color=""></Input>
                                </FormControl>
                                <FormControl>
                                    <Input type="email" paddingLeft="0px" _placeholder={{color:"#FFFFFF", fontWeight:"small"}} border="none" borderBottom="1px" borderRadius="none" placeholder='Enter Email Address' color=""></Input>
                                </FormControl>
                                <FormControl>
                                    <Textarea paddingLeft="0px" _placeholder={{color:"#FFFFFF", fontWeight:"small"}} border="none" borderBottom="1px"  borderRadius="none" placeholder='Write a message' color=""></Textarea>
                                </FormControl>
                                <Button onClick={()=> handleSubmit} width="193px" marginTop="2em" bg="#FFFFFF" color="#2351DC"> Send message</Button>
                            {/* </Flex> */}
                        </FormControl>
                    </form>
                </Flex>
            </Flex>
            </Box>

        </Flex>

    </Box>
  )
}

export default ContactMe