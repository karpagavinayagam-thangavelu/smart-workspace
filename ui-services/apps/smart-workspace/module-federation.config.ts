import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'smart-workspace',
  remotes: ['accounts-app', 'auth-app'],
};

export default config;
