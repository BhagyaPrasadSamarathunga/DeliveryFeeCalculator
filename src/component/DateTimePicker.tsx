import React  from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-bootstrap';
import {FaCalendarAlt} from 'react-icons/fa';
import './DateTimePicker.css';

export default function DateTimePicker({onDateTimeChange, selectedDateTime, accessibilityLabel, accessible}:
  {onDateTimeChange:(value:Date)=>void; selectedDateTime:Date; accessibilityLabel: string; accessible: boolean}) {
  return (
    <div className='Date-time-picker'>
      <label className='Date-time-picker-item'>
        <CalendarContainer className='Calendar-container'>
          <div className='Date-picker-container'> 
            <DatePicker 
              wrapperClassName={'Date-picker-wraper'}
              className={'Date-picker'}
              data-testid={'dateTimePicker'}
              selected={selectedDateTime}
              onChange={(date:Date) => onDateTimeChange(date)}
              showTimeSelect
              timeIntervals={15}
              dateFormat="yyyy-MM-dd h:mm"
              aria-label={accessibilityLabel} 
              aria-required={accessible} />
                <span className='Calendar-icon'>
                  <FaCalendarAlt size={20}/>
                </span>
          </div>
        </CalendarContainer>
      </label>
    </div>
  );
}