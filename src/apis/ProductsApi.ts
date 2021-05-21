import Api from "./Api";

class ProductsApi extends Api {
  create(body: any) {
    const req = new Request(`${this.basicURL}/products`, { method: 'POST', body: JSON.stringify(body), headers: this.buildHeaders() });

    return fetch(req);
  }
}

export default new ProductsApi();