import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { IconComponent } from './components/icon/icon.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { NavItemButtonComponent } from './components/nav-item-button/nav-item-button.component';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';

@NgModule({
  declarations: [
    NavListComponent,
    NavItemComponent,
    IconComponent,
    NavItemButtonComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    TranslateModule,
    MatIconModule,
    RouterModule,
    OverlayModule,
    MatMenuModule,
  ],
  exports: [NavListComponent, IconComponent],
})
export class Lab900NavListModule {}
