import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';

/**
 * Custom ngx-translate translation loader that combines translation files from subprojects with translations from this
 * (root) project. The root project can override and extend translations as needed.
 */
export class MergingTranslateLoader implements TranslateLoader {
  public constructor(
    private http: HttpClient,
    public prefix = '/assets/i18n/',
    public suffix = '.json'
  ) {}

  /**
   * Combines translations from subprojects with dynamically loaded translations/overrides for this project.
   */
  public getTranslation(lang: string): Observable<object> {
    return this.http.get(`${this.prefix}${lang}${this.suffix}`).pipe(
      map(translations => ({
        ...translations,
      }))
    );
  }
}
