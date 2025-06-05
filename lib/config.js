import Store from 'electron-store'

const store = new Store({
  name: 'app',
  fileExtension: 'config'
})

export const isThemeDark = () => {
  return store.get('theme') === 'dark'
}

export const isThemeLight = () => {
  return store.get('theme') === 'light'
}

export const isThemeSystem = () => {
  return store.get('theme') === 'system'
}

export const setThemeConfig = theme => { store.set('theme', theme) }
export const getThemeConfig = () => { return store.get('theme') }
