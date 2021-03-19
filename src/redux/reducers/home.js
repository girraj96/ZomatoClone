import ActionTypes from "../types";


const initialState={
    newAry:[],
    cartCount:0,

}
export default function counterReducer(state=initialState, action){

    switch(action.type){
        case ActionTypes.ADD_CART:

        const {newfoodItemAry, index}=action.payload;

        if (!state.newAry.includes(newfoodItemAry[index])) {
            let newr=[...state.newAry,newfoodItemAry[index]];
               newfoodItemAry[index].itemCount+=1;
             return {...state,newAry:[...newr],cartCount:state.cartCount+1}
           }
    

        default:
            {
               return {...state}
            }
    }

}