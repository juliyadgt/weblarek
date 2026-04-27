export type ApiPostMethods = "POST" | "PUT" | "DELETE";
export type BuyerErrors = Partial<Record<keyof IBuyer, string>>;
export type Tpayment = "card" | "cash" | "";

export interface IApi {
  get<T extends object>(uri: string): Promise<T>;
  post<T extends object>(
    uri: string,
    data: object,
    method?: ApiPostMethods,
  ): Promise<T>;
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  price: number | null;
}

export interface IBuyer {
  payment: Tpayment;
  address: string;
  email: string;
  phone: string;
}

export interface IProductsResponse {
  total: number;
  items: IProduct[];
}

export interface IOrderResponse {
  id: string;
  total: number;
}

export interface IOrderRequest {
  payment: Tpayment;
  email: string;
  phone: string;
  address: string;
  total: number;
  items: string[];
}
