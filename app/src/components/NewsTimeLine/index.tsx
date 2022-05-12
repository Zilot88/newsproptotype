import * as React from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import eachYearOfInterval from 'date-fns/eachYearOfInterval'
import getYear from 'date-fns/getYear'
import format from 'date-fns/format'

import MounthLine from '../MounthLine'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

const minDate = new Date('2016-01-01T00:00:00.000')
const maxDate = new Date()

const timeLineRange = eachYearOfInterval({
  start: minDate,
  end: maxDate,
})
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '& > .MuiButtonBase-root': {
    minHeight: '26px',
  },
  '& .MuiButtonBase-root:hover': {
    backgroundColor: '#141E3019',
  },
  '& > .Mui-expanded': {
    backgroundColor: '#141E3019',
  },
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginTop: '4px',
    marginBottom: '4px',
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

function NewsTimeLine() {
  const [expanded, setExpanded] = React.useState<Date | number>(
    getYear(new Date()),
  )
  const handleChange =
    (panel: Date | number) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      console.log(newExpanded, panel)
      setExpanded(panel)
    }
  return (
    <Card style={{ minWidth: 300, display: 'block' }}>
      <CardHeader
        title={
          <Typography
            sx={{
              fontSize: '14px',
              color: 'rgba(20, 30, 48, 0.5)',
            }}
          >
            News timeline
          </Typography>
        }
      />
      {timeLineRange.map((year, index) => {
        return (
          <Accordion
            key={index}
            expanded={expanded === getYear(year)}
            onChange={handleChange(year)}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography>{format(year, 'YYY')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MounthLine />
            </AccordionDetails>
          </Accordion>
        )
      })}
    </Card>
  )
}

export default NewsTimeLine
