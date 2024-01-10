import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'auth-app',
  exposes: {
    './Module': './src/remote-entry.ts',
    './auth-verifier': './src/components/AuthVerifier.tsx'
  },
};

export default config;
