import React from 'react';
import Draggable from 'react-draggable';
import { toggleApp } from '../../redux/taskbar/taskbarSlice';
import { useDispatch } from 'react-redux'

const Settings = ({isSettingsOpen}) => {
  const dispatch = useDispatch()
  return (
    <Draggable handle=".setting-drag-handle">
      <div
        className={`absolute z-10 overflow-hidden rounded-md max-h-[689px] max-w-[1291px] border border-gray-300 top-0 w-[90vw] shadow-lg ${isSettingsOpen ? 'block' : 'hidden'}`}
        style={{
          backgroundColor: '#F7F7F7',
          color: '#333',
          fontFamily: '"Segoe UI", sans-serif',
        }}
      >
        <div className="absolute inset-0 bg-white z-[-1]" />
        <header className="p-2 grid-area-header grid-cols-1 flex items-center bg-white border-b border-gray-300 justify-between setting-drag-handle">
          <div className="flex items-center">
            <button className="h-9 w-10 bg-transparent hover:bg-gray-200 active:bg-gray-300 rounded-md flex items-center justify-center">
              <i className="ms-Icon ms-Icon--Back" />
            </button>
            <span className="text-sm font-medium ml-2">Settings</span>
          </div>
          <div className="flex items-center h-9 gap-4">
            <button className="h-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minus">
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </button>
            <button className="h-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              </svg>
            </button>
            <button className="h-full flex items-center justify-center" onClick={() => dispatch(toggleApp({ name:'setting'}))}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </header>
        <div className="flex">
          <nav className="p-4 bg-gray-50 border-r border-gray-300 w-1/4">
            <div className="NavUser flex items-center w-full">
              <div
                className="NavUser__user-avatar w-12 h-12 rounded-full bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://www.gravatar.com/avatar/1707473576e0ed4b2114add57c8d8215?s=128')",
                }}
              ></div>
              <div className="NavUser__user-info ml-4">
                <span className="block font-semibold">Allen Lantz</span>
                <span className="block text-xs text-gray-500">allen@artex.dev</span>
              </div>
            </div>
            <ul className="NavItems mt-6 space-y-2">
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--System mr-4" />
                <span>System</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="icon-ic_fluent_bluetooth_20_filled mr-4" />
                <span>Bluetooth & devices</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="icon-ic_fluent_wifi_1_20_filled mr-4" />
                <span>Network & internet</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Brush mr-4" />
                <span>Personalization</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--AppIconDefaultAdd mr-4" />
                <span>Apps</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--People mr-4" />
                <span>Accounts</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Clock mr-4" />
                <span>Time & language</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="icon-ic_fluent_games_24_filled mr-4" />
                <span>Gaming</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="icon-ic_fluent_accessibility_20_filled mr-4" />
                <span>Accessibility</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Shield mr-4" />
                <span>Privacy & security</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-200 active:bg-gray-300 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Sync mr-4" />
                <span>Windows Update</span>
              </li>
            </ul>
          </nav>
          <main className="w-3/4 p-4">
            <h1 className="text-lg font-semibold">System</h1>
            <div className="space-y-4 mt-4">
              <div className="hover:bg-gray-200 active:bg-gray-300 flex items-center p-4 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--System mr-4" />
                <div className="flex-1">
                  <span className="block text-lg font-medium">Installed apps</span>
                  <span className="block text-sm text-gray-600">
                    Uninstall and manage apps on your PC
                  </span>
                </div>
                <i className="ms-Icon ms-Icon--ChevronRight" />
              </div>
              <div className="hover:bg-gray-200 active:bg-gray-300 flex items-center p-4 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Volume3 mr-4" />
                <div className="flex-1">
                  <span className="block text-lg font-medium">Sound</span>
                  <span className="block text-sm text-gray-600">
                    Volume levels, output, input, sound devices
                  </span>
                </div>
                <i className="ms-Icon ms-Icon--ChevronRight" />
              </div>
              <div className="hover:bg-gray-200 active:bg-gray-300 flex items-center p-4 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Notifications mr-4" />
                <div className="flex-1">
                  <span className="block text-lg font-medium">Notifications</span>
                  <span className="block text-sm text-gray-600">
                    Alerts from apps and system
                  </span>
                </div>
                <i className="ms-Icon ms-Icon--ChevronRight" />
              </div>
              <div className="hover:bg-gray-200 active:bg-gray-300 flex items-center p-4 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--FocusAssist mr-4" />
                <div className="flex-1">
                  <span className="block text-lg font-medium">Focus assist</span>
                  <span className="block text-sm text-gray-600">
                    Notifications, automatic rules
                  </span>
                </div>
                <i className="ms-Icon ms-Icon--ChevronRight" />
              </div>
              <div className="hover:bg-gray-200 active:bg-gray-300 flex items-center p-4 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Network mr-4" />
                <div className="flex-1">
                  <span className="block text-lg font-medium">Network & Internet</span>
                  <span className="block text-sm text-gray-600">
                    Network connections, data usage
                  </span>
                </div>
                <i className="ms-Icon ms-Icon--ChevronRight" />
              </div>
              <div className="hover:bg-gray-200 active:bg-gray-300 flex items-center p-4 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Display mr-4" />
                <div className="flex-1">
                  <span className="block text-lg font-medium">Display</span>
                  <span className="block text-sm text-gray-600">
                    Brightness, resolution, orientation
                  </span>
                </div>
                <i className="ms-Icon ms-Icon--ChevronRight" />
              </div>
              <div className="hover:bg-gray-200 active:bg-gray-300 flex items-center p-4 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Power mr-4" />
                <div className="flex-1">
                  <span className="block text-lg font-medium">Power & Sleep</span>
                  <span className="block text-sm text-gray-600">
                    Sleep settings, power options
                  </span>
                </div>
                <i className="ms-Icon ms-Icon--ChevronRight" />
              </div>
              <div className="hover:bg-gray-200 active:bg-gray-300 flex items-center p-4 rounded-md cursor-pointer">
                <i className="ms-Icon ms-Icon--Update mr-4" />
                <div className="flex-1">
                  <span className="block text-lg font-medium">Update & Security</span>
                  <span className="block text-sm text-gray-600">
                    Windows updates, security options
                  </span>
                </div>
                <i className="ms-Icon ms-Icon--ChevronRight" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </Draggable>
  );
};

export default Settings;
