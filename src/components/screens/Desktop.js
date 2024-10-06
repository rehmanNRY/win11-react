import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Taskbar from '../parts/Taskbar'
import DesktopIcons from '../parts/DesktopIcons'
import Weather from '../menu/Weather'
import ContextMenu from '../menu/ContextMenu'
import Explorer from '../windows/Explorer'
import Widget from '../menu/Widget'
import Notification from '../menu/Notification'
import About from '../windows/About'
import StartMenu from '../menu/StartMenu'
import SearchMenu from '../menu/SearchMenu'
import Calendar from '../menu/Calendar'
import Settings from '../windows/Settings'

const Desktop = () => {
  const { taskbarApps } = useSelector((state) => state.taskbar) || [{ name: '', vaue: '' }];
  const isWeatherOpen = taskbarApps.find(app => app.name === "weather")?.isOpen;
  const isStartOpen = taskbarApps.find(app => app.name === "start")?.isOpen;
  const isWidgetOpen = taskbarApps.find(app => app.name === "widget")?.isOpen;
  const isSearchOpen = taskbarApps.find(app => app.name === "search")?.isOpen;
  const isNotiOpen = taskbarApps.find(app => app.name === "notification")?.isOpen;
  const isCalOpen = taskbarApps.find(app => app.name === "calendar")?.isOpen;
  const isAboutOpen = taskbarApps.find(app => app.name === "about")?.isOpen;
  const isExpOpen = taskbarApps.find(app => app.name === "explorer")?.isOpen;
  const isSettingsOpen = taskbarApps.find(app => app.name === "setting")?.isOpen;

  const [contextMenu, setContextMenu] = useState({
    isVisible: false,
    xPos: 0,
    yPos: 0,
    options: [],
  });

  const handleRightClick = (event) => {
    event.preventDefault();

    setContextMenu({
      isVisible: true,
      xPos: event.pageX,
      yPos: event.pageY,
    });
  };

  // const handleOptionClick = (option) => {
  //   setContextMenu({ ...contextMenu, isVisible: false });
  // };

  const handleClick = () => {
    if (contextMenu.isVisible) {
      setContextMenu({ ...contextMenu, isVisible: false });
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
    // eslint-disable-next-line
  }, [contextMenu]);
  return (
    <div onContextMenu={handleRightClick} className='h-screen w-screen main-desktop bg-cover bg-no-repeat bg-center relative'>
      <DesktopIcons />
      <ContextMenu
        xPos={contextMenu.xPos}
        yPos={contextMenu.yPos}
        isVisible={contextMenu.isVisible}
      />
      <Settings isSettingsOpen={isSettingsOpen}  />
      <About isAboutOpen={isAboutOpen} />
      <Notification isNotiOpen={isNotiOpen} />
      <Explorer isExpOpen={isExpOpen} />
      <Calendar isCalOpen={isCalOpen} />
      <Widget isWidgetOpen={isWidgetOpen} />
      <StartMenu isStartOpen={isStartOpen} />
      <SearchMenu isSearchOpen={isSearchOpen} />
      <Weather isWeatherOpen={isWeatherOpen} />
      <Taskbar />
    </div>
  )
}

export default Desktop