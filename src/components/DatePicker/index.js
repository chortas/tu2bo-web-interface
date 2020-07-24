import React from 'react';
import { MuiPickersUtilsProvider, DateTimePicker } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { ThemeProvider } from '@material-ui/styles';
import { DATE_FORMAT } from 'utils/date';
import { defaultMaterialTheme } from './styles';

export default function DatePicker({ setDate, dateSelected }) {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={defaultMaterialTheme}>
        <DateTimePicker
          disableFuture
          value={dateSelected}
          ampm={false}
          onChange={(date) => {
            setDate(date.format(DATE_FORMAT));
          }}
          format={DATE_FORMAT}
        />
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}
