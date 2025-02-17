import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Make sure to import the calendar's CSS

export const CalendarFields = ({ setDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");

  // Generate available times for display
  const generateTimes = () => {
    const times = [];
    for (let hour = 9; hour < 18; hour++) {
      times.push(`${hour}:00 AM`);
      times.push(`${hour}:30 AM`);
    }
    return times;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const timestamp = `${date.toISOString().split("T")[0]} ${selectedTime}`;
    setDate(timestamp); // Pass the formatted date and time to parent
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    const timestamp = `${selectedDate.toISOString().split("T")[0]} ${time}`;
    setDate(timestamp); // Pass the formatted date and time to parent
  };

  const times = generateTimes();

  return (
    <div className="w-full flex flex-col md:flex-row items-start sm:items-center md:items-start justify-center overflow-scroll">
      {/* Calendar Section */}
      <div className="mr-6">
        <h2 className="text-lg font-semibold mb-3">Select a Date</h2>
        <div className="sm:w-auto w-full">
          <Calendar
            onChange={handleDateChange}
            value={selectedDate}
            style={{
              width: "100%", // Make the calendar take full width on small screens
              maxWidth: "350px", // Limit the width for larger screens
            }}
          />
        </div>
      </div>

      {/* Time Selector Section */}
      <div className="flex-1 mt-4 md:mt-0">
        <h2 className="text-lg font-semibold mb-3">Select a Time</h2>
        <div className="h-[400px] overflow-y-scroll bg-white rounded-md shadow-sm p-4">
          {times.map((time, index) => (
            <button
              key={index}
              onClick={() => handleTimeClick(time)}
              className={`block w-full text-left px-4 py-2 mb-2 rounded-md ${
                selectedTime === time
                  ? "bg-green-500 text-white font-bold"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
