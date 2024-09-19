import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  products: any[] = [];

  productsService = inject(ProductsService);

  ngOnInit() {
    this.productsService.getAll().subscribe((products) => {
      this.products = products;
    });
    console.log('products:', this.products);
  }
}
