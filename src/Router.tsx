import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import NewProductTypeForm from './comps/NewProductType/NewProductTypeForm';

function NoFound() {
  return (
    <div>
      <h1 style={{ color: 'red', textAlign: 'center', width: '100%', }}>
        Error, page not found
      </h1>
    </div>
  )
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={NewProductTypeForm} path="/products/type/new" exact />
        <Route component={App} path="/products" exact />
        <Route component={NoFound} path="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default Router;