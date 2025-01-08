import { fileURLToPath, URL } from 'node:url'
import createVitePlugins from './plugins'
import { loadEnv } from 'vite'

export default (mode: string) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    base: './',
    plugins: createVitePlugins(env, env.VITE_BUILD_MODE === 'build'),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../src', import.meta.url))
      }
    },
    define: {
      __BUILD_MODE__: JSON.stringify(mode)
    }
  }
}
