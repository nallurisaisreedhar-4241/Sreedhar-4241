// import * as React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function BasicDatePicker() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DatePicker']}>
//         <DatePicker/>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import './DatePickerStyles.css';


export default function DateRangePicker() {
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
    // If the new start date is greater than the end date, update end date to the new start date
    if (newValue.isAfter(endDate)) {
      setEndDate(newValue);
    }
  };

  const handleEndDateChange = (newValue) => {
    // Validate that the end date is not less than the start date
    if (newValue.isBefore(startDate)) {
      console.warn('End date must not be less than the start date');
      return; // Prevent the state from being updated
    }
    setEndDate(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker', 'DatePicker']}>
      <div className="date-picker-container">
  <DatePicker
    label="Start Date"
    value={startDate}
    onChange={handleStartDateChange}
  />
  <DatePicker
    label="End Date"
    value={endDate}
    onChange={handleEndDateChange}
    minDate={startDate}
  />
</div>
      </DemoContainer>
    </LocalizationProvider>
  );
}
