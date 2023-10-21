  import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

  export const ProductsFetcher = createAsyncThunk("products/ProductsFetcher",async ()=>{
      const res = await fetch("https://dummyjson.com/products")
      const resJsoned = await res.json()
      const prods = resJsoned.products
      return prods;
  })

  export const ProductsSlicer = createSlice({
    name: 'products',
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
      builder.addCase(ProductsFetcher.fulfilled,(state,action)=>{
        return action.payload
      })
    },
  })

  export const { } = ProductsSlicer.actions

  export default ProductsSlicer.reducer