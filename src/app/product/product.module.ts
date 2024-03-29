import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductWidgetComponent } from './components/product-widget/product-widget.component';


import { Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    //path: 'products',
    path: '', //for lazy loading
    component: ProductHomeComponent,

    // nested navigation
    children: [
      {
        path: 'list', // products/list, where as products from parent
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductEditComponent
      },

      {
        path: 'edit/:id',  //products/edit/12345
        component: ProductEditComponent
      },

      {
        path: 'search',
        component: ProductSearchComponent
      },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductHomeComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductSearchComponent,
    ProductWidgetComponent],

  providers: [
    ProductService
  ]
})
export class ProductModule { }
