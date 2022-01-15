import { Avatar, Divider, Flex, Heading, IconButton } from '@chakra-ui/react'
import { FiActivity, FiMenu } from 'react-icons/fi'
import React, { useState } from 'react'
import { SidebarItem } from './SidebarItem';

const Sidebar = () => {

    const [expanded, setExpanded] = useState(false);

    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            my="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            w={expanded ? "200px" : "75px"}
            flexDir="column"
            justifyContent="space-between"
            borderRadius={expanded ? "30px" : "15px"}
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
                <SidebarItem expanded={expanded} url="#" title="Transactions" icon={FiActivity} active={false} description='This is a test description' />
                <SidebarItem expanded={expanded} url="#" title="Test" icon={FiActivity} active={false} description='This is a test description' />
                <SidebarItem expanded={expanded} url="#" title="Test" icon={FiActivity} active={false} description='This is a test description' />

            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100"
                alignItems="center"
                mb={4}
            >
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
                        >Test</Heading>
                    </Flex>
                </Flex>
            </Flex>


        </Flex>
    )
}

export default Sidebar
