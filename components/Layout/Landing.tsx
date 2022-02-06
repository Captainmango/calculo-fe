import { Box } from '@chakra-ui/react';
import React from 'react';

//@ts-ignore
const LandingPage = ({children}) => {
    return (
        <Box display="flex">
            <Box 
                display="flex" 
                flexDirection="column" 
                justifyContent="space-around" 
                w={{ base: "100%", sm: "100%", md: "80%", lg: "40%"}} 
                h="100vh" 
                bg="blue.800"
            >
                {children}
            </Box>
            <Box bgImg="url('../money.jpg')" bgPos="center" w={{base: "0%", sm: "0%", md: "60%", lg: "90%"}} h="100vh">
            </Box>
        </Box>
    )
};

export default LandingPage;
