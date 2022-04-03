import { NextApiRequest, NextApiResponse } from "next"
import { setCookie } from "../../../resources/utils/setCookieOnResponse"

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
    delete req.cookies.calculo_token
    setCookie(res, "calculo_token", "", {expires: new Date(Date.now())})
    res.send(req.cookies)
}