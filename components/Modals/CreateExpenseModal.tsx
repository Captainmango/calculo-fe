import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Icon } from '@chakra-ui/react';
import React from 'react';
import ExpenseForm from '../Forms/Expenses/ExpenseForm'
import { toast } from 'react-toastify'
import { FiPlus } from 'react-icons/fi';

const CreateExpenseModalComponent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onSubmitHandler = () => {
        onClose()
    }

    const onCancelHandler = () => {
        onClose()
    }

    return (<>
        <Button 
            onClick={onOpen} 
            fontSize="sm"
            rightIcon={<Icon as={FiPlus} fontSize="2xl" />}
            borderRadius="25"
            mb="4"
            w="100%"
            textColor="black"
            bgColor="whiteAlpha.100"
            _hover={{bgColor: "blue.300", textColor: "white"}}
        >
            Add Expense</Button>
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create an expense</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <ExpenseForm onCancelHandler={onCancelHandler} onSubmitHandler={onSubmitHandler} />
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    )
};

export default CreateExpenseModalComponent;
