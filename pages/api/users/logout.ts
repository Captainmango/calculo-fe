import { NextApiRequest, NextApiResponse } from "next"
import { createCookie } from "../../../resources/utils/serializeCookie"

export default function handler(req: NextApiRequest, res: NextApiResponse)
{
    res.setHeader('Set-Cookie', [
        createCookie("calculo_token", "deleted", {expires: new Date(0), path: "/api"}), 
        createCookie("calculo_refresh", "deleted", {expires: new Date(0), path: "/api"})
    ])
    
    res.send("Logged out")
}