import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  taskbarApps: [
    {
      name: "weather",
      category: "taskApp",
      img: "/icons/weather.png",
      isOpen: false,
    }, {
      name: "start",
      category: "taskApp",
      img: "/icons/home.png",
      isOpen: false,
    }, {
      name: "widget",
      category: "taskApp",
      img: "/icons/widget.png",
      isOpen: false,
    }, {
      name: "search",
      category: "taskApp",
      img: "/icons/dsa.png",
      isOpen: false,
    }, {
      name: "explorer",
      category: "windowApp",
      img: "/icons/explorer.png",
      isOpen: false,
    }, {
      name: "setting",
      category: "windowApp",
      img: "/icons/settings.png",
      isOpen: false,
    }, {
      name: "code",
      category: "windowApp",
      img: "/icons/code.png",
      isOpen: false,
    }, {
      name: "spotify",
      category: "windowApp",
      img: "/icons/spotify.png",
      isOpen: false,
    }, {
      name: "stool",
      category: "windowApp",
      img: "/icons/stool.png",
      isOpen: false,
    }, {
      name: "about",
      category: "windowApp",
      img: "/icons/info.png",
      isOpen: false,
    }, {
      name: "twitter",
      category: "windowApp",
      img: "/icons/twitter.png",
      isOpen: false,
    }, {
      name: "github",
      category: "windowApp",
      img: "/icons/github.png",
      isOpen: false,
    }, {
      name: "notification",
      category: "taskApp",
      img: "/icons/github.png",
      isOpen: false,
    }, {
      name: "calendar",
      category: "taskApp",
      img: "/icons/github.png",
      isOpen: false,
    },
  ]
}

export const taskbarSlice = createSlice({
  name: 'taskbar',
  initialState,
  reducers: {
    colseAllApps: (state) => {
      state.taskbarApps.forEach((app) => app.isOpen = false);
    },
    toggleApp: (state, action) => {
      const { name } = action.payload;
      state.taskbarApps = state.taskbarApps.map((app) =>
        app.name === name
          ? { ...app, isOpen: !app.isOpen }
          : { ...app, isOpen: false })
    }
  },
})

export const { colseAllApps, toggleApp } = taskbarSlice.actions

export default taskbarSlice.reducer