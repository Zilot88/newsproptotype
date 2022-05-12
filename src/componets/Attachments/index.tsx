import React, { useState } from 'react'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Typography from '@mui/material/Typography'

import Item from './Item'
import PaperclipBigIcon from './PaperclipIcon'

const Attachments = () => {
  const [expanded, setExpanded] = useState(false)

  const onRowClick = () => {
    setExpanded(prev => !prev)
  }

  return (
    <>
      <Box
        sx={{
          borderRadius: theme => theme.spacing(0.5),
          p: theme => theme.spacing(1),
          transition: theme =>
            theme.transitions.create('background', {
              duration: theme.transitions.duration.shortest,
            }),
          cursor: 'pointer',
          background: 'rgba(20, 30, 48, 0.1)',
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          gap: theme => `${theme.spacing(2)}px`,
        }}
        onClick={onRowClick}
      >
        <ExpandMore
          sx={{
            transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)',
            transition: theme =>
              theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
              }),
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <PaperclipBigIcon sx={{ mx: theme => theme.spacing(1) }} />
          <Typography variant="subtitle2">Attachments</Typography>
        </Box>
        <Typography variant="subtitle2" sx={{ px: theme => theme.spacing(2) }}>
          {1}
        </Typography>
      </Box>
      <Collapse in={expanded}>
        <Item />
      </Collapse>
    </>
  )
}

export default Attachments
