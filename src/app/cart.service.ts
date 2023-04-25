import { Injectable } from '@angular/core';
import { ProductModel } from './product/product-component.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  products: ProductModel[] = []

  constructor() {}


  getCartProducts() : ProductModel[] {
    return this.products;
  }

  addCartProduct(product: ProductModel) {
    this.products.push(product);
  }

  removeProduct(product: ProductModel) {
    const newList = this.products.filter(i => i.name !== product.name);
    console.log("removeProduct: ", newList);
    this.products = newList;
  }
}
