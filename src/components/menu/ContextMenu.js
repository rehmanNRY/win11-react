import React from 'react'

const ContextMenu = ({ xPos, yPos, isVisible }) => {
  if (!isVisible) return null;
  return (
    <div style={{ top: yPos, left: xPos }} className="absolute bg-blur border border-gray-300 rounded-lg shadow-lg z-50 w-72 p-3">
      <ul className="p-0 list-none">
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/view.png" alt="View Icon" className="w-5" />
          <span>View</span>
          <ul className="hidden absolute left-full top-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-56 group-hover:block">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Large icons</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Medium icons</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Small icons</li>
          </ul>
        </li>
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/sort.png" alt="Sort Icon" className="w-5" />
          <span>Sort by</span>
          <ul className="hidden absolute left-full top-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-56 group-hover:block">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Name</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Item type</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Date modified</li>
          </ul>
        </li>
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/refresh.png" alt="Refresh Icon" className="w-5" />
          <span>Refresh</span>
        </li>
        <li className="border-t border-gray-300 my-1" />
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/display.png" alt="Display Icon" className="w-5" />
          <span>Next Background Image</span>
        </li>
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/new.png" alt="New Icon" className="w-5" />
          <span>New item</span>
          <ul className="hidden absolute left-full top-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg w-56 group-hover:block">
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Folder</li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Shortcut</li>
            <li className="border-t border-gray-300 my-1" />
            <li className="p-2 hover:bg-gray-200 cursor-pointer">Text Document</li>
          </ul>
        </li>
        <li className="border-t border-gray-300 my-1" />
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/display.png" alt="Display Icon" className="w-5" />
          <span>Display settings</span>
        </li>
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/personalize.png" alt="Personalize Icon" className="w-5" />
          <span>Personalize</span>
        </li>
        <li className="border-t border-gray-300 my-1" />
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/terminal.png" alt="Terminal Icon" className="w-5" />
          <span>Open in Windows Terminal</span>
        </li>
        <li className="relative group flex items-center gap-3 p-2 hover:bg-gray-200 cursor-pointer">
          <img src="../icons/info.png" alt="Info Icon" className="w-5" />
          <span>About Windows</span>
        </li>
      </ul>
    </div>

  )
}

export default ContextMenu