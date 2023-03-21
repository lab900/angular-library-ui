import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { Lab900NavListModule, Lab900PageHeaderModule } from '@lab900/ui';

import { ExampleViewerComponent } from './components/example-viewer/example-viewer.component';
import { ShowcasePageComponent } from './components/showcase-page/showcase-page.component';
import { ComponentLoaderDirective } from './directives/component-loader.directive';
import { ShowcaseHomeComponent } from './components/showcase-home/showcase-home.component';
import { MarkdownPageComponent } from './components/markdown-page/markdown-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';

const material = [
  MatCardModule,
  MatButtonModule,
  MatTabsModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [
    ExampleViewerComponent,
    ShowcasePageComponent,
    ComponentLoaderDirective,
    ShowcaseHomeComponent,
    MarkdownPageComponent,
  ],
  exports: [
    ExampleViewerComponent,
    ShowcasePageComponent,
    ShowcaseHomeComponent,
    MarkdownPageComponent,
    Lab900NavListModule,
    ...material,
  ],
  imports: [
    CommonModule,
    Lab900NavListModule,
    Lab900PageHeaderModule,
    MarkdownModule,
    RouterModule,
    ...material,
    TranslateModule,
    MatTooltipModule,
  ],
})
export class SharedModule {}
