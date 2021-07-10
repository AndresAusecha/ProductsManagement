import Api from "./Api";

class SalesApi extends Api {
  getList(){
    return fetch(`${this.basicURL}/sales`);
  }

  create(body: any){
    const req = new Request(`${this.basicURL}/sales`, 
      { method: 'POST', body: JSON.stringify(body), headers: this.buildHeaders(),
    });

    return fetch(req);
  }
}


export default new SalesApi();
