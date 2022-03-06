import create from 'zustand'
import { devtools, redux } from 'zustand/middleware'
import { Expense } from '../models/Expense'
import { User } from '../models/User'

export const ActionTypes = {
    // USER ACTIONS 
    storeUser: "STORE_USER",
    flushUser: "FLUSH_USER",
    createUser: "CREATE_USER",
    fetchUser: "FETCH_USER",

    // EXPENSE ACTIONS
    fetchExpenses: "FETCH_EXPENSES",
    storeExpenses: "STORE_EXPENSES",
    addExpense: "ADD_EXPENSE",
    updateExpense: "UPDATE_EXPENSE",
    deleteExpense: "DELETE_EXPENSE",
    pushExpense: "PUSH_EXPENSE",
}

export type Action = {
    type: string,
    body: AppState
}

export interface AppState {
    user: User | null,
    expenses: Expense[],
    loading: boolean,
    authenticated: boolean
}

let initialState: AppState = {
    user: null,
    expenses: [],
    loading: false,
    authenticated: false
}

function updateExpense(expenses: Expense[], id: number, updatedExpense: Expense): Expense[] {
    let expense: Expense
    if (expense = expenses.filter(item => item.id === updatedExpense.id)[0]) {
        Object.keys(expense).forEach(key => {
            //@ts-ignore
            expense[key] = updatedExpense[key]
        })
    }
    return expenses
}

function deleteExpense(expenses: Expense[], id: number): Expense[] {
    let expensesArray: Expense[]
    if (expensesArray = expenses.filter(item => item.id !== id)) {
        return expensesArray
    }
    return expensesArray
}

const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
        case ActionTypes.storeUser:
            return {
                user: state.user = action.body.user,
                loading: state.loading = false,
                authenticated: true
            }
        case ActionTypes.flushUser:
            return {
                user: state.user = null,
                loading: state.loading = false,
                authenticated: false
            }
        case ActionTypes.createUser:
            return {
                user: state.user = null,
                loading: state.loading = true,
                authenticated: false
            }
        case ActionTypes.fetchUser:
            return {
                user: state.user = null,
                loading: state.loading = true,
                authenticated: false
            }
        case ActionTypes.fetchExpenses:
            return {
                expenses: state.expenses = [],
                loading: state.loading = true
            }
        case ActionTypes.pushExpense:
            return {
                expenses: [...state.expenses],
                loading: true
            }
        case ActionTypes.storeExpenses:
            return {
                expenses: state.expenses = action.body.expenses,
                loading: state.loading = false
            }
        case ActionTypes.addExpense:
            return {
                expenses: [...state.expenses, action.body.expenses],
                loading: false
            }
        case ActionTypes.updateExpense:
            return {
                expenses: updateExpense([...state.expenses], action.body.expenses[0].id, action.body.expenses[0]),
                loading: false
            }
        case ActionTypes.deleteExpense:
            return {
                expenses: deleteExpense([...state.expenses], action.body.expenses[0].id),
                loading: false
            }
        default:
            return state
    }
}

//@ts-ignore
export const useAppStore = create<StoreApi<AppState>>(devtools(redux(reducer, initialState)))