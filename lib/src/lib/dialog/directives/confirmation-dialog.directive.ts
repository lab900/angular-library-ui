import { Directive, EventEmitter, HostListener, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../components/confirmation-dialog/confirmation-dialog.component';
import { take } from 'rxjs/operators';

@Directive({
  selector: '[lab900ConfirmationDialog]',
  standalone: true,
})
export class ConfirmationDialogDirective {
  public readonly dialog: MatDialog = inject(MatDialog);

  @Input()
  public message?: string;

  @Input()
  public okButtonText?: string;

  @Input()
  public cancelButtonText?: string;

  @Output()
  public readonly confirmed = new EventEmitter<void>();

  @Output()
  public readonly cancelled = new EventEmitter<void>();

  @HostListener('click')
  public onMouseEnter(): void {
    this.dialog
      .open(ConfirmationDialogComponent, {
        data: {
          message: this.message,
          okButtonText: this.okButtonText,
          cancelButtonText: this.cancelButtonText,
        },
      })
      .beforeClosed()
      .pipe(take(1))
      .subscribe(confirmed => {
        if (confirmed) {
          this.confirmed.emit();
        } else {
          this.cancelled.emit();
        }
      });
  }
}
