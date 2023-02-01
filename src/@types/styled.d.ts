import 'styled-components'
import { lightMode } from '../styles/themes/lightMode'
import { darkMode } from '../styles/themes/darkMode'

type ThemeType = darkMode | lightMode

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType{}
}