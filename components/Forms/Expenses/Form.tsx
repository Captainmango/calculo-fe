import { Container, Box, HStack, FormControl, FormLabel, Input, FormHelperText, Button, NumberInput, NumberInputField, Select } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image'

const ExpenseForm = () => {

    const format = (val: string) => `£` + val
    const parse = (val: string) => val.replace(/^\$/, '')

    const [value, setValue] = useState('0.00')

    return (
        <Container centerContent>
            <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="100" height="100" />
            <Box w="80%">
                <form>
                    <FormControl py="8">
                        <FormLabel htmlFor='title' color="white">Title</FormLabel>
                        <Input variant="flushed" id='title' type='text' color="white" />
                    </FormControl>
                    <HStack>
                        <FormControl py="8">
                            <FormLabel htmlFor='total' color="white">Total</FormLabel>
                            <NumberInput
                                onChange={(valueString) => setValue(parse(valueString))}
                                value={format(value)}
                            >
                                <NumberInputField />
                            </NumberInput>
                            <FormLabel htmlFor='total' color="white">Category</FormLabel>
                            <Select placeholder='Select a '>

                            </Select>
                        </FormControl>
                    </HStack>
                </form>
            </Box>
        </Container>
    );
};

export default ExpenseForm;
