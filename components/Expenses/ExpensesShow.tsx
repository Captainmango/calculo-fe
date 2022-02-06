import { Box, Container, Heading, HStack, Tag, Text, Flex, Button, Divider, SlideFade } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { CategoryEnum } from '../../models/CategoryEnum';
import expenses from '../../resources/Calculo_expenses.json'

const ExpensesShow = () => {
    const router = useRouter()
    //@ts-ignore purely for testing will be deleted
    const expense = expenses[parseInt(router.query.id) - 2]

    return (
        <Box p="8" height="100vh">
            <Container
                border="1px"
                borderRadius="5px"
            >
                <Heading p="3">
                    {expense.title}
                </Heading>
                <Divider />
                <Heading size="sm" p="3">
                    Categories
                </Heading>
                <HStack pl="3" pb="3">
                    {expense.categories.map((category, index) => (
                        <Tag size="lg" key={index} variant='solid' colorScheme='teal'>
                            { //@ts-ignore 
                                CategoryEnum[category]
                            }
                        </Tag>
                    ))}
                </HStack>
                <Flex direction="row" justifyContent="space-between">

                    <Box p="3">
                        <Heading size="md">
                            Notes
                        </Heading>
                        <Text>
                            {expense.notes}
                        </Text>
                    </Box>
                    <Box p="3">
                        <Heading size="sm">
                            Total
                        </Heading>
                        <Text>
                            {new Intl.NumberFormat('en-GB', {
                                style: 'currency',
                                currency: 'GBP',
                                maximumFractionDigits: 2
                            }).format(expense.total)}
                        </Text>
                    </Box>
                </Flex>
                <Flex direction="row" justifyContent="space-between">
                    <Flex direction="column">
                        <Box p="3">
                            <Heading size="sm">
                                Created
                            </Heading>
                            <Text>
                                {dayjs(expense.createdAt).format('DD/MM/YYYY HH:mm')}
                            </Text>
                        </Box>

                        <Box p="3">
                            <Heading size="sm">
                                Last edited
                            </Heading>
                            <Text>
                                {dayjs(expense.updatedAt).format('DD/MM/YYYY HH:mm')}
                            </Text>
                        </Box>
                    </Flex>
                    <Flex direction="column-reverse">

                        <Box p="8">
                            <Link href="/expenses" passHref>
                                <Button
                                    colorScheme="facebook"
                                    rightIcon={<FiArrowLeft />}
                                >
                                    Go back
                                </Button>
                            </Link>
                        </Box>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    )
};

export default ExpensesShow;
