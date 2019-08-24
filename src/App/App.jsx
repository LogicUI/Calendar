import React,{useState, useEffect} from 'react'
import "./App.css";
import moment from "moment";
import CalendarMain from "../Calendar/CalendarMain/CalendarMain";



const App = () => {
    const [toggle, toggleHidden] = useState(false);

    const [date, setDate] = useState({
        currentDate: moment(),
        month: moment().format("MMMM"),
        year: moment().format("YYYY"),
        firstDay: parseInt(moment()
        .startOf("month")
        .format("d")),
        daysInMonth: moment().daysInMonth(),
        labelDate:""
    });


    useEffect(() => {
        document.addEventListener("mousedown" , (event) => {
            if(event.target.className === "app"){
                toggleHidden(false)
            }
        })
    })

    const increaseMonth = () => {   
        const temp = date.currentDate;
        temp.add("1","M");
        setDate(prev => {
            return {
                ...prev,
                currentDate:temp,
                month: temp.format("MMMM"),
                year: temp.format("YYYY"),
                firstDay:parseInt(temp.startOf("month").format("d")),
                daysInMonth:temp.daysInMonth()
            }
        })
    }

 
    const decreaseMonth = () => {
        let temp = date.currentDate;
        temp.subtract("1", "M");
        setDate(prev => {
            return {
                ...prev,
                currentDate:temp,
                month: temp.format("MMMM"),
                year: temp.format("YYYY"),
                firstDay: parseInt(temp.startOf("month").format("d")),
                daysInMonth: temp.daysInMonth()
            }
        })
    }

    const changeLabelDate = (day) => {
        const selectedDate = moment(new Date(`${day}/${date.month}/${date.year}`)).format("DD/MM/YYYY");
        setDate(prev => {
            return {
                ...prev,    
                labelDate:selectedDate
            }
        })
    }


    

    return (
        <div className="app" >
            <h1>Calendar App</h1>
            <label onClick={() => toggleHidden(true)} className="app__dateSelector">
            {date.labelDate ? date.labelDate : "Select A Date"}
            </label>
            {toggle && <CalendarMain month={date.month} 
                                     year={date.year}
                                     increase={increaseMonth}
                                     decrease={decreaseMonth} 
                                     firstDay={date.firstDay}  
                                     daysInMonth={date.daysInMonth} 
                                     change={changeLabelDate} />
            }
        </div>
    )
}

export default App
