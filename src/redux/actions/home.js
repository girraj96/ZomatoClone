import store from "../store"
import ActionTypes from "../types"

const {dispatch}=store;

export const onItemClickAction =(newfoodItemAry, index)=>{
    dispatch ({
        type:ActionTypes.ADD_CART,
        payload:{newfoodItemAry, index}
    })
}

export const addItemCount = (add_id) => {
    dispatch ({
        type: ActionTypes.ADD_ITEM_COUNT,
        payload: {add_id}
    })
}

export const subItemCount=(sub_id)=>{
    dispatch({
        type:ActionTypes.SUBTRACT_ITEM_COUNT,
        payload:{sub_id}
    })
}

export const deleteItem=(delete_id)=>{
    dispatch({
        type:ActionTypes.DELETE_ITEM,
        payload:{delete_id}
    })
}

export const itemsTotalPrice=(productAry)=>{
    dispatch ({
        type:ActionTypes.TOTAL_PRICE,
        payload:{productAry},
    })
}
