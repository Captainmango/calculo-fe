import { NextApiRequest, NextApiResponse } from "next"

import { calculoAPI } from "../../../../resources/utils/axiosInstance"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return calculoAPI.delete(`/expenses/${req.query.id}`, {headers: {"Cookie": `calculo_token=${req.cookies['calculo_token']}` }})
    .catch( error => {
        res.status(400).send(error)
    })
    .then( data => {
        res.status(200).send("Successfully deleted")
    })
        
}