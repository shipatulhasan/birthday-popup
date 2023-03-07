import React, { useEffect, useState } from "react";
import { getDays, getYears } from "./getDates";

const DateSelect = ({handleSubmit}) => {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = getYears();
  const days = getDays(selectedMonth, selectedYear);

  return (
    <div className="text-center w-1/2 md:w-full lg:w-9/12 xl:w-1/2 mx-auto space-y-5 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="flex flex-col justify-center items-center ">
          <label className="label">YYYY</label>
          <select
            name="year"
            className="py-2 px-3 border border-slate-400 rounded bg-transparent  focus:outline-none placeholder:text-slate-900 hover:cursor-pointer"
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="" disabled selected>
              Year
            </option>
            {years.map((year, i) => (
              <option key={i}>{year}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="label ">MM</label>
          <select
            name="month"
            onChange={(e) => setSelectedMonth(e.target.value)}
            disabled={selectedYear === "" ? true : false}
            className="py-2 px-3 border border-slate-400 rounded bg-transparent  focus:outline-none placeholder:text-slate-900 hover:cursor-pointer disabled:pointer-events-none"
          >
            <option value="" disabled selected>
              month
            </option>
            {months.map((mm, i) => (
              <option key={i}>{mm}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <label className="label ">DD</label>
          <select
            name="day"
            onChange={(e) => setSelectedDay(e.target.value)}
            disabled={
              selectedYear === "" || selectedMonth === "" ? true : false
            }
            className="py-2 px-3 border border-slate-400 rounded bg-transparent  focus:outline-none placeholder:text-slate-900 hover:cursor-pointer disabled:pointer-events-none"
          >
            <option value="" disabled selected>
              date
            </option>
            {days.map((day, i) => (
              <option key={i}>{day}</option>
            ))}
          </select>
        </div>
      </div>
      <button
        className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-800 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-lg sm:text-xl"
        type="button"
        onClick={() => handleSubmit(selectedYear,selectedMonth,selectedDay)}
      >
        Submit
      </button>
    </div>
  );
};

export default DateSelect;
