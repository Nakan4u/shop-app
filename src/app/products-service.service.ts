import { Injectable } from '@angular/core';
import { ProductModel } from './product-component/product-component.model';


const products = [
  {name: 'apple'},
  {name: 'banana'},
]

@Injectable({
  providedIn: 'root'
})

export class ProductsServiceService {
  constructor() {}

  getProducts() : ProductModel[] {
    return products;
  }
}
