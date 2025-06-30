import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useState } from 'react';

export default function CustomDatePicker() {
  const [value, setValue] = useState(dayjs('2024-06-24'));

  return (
    <div className="flex justify-center p-4 ">
      <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={value}
            onChange={(newValue) => setValue(newValue)}
            sx={{
              '& .MuiPickersDay-root.Mui-selected': {
                backgroundColor: '#0f172a !important',
              },
              '& .MuiPickersCalendarHeader-label': {
                fontSize: '16px',
                fontWeight: '600',
              },
              '& .MuiPickersDay-root': {
                fontWeight: '500',
              },
            }}
          />
        </LocalizationProvider>
        <div className="flex justify-between items-center px-4 py-2 text-sm font-medium">
          <button className="text-gray-500 hover:underline">Cancel</button>
          <button className="text-blue-800 hover:underline">OK</button>
        </div>
      </div>
    </div>
  );
}
