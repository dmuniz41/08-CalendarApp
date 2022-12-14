import { types } from "../types/types";

const initialSate = {
    checking: true
}

export const authReducer = (state = initialSate, action)=>{

    switch (action.type) {
        
        case types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
        case types.authCheckingFinish:
            return{
                ...state,
                checking: false
            }
        case types.authLogouth:
            return{
                checking: false
            }
    
        default:
           return state;
    }

} 