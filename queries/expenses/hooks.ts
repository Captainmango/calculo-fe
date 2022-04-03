import { useMutation, useQuery, useQueryClient, UseQueryResult } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { Expense } from "../../models/Expense"

export const useExpensesQuery = () => {
    return useQuery('expenses', fetchExpenses)
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