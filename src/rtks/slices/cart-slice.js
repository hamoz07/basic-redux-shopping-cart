import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
    initialState:[],
    name:"CartReducer",
    reducers:{
        Add:(state,action)=>{
            const foundProduct = state.find((stateItem)=>stateItem.id === action.payload.id)
            if(foundProduct){
                foundProduct.quantity+=1
            }
            else {
                const Quantitied = {...action.payload,quantity:1}
                state.push(Quantitied);
            }
        },
        remove:(state,action)=>{
        return state.filter((cartItem) => cartItem.id !== action.payload.id )
        },
        clear:(state,action)=>{
            return state = []
        },
    }
})

export const {Add,remove,clear} = CartReducer.actions

export default CartReducer.reducer