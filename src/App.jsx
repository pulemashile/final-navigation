import React, { useState } from 'react';
import { Calendar, ListTodo, Bell, CircleUserRound, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto relative">
        <div className="flex items-center space-x-8">
          <img src="/images/logo.svg" alt="Logo" className="h-8" />
          <div className="hidden md:flex space-x-6 items-center">
            {/* Features Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-600 flex items-center gap-2"
                onMouseEnter={() => setFeaturesOpen(true)}
                onMouseLeave={() => setFeaturesOpen(false)}
              >
                Features
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
              </button>
              {featuresOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                    <ListTodo className="w-4 h-4 text-purple-600" />
                    <span>Todo List</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>Calendar</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                    <Bell className="w-4 h-4 text-yellow-400" />
                    <span>Reminders</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                    <CircleUserRound className="w-4 h-4 text-purple-400" />
                    <span>Planning</span>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button 
                className="text-gray-600 flex items-center gap-3"
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
              >
                Company
                <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg"><path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 1 4 4 4-4"/></svg>
              </button>
              {companyOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-36 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  <div className="px-4 py-2 hover:bg-gray-50">History</div>
                  <div className="px-4 py-2 hover:bg-gray-50">Our Team</div>
                  <div className="px-4 py-2 hover:bg-gray-50">Blog</div>
                </div>
              )}
            </div>
            <button className="text-gray-600">Careers</button>
            <button className="text-gray-600">About</button>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <button className="text-gray-600">Login</button>
          <button className="border border-gray-300 rounded-s-lg px-6 py-2">Register</button>
        </div>





        {/*/////////////////*/}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col space-y-4 md:hidden">
            <div className='relative '>
              <button onClick={() => setFeaturesOpen(!featuresOpen)} className="text-gray-600">Features</button>
              {featuresOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setFeaturesOpen(true)}
                  onMouseLeave={() => setFeaturesOpen(false)}
                >
                  {/* <button onClick={() => setFeaturesOpen(false)}>Close</button> */}
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                    <ListTodo className="w-4 h-4 text-purple-600" />
                    <span>Todo List</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>Calendar</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                    <Bell className="w-4 h-4 text-yellow-400" />
                    <span>Reminders</span>
                  </div>
                  <div className="px-4 py-2 hover:bg-gray-50 flex items-center gap-3">
                    <CircleUserRound className="w-4 h-4 text-purple-400" />
                    <span>Planning</span>
                  </div>
                </div>
              )}
            </div>

            <div className='relative '>
            <button className="text-gray-600">Company</button>
            </div>
            <button className="text-gray-600">Careers</button>
            <button className="text-gray-600">About</button>
            <div className="border-t pt-4">
              <button className="text-gray-600 w-full text-left">Login</button>
              <button className="border border-gray-300 rounded-md px-6 py-2 w-full mt-2">Register</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto mt-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 gap-12">
          <div className="flex-1 max-w-xl space-y-6">
            <h1 className="text-6xl font-bold leading-tight">Make<br />remote work</h1>
            <p className="text-gray-600 text-lg">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
            <button className="bg-black hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg border border-black text-lg">Learn more</button>
          </div>
          <div className="flex-1">
            <img src="/images/image-hero-desktop.png" alt="Remote worker" className="w-full h-auto object-contain" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
