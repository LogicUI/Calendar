import React,{useState} from 'react'
import "./App.css";
import Header from "../Header/Header";
import moment from "moment";
import MonthYear from "../MonthYear/MonthYear";

const App = () => {
    const today = moment(new Date()).format("MMMM");
    const year = moment(new Date()).format("YYYY");
    return (
        <div className="app">
            <label className="app__dateSelector">Select A date</label>
            <div className="app__calandar">
                <MonthYear month={today} year={year} />
                <Header />
            </div>
        </div>
    )
}

export default App
