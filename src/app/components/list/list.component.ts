import { Component, inject, signal } from '@angular/core';
import { ProductsService } from '../../services';
import { Products } from '../../services/interfaces';
import { CardComponent } from './components/card/card.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products = signal<Products[]>(inject(ActivatedRoute).snapshot.data['products']);

  productsService = inject(ProductsService);
}
