import React from 'react'
import moment from "moment";
import "./Header.css";

const Header = () => {
    
    return (
        <div className="header">
            {
                moment.weekdaysShort().map((day,index ) => {
                    return (
                        <div key={index}>
                            {day}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Header
