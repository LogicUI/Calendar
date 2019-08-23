import React from 'react'
import "./MonthYear.css";
const MonthYear = ({month ,year}) => {
    return (
        <div className="monthYear">
            <h1>{month}</h1>
            <h1>{year}</h1>
        </div>
    )
}

export default MonthYear
