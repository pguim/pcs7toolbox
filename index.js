const { app, BrowserWindow } = require('electron')

const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    show: false
  })

  mainWindow.maximize()
  mainWindow.loadFile('index.html')

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

app.whenReady().then(() => {
  loadMainWindow()
})