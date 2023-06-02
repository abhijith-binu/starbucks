import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CartComponent } from './cart/cart.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { DrinksComponent } from './drinks/drinks.component';
import { FoodComponent } from './food/food.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { CoffeeatHomeComponent } from './coffeeat-home/coffeeat-home.component';
import { ReadytoeatComponent } from './readytoeat/readytoeat.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';

@NgModule({
  declarations: [
    ProductsComponent,
    AllProductsComponent,
    ViewProductsComponent,
    CartComponent,
    BestsellerComponent,
    DrinksComponent,
    FoodComponent,
    MerchandiseComponent,
    CoffeeatHomeComponent,
    ReadytoeatComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPayPalModule
  ]
})
export class ProductsModule { }
