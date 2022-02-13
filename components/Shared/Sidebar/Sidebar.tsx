import { Avatar, Divider, Flex, Heading, IconButton } from '@chakra-ui/react'
import { FiBarChart2, FiBookOpen, FiMenu, FiSettings } from 'react-icons/fi'
import React, { useState } from 'react'
import { SidebarItem } from './SidebarItem';
import { useAppStore } from '../../../store';

const Sidebar = () => {

    const [expanded, setExpanded] = useState(false);

    //@ts-ignore
    const [useStore, api] = useAppStore
    //@ts-ignore
    const user = useStore(state => state.user)

    return (
        <Flex
            pos="fixed"
            left="5"
            h="95vh"
            my="2.5vh"
            bg="whiteAlpha.900"
            boxShadow="2px 2px 16px 2px rgba(0, 0, 0, 0.05)"
            w={expanded ? "200px" : "75px"}
            flexDir="column"
            justifyContent="space-between"
            borderRadius={expanded ? "30px" : "15px"}
            zIndex="200"
            sx={{ transition: "all 0.125s ease" }}
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100"
                alignItems="center"
                as="nav"
            >
                <IconButton
                    background="none"
                    my={5}
                    icon={<FiMenu />}
                    aria-label="Menu button"
                    _hover={{ background: "none", backgroundColor: "blue.100" }}
                    onClick={() => {
                        setExpanded(!expanded)
                    }}
                />
                <SidebarItem expanded={expanded} url="/expenses" title="Expenses" icon={FiBookOpen} active={false} description='View and add expenses' />

                <SidebarItem expanded={expanded} url="/reports" title="Reports" icon={FiBarChart2} active={false} description='View reports on your expenses' />

            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100"
                alignItems="center"
                mb={4}
            >

                <SidebarItem expanded={expanded} url="/settings" title="Settings" icon={FiSettings} active={false} description='Edit user settings' />

                <Divider display={expanded ? "flex" : "none"} />
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
                        display={expanded ? "flex" : "none"}
                    >
                        <Heading
                            as="h3"
                            size="sm"
                        >{user ? user.firstName : "User"}</Heading>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Sidebar
