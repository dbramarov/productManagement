import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'productList', component: ProductListComponent },
  {path: 'productCreation', component: ProductCreationComponent },
  {path: 'productEdit/:id', component: ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
