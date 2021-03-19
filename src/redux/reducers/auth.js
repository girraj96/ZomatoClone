import ActionTypes from "../types";


const initialState={
    userData:{  },
    res:{}
}
export default function counterReducer(state=initialState, action){

    switch(action.type){
        case ActionTypes.LOGIN:
            const {userData}={...action.payload};
          
            return{...state,userData}
        
            case ActionTypes.ISLOGIN:
                const {res}={...action.payload};
                return{...state,res}
            

        default:
            {
               return {...state}
            }
    }

}