import React from 'react'
import "./CalendarController.css";
import { ReactComponent as LeftArrow } from "../../Svg/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../Svg/right-arrow.svg";
import PropTypes from 'prop-types';


const CalendarController = ({month ,year , increase , decrease}) => {
    return (
        <div className="calendarController ">
            <h1>{month} {year}</h1>
            <div className="calendarButtons">
                <LeftArrow width="20px" height="20px" className="calendarButtons__svgButton"
                onClick={decrease}
                data-testid="leftArrow"
                />
                <RightArrow width="20px" height="20px" className="calendarButtons__svgButton"
                onClick={increase}
                data-testid="rightArrow"
                />
            </div>
        </div>
    )
}

CalendarController.propTypes = {
    month:PropTypes.string.isRequired,
    year: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    increase: PropTypes.func.isRequired,
    decrease: PropTypes.func.isRequired
}


export default CalendarController
