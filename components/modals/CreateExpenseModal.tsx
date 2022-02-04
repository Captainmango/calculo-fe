import { MenuItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ExpenseForm from '../Forms/Expenses/ExpenseForm';

const CreateExpenseModalComponent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (<>
        <MenuItem onClick={onOpen}>Create an expense</MenuItem>
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
    </>
    )
};

export default CreateExpenseModalComponent;