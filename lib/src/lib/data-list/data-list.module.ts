import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lab900DataListComponent } from './components/data-list/data-list.component';
import { Lab900DataListItemComponent } from './components/data-list-item/data-list-item.component';
import { Lab900DataListEmptyDirective } from './directives/data-list-empty.directive';
import { Lab900DataListItemInfoDirective } from './directives/data-list-item-info.directive';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Lab900SharingComponent } from '../sharing/components/sharing/sharing.component';

@NgModule({
  declarations: [
    Lab900DataListComponent,
    Lab900DataListItemComponent,
    Lab900DataListEmptyDirective,
    Lab900DataListItemInfoDirective,
  ],
  exports: [
    Lab900DataListComponent,
    Lab900DataListEmptyDirective,
    Lab900DataListItemInfoDirective,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    MatMenuModule,
    Lab900SharingComponent,
    MatProgressSpinnerModule,
    MatPaginatorModule,
  ],
})
export class Lab900DataListModule {}
