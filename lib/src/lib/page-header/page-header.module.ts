import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lab900PageHeaderComponent } from './components/page-header/page-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { Lab900ButtonModule } from '../button/button.module';
import { BreadCrumbsModule } from '../bread-crumbs/bread-crumbs.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [Lab900PageHeaderComponent],
  exports: [Lab900PageHeaderComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    MatTabsModule,
    MatMenuModule,
    Lab900ButtonModule,
    BreadCrumbsModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class Lab900PageHeaderModule {}
