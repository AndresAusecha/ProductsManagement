import { set, setProds } from './../productsSlice';
import productsApi from '../../apis/ProductsApi'

export const setArrayOfProductTypes = async (dispatch) => {
  return productsApi.getProductTypes().then((res) => res.json())
  .then((resBody) => dispatch(set(resBody)));
}

export const setArrayOfProducts = async (dispatch) => {
  return productsApi.getProducts().then((res) => res.json())
  .then((resBody) => dispatch(setProds(resBody)));
}