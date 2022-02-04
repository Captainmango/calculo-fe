import { Box, Button, Icon, Menu, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import CreateExpenseModalComponent from '../modals/CreateExpenseModal';
import DeleteExpenseModalComponent from '../modals/DeleteExpenseModal';

const ActionButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box position="fixed" right="5%" bottom="5%">
            <Menu direction='rtl'>
                <MenuButton as={Button} padding="30" py="38" borderRadius="50" bgColor="blue.400" _hover={{ bgColor: "blue.500" }}>
                    <Icon as={FiEdit2} fontSize="4xl" color="gray.300" />
                </MenuButton>
                <MenuList>
                    <CreateExpenseModalComponent />
                </MenuList>
            </Menu>
        </Box>
    )
};

export default ActionButton;
