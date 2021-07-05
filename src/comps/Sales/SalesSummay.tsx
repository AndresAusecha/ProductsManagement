import { plainToClass } from "class-transformer";
import { useEffect } from "react";
import { setSalesAction } from "../../store/actions/productActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Sale } from "../../store/salesSlice";
import AppHeader from "../AppHeader/AppHeader";

const SalesSummary = () => {
  const dispatch = useAppDispatch();
  const sales = useAppSelector((state) => state.sales.sales);
  const classSales: Array<Sale> = plainToClass(Sale, sales) ?? [];
  console.log(classSales);
  useEffect(() => {
   setSalesAction(dispatch).catch((err) => alert(err));
  }, [dispatch]);
  return (
    <div>
      <AppHeader />
        <div style={{ display: 'flex', justifyContent: 'center',  }}>
          <h2>Sales</h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center',  }}>
        <div>
          {classSales.map((s) => (
            <>
              <div style={{ display: 'flex' }}>
                <p style={{ width: '15rem', margin: '0.7rem' }}>Id</p>
                <p style={{ width: '15rem', margin: '0.7rem' }}>Total</p>
                <p style={{ width: '15rem', margin: '0.7rem' }}>Date</p>
              </div>
              <div style={{ display: 'flex' }}>
                <p  style={{ width: '15rem', margin: '0.7rem' }}>
                  {s.getId()}
                </p>
                <p  style={{ width: '15rem', margin: '0.7rem' }}>
                  {s.getTotal()}
                </p>
                <p  style={{ width: '15rem', margin: '0.7rem' }}>
                  {s.getDate()}
                </p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesSummary;
