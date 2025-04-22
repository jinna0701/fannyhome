 
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Calendar2() {
  const [currentMonth, setCurrentMonth] = useState("March");
  const [currentYear, setCurrentYear] = useState(2025);
  
  const handlePreviousMonth = () => {
    // Logic to navigate to previous month would go here
    console.log("Navigate to previous month");
  };
  
  const handleNextMonth = () => {
    // Logic to navigate to next month would go here
    console.log("Navigate to next month");
  };

  // Sample calendar data
  const calendarWeeks = [
    // Week 1
    [
      { date: 29, isCurrentMonth: false },
      { date: 30, isCurrentMonth: false, events: [{ name: "Bubble activity", color: "bg-yellow-100 text-yellow-800" }] },
      { date: 1, isCurrentMonth: true },
      { date: 2, isCurrentMonth: true },
      { date: 3, isCurrentMonth: true, events: [{ name: "Outdoor playground", color: "bg-red-100 text-red-800" }] },
      { date: 4, isCurrentMonth: true },
      { date: 5, isCurrentMonth: true, events: [{ name: "Story time", color: "bg-blue-100 text-blue-800" }] }
    ],
    // Week 2
    [
      { date: 6, isCurrentMonth: true },
      { date: 7, isCurrentMonth: true, events: [{ name: "", color: "bg-red-100" }] },
      { date: 8, isCurrentMonth: true },
      { date: 9, isCurrentMonth: true },
      { date: 10, isCurrentMonth: true },
      { date: 11, isCurrentMonth: true },
      { date: 12, isCurrentMonth: true, events: [{ name: "Drawing time", color: "bg-blue-100 text-blue-800" }] }
    ],
    // Week 3
    [
      { date: 13, isCurrentMonth: true },
      { date: 14, isCurrentMonth: true },
      { date: 15, isCurrentMonth: true, isToday: true },
      { date: 16, isCurrentMonth: true },
      { date: 17, isCurrentMonth: true },
      { date: 18, isCurrentMonth: true },
      { date: 19, isCurrentMonth: true }
    ],
    // Week 4
    [
      { date: 20, isCurrentMonth: true },
      { date: 21, isCurrentMonth: true },
      { date: 22, isCurrentMonth: true },
      { date: 23, isCurrentMonth: true },
      { date: 24, isCurrentMonth: true },
      { date: 25, isCurrentMonth: true },
      { date: 26, isCurrentMonth: true }
    ],
    // Week 5
    [
      { date: 27, isCurrentMonth: true },
      { date: 28, isCurrentMonth: true },
      { date: 29, isCurrentMonth: true },
      { date: 30, isCurrentMonth: true },
      { date: 31, isCurrentMonth: true },
      { date: 13, isCurrentMonth: false },
      { date: 13, isCurrentMonth: false }
    ]
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium text-gray-800">Edit Schedules</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-md transition-colors">
          Edit
        </button>
      </div>

      <div className="bg-orange-100 rounded-lg p-6">
        {/* Month navigation */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-white px-6 py-3 rounded-md shadow-sm">
            <span className="text-2xl font-bold text-gray-800">{currentMonth}</span>
            <span className="text-2xl text-gray-500 ml-2">{currentYear}</span>
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={handlePreviousMonth}
              className="bg-white p-2 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Previous month"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={handleNextMonth}
              className="bg-white p-2 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
              aria-label="Next month"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="bg-white rounded-md overflow-hidden">
          {/* Days of week header */}
          <div className="grid grid-cols-7">
            {daysOfWeek.map((day, i) => (
              <div key={i} className="py-3 text-center text-gray-500 font-medium border-b">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          {calendarWeeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 border-b last:border-b-0">
              {week.map((day, dayIndex) => (
                <div 
                  key={`${weekIndex}-${dayIndex}`}
                  className={`min-h-32 p-2 border-r last:border-r-0 ${
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
                  <div className="mt-2">
                    {day.events?.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`text-xs p-1 rounded mb-1 ${event.color}`}
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