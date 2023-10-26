import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  ViewEncapsulation,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CellRendererAbstract } from '../cell-renderer.abstract';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { take } from 'rxjs/operators';

@Component({
  selector: 'lab900-default-cell-renderer',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, TranslateModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `<div
    class="lab900-cell-value"
    [matTooltip]="(tooltip$ | async) ?? undefined"
    [matTooltipPosition]="(tooltipPosition$ | async) ?? undefined"
  >
    {{ cellValue$ | async | translate }}
  </div>`,
})
export class DefaultCellRendererComponent
  extends CellRendererAbstract
  implements AfterViewInit, OnDestroy
{
  private observer?: ResizeObserver;

  public ngAfterViewInit(): void {
    this.observeCellContentOverflow();
  }

  public ngOnDestroy(): void {
    this.observer?.unobserve(this.elm.nativeElement);
  }

  /**
   * Observe the cell content overflow and set the textOverflowing$ observable
   * This is an expensive operation and should only be used when necessary
   * @protected
   */
  protected observeCellContentOverflow(): void {
    this.cellValueWithoutPlaceholder$.pipe(take(1)).subscribe((value) => {
      this.observer?.unobserve(this.elm.nativeElement);
      if (String(value)?.length > 10) {
        this.observer = new ResizeObserver((entries) => {
          const innerScrollWidth =
            this.elm.nativeElement.querySelector('.lab900-cell-value')
              ?.scrollWidth ?? 0;
          const maxWidth = (entries[0].target as any).offsetWidth;
          this.textOverflowing$.next(innerScrollWidth > maxWidth);
        });
        this.observer.observe(this.elm.nativeElement);
      }
    });
  }
}
