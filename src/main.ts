import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MergingTranslateLoader } from './app/utils/merging-translate-loader';
import { MatNativeDateModule } from '@angular/material/core';

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
    provideRouter([
      {
        path: '',
        loadChildren: () =>
          import('./app/modules/showcase-ui/showcase-ui.routes'),
      },
    ]),
    importProvidersFrom(
      MatNativeDateModule,
      MarkdownModule.forRoot(),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: TranslationLoaderFactory,
          deps: [HttpClient],
        },
        defaultLanguage: 'en',
      })
    ),
  ],
}).catch((err) => console.error(err));
