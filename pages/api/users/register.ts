import { NextApiRequest, NextApiResponse } from "next"
import { RoleEnum } from "../../../models/RoleEnum"
import { calculoAPI } from "../../../resources/utils/axiosInstance"
import { createCookie } from "../../../resources/utils/serializeCookie"

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
    return calculoAPI.post("/auth/register", {...req.body, roles: [RoleEnum.USER]})
        .then( data => {
            const { jwt, refreshToken, ...userData } = data.data
         
            res.setHeader('Set-Cookie', [
                createCookie("calculo_token", jwt), 
                createCookie("calculo_refresh", refreshToken)
            ])

            res.status(200).send(userData)
        })
        .catch( error => {
            res.send(error)
        })
}