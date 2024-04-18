import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { AlertDialog } from '../../models/alertDialog';
import { MatButton } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'lab900-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    TranslateModule,
    MatDialogContent,
    MatDialogClose,
  ],
})
export class AlertDialogComponent {
  private readonly data?: AlertDialog = inject(MAT_DIALOG_DATA);
  private readonly dialogRef: MatDialogRef<AlertDialogComponent> =
    inject(MatDialogRef);

  public readonly message = this.data?.message ?? '';
  public readonly messageHTML = this.data?.messageHTML ?? '';
  public readonly buttonText = this.data?.okButtonText ?? 'Ok';

  public constructor() {
    this.dialogRef.updateSize('300vw', '300vw');
  }
}
