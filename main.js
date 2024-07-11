const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')
const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';

const createWindow = () => {
    const win = new BrowserWindow({
        width: isDev ? 1000 : 500,
        height: 600,
        title: 'First Electron App',
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    if (isDev) {
        win.webContents.openDevTools();
    }

    win.loadFile('renderer/index.html')
}

app.whenReady().then(() => {
    console.log('App is up and running')
    ipcMain.handle('ping', () => 'pong')
    createWindow()

    // Open a window if none are open (macOS)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    console.log('App is closed')
    if (isMac !== 'darwin') app.quit()
})
