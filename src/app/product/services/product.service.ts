import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { Brand } from '../models/brand';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchProducts(q: any): any {
    return this.http.get<Product[]>(environment.apiEndPoint+'/api/products?q=' + q);
  }
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiEndPoint}/api//products`);

  }
  deleteProduct(id: number): Observable<any> {
    console.log('id is:', id);
    return this.http.delete(environment.apiEndPoint+'/api//products/' + id);
  }
  getProduct(id: number): Observable<Product> {
    console.log('in  get prod');
    return this.http.get<Product>(environment.apiEndPoint+'/api//products/' + id);
  }

  saveProduct(product: Product): Observable<Product> {
    if (product.id) { // Put/update
      // PUT /api/products/123
      // {{data as json}}
      // returns updated product object
      return this.http.put<Product>(environment.apiEndPoint+'/api//products/' + product.id,
        product
      );
    }

    // POST /api/products
    // {{data as json}}
    // returns updated product object but with id
    // else post/create
    return this.http.post<Product>(environment.apiEndPoint+'/api/products',
      product
    );
  }




  getBrands(): Observable<Brand[]> {
    const stroage = window.localStorage;
    const brandsCache = stroage.getItem('brands');
    if (brandsCache) {
      console.log('serving from cache')
      const brands = JSON.parse(brandsCache);
      return of(brands); //converting array to observable <array>      
    }

    console.log('serving from server')
    return this.http
      .get<Brand[]>(environment.apiEndPoint+'/api/brands')
      .pipe(map(brands => {
        stroage.setItem('brands', JSON.stringify(brands))
        return brands;
      }));
  }



}