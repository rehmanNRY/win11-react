import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { toggleApp } from '../../redux/taskbar/taskbarSlice';

const About = ({isAboutOpen}) => {
  const dispatch = useDispatch()
  return (
    <div className={`fixed inset-0 pb-16 pointer-events-none ${isAboutOpen ? 'flex items-center justify-center': 'hidden'}`}>
      <Draggable handle=".drag-handle">
        <div className="relative w-[42vw] h-[67vh] bg-white rounded-lg shadow-lg pointer-events-auto">
          <div className="drag-handle bg-gray-100 py-2 px-8 rounded-t-lg flex items-center cursor-grab">
            <img src="/icons/info.png" className='w-4' alt="info png" />
            <h1 className="text-base text-gray-800 ps-1.5">About</h1>
          </div>
          <div className="p-8 text-gray-800 flex-1 overflow-auto">
            <h2 className="text-lg font-semibold mb-4">Windows <span className="text-gray-600">NRY</span></h2>
            <div className="space-y-2">
              <p className="text-sm font-medium">Version: <span className="text-gray-600">1.42r</span></p>
              <p className="text-sm font-medium">Publisher: <span className="text-gray-600">NRY</span></p>
              <p className="text-sm font-medium">Coded by: <span className="text-gray-600">Abdul Rehman</span></p>
              <p className="text-sm font-medium">Technologies used: <span className="text-gray-600">HTML, CSS, JS</span></p>
              <p className="text-sm font-medium">Features: <span className="text-gray-600">50+ (New features added daily)</span></p>
              <p className="text-sm font-medium">Liberate: <span className="text-gray-600">November 2021</span></p>
              <p className="text-sm font-medium">Updated: <span className="text-gray-600">September 2022</span></p>
              <p className="text-sm font-medium">Facebook: <span className="text-gray-600">@rehman.fbx</span></p>
              <p className="text-sm font-medium">Instagram: <span className="text-gray-600">@rehman_nry</span></p>
              <p className="text-sm font-medium mb-4">About me: <span className="text-gray-600">Abdul Rehman, web developer crafting sites using HTML, CSS, JS, React/Next.js, Tailwind/Bootstrap, and MERN apps.</span></p>
              <p className="text-sm font-medium">Contact: <span className="text-gray-600">rehman.contact9@gmail.com</span></p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[7.5vh] bg-gray-100 rounded-b-lg flex items-center justify-end px-6">
            <button className="h-10 w-32 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 transition" onClick={() => dispatch(toggleApp({ name: 'about' }))} >Close</button>
          </div>
          <img src="icons/window_logo1.png" className="absolute top-24 right-8 h-[18vh] w-[18vh] rounded-lg shadow-md border border-gray-300" alt='window logo' />
        </div>
      </Draggable>
    </div>
  );
};

export default About;
