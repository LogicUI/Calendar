import React from 'react'
import moment from "moment";
import "./CalendarDayName.css";

const CalendarDayName = () => {
    
    return (
        <div className="header">
            {
                moment.weekdaysShort().map((day,index ) => {
                    return (
                        <div key={index} className="day">
                            {day}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CalendarDayName
