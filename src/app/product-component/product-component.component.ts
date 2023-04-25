import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.scss']
})
export class ProductComponentComponent {
  @Input() name: string = "";

  onAddToCart = () => {
    console.log(`you bought ${this.name}`)
  }
}
