import { useState } from 'react';
import moment from "moment";


const useLabelDate = (month,year) => {
    
    const [labelDate, setLabelDate] = useState("");

    const changeLabelDate = (day) => {
        const selectedDate = moment(new Date(`${day}/${month}/${year}`)).format("DD/MM/YYYY");
        setLabelDate(selectedDate);
    }

    return [labelDate , changeLabelDate];
}

export default useLabelDate;