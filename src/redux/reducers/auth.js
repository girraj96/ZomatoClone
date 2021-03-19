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

        case ActionTypes.ADD_CART:
            const {newAry}={...action.payload}
            console.log("in reducers =>",newAry);
            return {}
        
        default:
            {
               return {...state}
            }
    }

}