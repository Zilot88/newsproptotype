import * as React from 'react'
import { useMemo } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Collapse from '@mui/material/Collapse'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import format from 'date-fns/format'
import formatDistance from 'date-fns/formatDistance'

import { NewsType } from '../../domain/news'
import Attachments from '../Attachments'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const NewsCard: React.FC<{ data: NewsType | undefined }> = ({
  data,
}) => {
  const [expanded, setExpanded] = React.useState(false)

  const date = useMemo(
    () => new Date(`${data?.publishedAt}`),
    [data?.publishedAt],
  )
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  if (!data || !data?.title) {
    return (
      <Stack spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
    )
  }
  return (
    <Card elevation={2}>
      <CardHeader
        title={data?.title}
        sx={{
          '& .MuiCardHeader-subheader': {
            my: '20px',
          },
        }}
        subheader={
          <>
            {data?.author} • {format(date, 'dd.mm.yyyy')} •{' '}
            {formatDistance(date, new Date(), { addSuffix: true })}
          </>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={data?.urlToImage}
        alt={data?.title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data?.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Attachments />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{data?.content}</CardContent>
        <CardActions>
          <Button size="small" href={data?.url} aria-label="show more">
            Read THE ARTICLE
          </Button>
        </CardActions>
      </Collapse>
    </Card>
  )
}

export default NewsCard
