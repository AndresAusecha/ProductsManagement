import { set, setProds } from './../productsSlice';
import { set as setSales } from './../salesSlice';
import productsApi from '../../apis/ProductsApi'
import salesApi from '../../apis/SalesApi';

export const setArrayOfProductTypes = async (dispatch) => {
  return productsApi.getProductTypes().then((res) => res.json())
  .then((resBody) => dispatch(set(resBody)));
}

export const setArrayOfProducts = async (dispatch) => {
  return productsApi.getProducts().then((res) => res.json())
  .then((resBody) => dispatch(setProds(resBody)));
}

export const setSalesAction = async (dispatch) => {
  return salesApi.getList().then((res) => res.json()).then((resBody) => {
    console.log(resBody);
    dispatch(setSales(resBody))
  });
}
