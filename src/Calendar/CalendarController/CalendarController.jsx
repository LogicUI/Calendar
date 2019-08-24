import React from 'react'
import "./CalendarController.css";
import { ReactComponent as LeftArrow } from "../../Svg/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../Svg/right-arrow.svg";
const CalendarController = ({month ,year , increase , decrease}) => {
    return (
        <div className="calendarController ">
            <h1>{month} {year}</h1>
            <div className="calendarButtons">
                <LeftArrow width="20px" height="20px" className="calendarButtons__svgButton"
                onClick={decrease}
                />
                <RightArrow width="20px" height="20px" className="calendarButtons__svgButton"
                onClick={increase}
                />
            </div>
        </div>
    )
}

export default CalendarController
