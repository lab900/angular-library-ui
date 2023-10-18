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
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { readPropValue } from '../../../utils/utils';
import { map, shareReplay } from 'rxjs/operators';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';

@Component({
  selector: 'lab900-page-header-nav-item',
  templateUrl: './page-header-nav-item.component.html',
  styleUrls: ['./page-header-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatIconModule,
    MatTabsModule,
    NgIf,
    RouterLinkActive,
    TranslateModule,
    RouterLink,
    AsyncPipe,
  ],
})
export class PageHeaderNavItemComponent {
  private readonly _item$ = new ReplaySubject<PageHeaderNavItem>();
  public readonly item$: Observable<PageHeaderNavItem> = this._item$
    .asObservable()
    .pipe(shareReplay(1));

  @Input({ required: true })
  public set item(item: PageHeaderNavItem) {
    this._item$.next(item);
  }

  private readonly _data$ = new BehaviorSubject<any>(undefined);
  public readonly data$ = this._data$.asObservable().pipe(shareReplay(1));

  @Input()
  public set data(data: any) {
    this._data$.next(data);
  }

  public readonly label$: Observable<string>;
  public readonly route$: Observable<string | string[]>;
  public readonly suffixIcon$: Observable<string>;
  public readonly prefixIcon$: Observable<string>;

  public constructor() {
    const stream = combineLatest([this.item$, this.data$]).pipe(shareReplay(1));
    this.label$ = stream.pipe(map(([a, d]) => readPropValue(a.label, d)));
    this.route$ = stream.pipe(map(([a, d]) => readPropValue(a.route, d) ?? []));
    this.suffixIcon$ = stream.pipe(
      map(([a, d]) => readPropValue(a.suffixIcon, d))
    );
    this.prefixIcon$ = stream.pipe(
      map(([a, d]) => readPropValue(a.prefixIcon, d))
    );
  }
}
