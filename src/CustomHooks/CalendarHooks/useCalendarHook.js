import { useState } from 'react';
import moment from "moment";




const useCalendarHook = (month) => {


    const getDate = () => {
        const day = moment().format("D");
        const year = moment().format("YYYY");
        return moment(new Date(`${year}/${month}/${day}`));
    }


    const [date, setDate] = useState({
        currentDate: getDate(),
        month: getDate().format("MMMM"),
        year: getDate().format("YYYY"),
        firstDay: parseInt(getDate()
            .startOf("month")
            .format("d")),
        daysInMonth: getDate().daysInMonth()
    });


    const increaseMonth = () => {
        const temp = date.currentDate;
        temp.add("1", "M");
        setDate(prev => {
            return {
                ...prev,
                currentDate: temp,
                month: temp.format("MMMM"),
                year: temp.format("YYYY"),
                firstDay: parseInt(temp.startOf("month").format("d")),
                daysInMonth: temp.daysInMonth()
            }
        })
    }


    const decreaseMonth = () => {
        let temp = date.currentDate;
        temp.subtract("1", "M");
        setDate(prev => {
            return {
                ...prev,
                currentDate: temp,
                month: temp.format("MMMM"),
                year: temp.format("YYYY"),
                firstDay: parseInt(temp.startOf("month").format("d")),
                daysInMonth: temp.daysInMonth()
            }
        })
    }

    return [date, decreaseMonth , increaseMonth] 

}

export default useCalendarHook;

