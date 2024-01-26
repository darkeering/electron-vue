"use strict";
const electron = require("electron");
const { join } = require("path");
let remindWindow;
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";
const createWindow = () => {
  const win = new electron.BrowserWindow({
    // 窗口图标
    icon: join(__dirname, "resource/shortcut.ico"),
    width: 2e3,
    height: 1200,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: join(__dirname, "../preload.js")
    }
  });
  electron.Menu.setApplicationMenu(null);
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(join(__dirname, "../dist/index.html"));
  }
};
electron.app.whenReady().then(() => {
  createWindow();
  electron.app.on("activate", () => {
    if (electron.BrowserWindow.getAllWindows().length === 0)
      createWindow();
  });
});
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin")
    electron.app.quit();
});
electron.ipcMain.on("add", (event, time, task) => {
  createRemindWindow();
});
function createRemindWindow() {
  if (remindWindow)
    remindWindow.close();
  remindWindow = new electron.BrowserWindow({
    height: 450,
    width: 360,
    resizable: false,
    frame: false,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  remindWindow.removeMenu();
  remindWindow.getBounds();
  remindWindow.setAlwaysOnTop(true);
  if (process.env.WEBPACK_DEV_SERVER_URL) {
    remindWindow.loadURL(process.env.WEBPACK_DEV_SERVER_URL + "/remind.html");
  }
  remindWindow.show();
  remindWindow.on("closed", () => {
    remindWindow = null;
  });
  setTimeout(() => {
    remindWindow && remindWindow.close();
  }, 50 * 1e3);
}
