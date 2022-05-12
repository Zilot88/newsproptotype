import * as React from 'react'
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

function InfoIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13L9 10L9 13Z"
        fill="white"
      />
      <path
        d="M9 13L9 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 7L9 6L9 7Z"
        fill="white"
      />
      <path
        d="M9 7L9 6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default InfoIcon
