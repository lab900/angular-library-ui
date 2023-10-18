import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { NavItem } from '../../models/nav-item.model';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'lab900-nav-item-button',
  styleUrls: ['./nav-item-button.component.scss'],
  templateUrl: './nav-item-button.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavItemButtonComponent {
  private readonly _item$ = new ReplaySubject<NavItem>();
  public readonly item$: Observable<NavItem> = this._item$.asObservable();

  @Input({ required: true })
  public set item(item: NavItem) {
    this._item$.next(item);
  }

  private readonly _disabled$ = new BehaviorSubject<boolean>(false);
  public readonly disabled$: Observable<boolean> =
    this._disabled$.asObservable();

  @Input()
  public set disabled(disabled: boolean) {
    this._disabled$.next(disabled);
  }

  private readonly _expanded$ = new BehaviorSubject<boolean>(false);
  public readonly expanded$: Observable<boolean> =
    this._expanded$.asObservable();

  @Input()
  public set expanded(expanded: boolean) {
    this._expanded$.next(expanded);
  }

  @Input()
  public readonly active: boolean;

  @Input()
  public readonly depth: number;

  @Input()
  public readonly showLevelArrow: boolean = false;

  public readonly icon$: Observable<string>;
  public constructor() {
    this.icon$ = combineLatest([this.item$, this.expanded$]).pipe(
      map(([item, expanded]) => {
        if (item?.childrenInOverlay) {
          return 'navigate_next';
        }
        return expanded ? 'expand_less' : 'expand_more';
      })
    );
  }
}
