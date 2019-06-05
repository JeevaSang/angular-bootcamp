import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { map, filter, debounceTime } from 'rxjs/operators';
import { Product } from '../../models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  formGroup: FormGroup;
  searchControl: FormControl; // input 

  products$: Observable<Product[]>;

  constructor(private builder: FormBuilder,
    private productService: ProductService) {
    this.searchControl = new FormControl();

    this.formGroup = builder.group({
      'searchBox': this.searchControl
    });
  }

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(map(value => value.trim()))
      .pipe(filter(value => value.length >= 2))
      .pipe(debounceTime(500))

      .subscribe(value => {
        console.log('**' + value + '**');
        this.products$ = this.productService.searchProducts(value);
      });
  }

}
