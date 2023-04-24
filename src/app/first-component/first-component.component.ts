import { Component, Input } from '@angular/core';
import { CategoryName } from './first-component.component.model';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})

export class FirstComponentComponent {
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() price: number = 0;
  @Input() category: "new" | "sale" = "new";
  @Input() isAvailable: boolean = false;
}
