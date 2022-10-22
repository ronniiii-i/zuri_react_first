import React from 'react'
import pic from '../img/profile.jpg'


function Profile () {
  return (
    <section className='profile'>
        <img src={pic} alt="profile pic" />
        <p id='twitter'>Roni</p>
        <p id="slack">Roni</p>
    </section>
  )
}

export default Profile