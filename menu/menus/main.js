const { app } = require('electron')
const menuMain = [
  {
    label: app.name,
    submenu: [
      {
        label: 'Project',
        submenu: [
          {
            label: 'New...',
            accelerator: 'CmdOrCtrl + N',
            click: () => { } // todo
          },
          {
            label: 'Open...',
            accelerator: 'CmdOrCtrl + O',
            click: () => { } // todo
          }
        ]
      },
      { type: 'separator' },
      { role: 'quit' }
    ]
  },
  {
    label: 'Options',
    submenu: [
      {
        label: 'Development',
        submenu: [
          { role: 'reload' },
          { role: 'forceReload' },
          { role: 'toggleDevTools' }
        ]
      }
    ]
  }
]

module.exports = {
  menuMain
}
