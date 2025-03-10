import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideMarkdown } from 'ngx-markdown';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { MergingTranslateLoader } from './app/utils/merging-translate-loader';
import { provideNativeDateAdapter } from '@angular/material/core';
import routes from './app/modules/showcase-ui/showcase-ui.routes';

if (environment.production) {
  enableProdMode();
}

function TranslationLoaderFactory(http: HttpClient): MergingTranslateLoader {
  return new MergingTranslateLoader(http, './assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideRouter(routes),
    provideMarkdown(),
    provideNativeDateAdapter(),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslationLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
      useDefaultLang: true,
    }),
  ],
}).catch(err => console.error(err));
