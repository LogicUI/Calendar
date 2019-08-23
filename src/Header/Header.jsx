import React from 'react'
import moment from "moment";
import "./Header.css";

const Header = () => {
    
    return (
        <div className="header">
            {
                moment.weekdaysShort().map(day => {
                    return (
                        <div>
                            {day}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Header
