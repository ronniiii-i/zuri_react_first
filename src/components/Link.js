import React from 'react'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const Link = ({ name, link, id }) => {
  return (
    <div className='link full-width'>
      <Tooltip title="Add" arrow>
        <a id={id} href={link} className='full-width'>{name}</a>
      </Tooltip>
    </div>
  )
}

export default Link