import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import type { PluginOption } from 'vite'
import createAutoImport from './auto-import'
import createComponents from './components'
import createSvgIcon from './svg-icon'
// import createUnocss from './unocss'
import createVueLegacy from './legacy'

export default function createVitePlugins(viteEnv: Record<string, string>, isBuild = false) {
  console.log('>>> isBuild:', isBuild)

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    viteEnv.VITE_OPEN_DEVTOOLS === 'true' && vueDevTools()
  ]

  vitePlugins.push(createAutoImport())
  vitePlugins.push(createComponents())
  vitePlugins.push(createSvgIcon())
  vitePlugins.push(createVueLegacy())
  // vitePlugins.push(createUnocss())

  vitePlugins.push({
    name: 'remove-crossorigin',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml(html) {
      return html.replace(/crossorigin(=(["']?)[^ >]*\2)?/g, '')
    }
  })

  return vitePlugins
}
