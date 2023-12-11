import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { CellEditorAbstract } from '../cell-editor.abstract';
import { CellSelectEditorOptions } from './cell-select-editor.options';
import { TranslateModule } from '@ngx-translate/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { SelectAutoOpenDirective } from '../../directives/select-auto-open.directive';

@Component({
  selector: 'lab900-cell-select-editor',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    MatSelectModule,
    TranslateModule,
    SelectAutoOpenDirective,
  ],
  template: `
    <mat-select
      [tabindex]="-2"
      *ngIf="editOptions$ | async as editOptions"
      placeholder="{{ (placeholder$ | async) ?? '' | translate }}"
      [value]="cellValue$ | async"
      [compareWith]="editOptions?.compareWithFn ?? defaultCompareFn"
      [multiple]="editOptions?.multiple ?? false"
      [panelWidth]="editOptions?.panelWidth ?? 'auto'"
      (openedChange)="opened$.next($event)"
      (keydown.tab)="closeAndSave()"
      class="lab900-table-select-editor"
      lab900SelectAutoOpen
    >
      <!-- fixes the select on tab -->
      <mat-option style="display: none" />
      <mat-option
        *ngFor="let option of selectOptions$ | async"
        [value]="option"
      >
        {{
          editOptions?.optionLabelFn
            ? (editOptions.optionLabelFn(option) | translate)
            : option
        }}
      </mat-option>
    </mat-select>
  `,
})
export class CellSelectEditorComponent extends CellEditorAbstract<CellSelectEditorOptions> {
  public opened$ = new BehaviorSubject<boolean>(false);

  public selectOptions$: Observable<any[]> = combineLatest([
    this.editOptions$,
    this.data$,
  ]).pipe(
    map(([o, data]) => {
      if (o?.options) {
        if (typeof o.options === 'function') {
          return o.options(data);
        }
        return o.options;
      }
      return [];
    })
  );

  @ViewChild(MatSelect)
  private matSelect?: MatSelect;

  @HostListener('document:click', ['$event'])
  public clickOutside(event: any): void {
    if (!this.elm.nativeElement.contains(event.target) && !this.opened$.value) {
      this.closeAndSave();
    }
  }

  public readonly defaultCompareFn = (a: any, b: any): boolean => a === b;

  protected focusAfterViewInit(): void {
    this.matSelect?.focus();
  }

  public closeAndSave(): void {
    super.closeAndSave(this.matSelect?.value);
  }
}
