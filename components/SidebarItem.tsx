import { Box, ComponentWithAs, Flex, Icon, IconProps, Menu, MenuButton, Text, Link } from '@chakra-ui/react'
import React, { ReactChild, ReactElement } from 'react'
import { IconType } from 'react-icons'

type sidebarItemProps = {
    expanded: boolean
    url: string
    icon: IconType
    title: string
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
                    passHref
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

            </Menu>

        </Flex >
    )
}
