import React from 'react';
import './App.css';
import { useAppSelector } from './store/hooks';
import { Product } from './store/productsSlice';

function App() {
  const products = useAppSelector((state) => state.products.products);
  console.log(products);
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Products management system
        </h3>
      </header>
      <div>
        {products.map((prod: Product) => <p>{prod.name}</p>)}
      </div>
    </div>
  );
}

export default App;
