import { useQuery } from "react-query"
import axios from "axios"

type loginData = {
    email: string;
    password: string;
}

export async function userLogin(data: loginData)
{
    const response = await axios.post('/api/v1/users/login', data)
    return response.data
}

export const useUserLoginData = () => {
}