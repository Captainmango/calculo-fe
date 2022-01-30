import { Box, Container, Heading, Center } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import ExpenseDataTable from '../../components/Expenses/ExpenseDataTable'
import ExpenseTable from '../../components/Expenses/ExpenseTable'
import TwoColumn from '../../components/Layout/TwoColumn'
import * as expenses from '../../resources/Calculo_expenses.json'


const Index: NextPage = () => {
    return (
        <TwoColumn>
            <Center>
                <Heading m="8">Expenses</Heading>
            </Center>
            <ExpenseDataTable />
        </TwoColumn>
    )
}

export default Index