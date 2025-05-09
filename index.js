const { app, BrowserWindow, Menu } = require('electron')
const { getMenuTemplate } = require('./menu/menu.js')

const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      devTools: true
    }
  })

  mainWindow.maximize()
  mainWindow.loadFile('index.html')

  const template = getMenuTemplate('main')
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

app.whenReady().then(() => {
  loadMainWindow()
})