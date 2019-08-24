import React from 'react'
import "./CalendarCell.css";

const CalendarCell = ({date, change}) => {
    return (
        <div className={date ? "calenderCell"  : ""} onClick={() => change(date)}>
            {date}
        </div>
    )
}

export default CalendarCell
