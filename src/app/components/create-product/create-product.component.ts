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
import { CreateProduct } from '../../services/interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Utils } from '../../utils';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatInput,
    MatButtonModule,
  ],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss',
})
export class CreateProductComponent {
  productServices = inject(ProductsService);
  matSnackBar = inject(MatSnackBar);
  router = inject(Router);
  utils = inject(Utils);

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    const payload: CreateProduct = { title: this.form.value?.title! };
    this.productServices.create(payload).subscribe(() => {
      this.utils.Toast({
        text: 'Produto criado com sucesso!',
        actionText: 'Ok',
      });
      this.router.navigateByUrl('/');
    });
  }
}
