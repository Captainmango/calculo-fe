import { useMutation, useQuery, useQueryClient, UseQueryResult } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { Expense } from "../../models/Expense"

const fetchExpenses = () => {
    return axios.get("/api/expenses")
}

export const useExpensesQuery = () => {
    return useQuery('expenses', fetchExpenses)
}