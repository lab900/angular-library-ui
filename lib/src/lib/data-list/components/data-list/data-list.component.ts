import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { Lab900DataListEmptyDirective } from '../../directives/data-list-empty.directive';
import { DataListSharing } from '../../models/data-list.model';
import { Lab900DataListItemInfoDirective } from '../../directives/data-list-item-info.directive';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Paging } from '../../../common/models/paging.model';
import { ActionButton } from '../../../button/models/action-button.model';
import { Lab900DataListItemComponent } from '../data-list-item/data-list-item.component';
import { MatCard } from '@angular/material/card';
import { NgTemplateOutlet } from '@angular/common';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'lab900-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  standalone: true,
  imports: [
    Lab900DataListItemComponent,
    MatCard,
    NgTemplateOutlet,
    MatPaginator,
    MatProgressSpinner,
  ],
})
export class Lab900DataListComponent {
  @Input({ required: true })
  public data: any[];

  @Input()
  public loading = false;

  @Input()
  public emptyListLabel = 'No data available';

  @Input()
  public actions: ActionButton[] = [];

  @Input()
  public dataListSharing?: DataListSharing;

  @Input()
  public paging?: Paging;

  @ContentChild(Lab900DataListEmptyDirective, { read: TemplateRef })
  public emptyListTemplate?: Lab900DataListEmptyDirective;

  @ContentChild(Lab900DataListItemInfoDirective, { read: TemplateRef })
  public dataListItemInfoTemplate?: Lab900DataListItemInfoDirective;

  @Output()
  public readonly pageChange = new EventEmitter<PageEvent>();
}
