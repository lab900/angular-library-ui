import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { Lab900TableComponent } from './components/table/table.component';
import { Lab900TableEmptyDirective } from './directives/table-empty.directive';
import { MatIconModule } from '@angular/material/icon';
import { Lab900TableDisabledDirective } from './directives/table-disabled.directive';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { Lab900TableFilterMenuComponent } from './components/table-filter-menu/table-filter-menu.component';
import { Lab900TableHeaderComponent } from './components/table-header/lab900-table-header.component';
import { Lab900TableHeaderContentDirective } from './directives/table-header-content.directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Lab900ButtonModule } from '../button/button.module';
import { Lab900TableTopContentDirective } from './directives/table-top-content.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Lab900TableTabsComponent } from './components/table-tabs/table-tabs.component';
import { Lab900TableLeftFooterDirective } from './directives/table-left-footer.directive';
import { TableCellSelectComponent } from './components/table-cell-select/table-cell-select.component';
import { Lab900TableCellComponent } from './components/table-cell/table-cell.component';

@NgModule({
  declarations: [
    Lab900TableComponent,
    Lab900TableEmptyDirective,
    Lab900TableDisabledDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableTopContentDirective,
    Lab900TableFilterMenuComponent,
    Lab900TableHeaderComponent,
    Lab900TableTabsComponent,
    Lab900TableLeftFooterDirective,
  ],
  exports: [
    Lab900TableComponent,
    Lab900TableEmptyDirective,
    Lab900TableDisabledDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableTopContentDirective,
    Lab900TableFilterMenuComponent,
    Lab900TableHeaderComponent,
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
    Lab900TableCellComponent,
    TableCellSelectComponent,
  ],
})
export class Lab900TableModule {}
