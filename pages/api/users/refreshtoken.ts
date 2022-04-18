import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/User"
import { calculoAPI } from "../../../resources/utils/axiosInstance"
import { setCookie } from "../../../resources/utils/setCookieOnResponse"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
   return calculoAPI.post("/auth/refreshtoken", {refreshToken: req.cookies['calculo_refresh']})
        .then( (data) => {
            const {jwt, refreshToken, ...userData} = data.data
            res.status(200)
            setCookie(res, "calculo_token", jwt)
            res.send(userData)
        })
        .catch( error => {
            res.status(401)
            res.send(error)
        })
}