import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { CategoryEnum } from "../../../models/CategoryEnum"
import { Expense } from "../../../models/Expense"
import { calculoAPI } from "../../../resources/utils/axiosInstance"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return calculoAPI.get("/expenses", {headers: {"Cookie": `calculo_token=${req.cookies['calculo_token']}` }})
        .then(data => {
            const expenses: Expense[] = data?.data.map(expense => {
                expense.categories.map(category => {
                    category.name = CategoryEnum[category.name]
                })
                return expense
            })
            res.status(200).send(expenses)
        })
        .catch(error => {
            res.send(error)
        })
}
