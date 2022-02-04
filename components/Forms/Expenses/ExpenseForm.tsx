import { Container, Box, HStack, FormControl, FormLabel, Input, Center, FormHelperText, Button, NumberInput, NumberInputField, Select, Textarea, ButtonGroup } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image'
import MultiSelectMenu from '../../Shared/multiselect-menu';

interface ExpenseFormProps {
    onClickHandler: () => void
}
const ExpenseForm = (props: ExpenseFormProps) => {

    const format = (val: string) => `£` + val
    const parse = (val: string) => val.replace(/^\$/, '')

    const [total, setTotal] = useState('0.00')

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
                                onChange={(valueString) => setTotal(parse(valueString))}
                                value={format(total)}
                                precision={2}
                                pattern='^((?=.*[1-9]|0)(?:\d{1,3}))((?=.*\d)(?:\.\d{3})?)*((?=.*\d)(?:\,\d\d){1}?){0,1}$'
                                name='total'
                                id='total'
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
                            name='notes'
                            id='notes'
                        />
                    </FormControl>
                    <Center>
                    <ButtonGroup
                        spacing={5}
                        justifyContent='center'
                    >
                            <Button
                                variant="outline"
                            >
                                Cancel
                            </Button>
                            <Button onClick={() => props.onClickHandler()}
                                colorScheme="whatsapp"
                            >
                                Submit
                            </Button>
                        
                    </ButtonGroup>
                    </Center>
                </form>
            </Box>
        </Container>
    );
};

export default ExpenseForm;
