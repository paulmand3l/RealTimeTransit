export { default as Root } from './Root';
export { default as Settings } from './Settings';
export { default as Main } from './Main';

import { models as settingsModels } from './Settings/models';

export const models = {
  ...settingsModels
}
