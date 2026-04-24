import { IProduct } from "../types/index.ts";

export class Basket {
  private items: IProduct[] = [];

  public getItems(): IProduct[] {
    return this.items;
  }

  public addItem(product: IProduct): void {
    this.items.push(product);
  }

  public removeItem(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  public clear(): void {
    this.items = [];
  }

  public getTotal(): number {
    return this.items.reduce((sum, item) => sum + (item.price ?? 0), 0);
  }

  public getCount(): number {
    return this.items.length;
  }

  public hasItem(id: string): boolean {
    return this.items.some((item) => item.id === id);
  }
}
