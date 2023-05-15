'use strict'
import * as electron from 'electron'
import * as preload from '@electron-toolkit/preload'
const api = {}
if (process.contextIsolated) {
  try {
    electron.contextBridge.exposeInMainWorld('electron', preload.electronAPI)
    electron.contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = preload.electronAPI
  window.api = api
}
