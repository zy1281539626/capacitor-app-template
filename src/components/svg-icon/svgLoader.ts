const svgModules = import.meta.glob('@/assets/icons/**/*.svg')

const svgIconMap: Record<string, () => Promise<any>> = {}

Object.keys(svgModules).forEach((path) => {
  const relativePath = path.replace('/src/assets/icons/', '').replace('.svg', '')
  // 子文件夹里svg 命名空间
  const iconName = relativePath.replace(/\//g, '-')
  svgIconMap[iconName] = svgModules[path]
})

export const getSvgComponent = (iconName: string) => {
  const loadSvg = svgIconMap[iconName]

  if (loadSvg) {
    return loadSvg()
  } else {
    console.error(`Icon "${iconName}" not found in svgIconMap`)
    return null
  }
}
