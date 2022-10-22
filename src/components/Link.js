import React from 'react'

const Link = ({name, link, id}) => {
  return (
    <div className='link'>
        <a id={id} href={link}>{name}</a>
    </div>
  )
}

export default Link