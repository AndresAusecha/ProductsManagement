import { set } from './../productsSlice';

export const setArrayOfProducts = async (dispatch) => {
  fetch('http://localhost:5000/products')
  .then((res) => res.json())
  .then((resBody) => {
    dispatch(set(resBody.products));
  });
}