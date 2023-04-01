import { createSlice } from "@reduxjs/toolkit";
import { products } from "../../components/cards/products";

const initialState = {
    products: products,
    basketProducts: [],
    countProduct: 0,
    allPrice: 0,
    count: 0
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProductsInBasket: (state, action) => {
            state.basketProducts.push(action.payload);

            state.countProduct = state.basketProducts.length;
            state.allPrice = state.basketProducts.reduce((acc, curr) => {
                return acc + +curr.price
            }, 0);
        },
        removeProductFromBasket: (state, action) => {
            state.basketProducts = state.basketProducts.filter(item => item.idx !== action.payload);
            state.countProduct = state.basketProducts.length;
            state.allPrice = state.basketProducts.reduce((acc, curr) => {
                return acc + curr.price
            }, 0);
        },

        deleteAll: (state, action) => {
            state.basketProducts = [];
            state.countProduct = 0;
            state.allPrice = 0;
        }

        // plusItem: (state) => {
        //     state.count = state.count + 1;
        // },
        // minusItem: (state) => {
        //     state.count = state.count - 1;
        // },
    }
})

export const { addProductsInBasket, removeProductFromBasket, deleteAll 
    // plusItem, minusItem 
} = productsSlice.actions;

export default productsSlice.reducer;