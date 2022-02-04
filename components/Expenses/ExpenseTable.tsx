import { Button, Icon, Table, Tag, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import expenses from '../../resources/Calculo_expenses.json'
import React, { useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import dayjs from 'dayjs';
import { CategoryEnum } from '../../models/Category';
import Link from 'next/link';
import DeleteExpenseModalComponent from '../modals/DeleteExpenseModal';

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
                {expense.categories.map((category, index) => (
                  <Tag mx="1" size="sm" key={index} variant='solid' colorScheme='teal'>
                    { //@ts-ignore 
                      CategoryEnum[category]
                    }
                  </Tag>
                ))}
              </Td>
              <Td>{dayjs(expense.createdAt).format('DD/MM/YYYY HH:mm')}</Td>
              <Td>{
                new Intl.NumberFormat('en-GB', {
                  style: 'currency',
                  currency: 'GBP',
                  maximumFractionDigits: 2
                }).format(expense.total)}
              </Td>
              <Td>
                  <DeleteExpenseModalComponent />
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
};

export default ExpenseTable;
