import {
  Grid,
  IconButton,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material'
import React from 'react'

import InfoIcon from './InfoIcon'
import DownloadIcon from './DownloadIcon'
import FileIcon from './FileIcon'
import ListItemButton from '@mui/material/ListItemButton'

const Item = () => {
  return (
    <ListItemButton>
      <ListItemAvatar>
        <FileIcon type={'doc'} />
      </ListItemAvatar>
      <ListItemText>
        <Grid container justifyContent="space-between">
          fileName
        </Grid>
      </ListItemText>
      <ListItemSecondaryAction sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton>
          <InfoIcon sx={{ color: '#2B59C3' }} />
        </IconButton>
        <IconButton>
          <DownloadIcon sx={{ color: '#2B59C3' }} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItemButton>
  )
}

export default Item
