import { ActionTypes } from "../constants/action-types"

export const setProduct = (product)=>{
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:product,

    };

}

export const selectProduct = (product)=>{
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:product,

    }

}

export const removeSelectProduct = ()=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
        

    };

}