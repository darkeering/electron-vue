import { BrowserWindow, Menu, app, ipcMain } from "electron"
const {join} = require('path')
let remindWindow
// 屏蔽安全警告
// ectron Security Warning (Insecure Content-Security-Policy)
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

const createWindow = () => {
    const win = new BrowserWindow({
        // 窗口图标
        icon: join(__dirname, 'resource/shortcut.ico'),
        width: 2000,
        height: 1200,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            preload: join(__dirname, '../preload.js')
        }
    })
    // 加载vue url视本地环境而定，如http://localhost:5173
    // win.loadURL('http://localhost:3000')

    Menu.setApplicationMenu(null)

    // development模式
    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
        // 开启调试台
        win.webContents.openDevTools()
    } else {
        win.loadFile(join(__dirname, 'dist/index.html'))
    }
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('add', (event, time, task) => {
    createRemindWindow()
})


function createRemindWindow () {
    if(remindWindow) remindWindow.close()
    remindWindow = new BrowserWindow({
      height: 450,
      width: 360,
      resizable: false,
      frame: false,
      show: false,
      webPreferences:{
        nodeIntegration:true,
        contextIsolation: false,
      }
    })
    remindWindow.removeMenu()
  
    const { height, width } = remindWindow.getBounds()
  
    remindWindow.setAlwaysOnTop(true)
  
    if (process.env.WEBPACK_DEV_SERVER_URL) {
      remindWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL + '/remind.html')
    } else {
    //   createProtocol('app')
    //   remindWindow.loadURL(`file://${__dirname}/remind.html`)
    }
    
    // remindWindow.webContents.on('did-finish-load', () => {
    //   remindWindow.webContents.send('setTask')
    // })
  
    remindWindow.show()
    remindWindow.on('closed', () => { remindWindow = null })
    setTimeout( () => {
      remindWindow && remindWindow.close()
    }, 50 * 1000)
  }
  