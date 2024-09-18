import { appTools, defineConfig } from '@modern-js/app-tools';
import { runtimePlugin } from '@modern-js/runtime/cli';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  runtime: {
    router: true,
  },
  plugins: [
    runtimePlugin(),
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
  ],
});
