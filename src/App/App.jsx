import React,{useState} from 'react'
import "./App.css";
import Header from "../Header/Header";

const App = () => {
    return (
        <div className="app">
            <label className="app__dateSelector">Select A date</label>
            <div className="app__calandar">
                <Header />
            </div>
        </div>
    )
}

export default App
