import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
} from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreadCrumb } from '../../models/bread-crumb.model';
import { readPropValue } from '../../../utils/utils';
import { AsyncPipe, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lab900-bread-crumb-item',
  standalone: true,
  templateUrl: './bread-crumb-item.component.html',
  styleUrls: ['./bread-crumb-item.component.scss'],
  imports: [NgIf, TranslateModule, AsyncPipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class BreadCrumbItemComponent {
  private readonly _item$ = new ReplaySubject<BreadCrumb>();
  private readonly item$: Observable<BreadCrumb> = this._item$
    .asObservable()
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  @Input({ required: true })
  public set item(item: BreadCrumb) {
    this._item$.next(item);
  }

  private readonly _data$ = new BehaviorSubject<any>(undefined);
  private readonly data$ = this._data$
    .asObservable()
    .pipe(shareReplay({ bufferSize: 1, refCount: true }));

  @Input()
  public set data(data: any) {
    this._data$.next(data);
  }

  public readonly title$: Observable<string>;
  public readonly route$: Observable<string>;
  public readonly queryParams$: Observable<object>;

  public constructor() {
    const stream = combineLatest([this.item$, this.data$]).pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
    this.title$ = stream.pipe(map(([a, d]) => readPropValue(a.title, d)));
    this.route$ = stream.pipe(map(([a, d]) => readPropValue(a.route, d)));
    this.queryParams$ = stream.pipe(
      map(([a, d]) => readPropValue(a.queryParams, d))
    );
  }
}
