/**
 * 打包构建时支持旧版浏览器
 * 支持浏览器直接打开，避免file协议跨域
 */
import legacy from '@vitejs/plugin-legacy'

export default function createVueLegacy() {
  return legacy({
    renderLegacyChunks: true,
    // NOTE: unocss配置与此相同
    renderModernChunks: false,
  })
}
