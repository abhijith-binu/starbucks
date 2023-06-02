import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CartComponent } from './cart/cart.component';
import { BestsellerComponent } from './bestseller/bestseller.component';
import { CoffeeatHomeComponent } from './coffeeat-home/coffeeat-home.component';
import { FoodComponent } from './food/food.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { ReadytoeatComponent } from './readytoeat/readytoeat.component';
import { DrinksComponent } from './drinks/drinks.component';

const routes: Routes = [
  { 
    path: '', component: AllProductsComponent
  },
  {
    path: 'view-products/:id',component:ViewProductsComponent
  },
  {
    path: 'cart',component:CartComponent
  },
  {
    path: 'bestseller',component:BestsellerComponent
  },
  {
    path: 'coffeeeathome',component:CoffeeatHomeComponent
  },
  {
    path: 'food',component:FoodComponent
  },
  {
    path: 'merchandise',component:MerchandiseComponent
  },
  {
    path: 'readytoeat',component:ReadytoeatComponent
  },
  {
    path: 'drinks',component:DrinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
