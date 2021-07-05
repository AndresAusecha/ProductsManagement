import Api from "./Api";

class SalesApi extends Api {
  getList(){
    return fetch(`${this.basicURL}/sales`);
  }
}


export default new SalesApi();
