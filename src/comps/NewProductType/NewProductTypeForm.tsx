import { plainToClass } from 'class-transformer';
import { useAppSelector } from '../../store/hooks';
import AppHeader from '../AppHeader/AppHeader';
import { ProductType } from '../../store/productsSlice';
import './NewProductTypeForm.css'
import productsApi from '../../apis/ProductsApi';
import { useEffect, useState } from 'react';
import { setArrayOfProductTypes } from '../../store/actions/productActions';
import { useDispatch } from 'react-redux';

function NewProductTypeForm() {
  const prodTypes = useAppSelector((state) => state.products.productTypes);
  const classProductTypes = plainToClass(ProductType, prodTypes);
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    setArrayOfProductTypes(dispatch).catch((err) => alert(err));
  }, []);
  return (
    <div className="new-product-type">
      <AppHeader />
      <div className="new-product-type-content">
        <div className="new-product-type-content-form">
          <input type="text" placeholder="New type of product" onChange={(e) => {setName(e.target.value)}}/>
          <button disabled={name.length===0} onClick={() => {
            productsApi.createType({ name }).then(() => {
              alert('Prodict type inserted');
              setArrayOfProductTypes(dispatch).catch((err) => alert(err));
              setName('');
            }).catch(() => {
              alert('Error');
            });
          }}>
            Submit
          </button>
        </div>
        <div className="new-product-type-content-list">
          {classProductTypes.map((cptype) => (
            <div key={cptype.getId()}><p>{cptype.getName()}</p></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewProductTypeForm;
