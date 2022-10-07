import { Box } from "@chakra-ui/react"
import MobileDrawer from "../Shared/Sidebar/MobileDrawer"
import Sidebar from "../Shared/Sidebar/Sidebar"

const TwoColumn = ({ children }) => {
    return (
        <Box display="flex">
            <Box w={{ base: "5%", sm: "5%", md: "15%", lg: "15%" }} h="100vh">
                <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }}>
                    <Sidebar />
                </Box>
                <Box display={{ base: "block", sm: "block", md: "none", lg: "none" }}>
                    <MobileDrawer />
                </Box>
            </Box>
            <Box w="75%" h="100vh">
                {children}
            </Box>
        </Box>
    )
}

export default TwoColumn
