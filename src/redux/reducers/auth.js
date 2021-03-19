import ActionTypes from "../types";


const initialState={
    userData:{  }
}
export default function counterReducer(state=initialState, action){

    switch(action.type){
        case ActionTypes.LOGIN:
            const userData={...action.payload};
            console.log("in auth reducer=>", userData);
            return{...state,userData}
        
        default:
            {
               return {...state}
            }
    }

}