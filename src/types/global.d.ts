export {}

declare global {
  declare type Literal<T> = T[keyof T]
}
