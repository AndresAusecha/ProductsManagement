import { useEffect, useState } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { Product } from './store/productsSlice';
import { setArrayOfProducts } from './store/actions/productActions';
import AppHeader from './comps/AppHeader/AppHeader';

function App() {
  const products = useAppSelector((state) => state.products.products);
  const [nameValue, setNameValue] = useState('');
  const [productType, setProductType] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    setArrayOfProducts(dispatch).catch((err) => alert(err));
  }, []);

  const onClickHandler = () => {
    
  }

  console.log(productType);
  
  return (
    <div className="App">
      <AppHeader />
      <div className="App-body">
      <div className="App-body-products-form">
        <p className="App-body-products-form-heading">Products form</p>
        <div className="App-body-products-form-fields">
          <input type="text" placeholder="Name" onChange={({ target: { value } }) => setNameValue(value) } />
          <select name="Product type" id="">
            <option onClick={() => setProductType('')}>
              Select...
            </option>
            {products.map((prod: Product) => (
              <option key={prod._id} onClick={() => setProductType(prod._id)}>
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
