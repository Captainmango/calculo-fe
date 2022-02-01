import React from 'react';
import ExpensesShow from '../../components/Expenses/ExpensesShow';
import TwoColumn from '../../components/Layout/TwoColumn';

const ExpenseShowPage = () => {
    return (
        <>
            <TwoColumn>
                <ExpensesShow />
            </TwoColumn>
        </>
    )
};

export default ExpenseShowPage;
