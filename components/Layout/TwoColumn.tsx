import { Box, ChakraComponent, Container } from "@chakra-ui/react"
import { NextPage } from "next"
import { Children } from "react"
import Sidebar from "../sidebar/Sidebar"

const TwoColumn = () => {
    return (
        <Box display="flex">
            <Box w="15%" h="100vh">
                <Sidebar />
            </Box>
            <Box w="75%" h="100vh">
                <Container pt="2%" maxW="xl" centerContent={true}>
                    {Children}
                </Container>
            </Box>
        </Box>
    )
}

export default TwoColumn
