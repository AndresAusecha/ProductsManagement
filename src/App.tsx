import { useState } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { add, Product } from './store/productsSlice';

function App() {
  const products = useAppSelector((state) => state.products.products);
  const [idValue, setIdValue] = useState(0);
  const [nameValue, setNameValue] = useState('');
  const dispatch = useAppDispatch();

  const onClickHandler = () => {
    const newProduct: Product = { id: idValue, name: nameValue };
    dispatch(
      add(newProduct)
    );
  }
  
  return (
    <div className="App">
      <div className="App-header">
        <h3>
          Products management system
        </h3>
      </div>
      <div className="App-body">
      <div className="App-body-products-form">
        <p className="App-body-products-form-heading">Products form</p>
        <div className="App-body-products-form-fields">
          <input type="number" placeholder="Id" onChange={({ target: { value } }) => setIdValue(parseInt(value)) } />
          <input type="text" placeholder="Name" onChange={({ target: { value } }) => setNameValue(value) } />
          <div className="App-body-products-form-fields-submit-container">
            <button className="submit" disabled={idValue === 0 || nameValue === ''} onClick={onClickHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
        <div className="App-body-products-table">
          <p className="App-body-products-table-heading">Products table</p>
          {products.map((prod: Product) => (
            <div className="App-body-products-table-row">
              <p><b>Id:</b> {prod.id}</p>
              <p> - </p>
              <p><b>Name:</b> {prod.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
