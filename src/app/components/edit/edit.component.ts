import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';
import { CreateProduct } from '../../services/interfaces';
import { ProductsService } from '../../services';
import { Utils } from '../../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatInput,
    MatButtonModule,
  ],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {
  productServices = inject(ProductsService);
  utils = inject(Utils);
  router = inject(Router);

  form = new FormGroup({
    title: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  onSubmit() {
    const id = '';

    const payload: CreateProduct = { title: this.form.value?.title! };
    this.productServices.update(id, payload).subscribe(() => {
      this.utils.Toast({
        text: 'Produto criado com sucesso!',
        actionText: 'Ok',
      });
      this.router.navigateByUrl('/');
    });
  }
}
