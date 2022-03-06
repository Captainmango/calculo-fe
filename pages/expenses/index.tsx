import { Box, Container, Heading, Center, FormControl, FormLabel, Switch, SlideFade, HStack } from '@chakra-ui/react'
import { GetServerSideProps, NextPage } from 'next'
import useSWR from "swr";
import React, { useEffect, useState } from 'react'
import ActionButton from '../../components/Expenses/ActionButton'
import ExpenseDataTable from '../../components/Expenses/ExpenseDataTable'
import ExpenseTable from '../../components/Expenses/ExpenseTable'
import TwoColumn from '../../components/Layout/TwoColumn'
import expenses from '../../resources/Calculo_expenses.json'
import { ActionTypes, useAppStore } from '../../store'
import { Expense } from '../../models/Expense';

//@ts-ignore
const Index: NextPage = (props: {fetchedExpenses: Expense[]}) => {

    const [dataMode, toggleDataMode] = useState(false)

    //@ts-ignore
    const [useStore, api] = useAppStore

    function updateState() : void
    {
        api.dispatch({type: ActionTypes.fetchExpenses})
        api.dispatch({type: ActionTypes.storeExpenses, body: {expenses: props.fetchedExpenses}})
    }

    //@ts-ignore
    useEffect(() => {
        updateState()
    }, [])

    return (
        <TwoColumn>
            <Center>
                <Heading m="8">Expenses</Heading>
            </Center>
            <HStack py="8">
                <FormControl display='flex' alignItems='center'>
                    <FormLabel htmlFor='data-mode' mb='0'>
                        Data mode {dataMode ? 'ON' : 'OFF'}
                    </FormLabel>
                    <Switch id='data-mode' onChange={() => toggleDataMode(!dataMode)} />
                </FormControl>
            </HStack>
            {dataMode && <ExpenseDataTable />}
            {!dataMode && <ExpenseTable />}
            <ActionButton />
        </TwoColumn>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            fetchedExpenses: expenses
        }
    }
}

export default Index
