import { Component } from '@angular/core';
import { ProductModel } from '../product-component/product-component.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent {
  products: ProductModel[] = [];

  constructor(private cartService: CartService) {}

  getProducts(): void {
    this.products = this.cartService.getCartProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  trackById(index: number, item: ProductModel): number { return item.id; }
}
