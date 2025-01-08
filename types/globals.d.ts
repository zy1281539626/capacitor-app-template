declare global {
  type Recordable<T = any> = Record<string, T>
  type Nullable<T> = T | null
  type Literal<T> = T[keyof T]
  type ElRef<T extends HTMLElement = HTMLDivElement> = Nullable<T>
  type CssStyleObject = Partial<CSSStyleDeclaration> & Record<string, string | null>

  // vite define 全局变量
  const __BUILD_MODE__: 'sit' | 'uat' | 'production'
}

export {}
