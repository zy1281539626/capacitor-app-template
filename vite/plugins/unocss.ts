/**
 * css 引擎
 * 配置文件在根目录 uno.config.ts  (使用独立文件对 IDE 和 HRM 更友好)
 */
import UnoCSS from 'unocss/vite'

export default function createUnocss() {
  return UnoCSS()
}
