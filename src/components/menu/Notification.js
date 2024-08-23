import React from 'react'

const Notification = ({isNotiOpen}) => {
  return (
    <div className={`absolute w-[390px] bg-blur rounded-xl transition-all shadow-2xl p-8 bottom-14 ${isNotiOpen ? 'right-2' : 'translate-x-full right-0'}`}>
      <div className="flex flex-wrap">
        {/* Utility Tile */}
        {[
          { icon: 'wifi.png', label: 'WiFi' },
          { icon: 'bluetooth.png', label: 'Bluetooth' },
          { icon: 'airplane.png', label: 'Airplane Mode' },
          { icon: 'saver.png', label: 'Battery Saver' },
          { icon: 'moon.png', label: 'Focus Assist', active: true },
          { icon: 'location.png', label: 'Location' },
          { icon: 'nightlight.png', label: 'Night Light' },
          { icon: 'connect.png', label: 'Connect' },
          { icon: 'project.png', label: 'Project' }
        ].map(({ icon, label, active }) => (
          <div className="h-[87px] w-[98px] text-center inline-block mr-[9px] mb-[10px]" key={label}>
            <div className={`shadow-sm h-[48px] w-[98px] rounded-lg flex items-center justify-center transition-all duration-200 cursor-pointer ${active
                ? 'bg-blue-600'
                : 'bg-gray-100/60 hover:bg-gray-200'
              }`}>
              <img src={`icons/${icon}`} alt={label} className={`h-[20px] w-[20px] transition-all duration-200 ${active ? 'invert' : ''}`} />
            </div>
            <h1 className={`text-[13px] mt-[7px]`}>{label}</h1>
          </div>
        ))}
        {/* Brightness Control */}
        <div className="flex items-center mt-[12px] mb-[20px]">
          <img src="icons/brightness.png" alt="Brightness" className="h-[24px] w-[24px] mx-[6px]" />
          <input
            type="range"
            min={15}
            max={100}
            defaultValue={100}
            className="w-[280px] appearance-none h-[4px] bg-gray-700 rounded-lg"
          />
        </div>
        {/* Audio Control */}
        <div className="flex items-center mt-[12px]">
          <img src="icons/audio3.png" alt="Audio" className="h-[22px] w-[22px] mx-[8px]" />
          <input
            type="range"
            min={15}
            max={100}
            defaultValue={100}
            className="w-[280px] appearance-none h-[4px] bg-gray-700 rounded-lg"
          />
        </div>
      </div>
    </div>

  )
}

export default Notification