import { Component, computed, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { Products } from '../../../../services/interfaces';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../../services';
import { ConfirmationDialogService } from '../../../../services/confirmation-dialog.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() product!: Products;
  producstService = inject(ProductsService);
  matDialog = inject(MatDialog);
  confirmationDialogService = inject(ConfirmationDialogService);

  productTitle = computed(() => this.product.title);

  deleteProduct() {
    this.confirmationDialogService.opnDialog().subscribe((answer: boolean) => {
      if (answer) {
        this.producstService.delete(this.product.id).subscribe(() => {
          window.location.reload();
        });
      }
    });
  }
}
