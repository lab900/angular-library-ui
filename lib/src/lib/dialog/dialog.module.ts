import { NgModule } from '@angular/core';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { ConfirmationDialogDirective } from './directives/confirmation-dialog.directive';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AlertDialogComponent,
    ConfirmationDialogComponent,
    ConfirmationDialogDirective,
  ],
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
  exports: [
    AlertDialogComponent,
    ConfirmationDialogComponent,
    ConfirmationDialogDirective,
  ],
})
export class DialogModule {}
