import { MenuItem, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import ExpenseForm from '../Forms/Expenses/ExpenseForm'
import { toast } from 'react-toastify'

const CreateExpenseModalComponent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onClickHandler = () => {
        onClose()
        toast.success('Expense created')
    }

    return (<>
        <MenuItem onClick={onOpen}>Create an expense</MenuItem>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create an expense</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ExpenseForm onClickHandler={onClickHandler} />
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    )
};

export default CreateExpenseModalComponent;
