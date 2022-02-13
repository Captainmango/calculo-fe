import create, { StoreApi } from "zustand"
import { devtools, redux } from "zustand/middleware"
import { Expense } from "../models/Expense"

export const expenseActionTypes = { 
    fetchExpenses: "FETCH_EXPENSES",
    storeExpenses: "STORE_EXPENSES",
    addExpense: "ADD_EXPENSE",
    updateExpense: "UPDATE_EXPENSE",
    deleteExpense: "DELETE_EXPENSE",
    pushExpense: "PUSH_EXPENSE"
}

export type ExpenseAction = {
    type: string,
    body: ExpenseState
}

export interface ExpenseState {
    expenses: Expense[]
    loading: boolean
}

let initialState: ExpenseState = {
    expenses: [],
    loading: false
}

function updateExpense(expenses: Expense[], id: number, updatedExpense: Expense): Expense[]
{
    let expense: Expense 
    if( expense = expenses.filter(item => item.id === updatedExpense.id)[0] ) {
    Object.keys(expense).forEach(key => { 
        //@ts-ignore
        expense[key] = updatedExpense[key]
    })
    }
    return expenses
}

function deleteExpense(expenses: Expense[], id: number): Expense[]
{
    let expensesArray: Expense[]
    if (expensesArray = expenses.filter(item => item.id !== id)) {
        return expensesArray
    }
    return expensesArray
}

const reducer = (state: ExpenseState, action: ExpenseAction) => {
    switch (action.type) {
        case expenseActionTypes.fetchExpenses:
            return {
                expenses: [],
                loading: true
            }
        case expenseActionTypes.pushExpense:
            return {
                expenses: [...state.expenses],
                loading: true
            }
        case expenseActionTypes.storeExpenses:
            return {
                expenses: state.expenses = action.body.expenses,
                loading: false
            }
        case expenseActionTypes.addExpense:
            return {
                expenses: [...state.expenses, action.body.expenses],
                loading: false
            }
        case expenseActionTypes.updateExpense:
            return {
                expenses: updateExpense([...state.expenses], action.body.expenses[0].id, action.body.expenses[0]),
                loading: false
            }
        case expenseActionTypes.deleteExpense:
            return {
                expenses: deleteExpense([...state.expenses], action.body.expenses[0].id),
                loading: false
            }
        default:
            return state
    }
}

//@ts-ignore
export const ExpenseStore = create<StoreApi<ExpenseState>>(devtools(redux(reducer, initialState)))