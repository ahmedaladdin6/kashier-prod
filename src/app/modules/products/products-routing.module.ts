import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditProductsComponent } from './components/add-edit-products/add-edit-products.component';
import { LandingProductsComponent } from './landing-products.component';
import { AllProductsComponent } from './pages/all-products/all-products.component';

const routes: Routes = [
  {
    path: '', component: LandingProductsComponent,

    children: [
      {
        path: '', component: AllProductsComponent
      },
      {
        path: 'add', component: AddEditProductsComponent,
      },
      {
        path: 'edit/:id', component: AddEditProductsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
