import { NextApiRequest, NextApiResponse } from "next"
import expenses from '../../../resources/Calculo_expenses.json'
import { ExpenseStore } from "../../../store/ExpensesStore"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).send(expenses)
}