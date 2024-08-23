import React, { useState } from 'react';

const Calendar = ({isCalOpen}) => {
  const DaysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const Months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const showMonth = (year, month) => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDateOfLastMonth = month === 0 ? new Date(year - 1, 11, 0).getDate() : new Date(year, month, 0).getDate();

    const days = [];
    let day = 1;

    // Add days from the previous month
    if (firstDayOfMonth > 0) {
      for (let i = lastDateOfLastMonth - firstDayOfMonth + 1; i <= lastDateOfLastMonth; i++) {
        days.push(
          <td key={`prev-${i}`} className="text-gray-400 px-3 py-2 rounded-lg">{i}</td>
        );
      }
    }

    // Add days of the current month
    for (; day <= lastDateOfMonth; day++) {
      const isToday = year === today.getFullYear() && month === today.getMonth() && day === today.getDate();
      days.push(
        <td key={`current-${day}`} className={`${
          isToday ? 'bg-blue-600 text-white font-bold' : 'hover:bg-blue-100 text-gray-900'
        } px-3 py-2 rounded-lg cursor-pointer transition-colors`}>
          {day}
        </td>
      );
    }

    // Add empty cells for the next month
    const remainingCells = 7 - (days.length % 7);
    if (remainingCells < 7) {
      for (let i = 0; i < remainingCells; i++) {
        days.push(<td key={`empty-${i}`} className="text-transparent px-3 py-2">-</td>);
      }
    }

    // Split into rows
    const rows = [];
    for (let i = 0; i < days.length; i += 7) {
      rows.push(
        <tr key={`tr-${i}`} className="space-y-2">
          {days.slice(i, i + 7)}
        </tr>
      );
    }

    return rows;
  };

  return (
    <div className={`transition-all absolute w-80 h-auto bg-white shadow-xl bottom-14 rounded-lg p-5 border border-gray-200 ${isCalOpen ? 'right-2' : 'translate-x-full right-0'}`}>
      <div className="flex justify-between items-center mb-4">
        <button
          id="btnPrev"
          onClick={previousMonth}
          className="text-2xl text-gray-500 hover:text-blue-600 transition-colors"
        >
          &lt;
        </button>
        <span className="font-bold text-xl text-gray-800">
          {Months[currentMonth]} {currentYear}
        </span>
        <button
          id="btnNext"
          onClick={nextMonth}
          className="text-2xl text-gray-500 hover:text-blue-600 transition-colors"
        >
          &gt;
        </button>
      </div>
      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {DaysOfWeek.map((day) => (
              <th
                key={day}
                className="text-center font-semibold text-sm text-gray-700 py-2"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-center text-sm">
          {showMonth(currentYear, currentMonth)}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
