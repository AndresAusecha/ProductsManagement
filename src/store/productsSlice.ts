import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

export class Product {
  _id: string = ''
  Name: string = 'product'
}

interface ProductState {
  products: Array<Product>
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
    set: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { add } = productSlice.actions;

export const { set } = productSlice.actions;

export const getList = (state: RootState) => state.products;

export default productSlice.reducer;
