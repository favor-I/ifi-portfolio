import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { js, php, tailwind, react, } from '../assets/svg/skills'
import React from 'react'

const MySkill = () => {
    const skills = [
        {
            imagePath: js,
            title: 'Javascript'
        },
        {
            imagePath: react,
            title: 'React'
        },
        {
            imagePath: tailwind,
            title: 'Tailwind'
        },
        {
            imagePath: php,
            title: 'PHP'
        }
    ]
  return (
    <Box px="100px" height="auto" bg="#FFFFFF" py="5em">
        <Flex direction="column">
            <Text fontWeight="700" fontSize="40px">My Stacks</Text>
            <Text>My stacks include but are not limited to:</Text>
        </Flex>
        <Box marginTop="3.5em">
            <Grid templateColumns="auto auto">
                {
                    skills.map((skill) => (
                        <Flex marginTop="2em" key={skill.title}>
                            <img width="70px" height="70px" src={skill.imagePath} alt="skill svg for js" />
                            <Flex marginLeft="1em" align="center">
                            <Text fontSize="20px">{skill.title}</Text>
                            </Flex>
                        </Flex>
                    ))
                }
            </Grid>
        </Box>

    </Box>
  )
}

export default MySkill