import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

export class Product {
  id: number = 1
  name: string = 'product'
}

interface ProductState {
  products: Array<Product>
}

const initialState: ProductState = {
  products: [{ id: 1, name: 'Some name' }],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload)
    },
  }
});

export const { add } = productSlice.actions;

export const getList = (state: RootState) => state.products;

export default productSlice.reducer;
