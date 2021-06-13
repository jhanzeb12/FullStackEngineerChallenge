import { ApiSettings } from '@core/configs/api-settings-prod.config';

export const environment = {
  production: true,
  ...ApiSettings
};
