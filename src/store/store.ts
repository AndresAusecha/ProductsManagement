import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice';
import salesReducer from './salesSlice';
// ...

export const store = configureStore({
  reducer: {
    products: productsReducer,
    sales: salesReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;