import React from 'react'
import "./CalendarCell.css";

const CalendarCell = ({date, change, month, year}) => {
    return (
        <div className={date ? "calenderCell"  : ""} onClick={() => change(date,month,year)}>
            {date}
        </div>
    )
}

export default CalendarCell
