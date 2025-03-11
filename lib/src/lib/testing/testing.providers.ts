import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideTranslateService } from '@ngx-translate/core';
import { Lab900TableService } from '../table/services/table.service';

export const TESTING_PROVIDERS = [provideNoopAnimations(), provideTranslateService()];

export const TABLE_TESTING_PROVIDERS = [Lab900TableService, ...TESTING_PROVIDERS];
