import React from 'react'

const StartMenu = ({isStartOpen}) => {
  const startMenuItems = [
    {
      name: "widget",
      img: "/icons/widget.png",
    },
    {
      name: "weather",
      img: "/icons/weather.png",
    }, {
      name: "explorer",
      img: "/icons/explorer.png",
    }, {
      name: "setting",
      img: "/icons/settings.png",
    }, {
      name: "code",
      img: "/icons/code.png",
    }, {
      name: "spotify",
      img: "/icons/spotify.png",
    }, {
      name: "stool",
      img: "/icons/stool.png",
    }, {
      name: "twitter",
      img: "/icons/twitter.png",
    }, {
      name: "github",
      img: "/icons/github.png",
    },
    {
      name: "weather",
      img: "/icons/weather.png",
    }, {
      name: "widget",
      img: "/icons/widget.png",
    }, {
      name: "explorer",
      img: "/icons/explorer.png",
    }, {
      name: "setting",
      img: "/icons/settings.png",
    }, {
      name: "code",
      img: "/icons/code.png",
    }, {
      name: "spotify",
      img: "/icons/spotify.png",
    }, {
      name: "stool",
      img: "/icons/stool.png",
    }, {
      name: "twitter",
      img: "/icons/twitter.png",
    }, {
      name: "github",
      img: "/icons/github.png",
    }, {
      name: "weather",
      img: "/icons/weather.png",
    }, {
      name: "widget",
      img: "/icons/widget.png",
    }, {
      name: "explorer",
      img: "/icons/explorer.png",
    }, {
      name: "setting",
      img: "/icons/settings.png",
    }, {
      name: "code",
      img: "/icons/code.png",
    }, {
      name: "spotify",
      img: "/icons/spotify.png",
    }, {
      name: "stool",
      img: "/icons/stool.png",
    }, {
      name: "twitter",
      img: "/icons/twitter.png",
    }, {
      name: "github",
      img: "/icons/github.png",
    }, {
      name: "stool",
      img: "/icons/stool.png",
    }, {
      name: "twitter",
      img: "/icons/twitter.png",
    }, 
  ]
  return (
    <div className={`bg-blur absolute left-1/2 transition-all -translate-x-1/2 rounded-xl max-w-[530px] overflow-hidden shadow-lg ${isStartOpen? 'bottom-14 scale-100': 'translate-y-full scale-75'}`}>
      <div className="p-8">
        <h4 className='text-sm ps-2 text-gray-700'>Items</h4>
        <ul className="flex gap-2 flex-wrap justify-between mt-4">
          {startMenuItems.slice(0, 24).map((app) => (
            <li
              key={app.name}
              className='hover:bg-gray-100 rounded-md cursor-pointer flex flex-col items-center p-1.5 transition-all duration-150 ease-in-out'
            >
              <img src={app.img} className='h-8 w-8' alt={app.name} />
              <h5 className='text-[12px] mt-2 text-gray-800'>{app.name}</h5>
            </li>
          ))}
        </ul>
        <h4 className='text-sm my-4 ps-2 text-gray-700'>Recommended</h4>
        <ul className="flex gap-2 flex-wrap">
          {startMenuItems.slice(5, 11).map((app) => (
            <li
              key={app.name}
              className='w-[49%] hover:bg-gray-100 rounded-md cursor-pointer flex items-center p-2 transition-all duration-150 ease-in-out'
            >
              <img src={app.img} className='h-8 w-8' alt={app.name} />
              <h5 className='text-[12px] ms-3 text-gray-800'>{app.name}</h5>
            </li>
          ))}
        </ul>
      </div>
      <div className='px-10 py-3 flex justify-between items-center bg-[#0000000d] border-t border-gray-200'>
        <div className='cursor-pointer flex items-center hover:text-gray-900 transition-all ease-in-out'>
          <img src="/icons/logo.png" className='h-7 w-7 rounded-full' alt="NRY" />
          <h5 className='text-sm ms-2 text-gray-800'>NRY</h5>
        </div>
        <div className='text-gray-700 hover:text-red-600 transition-all ease-in-out cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-power">
            <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
            <line x1="12" y1="2" x2="12" y2="12"></line>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default StartMenu;