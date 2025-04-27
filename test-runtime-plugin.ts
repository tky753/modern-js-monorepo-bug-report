import {
  type FederationRuntimePlugin,
  registerGlobalPlugins,
} from '@module-federation/modern-js/runtime';

function testRuntimePlugin(): FederationRuntimePlugin {
  return {
    name: 'test-runtime-plugin',
    beforeInit: args => {
      console.log('test-runtime-plugin');
      return args;
    },
  };
}

registerGlobalPlugins([testRuntimePlugin()]);

export default (): FederationRuntimePlugin => ({
  name: 'empty-plugin',
  beforeInit: args => {
    console.log('empty-plugin');
    return args;
  },
});
