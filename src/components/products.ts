import { IProduct } from "../types/index.ts";

export class Products {
  private items: IProduct[] = [];
  private selectedProduct: IProduct | null = null;

  public setItems(items: IProduct[]): void {
    this.items = items;
  }

  public getItems(): IProduct[] {
    return this.items;
  }

  public getProductById(id: string): IProduct | undefined {
    return this.items.find((item) => item.id === id);
  }

  public setSelectedProduct(product: IProduct): void {
    this.selectedProduct = product;
  }

  public getSelectedProduct(): IProduct | null {
    return this.selectedProduct;
  }

  public clearSelectedProduct(): void {
    this.selectedProduct = null;
  }
}
