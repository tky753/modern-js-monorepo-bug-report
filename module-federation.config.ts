import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'host',
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  runtimePlugins: ['./test-runtime-plugin'],
});
