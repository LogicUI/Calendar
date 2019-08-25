import { useState, useEffect , useRef} from 'react';

const useToggleCalendar = () => {
  const [toggle, showCalendar] = useState(false);
   const calendarRef = useRef();

   const toggleHiddenCalendar = (event) => {
    if(calendarRef.current && !calendarRef.current.contains(event.target)){
        showCalendar(false);
    }
   }
   useEffect(() => {
        document.addEventListener("mousedown", toggleHiddenCalendar );
        return () => document.removeEventListener("mousedown", toggleHiddenCalendar);
    })

   return [toggle , showCalendar ,calendarRef];
}

export default useToggleCalendar;