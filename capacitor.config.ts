import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'keyboard-issue',
  webDir: 'www',
  plugins: {
    'Keyboard': {
      'resize': 'ionic'
    },
    
      'StatusBar': {
        'overlaysWebView': false
      }
    
  }
};

export default config;
