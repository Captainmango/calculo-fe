import { Box, ChakraComponent, Container } from "@chakra-ui/react"
import { NextPage } from "next"
import { Children } from "react"
import Sidebar from "../sidebar/Sidebar"

const TwoColumn = () => {
    return (
        <Box display="flex">
            <Box w="300px" h="100vh">
                <Sidebar />
            </Box>
            <Box h="100vh">
                <Container maxW="xl" centerContent>
                  
                </Container>
            </Box>
        </Box>
    )
}

export default TwoColumn
