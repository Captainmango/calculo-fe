import { Flex, Text, Icon, Heading } from '@chakra-ui/react'
import React from 'react'
import { IconType } from 'react-icons'

type sidebarHoverBoxrops = {
    icon: IconType
    title: string
    description: string
}

export const SidebarHoverBox = (props: sidebarHoverBoxrops) => {
    return (
        <>
            <Flex
                pos="absolute"
                mt="calc(100px - 7.5px)"
                ml="-10px"
                w="0"
                h="0"
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight="10px solid #63B3ED"
            />
            <Flex
                py={4}
                h="200px"
                w="100%"
                flexDir="column"
                alignItems="center"
                justify="center"
                backgroundColor="blue.300"
                borderRadius="10px"
                color="white"
                textAlign="center"
            >
                <Icon as={props.icon} fontSize="3xl" />

                <Heading size="md" fontWeight="normal">{props.title}</Heading>

                <Text>
                    {props.description}
                </Text>
            </Flex>
        </>
    )
}
