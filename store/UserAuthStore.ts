import create, { GetState, SetState, StoreApi } from "zustand"
import { devtools, redux } from "zustand/middleware"
import { User } from "../models/User"

const types = { logIn: "LOG_IN", logOut: "LOG_OUT", createUser: "CREATE_USER" }

type UserPayload = {
    type: string,
    body: UserState
}

interface UserState {
    user: User | null,
    loading: boolean
}

let initialState: UserState = {
    user: null,
    loading: false
}

const reducer = (state: UserState, payload: UserPayload) => {
    switch (payload.type) {
        case types.logIn:
            return {
                user: state.user = payload.body.user,
                loading: state.loading = payload.body.loading
            }
        default:
            return state
    }
}

export const userStore = create<StoreApi<UserState>>(devtools(redux(reducer, initialState)))