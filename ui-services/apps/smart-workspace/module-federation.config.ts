import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'smart-workspace',
  remotes: ['accounts-app'],
};

export default config;
