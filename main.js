const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    console.log('App is up and running')
    createWindow()

    // Open a window if none are open (macOS)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    console.log('App is closed')
    if (process.platform !== 'darwin') app.quit()
})
