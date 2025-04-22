// components/Scheduler.js
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AddSchedule() {
    const [currentMonth, setCurrentMonth] = useState('May 2023');
    const [selectedDate, setSelectedDate] = useState(null);

    // Function to handle previous month
    const handlePreviousMonth = () => {
        console.log('Go to previous month');
    };

    // Function to handle next month
    const handleNextMonth = () => {
        console.log('Go to next month');
    };

    // Generate calendar days for May 2023
    const generateCalendarDays = () => {
        const days = [];
        const daysInMonth = 31; // May has 31 days

        // Days in current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                day: i,
                isCurrentMonth: true,
            });
        }

        // Days from next month (greyed out)
        for (let i = 1; i <= 4; i++) {
            days.push({
                day: i,
                isCurrentMonth: false,
            });
        }

        return days;
    };

    const calendarDays = generateCalendarDays();
    const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const handleDateClick = (day) => {
        if (day.isCurrentMonth) {
            setSelectedDate(day.day);
            console.log(`Selected date: ${day.day} ${currentMonth}`);
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-800">Add Schedule</h1>
                <button
                    className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition-colors"
                >
                    Add
                </button>
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 mb-2">Activity</label>
                <input
                    type="text"
                    placeholder="playing lego"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 mb-4"
                />

                <input
                    type="text"
                    placeholder="Indoor bubble activity"
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 mb-4"
                />

                <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 mb-4"
                />

                <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 bg-gray-50 rounded-md border border-gray-200 mb-4"
                />
            </div>

            <div className="mt-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">{currentMonth}</h2>
                    <div className="flex space-x-2">
                        <button
                            onClick={handlePreviousMonth}
                            className="p-1 rounded hover:bg-gray-100"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNextMonth}
                            className="p-1 rounded hover:bg-gray-100"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-7 border border-gray-200">
                    {/* Weekday headers */}
                    {weekdays.map((day, index) => (
                        <div
                            key={`weekday-${index}`}
                            className="py-2 text-center font-medium"
                        >
                            {day}
                        </div>
                    ))}

                    {/* Calendar days */}
                    {calendarDays.map((day, index) => (
                        <div
                            key={`day-${index}`}
                            onClick={() => handleDateClick(day)}
                            className={`cursor-pointer border border-gray-200 aspect-square flex items-center justify-center ${
                                day.isCurrentMonth
                                    ? selectedDate === day.day
                                        ? 'bg-blue-500 text-white'
                                        : 'text-gray-800 hover:bg-blue-100'
                                    : 'text-gray-400 bg-gray-50'
                            }`}
                        >
                            {day.day}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}