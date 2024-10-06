import React from 'react';
// import 'boxicons'; 
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux'
import { toggleApp } from '../../redux/taskbar/taskbarSlice';

const Explorer = ({ isExpOpen }) => {
  const dispatch = useDispatch()
  return (
    <div className={`fixed top-24 left-1/2 -translate-x-1/2 pointer-events-none ${isExpOpen ? 'block' : 'hidden'}`}>
      <Draggable handle=".explorer-drag-handle">
        <ResizableBox
          width={800}
          height={600}
          minConstraints={[500, 400]}
          maxConstraints={[1200, 800]}
          className={`pointer-events-auto resize-box`}
        >
          <section className="shadow-lg overflow-hidden w-full bg-[#F0F4F7] rounded-lg ">
            <header className="text-black explorer-drag-handle cursor-grab">
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center">
                  <img src="icons/explorer.png" alt="Explorer" className="w-4 h-4 mr-2" />
                  <h1 className="text-xs font-medium">File Explorer</h1>
                </div>
                <div className="flex items-center h-9 gap-4">
                  <button className="h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                  <button className="h-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" class="feather feather-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                  </button>
                  <button className="h-full flex items-center justify-center" onClick={() => dispatch(toggleApp({ name:'explorer'}))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between py-2 px-4 border-b border-gray-300">
                <div className="flex items-center">
                  <h3 className="bg-[#c1f09d] text-xs font-medium text-[#383b35] px-3 py-1 rounded-lg shadow-sm mr-3">Manage</h3>
                  <span className="text-xs text-gray-800">Local Disk (C:)</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  <span className="text-xs text-white bg-blue-600 w-5 h-5 flex items-center justify-center rounded-full">?</span>
                </div>
              </div>
            </header>

            <div className="flex items-center justify-between p-2 bg-white border-b border-gray-300">
              <div className="flex-1 flex items-center space-x-2 py-1.5 px-3 rounded bg-white">
                <img src="icons/Custom.ico" alt="Computer" className="w-4 h-4" />
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span className="text-xs font-medium text-gray-600">This PC</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span className="text-xs font-medium text-gray-600">C:</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span className="text-xs font-medium text-gray-600">Users</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span className="text-xs font-medium text-gray-600">Nry</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                <span className="text-xs font-medium text-gray-600">Abdul Rehman</span>
              </div>
              <div className="relative flex items-center border border-gray-300 rounded bg-whte shadow-sm py-0.5 px-2 ml-1">
                <input type="search" name="s" placeholder="Search Local Disk (C:)" className="border-0 h-6 text-xs placeholder-gray-500 focus:outline-none focus:ring-0 bg-transparent" />
              </div>
            </div>
            <div className="flex">
              <div className="w-48 border-r border-gray-300 p-2.5 bg-gray-50 pb-32">
                <ul>
                  <li className="flex items-center space-x-2.5 px-2.5 py-1.5 hover:bg-blue-50 rounded transition duration-200 ease-in-out text-sm text-gray-800">
                    <img src="icons/quick_access.ico" alt="Quick Access" className="w-4 h-4" />
                    <span>Quick access</span>
                  </li>
                  <li className="flex items-center space-x-2.5 px-2.5 py-1.5 hover:bg-blue-50 rounded transition duration-200 ease-in-out text-sm text-gray-800">
                    <img src="icons/Library Videos.ico" alt="Network" className="w-4 h-4" />
                    <span>Videos</span>
                  </li>
                  <li className="flex items-center space-x-2.5 px-2.5 py-1.5 hover:bg-blue-50 rounded transition duration-200 ease-in-out text-sm text-gray-800">
                    <img src="icons/Library Tv.ico" alt="Network" className="w-4 h-4" />
                    <span>Telecast</span>
                  </li>
                  <li className="flex items-center space-x-2.5 px-2.5 py-1.5 hover:bg-blue-50 rounded transition duration-200 ease-in-out text-sm text-gray-800">
                    <img src="icons/Library Documents.ico" alt="Network" className="w-4 h-4" />
                    <span>Documents</span>
                  </li>
                  <li className="flex items-center space-x-2.5 px-2.5 py-1.5 hover:bg-blue-50 rounded transition duration-200 ease-in-out text-sm text-gray-800">
                    <img src="icons/Library Pictures.ico" alt="Network" className="w-4 h-4" />
                    <span>Pictures</span>
                  </li>
                  <li className="flex items-center space-x-2.5 px-2.5 py-1.5 hover:bg-blue-50 rounded transition duration-200 ease-in-out text-sm text-gray-800">
                    <img src="icons/network.ico" alt="Network" className="w-4 h-4" />
                    <span>Network</span>
                  </li>
                </ul>
              </div>
              <div className="flex-1 px-4 bg-white">
                <div className="flex items-center justify-between mb-2.5 text-gray-600 border-b border-gray-300 py-3">
                  <span className="text-xs px-2 py-1 cursor-pointer">Name</span>
                  <span className="text-xs px-2 py-1 flex-1 cursor-pointer ms-7">Date modified</span>
                  <span className="text-xs px-2 py-1 cursor-pointer">Type</span>
                  <span className="text-xs px-2 py-1 cursor-pointer">Size</span>
                </div>
                <div className="space-y-1.5 pb-24">
                  <div className="flex items-center justify-between py-1 px-2 hover:bg-blue-50 rounded transition duration-200 ease-in-out gap-3">
                    <div className="flex items-center space-x-2">
                      <img src="icons/Desktop.ico" alt="Folder" className="w-5 h-5" />
                      <span className="text-xs text-gray-800">Desktop</span>
                    </div>
                    <div className="flex-1 text-gray-600 text-xs">7/15/2021 9:26 AM</div>
                    <div className="text-gray-600 text-xs">File Folder</div>
                    <div className="text-gray-600 text-xs">4.00 GB</div>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 hover:bg-blue-50 rounded transition duration-200 ease-in-out gap-3">
                    <div className="flex items-center space-x-2">
                      <img src="icons/Custom.ico" alt="Folder" className="w-5 h-5" />
                      <span className="text-xs text-gray-800">New Folder</span>
                    </div>
                    <div className="flex-1 text-gray-600 text-xs">7/15/2021 9:26 AM</div>
                    <div className="text-gray-600 text-xs">File Folder</div>
                    <div className="text-gray-600 text-xs">4.00 GB</div>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 hover:bg-blue-50 rounded transition duration-200 ease-in-out gap-3">
                    <div className="flex items-center space-x-2">
                      <img src="icons/Computer.png" alt="Folder" className="w-5 h-5" />
                      <span className="text-xs text-gray-800">\$WINDOWS.~BT</span>
                    </div>
                    <div className="flex-1 text-gray-600 text-xs">7/15/2021 9:26 AM</div>
                    <div className="text-gray-600 text-xs">File Folder</div>
                    <div className="text-gray-600 text-xs">4.00 GB</div>
                  </div>
                  <div className="flex items-center justify-between py-1 px-2 hover:bg-blue-50 rounded transition duration-200 ease-in-out gap-3">
                    <div className="flex items-center space-x-2">
                      <img src="icons/Custom.ico" alt="Folder" className="w-5 h-5" />
                      <span className="text-xs text-gray-800">Files Exrtra</span>
                    </div>
                    <div className="flex-1 text-gray-600 text-xs">7/15/2021 9:26 AM</div>
                    <div className="text-gray-600 text-xs">File Folder</div>
                    <div className="text-gray-600 text-xs">4.00 GB</div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="bg-gray-100 text-gray-600 text-xs px-4 py-3 flex justify-between items-center border-t border-gray-300">
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
    </div>
  );
};

export default Explorer;
