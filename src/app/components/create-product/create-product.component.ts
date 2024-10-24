import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ProductsService } from '../../services';
import { CreateProduct, Products } from '../../services/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { Utils } from '../../utils';
import { FormComponent } from '../form/form.component';
import { BackToListComponent } from '../back-to-list/back-to-list.component';

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
