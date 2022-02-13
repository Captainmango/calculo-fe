import { Box, Container, Heading, Center, FormControl, FormLabel, Switch, SlideFade, HStack } from '@chakra-ui/react'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ActionButton from '../../components/Expenses/ActionButton'
import ExpenseDataTable from '../../components/Expenses/ExpenseDataTable'
import ExpenseTable from '../../components/Expenses/ExpenseTable'
import TwoColumn from '../../components/Layout/TwoColumn'

const Index: NextPage = () => {

    const [dataMode, toggleDataMode] = useState(false)

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

export default Index