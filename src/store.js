import { createContext } from "react";

import ProductsData from "./assets/productsData";

function calculateTotalPrice(cartList) {
    return cartList.map((item) => item.quantity * item.price)
        .reduce((a, b) => a + b, 0);
}

export const cartInit = {
    cartList: [],
    productList: ProductsData
}



export const cartReducer = (state, action) => {

    const cartList = [...state.cartList]

    const productList = [...state.productList]

    // 取得當前購物車的目標品項索引
    const index = cartList.findIndex((item) => item.id === action.payload.id)

    console.log('productList: ',productList)
    // 
    // const productIndex = 

    console.log(action)
    switch (action.type) {
        // 新增商品至購物車
        case "ADD_TO_CART":

            if (index === -1) {
                cartList.push(action.payload)
            } else {
                cartList[index].quantity += action.payload.quantity
            }


            return {
                ...state,
                cartList,
                total: calculateTotalPrice(cartList)

            };
        case "CHANGE_CART_QUANTITY":
            cartList[index].quantity = action.payload.quantity

            return {
                ...state,
                cartList,
                total: calculateTotalPrice(cartList)
            };

        case "REMOVE_CART":
            cartList.splice(index, 1)


            return {
                ...state,
                cartList,
                total: calculateTotalPrice(cartList)
            };
        
        case "UPDATE_PRODUCT_QUANTITY":

            state.productList.find((product) => product.id === action.payload.id).quantity = action.payload.quantity
            state.productList.find((product) => product.id === action.payload.id).quantity = action.payload.quantity

            return {
                ...state,
            }

        default:
            return state
    }
}

export const CartContext = createContext({})