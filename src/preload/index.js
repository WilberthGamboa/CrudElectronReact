import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronFront',{
  guardarInformacion: (data) => ipcRenderer.send('electronFunction',data)
})