import { useEffect, useState } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { Product } from './store/productsSlice';
import { setArrayOfProductTypes } from './store/actions/productActions';
import AppHeader from './comps/AppHeader/AppHeader';
import productsApi from './apis/ProductsApi'

function App() {
  const products = useAppSelector((state) => state.products.products);
  const [nameValue, setNameValue] = useState('');
  const [productType, setProductType] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    setArrayOfProductTypes(dispatch).catch((err) => alert(err));
  }, []);

  const onClickHandler = () => {
    const body = { Name: nameValue, prodType: productType };
    
    productsApi.create(body).then((res) => {
      alert('Product inserted correclty');
    }).catch((err) => {
      alert(`Eror: ${err}`);
    })
  }

  console.log(productType);
  console.log(nameValue);
  
  return (
    <div className="App">
      <AppHeader />
      <div className="App-body">
      <div className="App-body-products-form">
        <p className="App-body-products-form-heading">Products form</p>
        <div className="App-body-products-form-fields">
          <input type="text" placeholder="Name" onChange={({ target: { value } }) => setNameValue(value) } />
          <select name="Product type" id="" onChange={({ target: { value } }) => setProductType(value) }>
            <option value="">
              Select...
            </option>
            {products.map((prod: Product) => (
              <option key={prod._id} value={prod._id}>
                {prod.Name}
              </option>
            ))}
          </select>
          <div className="App-body-products-form-fields-submit-container">
            <button className="submit" disabled={nameValue === '' || productType === ''} onClick={onClickHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
