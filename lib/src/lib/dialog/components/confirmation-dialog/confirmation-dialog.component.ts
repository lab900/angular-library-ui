import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmationDialog } from '../../models/confirmationDialog';
import { TranslateModule } from '@ngx-translate/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lab900-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  imports: [MatDialogContent, TranslateModule, MatDialogActions, MatButton, MatDialogClose],
})
export class ConfirmationDialogComponent {
  private readonly data?: ConfirmationDialog = inject(MAT_DIALOG_DATA);
  private readonly dialogRef: MatDialogRef<ConfirmationDialogComponent> = inject(MatDialogRef);

  public readonly message = this.data?.message ?? 'Are you sure?';
  public readonly confirmButtonText = this.data?.okButtonText ?? 'Yes';
  public readonly cancelButtonText = this.data?.cancelButtonText ?? 'Cancel';

  public onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
