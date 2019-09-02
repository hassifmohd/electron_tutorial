// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

//Exercise 2: Check app is ready
console.log('App is ready (A): ' + app.isReady())

//Exercise 2: Check app is ready
setTimeout( () => {
  console.log('App is ready (C): ' + app.isReady())
}, 3000)

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  //Exercise 1
  console.log('App is ready!'); //when the app is ready, console something
  createWindow()

  //Exercise 2: Check app is ready
  console.log('App is ready (B): ' + app.isReady())

  //Exercise 5: Get app path
  console.log(app.getPath('desktop'))
  console.log(app.getPath('music'))
  console.log(app.getPath('temp'))
  console.log(app.getPath('userData'))
})

//Exercise 3: Detect App is closing
app.on('before-quit', event => {
  console.log('App is qutting!');
  // event.preventDefault(); //Exercise 3: enable this and will prevent app from quitting
})

//Exercise 4: Detect App is focus & unfocus
app.on('browser-window-focus', () => {
  console.log('FOCUS!');
})
app.on('browser-window-blur', () => {
  console.log('NOT FOCUS!');
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
