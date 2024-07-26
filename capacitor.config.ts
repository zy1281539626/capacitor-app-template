import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'carl.template.app',
  appName: 'capacitor-app',
  webDir: 'dist',
  server: {
    url: 'http://192.168.43.2:5179',
    cleartext: true
  },
  plugins: {
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true,
      statusBarColor: '#000000',
      statusBarContent: 'light',
      navigationBarColor: '#000000',
      navigationBarContent: 'light',
      offset: 0
    }
  }
}

export default config
