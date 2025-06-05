import { setTheme } from './lib/theme.js'
import { APP_NAME } from './constants/app.js'
import { dialog } from 'electron'

const handleTheme = (item, window, event) => {
  const theme = item.id.split('-')[2]
  setTheme(theme)
}

const handleImportIos = (item, window, event) => {
  dialog.showOpenDialog({
    title: 'Select "All IOs" file(s) exported from PCS7...',
    filters: [{ name: 'PCS7 IOs Export File', extensions: ['csv'] }],
    properties: ['openFile', 'multiSelections']
  })
    .then(res => {
      if (res.filePaths) {
        res.filePaths.forEach(path => {
          console.log(path) // todo
        })
      }
    })
}

export const getMenuTemplate = (menuName, win) => {
  const menuMain = [
    {
      label: APP_NAME,
      submenu: [
        {
          label: 'Project',
          submenu: [
            {
              label: 'Import IOs file/s...',
              id: 'project-importIos',
              accelerator: 'CmdOrCtrl + I',
              click: handleImportIos
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
          label: 'Theme',
          submenu: [
            {
              label: 'Dark',
              type: 'radio',
              id: 'options-theme-dark',
              accelerator: 'CmdOrCtrl + Shift + D',
              click: handleTheme
            },
            {
              label: 'Light',
              type: 'radio',
              id: 'options-theme-light',
              accelerator: 'CmdOrCtrl + Shift + L',
              click: handleTheme
            },
            {
              label: 'System',
              type: 'radio',
              id: 'options-theme-system',
              accelerator: 'CmdOrCtrl + Shift + S',
              click: handleTheme
            }
          ]
        },
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

  const menuDefault = []
  switch (menuName.toLowerCase()) {
    case 'main': {
      return menuMain
    }
  }
  return menuDefault
}
