import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export class Sale {
  private _id = '';
  private total: Number = 0;
  private listOfProducts: Array<string> = [];
  private date: string = '';

  getTotal() {
    return this.total;
  }

  getId() {
    return this._id;
  }

  getProducts() {
    return this.listOfProducts;
  }

  getDate(){
    return this.date;
  }
}

interface SalesState {
  sales: Array<Sale>;
}

const initialState: SalesState = {
  sales: [],
}

export const salesSlice = createSlice({
  name: 'sales',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Sale>) => {
      state.sales.push(action.payload);
    }, 
    set: (state, action: PayloadAction<Sale[]>) => {
      state.sales = action.payload; 
    }
  }
});

export const { add } = salesSlice.actions;

export const { set } = salesSlice.actions;


export default salesSlice.reducer;
