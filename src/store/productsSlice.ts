import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

export class ProductType {
  private _id: string
  private name: string;

  constructor(id: string, name: string){
    this._id  = id;
    this.name = name;
  }

  getId(){
    return this._id;
  }

  getName(){
    return this.name;
  }  
}

export class Product {
  private _id: string;
  private name: string;
  private prodType: string;
  private price: Number;

  constructor(id: string, name: string, prodType: string, price: Number){
    this._id  = id;
    this.name = name;
    this.prodType = prodType;
    this.price = price;
  }

  getId(){
    return this._id;
  }

  getName(){
    return this.name;
  }

  getProdType(){
    return this.prodType;
  }

  getPrice(){
    return this.price;
  }
}

interface ProductState {
  productTypes: Array<ProductType>,
  products: Array<Product>,
}

const initialState: ProductState = {
  productTypes: [],
  products: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductType>) => {
      state.productTypes.push(action.payload)
    },
    set: (state, action) => {
      state.productTypes = action.payload;
    },
    addProds: (state, action: PayloadAction<Product>) => {
      state.productTypes.push(action.payload)
    },
    setProds: (state, action) => {
      state.products = action.payload;
    }
  }
});

export const { add } = productSlice.actions;

export const { set } = productSlice.actions;

export const { addProds } = productSlice.actions;

export const { setProds } = productSlice.actions;

export const getProductTypesList = (state: RootState) => state.products.productTypes;

export const getProductsList = (state: RootState) => state.products.products;

export default productSlice.reducer;
