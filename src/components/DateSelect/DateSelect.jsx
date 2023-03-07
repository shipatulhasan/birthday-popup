import React, { useEffect, useState } from "react";
import { getDays, getYears } from "./getDates";

const DateSelect = ({ handleSubmit }) => {
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
    <form
      onSubmit={(e) =>
        handleSubmit(selectedYear, selectedMonth, selectedDay, e)
      }
      className="text-center w-1/2 md:w-3/4 lg:w-3/4 mx-auto mt-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="flex flex-col justify-center items-center">
          <label className="text-xl font-bold text-gray-800">YYYY</label>
          <div className="border border-slate-400 rounded px-2 w-auto">
            <select
              name="year"
              className="py-2 w-full px-3 bg-transparent focus:outline-none placeholder:text-slate-900 hover:cursor-pointer"
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="" disabled selected>
                year
              </option>
              {years.map((year, i) => (
                <option key={i}>{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="text-xl font-bold text-gray-800">MM</label>
          <div className="border border-slate-400 rounded px-2 w-auto">
            <select
              name="month"
              onChange={(e) => setSelectedMonth(e.target.value)}
              disabled={selectedYear === "" ? true : false}
              className="py-2 px-3 bg-transparent w-full focus:outline-none placeholder:text-slate-900 hover:cursor-pointer disabled:pointer-events-none"
            >
              <option value="" disabled selected>
                month
              </option>
              {months.map((mm, i) => (
                <option key={i}>{mm}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <label className="text-xl font-bold text-gray-800">DD</label>
          <div className="border border-slate-400 rounded px-2 w-auto">
            <select
              name="day"
              onChange={(e) => setSelectedDay(e.target.value)}
              disabled={
                selectedYear === "" || selectedMonth === "" ? true : false
              }
              className="py-2 px-3 bg-transparent w-full focus:outline-none placeholder:text-slate-900 hover:cursor-pointer disabled:pointer-events-none"
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
      </div>
      <button
        className="py-3 disabled:bg-gray-300 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-800 bg-indigo-700 rounded text-white px-4 sm:px-8 text-lg sm:text-xl"
        type="submit"
        disabled={
          selectedYear === "" || selectedMonth === "" || selectedDay === ""
            ? true
            : false
        }
      >
        Submit
      </button>
    </form>
  );
};

export default DateSelect;
