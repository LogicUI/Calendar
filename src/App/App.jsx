import React from 'react'
import "./App.css";
import CalendarMain from "../Calendar/CalendarMain/CalendarMain";
import moment from "moment";

const App = () => {
    return (
        <div className="app" >
            <h1>Calendar App</h1>
            <CalendarMain month={moment().format("M")} />
        </div>
    )
}

export default App
