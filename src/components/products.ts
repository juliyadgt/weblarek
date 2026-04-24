import { IProduct } from "../types/index.ts";

export class Products {
  private items: IProduct[] = [];

  public setItems(items: IProduct[]): void {
    this.items = items;
  }

  public getItems(): IProduct[] {
    return this.items;
  }

  public getProductById(id: string): IProduct | undefined {
    return this.items.find((item) => item.id === id);
  }
}
