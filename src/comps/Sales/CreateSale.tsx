import AppHeader from "../AppHeader/AppHeader"
import './CreateSale.css';
import salesApi from "../../apis/SalesApi";
import { useState } from "react";

const CreateSale: React.FC = () => {
  const [total, setTotal] = useState<Number>(0);
  const [product, setProduct] = useState<String>("");
  const onclickHandler = () => {
    salesApi.create({ total, prductList: [product] });
  }
  return (
    <div>
      <AppHeader />
      <h3>
        Create sale
      </h3>
      <div className="create-sale">
        <div className="create-sale-form">
        <div>
          <input type="number" onChange={({ target: { value } }) => setTotal(parseInt(value, 10))}/>
        </div>
        <div>
          <select name="" id="" onChange={({ target: { value } }) => setProduct(value)}>
            <option value="">Select...</option>
            <option value="60dd25d116e1db4338008b16">Prod 1</option>
            <option value="2">Prod 2</option>
            <option value="3">Prod 3</option>
          </select>
        </div>
        <button onClick={onclickHandler}>
          Submit
        </button>
        </div>
      </div>
    </div>
  );
}

export default CreateSale;
