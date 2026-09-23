import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { PageHeaderNavItem } from '../../models/page-header-nav.model';
import { ActionButton } from '../../../button/models/action-button.model';
import { BreadCrumb } from '../../../bread-crumbs/models/bread-crumb.model';
import { MatTabNav, MatTabNavPanel } from '@angular/material/tabs';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { PageHeaderNavItemComponent } from '../page-header-nav-item/page-header-nav-item.component';
import { AsyncPipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { BreadCrumbsComponent } from '../../../bread-crumbs/components/bread-crumbs/bread-crumbs.component';
import { Lab900ActionButtonComponent } from '../../../button/components/action-button/lab900-action-button.component';
import { MatDivider } from '@angular/material/divider';

/**
 * The header of a page: a title, breadcrumbs, actions and tabs that link to routes.
 */
@Component({
  selector: 'lab900-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    PageHeaderNavItemComponent,
    AsyncPipe,
    BreadCrumbsComponent,
    TranslatePipe,
    Lab900ActionButtonComponent,
    MatDivider,
    MatTabNav,
  ],
})
export class Lab900PageHeaderComponent {
  /** A translation key */
  @Input()
  public pageTitle?: string;

  /** The parameters of the title translation */
  @Input()
  public pageTitleArgs: object = {};

  /** Tabs below the title. They only show together with `tabPanel`. */
  @Input()
  public navItems?: PageHeaderNavItem[];

  /**
   * The corresponding <router-outlet> must be wrapped in an <mat-tab-nav-panel> component and should typically be placed relatively close to this component
   */
  @Input()
  public tabPanel?: MatTabNavPanel;

  /** On screens narrower than 960px, show the actions in a bar fixed to the bottom of the screen */
  @Input()
  public showActionsFixedOnMobile = true;

  /** Make the ink bar of the active tab as wide as its label instead of the whole tab */
  @Input()
  public navFitInkBarToContent = false;
  public navStretch = false;

  private readonly _actions$ = new ReplaySubject<ActionButton[]>();
  public readonly actions$: Observable<ActionButton[]> = this._actions$.asObservable();
  public readonly leftActions$ = this.actions$.pipe(
    map(([...actions]) => actions?.filter(action => action.align === 'left'))
  );

  public readonly rightActions$ = this.actions$.pipe(
    map(([...actions]) => actions?.filter(action => action.align !== 'left'))
  );

  /** Buttons next to the title. Set `align: 'left'` on an action to put it right after the title. */
  @Input()
  public set actions(actions: ActionButton[]) {
    this._actions$.next(actions);
  }

  /** The data that the function options of the actions, breadcrumbs and tabs receive */
  @Input()
  public data?: any;

  /** Breadcrumbs below the title */
  @Input()
  public breadCrumbs?: BreadCrumb[];
}
