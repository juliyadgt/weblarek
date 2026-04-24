import { IApi } from "../types/index";
import { IProductsResponse } from "../types/index";
import { IOrderRequest } from "../types/index";
import { IOrderResponse } from "../types/index";

export class ApiService {
  private api: IApi;

  constructor(api: IApi) {
    this.api = api;
  }

  getProducts(): Promise<IProductsResponse> {
    return this.api.get<IProductsResponse>("/product/");
  }

  sendOrder(data: IOrderRequest): Promise<IOrderResponse> {
    return this.api.post<IOrderResponse>("/order/", data, "POST");
  }
}
