const { menuMain } = require('./menus/main.js')

const getMenuTemplate = menuName => {
  const menuDefault = []
  switch (menuName.toLowerCase()) {
    case 'main': {
      console.log(menuMain)
      return menuMain
    }
  }
  return menuDefault
}

module.exports = {
  getMenuTemplate
}
