import { plainToClass } from 'class-transformer';
import { useAppSelector } from '../../store/hooks';
import AppHeader from '../AppHeader/AppHeader';
import { ProductType } from '../../store/productsSlice';

function NewProductTypeForm() {
  const prodTypes = useAppSelector((state) => state.products.productTypes);
  const classProductTypes = plainToClass(ProductType, prodTypes);
  return (
    <div className="new-product-type">
      <AppHeader />
      <div>
        <p>THIS SHIT WORKS</p>
      </div>
    </div>
  )
}

export default NewProductTypeForm;