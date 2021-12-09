import { ShowcaseConfigModel } from '../shared/models/showcase-config.model';
import packageInfo from 'lib/package.json';

export const showcaseUiConfig: ShowcaseConfigModel = {
  title: 'ui.title',
  description: 'ui.description',
  icon: 'widgets',
  version: packageInfo.version,
};
