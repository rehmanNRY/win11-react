import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Draggable from 'react-draggable';
import { toggleApp } from '../../redux/taskbar/taskbarSlice';

const DesktopIcons = () => {
  const { taskbarApps } = useSelector((state) => state.taskbar) || [{ name: '', vaue: '' }];
  const desktopApps = taskbarApps.filter((app, index)=> app.category !== 'taskApp')
  const dispatch = useDispatch()
  return (
    <div className="desk_application flex flex-wrap flex-col ms-2 gap-3">
      {desktopApps.slice(0, 7).map(app => <Draggable key={app.name}>
        <div onDoubleClick={() => dispatch(toggleApp({ name: app.name }))} className="desktop-app border rounded text-center py-2 w-20 flex flex-col items-center text-sm transition-all duration-200 ease-in-out justify-center border-transparent hover:bg-[#ffffff1d]">
          <img src={app.img} className="w-9 active:scale-75 rounded-md" />
          <h1 className="text-xs mt-1 mb-1 text-gray-100 font-normal text-shadow capitalize">{ app.name }</h1>
        </div>
      </Draggable>)}
    </div>
  )
}

export default DesktopIcons