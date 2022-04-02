import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/User"
import { setCookie } from "../../../resources/utils/setCookieOnResponse"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
   return axios.post("http://localhost:8080/api/v1/auth/login", req.body)
        .then( (data) => {
            const {jwt, ...userData} = data.data
            res.status(200)
            setCookie(res, "calculo_token", jwt)
            res.send(userData)
        })
        .catch( error => {
            res.status(401)
            res.send(error)
        })
}