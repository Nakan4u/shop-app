import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductModel } from '../product/product-component.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  @Input() product: ProductModel | null = null;
  @Input() inCart: boolean = false;

  @Output() onRemoveProduct: EventEmitter<ProductModel> = new EventEmitter();

  constructor(private cartService: CartService) {}

  onAddToCart = () => {
    if (!this.product) return;
    this.cartService.addCartProduct(this.product);
  }

  removeFromCart = () => {
    if (!this.product) return;
    this.cartService.removeProduct(this.product);

    if (this.onRemoveProduct) {
      this.onRemoveProduct.emit(this.product);
    }
  }
}
