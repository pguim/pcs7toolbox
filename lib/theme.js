import { nativeTheme } from 'electron'
import { setThemeConfig } from './config.js'
export const setTheme = theme => {
  nativeTheme.themeSource = theme
  setThemeConfig(theme)
}
