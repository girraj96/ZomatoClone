import FlashMessage, { showMessage } from "react-native-flash-message";
import ActionTypes from "../types";

const initialState = {
    newAry: [],
    total_price: 0,
}

const commonFunction = (productAry) => {
    let newTotal = 0;
    for (let i in productAry) {
        newTotal += productAry[i].itemPrice * productAry[i].itemCount
    }
    return newTotal;
}

export default function counterReducer(state = initialState, action) {

    switch (action.type) {
        case ActionTypes.ADD_CART:

            const { newfoodItemAry } = action.payload;
            if (!state.newAry.includes(newfoodItemAry)) {
                newfoodItemAry.itemCount += 1;
                let newr = [...state.newAry, newfoodItemAry];
                return { ...state, newAry: [...newr] }
            }

            else {
                showMessage({
                    type: "warning",
                    icon: "warning",
                    message: "Item already exist"
                })
                return {...state};
            }
        case ActionTypes.ADD_ITEM_COUNT:

            const { add_id } = action.payload;
            let newAddItemsAry = [...state.newAry]
            let itemIndex = newAddItemsAry.findIndex((item) => item.id === add_id);
            newAddItemsAry[itemIndex].itemCount += 1;

            let newAddTotal = commonFunction(newAddItemsAry);
            
            return {
                ...state, newAry: [...newAddItemsAry], total_price: newAddTotal
            }

        case ActionTypes.SUBTRACT_ITEM_COUNT:
            const { sub_id } = action.payload;
            let newSubItemsAry = [...state.newAry];
            let itemSubIndex = newSubItemsAry.findIndex((item) => item.id === sub_id);
            newSubItemsAry[itemSubIndex].itemCount -= 1;

            if (newSubItemsAry[itemSubIndex].itemCount === 0) {
                let finalSubItem = newSubItemsAry.filter((item) => item.id !== sub_id);
                let newSubTotal = commonFunction(finalSubItem);
                return {
                    ...state, newAry: [...finalSubItem], total_price: newSubTotal
                }
            }
            else {
                let subTotal = commonFunction(newSubItemsAry);
                return {
                    ...state, newAry: [...newSubItemsAry], total_price: subTotal
                }
            }

        case ActionTypes.DELETE_ITEM:
            const { delete_id } = action.payload;
            let newDeleteItemsAry = [...state.newAry];
            let delete_index = newDeleteItemsAry.findIndex((item) => item.id === delete_id);
            newDeleteItemsAry[delete_index].itemCount=0;
            let deletedAry=newDeleteItemsAry.splice(0,delete_index)
            let afterDeletePrice = commonFunction(deletedAry);
            return {...state, newAry:[...deletedAry],total_price:afterDeletePrice}

        case ActionTypes.TOTAL_PRICE:
            const { productAry } = action.payload;
            let newTotal = commonFunction(productAry);
            return {
                ...state, total_price: newTotal
            }
        default:
            {
                return { ...state }
            }
    }

}