import theme from 'styles/theme'

type Theme = typeof theme

declare module 'styped-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
