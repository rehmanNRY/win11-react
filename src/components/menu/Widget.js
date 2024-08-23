import React from 'react'

const Widget = ({isWidgetOpen}) => {
  return (
    <section
      className={`bg-blur p-8 rounded-lg text-black border border-black/10 absolute top-2 w-[650px] overflow-y-auto transition-all ${isWidgetOpen ? 'left-2' : '-translate-x-full'}`}
      style={{ height: 'calc(100% - 65px)' }}
    >
      {/* Meteo Widget */}
      <div className="mb-4 border border-white/20 rounded-lg bg-gradient-to-br from-yellow-100 to-teal-100 hover:shadow-lg transition-shadow duration-300">
        <div className="widget-header-card p-4 grid grid-cols-[1fr_auto] items-center uppercase font-light">
          <span>METEO</span>
          <svg
            aria-hidden="true"
            focusable="false"
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path
              fill="currentColor"
              d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"
            />
          </svg>
        </div>
        <div className="content-widget grid place-items-center grid-flow-col p-4 h-[calc(100%-40px-3em)]">
          <div className="sole-meteo w-24 h-24 bg-yellow-400 rounded-full shadow-[0_0.5em_3em_#a07403]"></div>
          <div className="temperatura-container text-5xl font-semibold">
            <span>20</span>
            <span className="text-2xl opacity-50">°C</span>
          </div>
        </div>
        <a
          className="h-14 py-3 border-t-2 border-white/20 text-black text-shadow-[0_0_1em_#000] transition-transform duration-300 hover:underline hover:underline-offset-1 text-center flex justify-center items-center"
          href="https://weather.com/it-IT/tempo/oggi/l/62aee98dba8cc9c051a3753c27e85efd93f931abdd92a0010ab567ecfeb93d64"
          target="_blank"
          rel="noopener noreferrer"
        >
          More details..
        </a>
      </div>

      {/* Clock Widget */}
      <div className="mb-4 border border-white/20 rounded-lg bg-gradient-to-br from-gray-100 to-blue-100 hover:shadow-lg transition-shadow duration-300 pb-5">
        <div className="widget-header-card p-4 grid grid-cols-[1fr_auto] items-center uppercase font-light">
          <span>Clock</span>
          <svg
            aria-hidden="true"
            focusable="false"
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path
              fill="currentColor"
              d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"
            />
          </svg>
        </div>
        <div className="content-widget grid place-items-center p-4 h-[calc(100%-40px-3em)]">
          <div className="clock-display text-6xl font-semibold">
            <span>{new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Todo Widget */}
      <div className="mb-4 border border-white/20 rounded-lg bg-gradient-to-br from-green-100 to-purple-100 hover:shadow-lg transition-shadow duration-300">
        <div className="widget-header-card p-4 grid grid-cols-[1fr_auto] items-center uppercase font-light">
          <span>Todo</span>
          <svg
            aria-hidden="true"
            focusable="false"
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path
              fill="currentColor"
              d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"
            />
          </svg>
        </div>
        <div className="content-widget p-4">
          <ul className="todo-list list-disc list-inside">
            <li>Complete project report</li>
            <li>Review UI design</li>
            <li>Update client on progress</li>
          </ul>
        </div>
        <a
          className="btn-todo-widget grid place-content-center h-12 border-t-2 border-white/20 text-black text-shadow-[0_0_1em_#000] transition-transform duration-300 hover:underline hover:underline-offset-1"
          href="/"
        >
          View all tasks
        </a>
      </div>

      {/* Calendar Widget */}
      <div className="border border-white/20 rounded-lg bg-gradient-to-br from-pink-100 to-orange-100 hover:shadow-lg transition-shadow duration-300">
        <div className="widget-header-card p-4 grid grid-cols-[1fr_auto] items-center uppercase font-light">
          <span>Calendario</span>
          <svg
            aria-hidden="true"
            focusable="false"
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 128 512"
          >
            <path
              fill="currentColor"
              d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z"
            />
          </svg>
        </div>
        <div className="content-widget p-4">
          <div className="calendar grid grid-cols-[1fr_auto] gap-2">
            <div className="date-display text-4xl font-semibold">
              {new Date().toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })}
            </div>
            <div className="day-display text-2xl font-light uppercase">
              {new Date().toLocaleDateString('it-IT', { weekday: 'long' })}
            </div>
          </div>
        </div>
        <a
          className="btn-calendar-widget grid place-content-center h-12 border-t-2 border-white/20 text-black text-shadow-[0_0_1em_#000] transition-transform duration-300 hover:underline hover:underline-offset-1"
          href="/"
        >
          View full calendar
        </a>
      </div>
    </section>
  )
}

export default Widget;
