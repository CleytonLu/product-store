import { Routes } from '@angular/router';
import { ListComponent } from './components';

export const routes: Routes = [
  {
    path: '',
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
];
