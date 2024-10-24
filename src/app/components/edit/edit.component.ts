import { Component, inject } from '@angular/core';
import { CreateProduct, Products } from '../../services/interfaces';
import { ProductsService } from '../../services';
import { Utils } from '../../utils';
import { ActivatedRoute, Router } from '@angular/router';
import { FormComponent } from '../form/form.component';
import { BackToListComponent } from '../back-to-list/back-to-list.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, BackToListComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  productServices = inject(ProductsService);
  utils = inject(Utils);
  router = inject(Router);
  product: Products = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit(product: Products) {
    const payload: CreateProduct = { title: product.title };
    this.productServices.update(this.product.id, payload).subscribe(() => {
      this.utils.Toast({
        text: 'Produto editado com sucesso!',
        actionText: 'Ok',
      });
      this.router.navigateByUrl('/');
    });
  }
}
