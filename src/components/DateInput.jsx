
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export function DateInput({selectedDate, changeDate, placeholderText, id, minDate}) {
    return (
        <>  
            <label>
                <span>{placeholderText}</span>

                <DatePicker
                    selected={selectedDate}
                    minDate={minDate}
                    maxDate={new Date()}
                    onChange={(date) => changeDate(date, id)}
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    showIcon
                    placeholderText={placeholderText}
                    isClearable
                />
            </label>
        </>
    )
}