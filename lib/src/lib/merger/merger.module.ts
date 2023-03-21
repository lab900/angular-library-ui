import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lab900MergerComponent } from './components/merger/merger.component';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyRadioModule as MatRadioModule } from '@angular/material/legacy-radio';
import { Lab900MergerItemComponent } from './components/merger-item/merger-item.component';
import { Lab900ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [Lab900MergerComponent, Lab900MergerItemComponent],
  exports: [Lab900MergerComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    TranslateModule,
    MatIconModule,
    MatRadioModule,
    Lab900ButtonModule,
  ],
})
export class Lab900MergerModule {}
