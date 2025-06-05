import { app, BrowserWindow, Menu } from 'electron'
import { getMenuTemplate } from './menu.js'
import { getThemeConfig } from './lib/config.js'
import { setTheme } from './lib/theme.js'

const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    icon: './assets/images/icon/icon.png',
    show: false,
    webPreferences: {
      devTools: true
    }
  })

  mainWindow.maximize()
  mainWindow.loadFile('index.html')

  const template = getMenuTemplate('main', mainWindow)
  const menu = Menu.buildFromTemplate(template)
  const currentTheme = getThemeConfig() || 'system'
  menu.getMenuItemById(`options-theme-${currentTheme}`).checked = true
  setTheme(currentTheme)
  Menu.setApplicationMenu(menu)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

app.whenReady().then(() => {
  loadMainWindow()
})
