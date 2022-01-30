import { Box, Center } from "@chakra-ui/react"
import Sidebar from "../sidebar/Sidebar"

//@ts-ignore
const TwoColumn = ({ children }) => {
    return (
        <Box display="flex">
            <Box w="15%" h="100vh">
                <Sidebar />
            </Box>
            <Box w="75%" h="100vh">
                {children}
            </Box>
        </Box>
    )
}

export default TwoColumn
