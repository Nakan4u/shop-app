import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ProductComponentComponent,
    ProductListComponentComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
