import { Routes } from '@angular/router';
import { ListComponent } from './components';
import { getProduct, getProducts } from './utils';

export const routes: Routes = [
  {
    path: '',
    resolve: {
      products: getProducts,
    },
    component: ListComponent,
    title: 'Lista de produtos',
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./components/create-product/create-product.component').then(
        (m) => m.CreateProductComponent
      ),
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: getProduct,
    },
    loadComponent: () =>
      import('./components/edit/edit.component').then((m) => m.EditComponent),
  },
];
