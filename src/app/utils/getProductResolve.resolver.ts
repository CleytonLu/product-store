import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from '../services';

export const getProduct = (route: ActivatedRouteSnapshot) => {
  const productsService = inject(ProductsService);
  return productsService.getById(route.params['id']);
};
