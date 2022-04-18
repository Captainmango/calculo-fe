import { Center, Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { CategoryEnum, getEnumKeyByEnumValue } from '../../models/CategoryEnum';
import { CategoryPiechart } from '../Graphs/CategoryPieChart';

const ReportsPage = () => {

    
    return (
        <>
        <Center>
            <Heading p="8">
                Reports
            </Heading>
        </Center>
        <Box>
            <Flex>
                <Box w="50%">
                    <CategoryPiechart />
                </Box>
            </Flex>
        </Box>
        </>
    );
};

export default ReportsPage;
