import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductModel } from '../product/product-component.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) {}

  getProducts(): void {
    this.products = this.productsService.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
