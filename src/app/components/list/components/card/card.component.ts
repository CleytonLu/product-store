import { Component, computed, inject, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { Products } from '../../../../services/interfaces';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../../services';

@Component({
  selector: 'confirmation-action-dialog',
  template: `<h2 mat-dialog-title>Delete produto</h2>
    <mat-dialog-content>
      Deseja realmente excluir o produto ?
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNo()">Não</button>
      <button
        mat-raised-button
        color="accent"
        (click)="onYes()"
        cdkFocusInitial
      >
        Sim
      </button>
    </mat-dialog-actions>`,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class ConfirmationActionDialogComponent {
  matDialogRef = inject(MatDialogRef);

  onNo() {
    this.matDialogRef.close(false);
  }

  onYes() {
    this.matDialogRef.close(true);
  }
}

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

  productTitle = computed(() => this.product.title);

  deleteProduct() {
    this.matDialog
      .open(ConfirmationActionDialogComponent)
      .afterClosed()
      .subscribe((answer: boolean) => {
        if (answer) {
          this.producstService.delete(this.product.id).subscribe(() => {
            window.location.reload();
          });
        }
      });
  }
}
