import React from 'react';
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalendarMain from './CalendarMain';

import moment from "moment";


describe('CalendarMain ', () => {

    describe('test for label  text', () => {
        it('should be able to display the label "select a date" on calendar initial render ', () => {
            const {getByText} = render(<CalendarMain month={8} />)
            expect(getByText("Select A Date")).toBeInTheDocument();
        });    

        it('should be able to populate the label text to 25/08/<current year> when august is passed as props', () => {
          const currentYear = moment().format("YYYY");
          const {getByText} = render(<CalendarMain month={"august"}/>)
          fireEvent.click(getByText("Select A Date"));
          fireEvent.click(getByText("25"));
          expect(getByText(`25/08/${currentYear}`)).toBeInTheDocument();
        });
        
        it('should be able to populate the label text to 25/09/<current year> when august is passed as props and right button is clicked once', () => {
          const currentYear = moment().format("YYYY");
          const {getByText , getByTestId} = render(<CalendarMain month={"august"}/>)
          fireEvent.click(getByText("Select A Date"));
          fireEvent.click(getByTestId("rightArrow"));
          fireEvent.click(getByText("25"));
          expect(getByText(`25/09/${currentYear}`)).toBeInTheDocument();
        });


        it('should be able to populate the label text to 25/10/<current year> when august is passed as props and right button is clicked twice', () => {
            const currentYear = moment().format("YYYY");
            const {getByText , getByTestId } = render(<CalendarMain month={"august"}/>)
            fireEvent.click(getByText("Select A Date"));
            fireEvent.click(getByTestId("rightArrow"));
            fireEvent.click(getByTestId("rightArrow"));
            fireEvent.click(getByText("25"));
            expect(getByText(`25/10/${currentYear}`)).toBeInTheDocument();
        });

        it('should be able to populate the label text to 25/07/<current year> when august is passed as a props and left button is clicked once', () => {
            const currentYear = moment().format("YYYY");
            const {getByText , getByTestId} = render(<CalendarMain month={"august"}/>)
            fireEvent.click(getByText("Select A Date"));
            fireEvent.click(getByTestId("leftArrow"));
            fireEvent.click(getByText("25"));
            expect(getByText(`25/07/${currentYear}`)).toBeInTheDocument();
        });

        it('should be able to populate to label text to 25/06/<current year> when august is passed as a props and left button is clicked twice ', () => {
            const currentYear = moment().format("YYYY");
            const {getByText , getByTestId} = render(<CalendarMain month={"august"}/>)
            fireEvent.click(getByText("Select A Date"));
            fireEvent.click(getByTestId("leftArrow"));
            fireEvent.click(getByTestId("leftArrow"));
            fireEvent.click(getByText("25"));
            expect(getByText(`25/06/${currentYear}`)).toBeInTheDocument();
        });
    });


    describe('test for initial month props', () => {
       it('should be able to display the calendar with the right month august "august" is passed as the initial prop ', () => {
         const currentYear = moment().format("YYYY");
         const {getByText} = render(<CalendarMain month={8}/>)
         fireEvent.click(getByText("Select A Date"));
         expect(getByText(`August ${currentYear}`)).toBeInTheDocument();
       });

       it('should be able to display the calendar of july when "july" is passed as the initial props ', () => {
           const currentYear = moment().format("YYYY");
           const {getByText} = render(<CalendarMain month={"july"}/>)
           fireEvent.click(getByText("Select A Date"));
           expect(getByText(`July ${currentYear}`)).toBeInTheDocument();
       });

       it('should be able the display the calendar of july when 7 is passed as the inital props', () => {
            const currentYear = moment().format("YYYY");
            const {getByText} = render(<CalendarMain month={7} />)
            fireEvent.click(getByText("Select A Date"));
            expect(getByText(`July ${currentYear}`)).toBeInTheDocument();
       });
    });

    describe('testing of calendar controller', () => {

        describe('viewing of arrow buttons', () => {
          it('should be able to see the right arrow button when the calendar dropdown is shown', () => {
             const {getByText, getByTestId} = render(<CalendarMain month={moment("2019-08-22").format("M")}/>)
             fireEvent.click(getByText("Select A Date"));
             expect(getByTestId("rightArrow")).toBeInTheDocument();
          });

          it('should be able to see the left arrow button when the calendar dropdown is shown', () => {
            const {getByText, getByTestId} = render(<CalendarMain month={moment("2019-08-22").format("M")}/>)
            fireEvent.click(getByText("Select A Date"));
            expect(getByTestId("leftArrow")).toBeInTheDocument();
          });
        });

        describe('testing of arrow function functionality', () => {
            it('should be able to increment the month to september when august is passed as a prop and the right button is clicked once', () => {
                const currentYear = moment().format("YYYY");
                const {getByText , getByTestId , queryByText} = render(<CalendarMain month={"august"} />)
                fireEvent.click(getByText("Select A Date"));
                fireEvent.click(getByTestId("rightArrow"));
                expect(getByText(`September ${currentYear}`)).toBeInTheDocument();
                expect(queryByText(`August ${currentYear}`)).toBeNull();
            });

             it('should be able to increment the month to october when august is passed as a prop and the right button is clicked twice', () => {
                const currentYear = moment().format("YYYY");
                const {getByText , getByTestId , queryByText} = render(<CalendarMain month={"august"} />)
                fireEvent.click(getByText("Select A Date"));
                fireEvent.click(getByTestId("rightArrow"));
                fireEvent.click(getByTestId("rightArrow"));
                expect(getByText(`October ${currentYear}`)).toBeInTheDocument();
                expect(queryByText(`August ${currentYear}`)).toBeNull();
            });

            it('should be able to decrease the month to july when august is passed as a prop and the left button is clicked once', () => {
                const currentYear = moment().format("YYYY");
                const {getByText, getByTestId, queryByText} = render(<CalendarMain month={"august"}/>)
                fireEvent.click(getByText("Select A Date"));
                fireEvent.click(getByTestId("leftArrow"));
                expect(getByText(`July ${currentYear}`)).toBeInTheDocument();
                expect(queryByText(`August ${currentYear}`)).toBeNull();
            });

           it('should be able to decrease the month to june when august is passed as a prop and the left button is clicked twice', () => {
                const currentYear = moment().format("YYYY");
                const {getByText, getByTestId, queryByText} = render(<CalendarMain month={"august"}/>)
                fireEvent.click(getByText("Select A Date"));
                fireEvent.click(getByTestId("leftArrow"));
                fireEvent.click(getByTestId("leftArrow"));
                expect(getByText(`June ${currentYear}`)).toBeInTheDocument();
                expect(queryByText(`August ${currentYear}`)).toBeNull();
            });

            it('should be able to increase the month to January when December is passed as a prop and right button is clicked once ', () => {
                const currentYear = moment().format("YYYY");
                const followingYear = parseInt(moment().format("YYYY")) + 1;
                const {getByText, getByTestId, queryByText} = render(<CalendarMain month={"december"}/>)
                fireEvent.click(getByText("Select A Date"));
                fireEvent.click(getByTestId("rightArrow"));
                expect(getByText(`January ${followingYear}`)).toBeInTheDocument();
                expect(queryByText(`December ${currentYear}`)).toBeNull();
            });

            it('should be able to decrease the month to December when January is passed as a prop and the left button is clicked once', () => {
                const currentYear = moment().format("YYYY");
                const previousYear = parseInt(moment().format("YYYY")) - 1;
                const {getByText , getByTestId , queryByText} = render(<CalendarMain month={"january"} />)
                fireEvent.click(getByText("Select A Date"));
                fireEvent.click(getByTestId("leftArrow"));
                expect(getByText(`December ${previousYear}`)).toBeInTheDocument();
                expect(queryByText(`January ${currentYear}`)).toBeNull();
            });

        });


    });






    
});