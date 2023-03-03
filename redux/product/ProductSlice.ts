import { createSlice } from '@reduxjs/toolkit';
import { ActionTypes } from './createproduct/action_types';
import { Createproduct } from './createproduct/product';
import { initialState } from './ProductState';



export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    /* Createproduct Reducer */
    builder.addCase(Createproduct.pending, (state, action) => {
      console.log(action.type)
      state.type = ActionTypes.CREATEPRODUCT_PENDING;
    });
    builder.addCase(Createproduct.fulfilled,
      (state, action) => {
        console.log(action.type)
        state.type = ActionTypes.CREATEPRODUCT_FULFILLED;
        state.type = action.payload;
      });
    builder.addCase(Createproduct.rejected, (state, action) => {
      console.log(action.type)
      state.type = ActionTypes.CREATEPRODUCT_REJECTED;
    });
  }
})

// Action creators are generated for each case reducer function
export const { } = productSlice.actions

export default productSlice.reducer
