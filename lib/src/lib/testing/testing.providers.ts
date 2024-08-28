import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Lab900TableService } from '@lab900/ui';

export const TESTING_PROVIDERS = [provideNoopAnimations(), importProvidersFrom(TranslateModule.forRoot())];

export const TABLE_TESTING_PROVIDERS = [Lab900TableService, ...TESTING_PROVIDERS];
