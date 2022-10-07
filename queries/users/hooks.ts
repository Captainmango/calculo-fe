import { useMutation, useQuery, useQueryClient, UseQueryResult } from "react-query"
import axios from "axios"
import { toast } from "react-toastify"

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

export const useLogoutUserMutation = () => {
    const queryClient = useQueryClient()

    return useMutation(userLogout, {
        onSuccess: data => {
            queryClient.invalidateQueries(["userData", "expenses"])
            toast.success("You've logged out")
        },
        onError: error => {
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

export const useRefreshUserQuery = () => {
    return useQuery('userData', () => userRefresh())
}

export const useRegisterUserQuery = (onSuccess, onError, data: registerData) => {
    return useQuery('userData', () => userRegister(data), {
        onSuccess,
        onError,
        enabled: false
    })
}

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

async function userRefresh()
{
    return axios.post('/api/users/refreshtoken')
}

async function userRegister(data: registerData)
{
    return axios.post('/api/users/register', data)
}

async function userLogout()
{
    return axios.get('/api/users/logout')
}
