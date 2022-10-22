import React from 'react'
import zuri from '../img/zuri.png'
import I4G from '../img/I4G.png'

function Footer() {
  return (
    <footer className='full-width flex row justify-between align-center'>
      <img src={zuri} alt="Zuri Internship" />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt="Ingressive 4 Good" />
    </footer>
  )
}

export default Footer