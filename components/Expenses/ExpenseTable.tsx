import { Button, Icon, Table, Tag, Tbody, Td, Th, Thead, Tr, SlideFade } from '@chakra-ui/react';
import React from 'react';
import dayjs from 'dayjs';
import { CategoryEnum } from '../../models/CategoryEnum';
import DeleteExpenseModalComponent from '../Modals/DeleteExpenseModal';
import { Expense } from '../../models/Expense';

const ExpenseTable = () => {

  return (
    <SlideFade
      in={true}
      unmountOnExit
    >
      <Table colorScheme="blue" size="sm">
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
          {false && expenses.map(expense => {
            return (
              <Tr key={expense.id}>
                <Td>{expense.title}</Td>
                <Td>
                  {expense.categories.map((category, index) => (
                    <Tag mx="1" size="sm" key={index} variant='solid' colorScheme='teal'>
                      { //@ts-ignore 
                        CategoryEnum[category.name]
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
      </SlideFade>
      )
};

export default ExpenseTable;
