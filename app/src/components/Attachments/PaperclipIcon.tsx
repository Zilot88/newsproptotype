import * as React from 'react'
import Box from '@mui/material/Box'
import { pink } from '@mui/material/colors'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

function PaperclipIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="17"
      height="18"
      viewBox="0 0 17 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity="0.5"
        d="M16.09 8.5008L8.95579 15.635C7.1358 17.455 4.185 17.455 2.365 15.635C0.545 13.815 0.545 10.8642 2.365 9.04421L9.4992 1.91C10.7125 0.696667 12.6797 0.696667 13.8931 1.91C15.1064 3.12333 15.1064 5.09053 13.8931 6.30386L6.7511 13.4381C6.14443 14.0447 5.16083 14.0447 4.55417 13.4381C3.9475 12.8314 3.9475 11.8478 4.55417 11.2411L11.145 4.6581"
        stroke="#141E30"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default PaperclipIcon
