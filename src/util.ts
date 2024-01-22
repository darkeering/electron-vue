// @ts-ignore
const electron = window.require('electron')
const { ipcRenderer } = electron

export function setTaskTimer() {
  ipcRenderer.send('add')
}
