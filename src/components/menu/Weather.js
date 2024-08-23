import React from 'react'

const Weather = ({isWeatherOpen}) => {
  return (
    <div className={`bg-blur w-96 py-5 px-3 rounded-xl shadow-lg flex items-center transition-all absolute bottom-14 duration-300 ${isWeatherOpen ? 'left-2 scale-100' : '-translate-x-full scale-75'}`}>
      <img src="/icons/weather.png" className='w-28 h-28' alt="weather icon" />
      <div className="ms-3">
        <h5 className='font-semibold text-gray-700'>96°C <span className='text-sm'>Partly could</span></h5>
        <p className='text-gray-800 mt-1 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit ⛈️</p>
      </div>
    </div>
  )
}

export default Weather