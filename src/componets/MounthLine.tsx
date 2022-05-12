import * as React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MonthPicker } from '@mui/x-date-pickers/MonthPicker'

const minDate = new Date('2020-01-01T00:00:00.000')
const maxDate = new Date('2034-01-01T00:00:00.000')

export default function MounthLine() {
  const [date, setDate] = React.useState<Date | null>(new Date())
  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      dateFormats={{ monthShort: 'LLLL' }}
    >
      <MonthPicker
        sx={{
          display: 'flex',
          flex: 1,
          width: '100%',
          p: 0,
          flexDirection: 'column',
          '& .PrivatePickersMonth-root': {
            width: '100%',
            textAlign: 'right',
            margin: '0px 0px',
            height: '28px',
            paddingLeft: '20%',
            borderRadius: 0,
            justifyContent: 'flex-start',
          },
          '& .MuiTypography-root + .Mui-selected': {
            color: theme => theme.palette.text.primary,
            backgroundColor: '#141e300d',
            '&:focus': {
              backgroundColor: '#141e320d',
            },
            '&:hover': {
              backgroundColor: '#141e320d',
            },
          },
        }}
        date={date}
        minDate={minDate}
        maxDate={maxDate}
        onChange={newDate => setDate(newDate)}
      />
    </LocalizationProvider>
  )
}
