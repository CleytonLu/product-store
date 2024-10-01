import { MatSnackBarConfig } from "@angular/material/snack-bar";

export interface IMatSnackBar extends Partial<MatSnackBarConfig> {
  text: string;
  actionText: string;
}
