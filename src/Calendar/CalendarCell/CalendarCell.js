import React from 'react'
import "./CalendarCell.css";

function CellContainer({date, change}) {
    return (
        <div className={date ? "calenderCell"  : ""} onClick={() => change(date)}>
            {date}
        </div>
    )
}

export default CellContainer
