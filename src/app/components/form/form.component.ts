import {
  Component,
  EventEmitter,
  inject,
  Input,
  input,
  Output,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services';
import { Products, CreateProduct } from '../../services/interfaces';
import { Utils } from '../../utils';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatInput } from '@angular/material/input';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatInput,
    MatButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Input() product!: Products | null;

  form!: FormGroup;

  @Output() done = new EventEmitter<Products>();

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl<string>(this.product?.title ?? '', {
        nonNullable: true,
        validators: Validators.required,
      }),
    });
  }

  onSubmit() {
    const product = this.form.value as Products;
    this.done.emit(product);
  }
}
