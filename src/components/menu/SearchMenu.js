import React from 'react'

const SearchMenu = ({ isSearchOpen }) => {
  return (
<div
  className={`w-[500px] absolute rounded-xl bg-blur transition-transform overflow-auto left-1/2 transform -translate-x-1/2 shadow-xl ${isSearchOpen ? 'bottom-14 scale-100' : 'translate-y-full scale-90'}`}
>
  <div className="relative p-6">
    <div className="flex items-center bg-white border border-blue-500 rounded-full shadow-md mb-4 px-4 py-2 transition-all duration-300 hover:shadow-lg">
      <input
        type="text"
        name="my_input"
        placeholder="Search something ..."
        className="flex-grow bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-500 focus:text-blue-600"
      />
    </div>
    <ul className="flex gap-4 mb-6 text-sm font-semibold text-gray-600">
      <li className="cursor-pointer border-b-2 border-blue-500 text-blue-600">All</li>
      <li className="cursor-pointer hover:text-blue-600 transition-colors duration-150">Apps</li>
      <li className="cursor-pointer hover:text-blue-600 transition-colors duration-150">Documents</li>
      <li className="cursor-pointer hover:text-blue-600 transition-colors duration-150">Web</li>
      <li className="cursor-pointer hover:text-blue-600 transition-colors duration-150">More</li>
    </ul>

    <h3 className="text-sm font-semibold mb-4 text-gray-700">Top Apps</h3>
    <div className="grid grid-cols-2 gap-4 mb-6">
      {[
        { src: "icons/explorer.png", label: "Explorer" },
        { src: "icons/settings.png", label: "Settings" },
        { src: "icons/icon-chrome.png", label: "Chrome" },
        { src: "icons/stool.png", label: "Snipping" },
      ].map((app, index) => (
        <div
          key={index}
          className="bg-gray-50 hover:bg-blue-50 shadow-lg rounded-lg p-4 text-center transition-transform duration-300 hover:scale-105"
        >
          <img src={app.src} alt={app.label} className="mx-auto mb-2 h-12 w-12" />
          <h4 className="text-xs font-medium text-gray-700">{app.label}</h4>
        </div>
      ))}
    </div>

    <h3 className="text-sm font-semibold mb-4 text-gray-700">Quick Searches</h3>
    <div className="flex flex-col gap-4">
      {[
        "Today in history",
        "New movies",
        "Top news",
        "Markets today",
      ].map((item, index) => (
        <div key={index} className="flex items-center text-sm text-gray-800 hover:text-blue-600 transition-colors duration-150">
          <span className="mr-2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  </div>
</div>

  );

}

export default SearchMenu