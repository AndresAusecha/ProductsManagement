import Api from "./Api";

class ProductsApi extends Api {
  create(body: any) {
    const req = new Request(`${this.basicURL}/products`, {
      method: 'POST',
      body: JSON.stringify(body), headers: this.buildHeaders() 
    });

    return fetch(req);
  }

  createType(body: any) {
    const req = new Request(`${this.basicURL}/product_types`, 
      { method: 'POST', body: JSON.stringify(body), headers: this.buildHeaders(),
    });

    return fetch(req);
  }

  getProductTypes(){
    return fetch(`${this.basicURL}/product_types`);
  }

  getProducts(){
    return fetch(`${this.basicURL}/products`);
  }
}

export default new ProductsApi();