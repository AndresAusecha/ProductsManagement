import { useEffect, useState } from 'react';
import './App.css';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { Product, ProductType } from './store/productsSlice';
import { setArrayOfProductTypes, setArrayOfProducts } from './store/actions/productActions';
import AppHeader from './comps/AppHeader/AppHeader';
import productsApi from './apis/ProductsApi'
import { plainToClass } from 'class-transformer';

function App() {
  const prodTypes = useAppSelector((state) => state.products.productTypes);
  const prods = useAppSelector((state) => state.products.products);
  const classProductTypes: Array<ProductType> = plainToClass(ProductType, prodTypes) ?? [];
  const classProducts: Array<Product> = plainToClass(Product, prods) ?? [];

  const [nameValue, setNameValue] = useState('');
  const [productType, setProductType] = useState('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    setArrayOfProductTypes(dispatch).catch((err) => alert(err));
    setArrayOfProducts(dispatch).catch((err) => alert(err));
  }, [dispatch]);

  const onClickHandler = () => {
    const body = { name: nameValue, prodType: productType };
    
    productsApi.create(body).then(() => {
      alert('Product inserted correclty');
      setArrayOfProducts(dispatch).catch((err) => alert(err));
    }).catch((err) => {
      alert(`Eror: ${err}`);
    })
  }
  
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
            {classProductTypes.map((prod: ProductType) => (
              <option key={prod.getId()} value={prod.getId()}>
                {prod.getName()}
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
      <div className="App-body-products-list">
        {classProducts.length > 0 ? (
          <>
            <p className="App-body-products-list-msg">List of products</p>
            {classProducts.flatMap((cp) => <p key={cp.getId()}>{cp.getName()}</p>)}
          </>
          ) : (
            <p className="App-body-products-list-no-found-msg" >No product found</p>
          )
        }
      </div>
      </div>
    </div>
  );
}

export default App;
