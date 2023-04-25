import { Injectable } from '@angular/core';
import { ProductModel } from './product-component/product-component.model';

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
}
