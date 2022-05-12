import * as React from 'react'
import Box from '@mui/material/Box'
import { pink } from '@mui/material/colors'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

function DownloadIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 13V15.4C1 16.2837 1.71634 17 2.6 17H13.8C14.6837 17 15.4 16.2837 15.4 15.4V13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M5 9L8.2 12.2L11.4 9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.2002 1V12.2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default DownloadIcon
