import React from 'react';
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalendarMain from './CalendarMain';
import mockdate from "mockdate";
import moment from "moment";


describe('CalendarMain ', () => {

    beforeEach(() => {
        mockdate.set(moment(new Date('2019-08-22')));
    })

    afterEach(() => {
        mockdate.reset();
    })

    it('should be able to diplay the label select a date on initial render ', () => {
        const {getByText} = render(<CalendarMain />)
        expect(getByText("Select A Date")).toBeInTheDocument();
    });    

    it('should be able to display the calendar when clicking on the label ', () => {
         const {getByText} = render(<CalendarMain />)
         fireEvent.click(getByText("Select A Date"));
         expect(getByText("August 2019")).toBeInTheDocument();
    });

    
});