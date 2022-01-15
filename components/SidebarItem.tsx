import { Flex, Icon, Menu, MenuButton, Text, Link, MenuList } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'
import { SidebarHoverBox } from './SidebarHoverBox'

type sidebarItemProps = {
    expanded: boolean
    url: string
    icon: IconType
    title: string
    active: boolean
    description: string
}

export const SidebarItem = (props: sidebarItemProps) => {

    return (
        <Flex
            my="5px"
            flexDir="column"
            w="100%"
            alignItems={props.expanded ? "flex-start" : "center"}
        >
            <Menu
                placement="right"
            >
                <Link
                    href={props.url}
                    //@ts-ignore
                    backgroundColor={props.active && "blue.100"}
                    borderRadius={"8px"}
                    p={3}
                    _hover={{ textDecor: 'none', backgroundColor: "blue.100" }}
                    //@ts-ignore
                    w={props.expanded && "100%"}
                >
                    <MenuButton>
                        <Flex>
                            <Icon as={props.icon} fontSize="xl" />

                            <Text
                                display={props.expanded ? 'flex' : 'none'}
                                ml={5}

                            >
                                {props.title}
                            </Text>

                        </Flex>
                    </MenuButton>
                </Link>
                <MenuList
                    py={0}
                    border="none"
                    w="200px"
                    h="200x"
                    ml={5}
                >
                    <SidebarHoverBox title={props.title} icon={props.icon} description={props.description} />
                </MenuList>

            </Menu>

        </Flex >
    )
}
