import { useMutation, useQuery, useQueryClient, UseQueryResult } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"

type loginData = {
    email: string
    password: string
}

type refreshtoken = {
    refreshToken: string
}

type registerData = {
    firstName: string
    lastName: string
    email: string
    password: string
}

async function userLogin(data: loginData)
{
    return axios.post('/api/users/login', data)
}

async function userRefresh(data: refreshtoken)
{
    return axios.post('/api/users/refreshtoken', data)
}

async function userRegister(data: registerData)
{
    return axios.post('/api/users/register', data)
}

export const useRefreshUserMutation = () => {
    const queryClient = useQueryClient()
    return useMutation(userLogin, {
        onSuccess: data => {
            queryClient.setQueryData('userRefresh', data.data)
        },
        onError: error => {
            toast.error({error})
        }
    })
}

export const useLoginUserQuery = (onSuccess, onError, data: loginData) => {
    return useQuery('userData', () => userLogin(data), {
        onSuccess,
        onError,
        enabled: false
    })
}

export const useRefreshUserQuery = (data: refreshtoken) => {  
    return useQuery('userData', () => userRefresh(data))
}