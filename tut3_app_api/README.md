# Tutorial 3: App API

<img src='/images/tut3_img1.png' width='600'>

- Electron App consist of Node.js as the processor
- Then Chromium as the renderer
- But this is not enough, we need Native API as middle-man
- In this tutorial we going to cover the Native API
- Specifically, the APP API
- Checkout the APP Api [here](https://electronjs.org/docs/api)
- Basically [APP Api](https://electronjs.org/docs/api/app) control your application's event lifecycle eg: on-start, on-close, is-ready etc
- Please refer Udemy Video [here](https://www.udemy.com/master-electron/learn/lecture/5851272) for more details

# How to use

This apps is build using [electron-quick-start](https://github.com/electron/electron-quick-start)

```bash
cd electron_tutorial\tut3_app_api
npm install
#in this tutorial 3, we using nodemon to watch for any file changes and auto refresh
npm run watch
```

# Exercise

This is just a summay. Please watch the video how to use the toolkit properly

| Exercise | Details |
|--|--|
| Exercise 1 | Using `app.on('ready', ...)` |
| Exercise 2 | Check app is ready |
| Exercise 3 | Detect App is closing |
| Exercise 4 | Detect App is focus & unfocus |
| Exercise 5 | Get [app path](https://electronjs.org/docs/api/app#appgetpathname) |
