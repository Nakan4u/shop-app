import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductModel } from '../product-component/product-component.model';
@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent {
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {}

  getProducts(): void {
    this.products = this.productsService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
