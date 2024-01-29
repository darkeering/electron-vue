// @ts-ignore
const electron = window.require('electron')
const { ipcRenderer } = electron

export function setTaskTimer() {
  ipcRenderer.send('add')
}

export function getAssetsFile(name: string, ext?: string) {
  return new URL(`./assets/${name}.${ext?ext:'svg'}`, import.meta.url).href
}