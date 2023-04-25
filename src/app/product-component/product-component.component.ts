import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductModel } from './product-component.model';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})

export class ProductComponentComponent {
  @Input() product: ProductModel | null = null;

  constructor(private cartService: CartService) {}

  onAddToCart = () => {
    if (!this.product) return;
    this.cartService.addCartProduct(this.product);
  }
}
