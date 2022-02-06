import create, { StoreApi } from "zustand"
import { devtools, redux } from "zustand/middleware"
import { User } from "../models/User"

export const userActionTypes = { 
    logIn: "LOG_IN", 
    logOut: "LOG_OUT", 
    createUser: "CREATE_USER", 
    fetchUser: "FETCH_USER" 
}

type UserAction = {
    type: string,
    body: UserState
}

export interface UserState {
    user: User | null,
    loading: boolean,
    authenticated: boolean
}

let initialState: UserState = {
    user: null,
    loading: false,
    authenticated: false
}

const reducer = (state: UserState, action: UserAction) => {
    switch (action.type) {
        case userActionTypes.logIn:
            return {
                user: state.user = action.body.user,
                loading: state.loading = false,
                authenticated: true
            }
        case userActionTypes.logOut:
            return {
                user: state.user = null,
                loading: state.loading = false,
                authenticated: false
            }
        case userActionTypes.createUser:
            return {
                user: state.user = null,
                loading: state.loading = true,
                authenticated: false
            }
        case userActionTypes.fetchUser:
            return {
                user: state.user = null,
                loading: state.loading = true,
                authenticated: false
            }
        default:
            return state
    }
}

//@ts-ignore
export const UserStore = create<StoreApi<UserState>>(devtools(redux(reducer, initialState)))