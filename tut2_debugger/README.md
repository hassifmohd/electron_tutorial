# Tutorial 2: Debugger

How to use [node debugger](https://www.udemy.com/master-electron/learn/lecture/5705516) (not to be confused with Electron debugger)

# How to use

This apps is build using [electron-quick-start](https://github.com/electron/electron-quick-start)

```bash
cd electron_tutorial\tut2_debugger
npm install
# start without node debug
npm start
# start using node debug normal (--inspect)
npm run debug1
# start using node debug break (--inspect-brk)
npm run debug2
```

# Electron debug

Is already inside `main.js`
Which is here `mainWindow.webContents.openDevTools()`

# Node debug

We going to use chrome dev tool

We can use this because Node create a HTTP websocket for debug

* Open chrome. Typing `chrome://inspect` at the address bar
* Click `Discover network targets` add `localhost:5858`
* run `npm run debug1`
* Continue with Exercise. Using chrome inspector and click `Resume` to watch debugging do its job

# Exercise

This is just a summay. Please watch the video how to use the toolkit properly

| Exercise | Details |
|--|--|
| Exercise 1 | Stop execution at `debugger` |
| Exercise 2 | Using `--inspect-brk` |
