import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateProduct, Products } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Products[]>('/api/products');
  }

  create(payload: CreateProduct) {
    return this.httpClient.post<Products>('/api/products', payload);
  }
}
