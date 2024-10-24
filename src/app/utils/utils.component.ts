import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IMatSnackBar } from '../interface';

@Injectable({
  providedIn: 'root',
})
export class Utils {
  readonly _matSnackBar;

  constructor(matSnackBar: MatSnackBar) {
    this._matSnackBar = matSnackBar;
  }

  Toast({
    text,
    actionText,
    duration = 3000,
    horizontalPosition = 'right',
    verticalPosition = 'top',
  }: IMatSnackBar) {
    this._matSnackBar.open(text, actionText, {
      duration,
      horizontalPosition,
      verticalPosition,
    });
  }
}
