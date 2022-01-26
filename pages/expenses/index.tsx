import { Box, Container, Heading } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import ExpenseForm from '../../components/Forms/Expenses/ExpenseForm'
import TwoColumn from '../../components/Layout/TwoColumn'
import Sidebar from '../../components/sidebar/Sidebar'

const Index: NextPage = () => {
    return (
        <TwoColumn>
            <Heading>Expenses</Heading>
            <ExpenseForm />
        </TwoColumn>
    )
}

export default Index