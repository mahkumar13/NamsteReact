import { createSlice } from "@reduxjs/toolkit";
const cardSlice= createSlice(
    {
        name:"Cart",
        initialState:{
            items:[]
        },
        reducers:{
            addItems:(state,action)=>{
                state.items.push(action.payload)
            },
            removeItem:(state,action)=>{
                state.items.pop();
            },
            clearCart:(state,action)=>{
                state.items.length=0
            }
        }
    }
)
export default cardSlice.reducer;
export const  {addItems,removeItem,clearCart}  = cardSlice.actions