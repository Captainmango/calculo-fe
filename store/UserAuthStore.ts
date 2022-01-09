import { loadavg } from "os"
import create from "zustand"
import { redux } from "zustand/middleware"
import { User } from "../models/User"

const types = { logIn: "LOG_IN", logOut: "LOG_OUT", createUser: "CREATE_USER" }

interface UserState { 
    user: User | null,
    loading: boolean
}

let initialState: UserState = {
    user: null,
    loading: false
}

const reducer = (state, { type, payload }) => {
    switch(type) {
        case types.logIn:
            return {
                user: state.user = payload.user,
                loading: state.loading = payload.loading
            }
        default:
            return state
    }
}

export const useStore = create(redux(reducer, initialState))