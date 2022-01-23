import { Box, Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const Index: NextPage = () => {
    return (
        <Box display="flex">
            <Box w="15%" h="100vh">
                <Sidebar />
            </Box>
            <Box w="75%" h="100vh">
                <Container pt="2%" maxW="xl" centerContent={true}>
                    <Heading>Expenses</Heading>
                </Container>
            </Box>
        </Box>
    )
}

export default Index