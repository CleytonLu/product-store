import {
  Component,
  computed,
  inject,
  Input,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Products } from '../../../../services/interfaces';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product!: Products;
  router = inject(Router);  

  productTitle = computed(() => this.product.title);
}
