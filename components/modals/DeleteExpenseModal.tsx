import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, Icon, ModalFooter, ButtonGroup } from '@chakra-ui/react';
import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

const DeleteExpenseModalComponent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                        <Button>
                            Cancel
                        </Button>
                        <Button colorScheme="red">
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
