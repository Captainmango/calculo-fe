import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/User"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
   return axios.post("http://localhost:8080/api/v1/auth/login", req.body)
        .then( data => {
            res.status(200)
            res.send(data.data)
        })
        .catch( error => {
            res.status(401)
            res.send({
                "message": error.message
            })
        })
}