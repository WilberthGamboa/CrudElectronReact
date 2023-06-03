import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronFront',{
  guardarInformacion: async (data) => ipcRenderer.send('postData',data),
  obtenerInformacion: async(index) => ipcRenderer.invoke('getData',index)
})