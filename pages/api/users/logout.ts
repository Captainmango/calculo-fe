import { NextApiRequest, NextApiResponse } from "next"
import { setCookie } from "../../../resources/utils/setCookieOnResponse"

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
    setCookie(res, "calculo_token", "")
    res.send("Logged out successfully")
}