import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Icon, ModalFooter, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-toastify'
import { useDeleteExpenseMutation } from '../../queries/expenses/hooks';

interface DeleteModalProps {
    id: number
}

const DeleteExpenseModalComponent = (props: DeleteModalProps) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const {mutate: deleteExpense} = useDeleteExpenseMutation(props.id) 

    const onClickHandler = () => {
        onClose()
        deleteExpense(props.id)
    }

    return (<>
        <Button onClick={onOpen} bg="whiteAlpha.400">
            <Icon as={FiTrash2} fontSize="xl" />
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Delete an Expense</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Are you sure you want to delete this expense?
                </ModalBody>
                <ModalFooter>
                    <ButtonGroup>
                        <Button onClick={() => onClose()}>
                            Cancel
                        </Button>
                        <Button onClick={() => onClickHandler()} colorScheme="red">
                            Yes
                        </Button>
                    </ButtonGroup>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    )
};

export default DeleteExpenseModalComponent;
