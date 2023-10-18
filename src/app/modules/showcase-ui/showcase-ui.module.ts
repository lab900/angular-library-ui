import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import {
  AlertComponent,
  Lab900ButtonModule,
  Lab900DataListModule,
  Lab900MergerModule,
  Lab900NavListComponent,
  Lab900PageHeaderComponent,
  Lab900SharingComponent,
  Lab900TableComponent,
  Lab900TableEmptyDirective,
  Lab900TableHeaderContentDirective,
  Lab900TableLeftFooterDirective,
  Lab900TableTopContentDirective,
} from '@lab900/ui';

import { ShowcaseUiRoutingModule } from './showcase-ui-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DataListExampleComponent } from './examples/data-list-example/data-list-example.component';
import { SharingExampleComponent } from './examples/sharing-example/sharing-example.component';
import { AlertsExampleComponent } from './examples/alerts-example/alerts-example.component';
import { NavListExampleComponent } from './examples/nav-list-example/nav-list-example.component';
import { PageHeaderExampleComponent } from './examples/page-header-example/page-header-example.component';
import { TableExampleComponent } from './examples/table-example/table-example.component';
import { PageHeaderParamsExampleComponent } from './examples/page-header-params-example/page-header-params-example.component';
import { MergerExampleComponent } from './examples/merger-example/merger-example.component';
import { CustomExampleComponent } from './examples/merger-example/custom-example.component';
import { ButtonExampleComponent } from './examples/button-example/button-example.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TableDragAndDropExampleComponent } from './examples/table-example/table-drag-and-drop-example.component';
import { TableTabsExampleComponent } from './examples/table-example/table-tabs-example.component';

const examples = [
  SharingExampleComponent,
  DataListExampleComponent,
  AlertsExampleComponent,
  NavListExampleComponent,
  PageHeaderExampleComponent,
  PageHeaderParamsExampleComponent,
  TableExampleComponent,
  TableDragAndDropExampleComponent,
  TableTabsExampleComponent,
  MergerExampleComponent,
  CustomExampleComponent,
  ButtonExampleComponent,
];

@NgModule({
  declarations: examples,
  imports: [
    CommonModule,
    ShowcaseUiRoutingModule,
    SharedModule,
    Lab900DataListModule,
    Lab900SharingComponent,
    Lab900TableComponent,
    Lab900PageHeaderComponent,
    Lab900MergerModule,
    Lab900ButtonModule,
    TranslateModule,
    Lab900ButtonModule,
    MatCheckboxModule,
    Lab900TableTopContentDirective,
    Lab900TableHeaderContentDirective,
    Lab900TableEmptyDirective,
    Lab900TableLeftFooterDirective,
    Lab900NavListComponent,
    AlertComponent,
  ],
})
export default class ShowcaseUiModule {}
