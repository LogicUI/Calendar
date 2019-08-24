import React from 'react'
import CalendarCell from "../CalendarCell/CalendarCell";
import "./CalendarDateDays.css";
import uniqid from "uniqid";

const  CalendarDate = ({firstDay,daysInMonth,change}) => {

    const getCellsRenderedForMonth = () => {
        const totalDatesInMonth = [];

        for (let blank = 0; blank < firstDay; blank++) {
            totalDatesInMonth.push(<CalendarCell key={uniqid()}/>)
        }

        for (let day = 1; day <= daysInMonth; day++) {
            totalDatesInMonth.push(<CalendarCell change={change} key={uniqid()} date={day} />)
        }
        return totalDatesInMonth;
    }

    return (
        <div className="CalendarDateDays">
            {
                getCellsRenderedForMonth().map(cell => {
                    return cell;
                })
            }
        </div>
    )
}

export default CalendarDate
