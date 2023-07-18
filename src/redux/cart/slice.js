import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIsAlreadyInCart = state.products.some(product =>
                product.id === action.payload.id
            )
            if (productIsAlreadyInCart) {
                state.products = state.products.map(product =>
                    product.id === action.payload.id ?
                        { ...product, quantity: product.quantity + 1 }
                        : product
                )
                return;
            }
            state.products = [...state.products, { ...action.payload, quantity: 1 }]
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        },
        increaseProduct: (state, action) => {
            state.products = state.products.map(product =>
                product.id === action.payload ?
                    { ...product, quantity: product.quantity + 1 } : product)
        },
        descreaseProduct: (state, action) => {
            state.products = state.products.map(product =>
                product.id === action.payload ?
                    product.quantity === 1 ?
                        { ...product, quantity: product.quantity = 1 } : { ...product, quantity: product.quantity - 1 }
                    : product)
        }
    },
})

export const { addProduct, removeProduct, increaseProduct, descreaseProduct } = cartSlice.actions

export default cartSlice.reducer