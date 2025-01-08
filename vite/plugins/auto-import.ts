/**
 * 按需自动导入 Vite 的 API
 */
import path from 'path'
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return autoImport({
    include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
    imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
    dts: path.resolve(__dirname, '../../types/auto-imports.d.ts'),
    eslintrc: {
      enabled: true,
      filepath: path.resolve(__dirname, '../../.eslintrc-auto-import.js'),
    },
  })
}
