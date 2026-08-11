import { provideTranslateService } from '@ngx-translate/core';
import { Lab900TableService } from '../table/services/table.service';

export const TESTING_PROVIDERS = [provideTranslateService()];

export const TABLE_TESTING_PROVIDERS = [Lab900TableService, ...TESTING_PROVIDERS];
