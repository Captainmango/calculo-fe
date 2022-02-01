import { Box, Button, Icon, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiEdit2 } from 'react-icons/fi';
import ExpenseForm from '../Forms/Expenses/ExpenseForm';

const ActionButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box position="fixed" right="5%" bottom="5%">
            <Menu direction='rtl'>
                <MenuButton as={Button} padding="30" py="38" borderRadius="50" bgColor="blue.400" _hover={{ bgColor: "blue.500" }}>
                    <Icon as={FiEdit2} fontSize="4xl" color="gray.300" />
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={onOpen}>Create an expense</MenuItem>
                </MenuList>
            </Menu>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create an expense</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <ExpenseForm />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </Box>
    )
};

export default ActionButton;
