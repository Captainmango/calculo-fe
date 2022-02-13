import { NextApiRequest, NextApiResponse } from "next"
import { CategoryEnum } from "../../../models/CategoryEnum"
import { Expense } from "../../../models/Expense"
import expensesArray from '../../../resources/Calculo_expenses.json'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const expenses: Expense[] = expensesArray.map(expense => {
        expense.categories.map(category => {
            //@ts-ignore
            category.name = CategoryEnum[category.name]
        })
        return expense
    })

    res.status(200).send(expenses)
}