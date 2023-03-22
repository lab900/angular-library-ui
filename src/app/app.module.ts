import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MergingTranslateLoader } from './utils/merging-translate-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { provideEnvironmentNgxMask } from 'ngx-mask';

export function TranslationLoaderFactory(
  http: HttpClient
): MergingTranslateLoader {
  return new MergingTranslateLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    SharedModule,
    MarkdownModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  bootstrap: [AppComponent],
  providers: [provideEnvironmentNgxMask()],
})
export class AppModule {}
