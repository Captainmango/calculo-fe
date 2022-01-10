import create, { GetState, SetState, StoreApi } from "zustand"
import { devtools, redux } from "zustand/middleware"
import { User } from "../models/User"

export const userActionTypes = { logIn: "LOG_IN", logOut: "LOG_OUT", createUser: "CREATE_USER" }

type UserAction = {
    type: string,
    body: UserState
}

export interface UserState {
    user: User | null,
    loading: boolean
}

let initialState: UserState = {
    user: null,
    loading: false
}

const reducer = (state: UserState, action: UserAction) => {
    switch (action.type) {
        case userActionTypes.logIn:
            return {
                user: state.user = action.body.user,
                loading: state.loading = action.body.loading
            }
        default:
            return state
    }
}

//@ts-ignore
export const UserStore = create<StoreApi<UserState>>(devtools(redux(reducer, initialState)))