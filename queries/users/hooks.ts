import { useMutation, useQuery, useQueryClient } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"
import { Router } from "next/router"

type loginData = {
    email: string;
    password: string;
}

type refreshtoken = {
    refreshToken: string
}

async function userLogin(data: loginData)
{
    return axios.post('/api/users/login', data)
}

async function userRefresh(data: refreshtoken)
{
    return axios.post('/api/users/refreshtoken', data)
}

export const useLoginUserMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(userLogin, {
        onSuccess: data => {
            queryClient.setQueryData('userData', data.data)
        },
        onError: error => {
            toast.error({error})
        }
    })
}

export const useUserData = (data: refreshtoken) => {
    const queryClient = useQueryClient()
    
    return useQuery('userData', () => userRefresh(data))
}