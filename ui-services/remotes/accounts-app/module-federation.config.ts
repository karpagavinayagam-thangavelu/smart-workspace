import { ModuleFederationConfig } from '@nx/webpack';
const config: ModuleFederationConfig = {
  name: 'accounts-app',
  exposes: {
    './Module': './src/remote-entry.ts',
    './accounts': 'micro-services/accounts/src/index.ts',
  },
};
export default config;
