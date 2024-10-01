import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    // {
    //   provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
    //   useValue: {
    //     duration: 3000,
    //     verticalPosition: 'top',
    //     horizontalPosition: 'right',
    //   } as MatSnackBarConfig,
    // },
  ],
};
