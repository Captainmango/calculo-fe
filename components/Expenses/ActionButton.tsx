import { Box, Button, Icon, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import CreateExpenseModalComponent from '../Modals/CreateExpenseModal';


const ActionButton = () => {
    return (
        <Box position="fixed" right="5%" bottom="5%">
            <Menu direction='rtl'>
                <MenuButton 
                    as={Button} 
                    padding="30" 
                    py="38" 
                    borderRadius="50" 
                    bgColor="blue.400" 
                    _hover={{ bgColor: "blue.500" }}
                    boxShadow="2px 2px 16px 2px rgba(0, 0, 0, 0.15)"
                    zIndex="200"
                >
                    <Icon as={FiEdit2} fontSize="4xl" color="gray.300" />
                </MenuButton>
                <MenuList 
                    h="200px" 
                    border="0px"
                    bg="whiteAlpha.700"
                    display="flex"
                    flexDirection="column-reverse"
                    justifyContent="flex-end"
                    minW="100px"
                >
                    <CreateExpenseModalComponent />
                </MenuList>
            </Menu>
        </Box>
    )
};

export default ActionButton;
