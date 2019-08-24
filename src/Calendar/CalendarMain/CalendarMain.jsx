import React from 'react'
import "./CalendarMain.css"
import CalendarDayName from "../CalendarDayName/CalendarDayName";
import CalendarController from "../CalendarController/CalendarController";
import CalendarDateDays from "../CalendarDateDays/CalendarDateDays";

const CalendarMain = ({month, year , increase , decrease, firstDay ,daysInMonth, change}) => {
    return (
        <div className="calendarMain">
            <CalendarController month={month} year={year} increase={increase} decrease={decrease} />
            <CalendarDayName />
            <CalendarDateDays firstDay={firstDay} daysInMonth={daysInMonth} change={change} />
        </div>
    )
}

export default CalendarMain
