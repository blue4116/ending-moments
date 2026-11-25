import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'jp.endingmoments.app',
  appName: 'ひとひら便り',
  webDir: 'dist/public',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false,
  },
};

export default config;
