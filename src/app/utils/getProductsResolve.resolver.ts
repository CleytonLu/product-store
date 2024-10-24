import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../services';
import { Products } from '../services/interfaces';

export const getProducts = (): Observable<Products[]> => {
  const productsService = inject(ProductsService);
  return productsService.getAll();
};
