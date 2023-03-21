import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lab900DataListComponent } from './components/data-list/data-list.component';
import { Lab900DataListItemComponent } from './components/data-list-item/data-list-item.component';
import { Lab900DataListEmptyDirective } from './directives/data-list-empty.directive';
import { Lab900DataListItemInfoDirective } from './directives/data-list-item-info.directive';

import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { Lab900SharingModule } from '../sharing/sharing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { Lab900ButtonModule } from '../button/button.module';

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
    Lab900SharingModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    Lab900ButtonModule,
  ],
})
export class Lab900DataListModule {}
