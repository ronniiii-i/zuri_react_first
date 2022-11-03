import React from 'react'
import Tooltip from '@mui/material/Tooltip';

const Link = ({ name, link, id, title }) => {
  return (
    <div className='link full-width'>
      <Tooltip title={title} arrow>
        <a id={id} href={link} className='full-width'>{name}</a>
      </Tooltip>
    </div>
  )
}

export default Link