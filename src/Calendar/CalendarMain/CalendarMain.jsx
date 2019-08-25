import React , { Fragment } from 'react'
import "./CalendarMain.css"
import CalendarDayName from "../CalendarDayName/CalendarDayName";
import CalendarController from "../CalendarController/CalendarController";
import CalendarDateDays from "../CalendarDateDays/CalendarDateDays";
import useToggleCalendar from "../../CustomHooks/CalendarHooks/useToggleCalendar";
import useLabelDate from "../../CustomHooks/CalendarHooks/useLabelDate";
import useCalendarHook from "../../CustomHooks/CalendarHooks/useCalendarHook";
import PropTypes from 'prop-types';


const CalendarMain = ({month}) => {

    const [date, decreaseMonth, increaseMonth] = useCalendarHook(month);

    const [toggle, showCalendar, calendarRef] = useToggleCalendar();

    const [labelDate, changeLabelDate] = useLabelDate(date.month,date.year);




    return (
    <Fragment>
       < label onClick = {() => showCalendar(true)} className = "dateSelectorLabel" >
         { labelDate? labelDate: "Select A Date" }
      </label >
     {toggle && <div className="calendarMain" ref={calendarRef}>
            <CalendarController month={date.month} year={date.year} increase={increaseMonth} decrease={decreaseMonth} />
            <CalendarDayName />
           <CalendarDateDays firstDay={date.firstDay} daysInMonth={date.daysInMonth} change={changeLabelDate} />
    </div> }
   </Fragment>
    )
}

CalendarMain.propTypes = {
    month: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
}

export default CalendarMain
