import { Button, Icon, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import expenses from '../../resources/Calculo_expenses.json'
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import dayjs from 'dayjs';
import { CategoryEnum } from '../../models/Category';

const ExpenseTable = () => {

  return (
    <Table colorScheme="blue" mt="8" size="sm">
      <Thead>
        <Tr>
          <Th>Title</Th>
          <Th>Category</Th>
          <Th>Submitted</Th>
          <Th>Total</Th>
          <Th>Delete</Th>
        </Tr>
      </Thead>
      <Tbody>
        {expenses.map(expense => {
          return (
            <Tr key={expense.id}>
              <Td>{expense.title}</Td>
              <Td>
                {expense.categories.map(category => (
                //@ts-ignore
                CategoryEnum[category]
              )).join(', ')}</Td>
              <Td>{dayjs(expense.createdAt).format('DD/MM/YYYY HH:mm')}</Td>
              <Td>{
                new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                  maximumFractionDigits: 2
                }).format(expense.total)}
              </Td>
              <Td>
                <Button bg="whiteAlpha.400">
                  <Icon as={FiTrash2} fontSize="xl" />
                </Button>
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
};

export default ExpenseTable;
