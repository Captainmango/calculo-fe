import { NextApiRequest, NextApiResponse } from "next"
import { RoleEnum } from "../../../models/RoleEnum"
import { calculoAPI } from "../../../resources/utils/axiosInstance"
import { setCookie } from "../../../resources/utils/setCookieOnResponse"

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
    return calculoAPI.post("/auth/register", {...req.body, roles: [RoleEnum.USER]})
        .then( data => {
            const { jwt, ...userData } = data.data
            res.status(200).send(userData)
            setCookie(res, "calculo_token", jwt)
        })
        .catch( error => {
            res.send(error)
        })
}