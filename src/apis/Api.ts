class Api {
  public basicURL = 'http://localhost:5000';

  protected buildHeaders = () => ({ 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json', Accept: 'application/json' });
}

export default Api;
