import { defineConfig, mergeConfig } from 'vite'

import baseConfig from './vite/base-vite'

export default defineConfig(({ mode, command: _ }) => {
  console.log('模式:', mode)

  const config = mergeConfig(baseConfig(mode), {
    server: {
      port: 3000
    }
  })
  return config
})
