
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export function DateInput({selectedDate, changeDate, placeholderText, id, minDate}) {
    return (
        <>  
            <label>
                <span className="hidden">{placeholderText}</span>

                <DatePicker
                    selected={selectedDate}
                    minDate={minDate}
                    maxDate={new Date()}
                    onChange={(date) => changeDate(date, id)}
                    dateFormat="MMMM yyyy"
                    showMonthYearPicker
                    placeholderText={placeholderText}
                    isClearable
                    className="input"
                />
            </label>
        </>
    )
}