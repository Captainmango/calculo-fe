import { Avatar, Box, Button, Center, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Input, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { FiBarChart2, FiBookOpen, FiMenu, FiSettings } from 'react-icons/fi';
import { useAppStore } from '../../../store/index';
import { SidebarItem } from './SidebarItem';

const MobileDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    //@ts-ignore
    const [useStore, api] = useAppStore
    //@ts-ignore
    const user = useStore(state => state.user)

    return (
        <>
            <Box position="fixed" left="4%" mt="5">
                <Button onClick={onOpen}>
                    <FiMenu />
                </Button>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <SidebarItem expanded={true} url="/expenses" title="Expenses" icon={FiBookOpen} active={false} description='View and add expenses' />

                        <SidebarItem expanded={true} url="/reports" title="Reports" icon={FiBarChart2} active={false} description='View reports on your expenses' />

                        <SidebarItem expanded={true} url="/settings" title="Settings" icon={FiSettings} active={false} description='Edit user settings' />
                    </DrawerBody>

                    <DrawerFooter justifyContent="flex-start">

                        <Flex
                            mt={4}
                            align="center"
                        >

                            <Avatar
                                size="sm"
                                src="user.svg"
                            />

                            <Flex
                                flexDir="column"
                                ml={4}
                                m={4}
                            >
                                <Heading
                                    as="h3"
                                    size="sm"
                                >{user ? user.firstName : "User"}</Heading>
                            </Flex>
                        </Flex>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
};

export default MobileDrawer;
