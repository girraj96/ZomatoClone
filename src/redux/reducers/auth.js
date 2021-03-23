import { clearUserData } from "../../utils/utils";
import types from "../types";


const initialState={
    userData:{},
    isLoggedin:false,
}
export default function counterReducer(state=initialState, action){

    switch(action.type){
        
        case types.LOGIN:
            const userData={...action.payload};
            return{...state,userData, isLoggedin:true}
        
            // case types.ISLOGIN:
            //     const {res}=action.payload;
            //     return{...state,isLoggedin:true, userData:{...res}}

            case types.ON_LOGOUT:
                return{...state,isLoggedin:false,userData:{}}
        default:
            {
               return {...state}
            }
    }

}