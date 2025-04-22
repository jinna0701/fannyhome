import React from 'react';
import { 
  Home, 
  Calendar, 
  CreditCard, 
  MessageSquare, 
  Users, 
  ClipboardCheck, 
  ActivitySquare, 
  Utensils, 
  Moon, 
  Settings, 
  User, 
  HelpCircle 
} from 'lucide-react';

 

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
    
        <aside className="w-56 bg-white border-r border-gray-100 p-4">
          <div className="text-gray-400 font-medium text-sm mb-4">MENU</div>
          
          <nav className="space-y-1">
            <SidebarItem icon={<Home className="w-5 h-5" />} text="Dashboard" active />
            <a href="./Component/Calendar1" className="block">
            <SidebarItem icon={<Calendar className="w-5 h-5" />} text="View Schedules & Calendar" />
            </a>
            <SidebarItem icon={<CreditCard className="w-5 h-5" />} text="Payment" />
            <SidebarItem icon={<MessageSquare className="w-5 h-5" />} text="Message system" />

   

            <a href="./Component/ChildProfile" className="block">
            <SidebarItem icon={<Users className="w-5 h-5" />} text="Manage Children" />
            </a>

            
            <SidebarItem icon={null} text="Attendance" indented />
            <SidebarItem icon={null} text="Activity Log" indented />
            <SidebarItem icon={null} text="Meals" indented />
            <SidebarItem icon={null} text="Nap Track" indented />
          </nav>
          
          <div className="text-gray-400 font-medium text-sm mt-8 mb-4">OTHERS</div>
          
          <nav className="space-y-1">
            <SidebarItem icon={<Settings className="w-5 h-5" />} text="Settings" />
            <SidebarItem icon={<User className="w-5 h-5" />} text="Accounts" />
            <SidebarItem icon={<HelpCircle className="w-5 h-5" />} text="Help" />
          </nav>
        </aside>
        
        {/* Main Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-medium text-gray-800 mb-6">Dashboard</h1>
        
        {/* First Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <StatusCard title="Enrollment" value="6" />
          <StatusCard title="Absent" value="1" valueColor="text-green-600" />
          <StatusCard title="Announcement" value="Easter Day" valueSize="text-xl" />
          <StatusCard title="Staff" value="2" />
        </div>
        
        {/* Second Row of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <EventCard title="Upcoming Event" event="Mother's day" />
          <EventCard title="Upcoming Event" event="Pat will take off tomorrow" />
        </div>
      </main>
    </div>
  );
}

function SidebarItem({ icon, text, active = false, indented = false }) {
  return (
    <div className={`flex items-center py-2 px-3 rounded-lg ${active ? 'bg-orange-50' : 'hover:bg-gray-100'}`}>
      {indented ? (
        <div className="w-5 h-5 mr-3"></div>
      ) : (
        <div className={`mr-3 ${active ? 'text-orange-500' : 'text-gray-400'}`}>
          {icon}
        </div>
      )}
      <span className={`${active ? 'text-orange-500 font-medium' : 'text-gray-600'} ${indented ? 'pl-4' : ''}`}>
        {text}
      </span>
    </div>
  );
}

function StatusCard({ title, value, valueColor = "text-gray-800", valueSize = "text-5xl" }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center justify-center text-center">
      <h3 className="text-gray-400 font-medium mb-4">{title}</h3>
      <p className={`${valueColor} ${valueSize} font-medium`}>{value}</p>
    </div>
  );
}

function EventCard({ title, event }) {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-6">
      <h3 className="text-gray-400 font-medium mb-4">{title}</h3>
      <p className="text-gray-800 text-2xl font-medium">{event}</p>
    </div>
  );
}

//npm install lucide-react
