import { NextApiRequest, NextApiResponse } from "next"
import { User } from "../../../models/User"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<User>
) {
    console.log(req.body)
}