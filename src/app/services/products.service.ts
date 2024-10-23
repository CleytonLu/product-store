import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CreateProduct, Products, UpdateProduct } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Products[]>('/api/products');
  }

  getById(id: string) {
    return this.httpClient.get<Products>(`/api/products/${id}`);
  }

  create(payload: CreateProduct) {
    return this.httpClient.post<Products>('/api/products', payload);
  }

  update(id: string, payload: CreateProduct) {
    return this.httpClient.put<Products>(`/api/products/${id}`, payload);
  }

  delete(id: string) {
    return this.httpClient.delete<Products>(`/api/products/${id}`);
  }
}
