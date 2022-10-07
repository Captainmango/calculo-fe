import { Center, Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { CategoryEnum, getEnumKeyByEnumValue } from '../../models/CategoryEnum';
import { CategoryPiechart } from '../Graphs/CategoryPieChart';
import { TotalBarChart } from '../Graphs/TotalBarChart';

const ReportsPage = () => {
    return (
        <>
        <Center>
            <Heading p="8">
                Reports
            </Heading>
        </Center>
        <Box py="8">
            <Flex gap="16" direction={{ base: "column", sm: "column", md: "row", lg: "row" }} >
                <Box w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}>
                    <CategoryPiechart />
                </Box>
                <Box h="500px" w={{ base: "100%", sm: "100%", md: "50%", lg: "50%" }}>
                    <TotalBarChart />
                </Box>
            </Flex>
        </Box>
        </>
    );
};

export default ReportsPage;
