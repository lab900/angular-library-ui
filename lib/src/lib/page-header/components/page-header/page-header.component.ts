import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { ActionButton } from '../../../button/models/action-button.model';
import { BreadCrumb } from '../../../bread-crumbs/models/bread-crumb.model';
import { MatTabNavPanel, MatTabsModule } from '@angular/material/tabs';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageHeaderNavItemComponent } from '../page-header-nav-item/page-header-nav-item.component';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { Lab900ButtonModule } from '../../../button/button.module';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { BreadCrumbsComponent } from '../../../bread-crumbs/components/bread-crumbs/bread-crumbs.component';

@Component({
  selector: 'lab900-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatTabsModule,
    PageHeaderNavItemComponent,
    NgForOf,
    NgIf,
    Lab900ButtonModule,
    AsyncPipe,
    MatListModule,
    BreadCrumbsComponent,
    TranslateModule,
  ],
})
export class Lab900PageHeaderComponent {
  @Input()
  public pageTitle?: string;

  @Input()
  public pageTitleArgs: object = {};

  @Input()
  public navItems?: PageHeaderNavItem[];

  /**
   * The corresponding <router-outlet> must be wrapped in an <mat-tab-nav-panel> component and should typically be placed relatively close to this component
   */
  @Input()
  public tabPanel?: MatTabNavPanel;

  @Input()
  public navFitInkBarToContent = false;
  public navStretch = false;

  private readonly _actions$ = new ReplaySubject<ActionButton[]>();
  public readonly actions$ = this._actions$.asObservable();
  public readonly leftActions$ = this.actions$.pipe(
    map(([...actions]) => actions?.filter((action) => action.align === 'left'))
  );

  public readonly rightActions$ = this.actions$.pipe(
    map(([...actions]) => actions?.filter((action) => action.align !== 'left'))
  );

  @Input()
  public set actions(actions: ActionButton[]) {
    this._actions$.next(actions);
  }

  @Input()
  public data?: any;

  @Input()
  public breadCrumbs?: BreadCrumb[];
}
