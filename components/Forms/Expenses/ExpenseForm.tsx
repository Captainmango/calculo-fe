import { Container, Box, HStack, FormControl, FormLabel, Input, Center, FormHelperText, Button, NumberInput, NumberInputField, Select, Textarea, ButtonGroup } from '@chakra-ui/react';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image'
import MultiSelectMenu from '../../Shared/multiselect-menu';
import { CategoryEnum } from '../../../models/CategoryEnum';
import { useExpenseFormHandler } from '../Handlers/useExpenseFormHandler';
import { useCreateExpenseMutation } from '../../../queries/expenses/hooks';
import { toast } from 'react-toastify';

interface ExpenseFormProps {
    onSubmitHandler: () => void
    onCancelHandler: () => void
}
const ExpenseForm = (props: ExpenseFormProps) => {

    const expenseFormHandler = useExpenseFormHandler()
    const { mutate: createExpense } = useCreateExpenseMutation(expenseFormHandler.values)

    const onMultiChange = (categories: string[]) => {
        expenseFormHandler.values.categories = categories
    }

    const handleOnSubmit = () => {
        createExpense(expenseFormHandler.values)
        expenseFormHandler.handleSubmit()
        props.onSubmitHandler()
    }

    return (
        <Container p="8" centerContent>
            <Image src="/calculo_logo 1.svg" alt="Calculo icon" width="80" height="80" />
            <Box w="80%">
                <form>
                    <FormControl py="8">
                        <FormLabel htmlFor='title' color="black">Title</FormLabel>
                        <Input variant="flushed" id='title' type='text' color="black" {...expenseFormHandler.getFieldProps("title")} />
                    </FormControl>
                    <HStack direction="row" spacing="20">
                        <FormControl>
                            <FormLabel htmlFor='total' color="black">Total</FormLabel>
                            <NumberInput
                                precision={2}
                                pattern='^\d+\.\d{0,2}$'
                                id='total'
                            >
                                <NumberInputField {...expenseFormHandler.getFieldProps("total")} />
                            </NumberInput>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor='category' color="black"></FormLabel>
                            <MultiSelectMenu label="Categories" options={[...Object.values(CategoryEnum)] } onChange={(values) => onMultiChange(values)} />
                        </FormControl>
                    </HStack>
                    <FormControl py="8">
                        <FormLabel htmlFor='notes' color="black">Notes</FormLabel>
                        <Textarea
                            placeholder='Enter your notes here'
                            type="flushed"
                            size="md"
                            rows={10}
                            resize="none"
                            id='notes'
                            {...expenseFormHandler.getFieldProps("notes")}
                        />
                    </FormControl>
                    <Center>
                    <ButtonGroup
                        spacing={5}
                        justifyContent='center'
                    >
                            <Button onClick={() => props.onCancelHandler()}
                                variant="outline"
                            >
                                Cancel
                            </Button>
                            <Button onClick={handleOnSubmit}
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
