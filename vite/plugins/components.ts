/**
 * 按需自动导入 Vue 组件(适用全局公共组件)
 * 默认目录：src/components
 * 添加 @sail/ui resolver
 * 注意：@sail/ui中使用api调用的组件需要手动import相关组件样式
 */
import path from 'path'
import components from 'unplugin-vue-components/vite'

export default function createComponents() {
  return components({
    dirs: ['src/components'],
    dts: path.resolve(__dirname, '../../types/components.d.ts'),
  })
}
