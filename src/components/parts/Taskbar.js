import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleApp } from '../../redux/taskbar/taskbarSlice';

const Taskbar = () => {
  const {taskbarApps} = useSelector((state) => state.taskbar) || [{ name: '', vaue: '' }];
  const dispatch = useDispatch()
  // console.log(taskbarApps)
  // useEffect(() => {
  //   console.log(taskbarApps)
  // }, [taskbarApps])
  
  return (
    <div className='h-12 bg-blur w-screen absolute bottom-0 flex justify-between items-center'>
      <div onClick={() => dispatch(toggleApp({ name: taskbarApps[0].name }))} className="flex cursor-pointer transition-all hover:bg-slate-50 items-center px-3 h-full">
        <img src={taskbarApps[0].img} className='h-7 w-7 active:scale-90 duration-200 transition-all' alt={`weather icon`} />
        <div className="flex flex-col h-full justify-center ms-2.5">
          <h5 className='text-sm font-semibold text-gray-800'>20° F</h5>
          <h5 className='text-sm text-gray-700'>Partly Sunny</h5>
        </div>
      </div>
      <ul className="flex gap-1 absolute left-1/2 -translate-x-1/2">
        {taskbarApps.slice(1, 11).map((app) => <li key={app.name} onClick={() => dispatch(toggleApp({ name: app.name }))} className='h-10 w-10 transition-all hover:bg-slate-50 rounded-md flex justify-center items-center cursor-pointer relative0'>
          <img src={app.img} className='h-[26px] w-[26px] active:scale-90 duration-200 transition-all' alt={`${app.name} icon`} />
          {app.isOpen && <div className="absolute bottom-[2px] w-2 h-[2px] bg-blue-600 rounded-3xl"></div>}
        </li>)}
      </ul>
      <ul className="flex h-full items-center">
        <li className='h-10 w-10 transition-all hover:bg-slate-50 rounded-md flex justify-center items-center cursor-pointer'>
          <img src='/icons/discord.png' className='h-7 w-7 active:scale-90 duration-200 transition-all' alt='discord' />
        </li>
        <ul className="flex h-full items-center gap-2 transition-all hover:bg-slate-50 px-1.5 cursor-pointer opacity-70" onClick={() => dispatch(toggleApp({ name: 'notification' }))}>
          <li><img src="/icons/chevronup.png" className='h-4 w-4' alt="taskbar item" /></li>
          <li><img src="/icons/wifi.png" className='h-4 w-4' alt="taskbar item" /></li>
          <li><img src="/icons/battery.png" className='h-4 w-4' alt="taskbar item" /></li>
          <li><img src="/icons/audio3.png" className='h-4 w-4' alt="taskbar item" /></li>
        </ul>
        <div onClick={() => dispatch(toggleApp({ name: 'calendar' }))} className="flex flex-col h-full justify-center items-center transition-all hover:bg-slate-50 px-2 cursor-pointer">
          <h5 className='text-sm'>12:18 AM</h5>
          <h5 className='text-sm'>8/03/2024</h5>
        </div>
      </ul>
    </div>
  )
}

export default Taskbar