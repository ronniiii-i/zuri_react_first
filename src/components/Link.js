import React from 'react'

const Link = ({name, link, id}) => {
  return (
    <div className='link full-width'>
        <a id={id} href={link} className='full-width'>{name}</a>
    </div>
  )
}

export default Link