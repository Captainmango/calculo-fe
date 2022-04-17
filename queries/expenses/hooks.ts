import { useMutation, useQuery, useQueryClient, UseQueryResult } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { Expense } from "../../models/Expense"

export const useFetchExpensesQuery = () => {
    return useQuery('expenses', fetchExpenses)
}

export const useFetchFormatedExpensesQuery = () => {
    const queryClient = useQueryClient()
    return useQuery('expenses', fetchExpenses, {
        select: (data) => {
            let test = data?.data.map(expense => {
                const list = expense.categories.map(c => c.name)
                expense.categoryNames = list

                return expense
            })
            return test
        }
    })
}

export const useCreateExpenseMutation = (data: createExpenseData) => {
    const queryClient = useQueryClient()
    return useMutation(createExpense, {
        onSuccess: data => {
            queryClient.invalidateQueries('expenses')
            queryClient.fetchQuery('expenses', fetchExpenses)
        },
        onError: error => {
            toast.error("Could not create your expense")
        }
    })
}

export const useDeleteExpenseMutation = (expenseId: number) => {
    const queryClient = useQueryClient()

    return useMutation(deleteExpense, {
        onSuccess: data => {
            queryClient.invalidateQueries('expenses')
            queryClient.fetchQuery('expenses', fetchExpenses)
        },
        onError: error => {
            toast.error("Expense not deleted")
        }
    })
}

type createExpenseData = {
    title: string
    total: number
    categories: string[]
    notes: string
}

const fetchExpenses = () => {
    return axios.get("/api/expenses")
}

const createExpense = (data: createExpenseData) => {
    return axios.post("/api/expenses/create", data)
}

const deleteExpense = (expenseId: number) => {
    return axios.post(`/api/expenses/delete/${expenseId}`)
}