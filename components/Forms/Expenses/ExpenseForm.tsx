import { Container, Box, HStack, FormControl, FormLabel, Input, FormHelperText, Button, NumberInput, NumberInputField, Select, Textarea } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image'
import MultiSelectMenu from '../../shared/multiselect-menu';

const ExpenseForm = () => {

    const format = (val: string) => `£` + val
    const parse = (val: string) => val.replace(/^\$/, '')

    const [value, setValue] = useState('0.00')

    return (
        <Container p="8" centerContent>
            <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="100" height="100" />
            <Box w="80%">
                <form>
                    <FormControl py="8">
                        <FormLabel htmlFor='title' color="black">Title</FormLabel>
                        <Input variant="flushed" id='title' type='text' color="black" />
                    </FormControl>
                    <HStack direction="row" spacing="20">
                        <FormControl>
                            <FormLabel htmlFor='total' color="black">Total</FormLabel>
                            <NumberInput
                                onChange={(valueString) => setValue(parse(valueString))}
                                value={format(value)}
                            >
                                <NumberInputField />
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='total' color="black">Category</FormLabel>
                            <Select variant='flushed'>
                                <option value="test">Test</option>
                            </Select>
                        </FormControl>
                    </HStack>
                    <FormControl py="8">
                        <FormLabel htmlFor='total' color="black">Notes</FormLabel>
                        <Textarea
                            placeholder='Enter your notes here'
                            type="flushed"
                            size="md"
                            rows={10}
                            resize="none"
                        />
                    </FormControl>
                </form>
            </Box>
        </Container>
    );
};

export default ExpenseForm;
