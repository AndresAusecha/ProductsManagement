import { set } from './../productsSlice';

export const setArrayOfProductTypes = async (dispatch) => {
  fetch('http://localhost:5000/product_types')
  .then((res) => res.json())
  .then((resBody) => {
    dispatch(set(resBody.typeProducts));
  });
}