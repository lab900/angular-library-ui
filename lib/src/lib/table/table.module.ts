import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { Lab900TableComponent } from './components/table/table.component';
import { Lab900TableEmptyDirective } from './directives/table-empty.directive';
import { MatIconModule } from '@angular/material/icon';
import { Lab900TableDisabledDirective } from './directives/table-disabled.directive';
import { MatSortModule } from '@angular/material/sort';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { Lab900TableFilterMenuComponent } from './components/table-filter-menu/table-filter-menu.component';
import { Lab900TableHeaderComponent } from './components/table-header/lab900-table-header.component';
import { Lab900TableHeaderContentDirective } from './directives/table-header-content.directive';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { Lab900ButtonModule } from '../button/button.module';
import { Lab900TableCustomCellDirective } from './directives/table-custom-cell.directive';
import { Lab900TableCustomHeaderCellDirective } from './directives/table-custom-header-cell.directive';
import { Lab900TableTopContentDirective } from './directives/table-top-content.directive';
import { Lab900TableCellComponent } from './components/table-cell/table-cell.component';
import { Lab900TableCellValueComponent } from './components/table-cell-value/table-cell-value.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Lab900TableTabsComponent } from './components/table-tabs/table-tabs.component';
import { Lab900TableLeftFooterDirective } from './directives/table-left-footer.directive';
import { TableCellSelectComponent } from './components/table-cell-select/table-cell-select.component';

@NgModule({
  declarations: [
    Lab900TableComponent,
    Lab900TableEmptyDirective,
    Lab900TableDisabledDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableTopContentDirective,
    Lab900TableCustomCellDirective,
    Lab900TableCustomHeaderCellDirective,
    Lab900TableFilterMenuComponent,
    Lab900TableHeaderComponent,
    Lab900TableCellComponent,
    Lab900TableCellValueComponent,
    Lab900TableTabsComponent,
    Lab900TableLeftFooterDirective,
    TableCellSelectComponent,
  ],
  exports: [
    Lab900TableComponent,
    Lab900TableEmptyDirective,
    Lab900TableDisabledDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableTopContentDirective,
    Lab900TableCustomCellDirective,
    Lab900TableCustomHeaderCellDirective,
    Lab900TableFilterMenuComponent,
    Lab900TableHeaderComponent,
    Lab900TableCellComponent,
    Lab900TableCellValueComponent,
    Lab900TableTabsComponent,
    Lab900TableLeftFooterDirective,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatProgressBarModule,
    TranslateModule,
    RouterModule,
    MatMenuModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    Lab900ButtonModule,
    DragDropModule,
  ],
})
export class Lab900TableModule {}
