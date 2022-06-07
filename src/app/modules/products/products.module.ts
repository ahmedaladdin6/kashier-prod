import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './pages/all-products/all-products.component';
import { AddEditProductsComponent } from './components/add-edit-products/add-edit-products.component';
import { LandingProductsComponent } from './landing-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const components =[AllProductsComponent, AddEditProductsComponent,LandingProductsComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
