export interface IConfig {
  production: boolean;
  API_URL_STOCK: string;
  API_URL_STOCK_BUSINESS: string;
  API_URL_STOCK_DATA: string;
  OAUTH: {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    BASE_URL: string;
    TOKEN_URL: string;
  };
}
