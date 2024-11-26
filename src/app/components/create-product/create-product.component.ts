import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../../services';

import { CreateProduct, Products } from '../../services/interfaces';
import { Utils } from '../../utils';
import { BackToListComponent } from '../back-to-list/back-to-list.component';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  productServices = inject(ProductsService);
  router = inject(Router);
  utils = inject(Utils);

  onSubmit(product: Products) {
    const payload: CreateProduct = { title: product.title };
    this.productServices.create(payload).subscribe(() => {
      this.utils.Toast({
        text: 'Produto criado com sucesso!',
        actionText: 'Ok',
      });
      this.router.navigateByUrl('/');
    });
  }
}
