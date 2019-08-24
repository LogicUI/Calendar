import { useState, useEffect } from 'react';

const useToggleCalendar = () => {
  const [toggle, toggleHidden] = useState(false);

   const toggleHiddenCalendar = (event) => {
        if (event.target.className === "app") {
            toggleHidden(false)
        }
   }

   useEffect(() => {
        document.addEventListener("mousedown", toggleHiddenCalendar );
        return () => document.removeEventListener("mousedown", toggleHiddenCalendar);
    })

   return [toggle , toggleHidden];
}

export default useToggleCalendar;