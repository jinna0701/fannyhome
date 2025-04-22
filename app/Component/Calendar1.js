import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calendar1() {
  const [currentMonth, setCurrentMonth] = useState("March");
  const [currentYear, setCurrentYear] = useState(2025);
  
  // Function to navigate to previous month
  const goToPrevMonth = () => {
    // In a real app, you would calculate the previous month
    // For now, just display an alert
    alert("Navigate to previous month");
  };
  
  // Function to navigate to next month
  const goToNextMonth = () => {
    // In a real app, you would calculate the next month
    // For now, just display an alert
    alert("Navigate to next month");
  };

  // Calendar data - in a real application, this would be generated dynamically
  const calendarData = [
    { 
      week: 1, 
      days: [
        { date: 29, isCurrentMonth: false, events: [] },
        { date: 30, isCurrentMonth: false, events: [{ name: "Bubble activity", color: "bg-yellow-100 text-yellow-800" }] },
        { date: 1, isCurrentMonth: true, events: [] },
        { date: 2, isCurrentMonth: true, events: [] },
        { date: 3, isCurrentMonth: true, events: [{ name: "Outdoor playground", color: "bg-red-100 text-red-800" }] },
        { date: 4, isCurrentMonth: true, events: [] },
        { date: 5, isCurrentMonth: true, events: [{ name: "Story time", color: "bg-blue-100 text-blue-800" }] }
      ]
    },
    { 
      week: 2, 
      days: [
        { date: 6, isCurrentMonth: true, events: [] },
        { date: 7, isCurrentMonth: true, events: [{ name: "", color: "bg-red-100" }] },
        { date: 8, isCurrentMonth: true, events: [] },
        { date: 9, isCurrentMonth: true, events: [] },
        { date: 10, isCurrentMonth: true, events: [] },
        { date: 11, isCurrentMonth: true, events: [] },
        { date: 12, isCurrentMonth: true, events: [{ name: "Drawing time", color: "bg-blue-100 text-blue-800" }] }
      ]
    },
    { 
      week: 3, 
      days: [
        { date: 13, isCurrentMonth: true, events: [] },
        { date: 14, isCurrentMonth: true, events: [] },
        { date: 15, isCurrentMonth: true, events: [], isToday: true },
        { date: 16, isCurrentMonth: true, events: [] },
        { date: 17, isCurrentMonth: true, events: [] },
        { date: 18, isCurrentMonth: true, events: [] },
        { date: 19, isCurrentMonth: true, events: [] }
      ]
    },
    { 
      week: 4, 
      days: [
        { date: 20, isCurrentMonth: true, events: [] },
        { date: 21, isCurrentMonth: true, events: [] },
        { date: 22, isCurrentMonth: true, events: [] },
        { date: 23, isCurrentMonth: true, events: [] },
        { date: 24, isCurrentMonth: true, events: [] },
        { date: 25, isCurrentMonth: true, events: [] },
        { date: 26, isCurrentMonth: true, events: [] }
      ]
    },
    { 
      week: 5, 
      days: [
        { date: 27, isCurrentMonth: true, events: [] },
        { date: 28, isCurrentMonth: true, events: [] },
        { date: 29, isCurrentMonth: true, events: [] },
        { date: 30, isCurrentMonth: true, events: [] },
        { date: 31, isCurrentMonth: true, events: [] },
        { date: 13, isCurrentMonth: false, events: [] },
        { date: 13, isCurrentMonth: false, events: [] }
      ]
    }
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-medium text-gray-800">Edit Schedules</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition">
          Edit
        </button>
      </div>

      <div className="bg-orange-100 rounded-lg p-6">
        {/* Month navigation */}
        <div className="flex justify-between items-center mb-4">
          <div className="bg-white px-4 py-2 rounded">
            <span className="text-2xl font-semibold">{currentMonth}</span>
            <span className="text-2xl text-gray-500 ml-2">{currentYear}</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={goToPrevMonth}
              className="bg-white p-2 rounded hover:bg-gray-100"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={goToNextMonth}
              className="bg-white p-2 rounded hover:bg-gray-100"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded">
          {/* Calendar header */}
          <div className="grid grid-cols-7 border-b">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="py-2 text-center text-gray-600">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar body */}
          {calendarData.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 border-b last:border-b-0">
              {week.days.map((day, dayIndex) => (
                <div 
                  key={dayIndex} 
                  className={`min-h-28 p-1 border-r last:border-r-0 ${
                    !day.isCurrentMonth ? "text-gray-400" : ""
                  }`}
                >
                  <div className="flex justify-center">
                    <div className={`w-6 h-6 flex items-center justify-center rounded-full ${
                      day.isToday ? "bg-black text-white" : ""
                    }`}>
                      {day.date}
                    </div>
                  </div>
                  <div className="mt-1">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`text-xs p-1 rounded ${event.color} truncate`}
                      >
                        {event.name}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}