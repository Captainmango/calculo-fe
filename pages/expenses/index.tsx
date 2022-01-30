import { Box, Container, Heading, Center, FormControl, FormLabel, Switch } from '@chakra-ui/react'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ExpenseDataTable from '../../components/Expenses/ExpenseDataTable'
import ExpenseTable from '../../components/Expenses/ExpenseTable'
import TwoColumn from '../../components/Layout/TwoColumn'


const Index: NextPage = () => {

    const [dataMode, toggleDataMode] = useState(false)

    useEffect(() => {
        modeSwitcher()
    }, [dataMode])

    const modeSwitcher = () => {
        if(dataMode) {
          return  <ExpenseDataTable />
        }

        return <ExpenseTable />
    }

    return (
        <TwoColumn>
            <Center>
                <Heading m="8">Expenses</Heading>
            </Center>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='data-mode' mb='0'>
                    Data mode {dataMode ? 'ON' : 'OFF'}
                </FormLabel>
                <Switch id='data-mode' onClick={() => console.log(toggleDataMode(!dataMode))} />
            </FormControl>
            {modeSwitcher()}
        </TwoColumn>
    )
}

export default Index