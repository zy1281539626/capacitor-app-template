/**
 * vite插件将svg文件加载为vue组件（支持按需）
 * 默认都会转为组件，若想直接引用svg文件需要加后缀：?url
 */
import svgLoader from 'vite-svg-loader'

export default function createSvgIcon() {
  return svgLoader({
    svgo: false,
  })
}
