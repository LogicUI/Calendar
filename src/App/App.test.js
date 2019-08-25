import React from 'react';
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

import moment from "moment";


    describe('test for viewing of calendar', () => {
            it('should not be able to see the calendar when the component first load ', () => {
                const currentYear = moment().format("YYYY"); 
                const currentMonth = moment().format("MMMM");
                const {queryByText} = render(<App />)
                expect(queryByText(`${currentMonth} ${currentYear}`)).toBeNull();
            });

            it('should be able to close the calendar when the user click outside the calendar component', () => {
               const currentYear = moment().format("YYYY"); 
                const currentMonth = moment().format("MMMM");
                const {queryByText,getByText } = render(<App/>)
                fireEvent.click(getByText("Select A Date"));
                expect(getByText("Calendar App")).toBeInTheDocument();
                fireEvent.mouseDown(getByText("Calendar App"));
                expect(queryByText(`${currentMonth} ${currentYear}`)).toBeNull();
            });
    });
