import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/User"
import { calculoAPI } from "../../../resources/utils/axiosInstance"
import { createCookie } from "../../../resources/utils/serializeCookie"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
   return calculoAPI.post("/auth/login", req.body)
        .then( (data) => {
            const {jwt, refreshToken, ...userData} = data.data
            res.status(200)
            
            res.setHeader('Set-Cookie', [createCookie("calculo_token", jwt), 
                                        createCookie("calculo_refresh", refreshToken)])
            res.send(userData)
        })
        .catch( error => {
            res.status(401)
            res.send(error)
        })
}