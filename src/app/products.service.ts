import { Injectable } from '@angular/core';
import { ProductModel } from './product-component/product-component.model';


const products = [
  {id: 1, name: 'apple'},
  {id: 2, name: 'banana'},
  {id: 3, name: 'orange'},
]

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  constructor() {}

  getProducts() : ProductModel[] {
    return products;
  }
}
