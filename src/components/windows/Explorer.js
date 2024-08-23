import React from 'react';
import 'boxicons'; // Importing Boxicons
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Draggable from 'react-draggable';

const Explorer = ({isExpOpen}) => {
  return (
    <Draggable handle=".explorer-drag-handle">
      <ResizableBox
        width={800}
        height={600}
        minConstraints={[500, 400]}
        maxConstraints={[1200, 800]}
        className={`absolute inset-0 ${isExpOpen ? 'block': 'hidden'}`}
      >
        <section className="bg-white shadow-lg rounded-lg border border-gray-200 overflow-hidden h-full w-full flex flex-col justify-between">
          <header className="bg-blue-600 text-white rounded-t-lg explorer-drag-handle">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center">
                <img src="icons/explorer.png" alt="Explorer" className="w-3.5 h-3.5 mr-2" />
                <h1 className="text-xs font-medium">File Explorer</h1>
              </div>
              <div className="flex items-center space-x-1">
                <button className="w-6 h-6 flex items-center justify-center hover:bg-blue-500 transition duration-200 ease-in-out rounded">
                  <box-icon name='minus' color='#fff' size="xs"></box-icon>
                </button>
                <button className="w-6 h-6 flex items-center justify-center hover:bg-blue-500 transition duration-200 ease-in-out rounded">
                  <box-icon name='square' color='#fff' size="xs"></box-icon>
                </button>
                <button className="w-6 h-6 flex items-center justify-center hover:bg-red-600 hover:text-white transition duration-200 ease-in-out rounded">
                  <box-icon name='x' color='#fff' size="xs"></box-icon>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 bg-blue-100 border-b border-gray-300">
              <div className="flex items-center">
                <h3 className="bg-[#c1f09d] text-xs font-medium text-[#383b35] px-3 py-1 rounded-lg shadow-sm mr-3">Manage</h3>
                <span className="text-xs text-gray-800">Local Disk (C:)</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <box-icon name='chevron-down' color='#4b5563' size="xs"></box-icon>
                <span className="text-xs text-white bg-blue-600 w-5 h-5 flex items-center justify-center rounded-full">?</span>
              </div>
            </div>
          </header>

          <div className="flex items-center justify-between p-2 bg-white border-b border-gray-300">
            <div className="flex items-center space-x-2">
              <box-icon name='chevron-left' color='#4b5563' size="xs"></box-icon>
              <box-icon name='chevron-right' color='#d1d5db' size="xs"></box-icon>
              <box-icon name='chevron-down' color='#4b5563' size="xs"></box-icon>
              <box-icon name='chevron-up' color='#4b5563' size="xs"></box-icon>
            </div>
            <div className="flex-1 flex items-center space-x-2 border border-gray-300 p-1.5 rounded bg-white shadow-sm">
              <img src="icons/Custom.ico" alt="Computer" className="w-4 h-4" />
              <box-icon name='chevron-right' color='#6b7280' size="xs"></box-icon>
              <span className="text-xs font-medium text-gray-600">This PC</span>
              <box-icon name='chevron-right' color='#6b7280' size="xs"></box-icon>
              <span className="text-xs font-medium text-gray-600">C:</span>
              <box-icon name='chevron-right' color='#6b7280' size="xs"></box-icon>
              <span className="text-xs font-medium text-gray-600">Users</span>
              <box-icon name='chevron-right' color='#6b7280' size="xs"></box-icon>
              <span className="text-xs font-medium text-gray-600">Nry</span>
              <box-icon name='chevron-right' color='#6b7280' size="xs"></box-icon>
              <span className="text-xs font-medium text-gray-600">Abdul Rehman</span>
            </div>
            <div className="relative flex items-center border border-gray-300 p-1.5 rounded bg-white shadow-sm">
              <box-icon name='search' color='#9ca3af' size="xs" className="absolute left-2 top-1/2 transform -translate-y-1/2"></box-icon>
              <input type="search" name="s" placeholder="Search Local Disk (C:)" className="pl-8 border-0 h-6 text-xs placeholder-gray-500 focus:outline-none focus:ring-0 bg-transparent" />
            </div>
          </div>

          <div className="flex">
            <div className="w-48 border-r border-gray-300 p-2.5 bg-gray-50">
              <ul>
                <li className="flex items-center space-x-2 p-1.5 hover:bg-blue-100 rounded transition duration-200 ease-in-out">
                  <box-icon name='chevron-right' color='#4b5563' size="xs"></box-icon>
                  <a href="#" className="text-xs text-gray-800 flex items-center space-x-1.5">
                    <img src="icons/quick_access.ico" alt="Quick Access" className="w-4 h-4" />
                    <span>Quick access</span>
                  </a>
                </li>
                <li className="flex items-center space-x-2 p-1.5 hover:bg-blue-100 rounded transition duration-200 ease-in-out">
                  <box-icon name='chevron-right' color='#4b5563' size="xs"></box-icon>
                  <a href="#" className="text-xs text-gray-800 flex items-center space-x-1.5">
                    <img src="icons/network.ico" alt="Network" className="w-4 h-4" />
                    <span>Network</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 p-4 bg-white">
              <div className="flex items-center justify-between mb-2.5 text-gray-600 border-b border-gray-300">
                <span className="text-xs px-2 py-1 cursor-pointer">Name</span>
                <span className="text-xs px-2 py-1 flex-1 cursor-pointer">Date modified</span>
                <span className="text-xs px-2 py-1 cursor-pointer">Type</span>
                <span className="text-xs px-2 py-1 cursor-pointer">Size</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between py-1 px-2 hover:bg-blue-50 rounded transition duration-200 ease-in-out">
                  <div className="flex items-center space-x-2">
                    <img src="icons/empty-small-folder.png" alt="Folder" className="w-5 h-5" />
                    <span className="text-xs text-gray-800">\$WINDOWS.~BT</span>
                  </div>
                  <div className="flex-1 text-gray-600 text-xs">7/15/2021 9:26 AM</div>
                  <div className="text-gray-600 text-xs">File Folder</div>
                  <div className="text-gray-600 text-xs">4.00 GB</div>
                </div>
                <div className="flex items-center justify-between py-1 px-2 hover:bg-blue-50 rounded transition duration-200 ease-in-out">
                  <div className="flex items-center space-x-2">
                    <img src="icons/empty-small-folder.png" alt="Folder" className="w-5 h-5" />
                    <span className="text-xs text-gray-800">Windows</span>
                  </div>
                  <div className="flex-1 text-gray-600 text-xs">7/15/2021 9:26 AM</div>
                  <div className="text-gray-600 text-xs">File Folder</div>
                  <div className="text-gray-600 text-xs">8.00 GB</div>
                </div>
              </div>
            </div>
          </div>
          <footer className="bg-gray-100 text-gray-600 text-xs p-1.5 flex justify-between items-center border-t border-gray-300">
            <div>
              <span>2 items selected</span>
            </div>
            <div>
              <span>7.5 GB available</span>
            </div>
          </footer>
        </section>
      </ResizableBox>
    </Draggable>
  );
};

export default Explorer;
