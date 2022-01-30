import { Box, Container, Heading, Center, FormControl, FormLabel, Switch, SlideFade } from '@chakra-ui/react'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
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
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='data-mode' mb='0'>
                    Data mode {dataMode ? 'ON' : 'OFF'}
                </FormLabel>
                <Switch id='data-mode' onChange={() => console.log(toggleDataMode(!dataMode))} />
            </FormControl>
            <SlideFade 
                in={dataMode}
                unmountOnExit
                
            >
                {dataMode && <ExpenseDataTable />}
            </SlideFade>
            <SlideFade 
                in={!dataMode}
                unmountOnExit
            >
                {!dataMode && <ExpenseTable />}
            </SlideFade>
        </TwoColumn>
    )
}

export default Index