export default {
  packagerConfig: {
    icon: './assets/images/icon/icon' // no file extension required
  },
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: './assets/images/icon/icon.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: './assets/images/icon/icon.ico'
      }
    },
    {
      // Path to a single image that will act as icon for the application
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './assets/images/icon/icon.png'
        }
      }
    },
    {
      // Path to the icon to use for the app in the DMG window
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './assets/images/icon/icon.icns'
      }
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: './assets/images/icon/icon.ico'
      }
    }
  ]
}
