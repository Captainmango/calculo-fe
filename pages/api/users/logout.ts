import { NextApiRequest, NextApiResponse } from "next"
import { setCookie } from "../../../resources/utils/setCookieOnResponse"

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
    setCookie(res, "calculo_token", "deleted", {expires: new Date(0), path: "/api"})
    res.send("Logged out")
}