import { IBuyer } from "../types/index.ts";
import { BuyerErrors } from "../types/index.ts";

export class Buyer {
  private payment: IBuyer["payment"] = "";
  private address: string = "";
  private email: string = "";
  private phone: string = "";

  public saveData(data: Partial<IBuyer>): void {
    if (data.payment !== undefined) {
      this.payment = data.payment;
    }

    if (data.address !== undefined) {
      this.address = data.address;
    }

    if (data.email !== undefined) {
      this.email = data.email;
    }

    if (data.phone !== undefined) {
      this.phone = data.phone;
    }
  }

  public getData(): IBuyer {
    return {
      payment: this.payment,
      address: this.address,
      email: this.email,
      phone: this.phone,
    };
  }

  public clear(): void {
    this.payment = "";
    this.address = "";
    this.email = "";
    this.phone = "";
  }

  public validate(): BuyerErrors {
    const errors: BuyerErrors = {};

    if (!this.payment) {
      errors.payment = "Выберите способ оплаты";
    }

    if (!this.address) {
      errors.address = "Введите адрес";
    }

    if (!this.email) {
      errors.email = "Введите email";
    }

    if (!this.phone) {
      errors.phone = "Введите телефон";
    }

    return errors;
  }
}
