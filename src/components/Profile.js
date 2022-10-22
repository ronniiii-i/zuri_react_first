import React from 'react'
import pic from '../img/profile.jpg'


function Profile () {
  return (
    <div>
        <img src={pic} alt="profile pic" />
        <p id='twitter'>Roni</p>
        <p id="slack">Roni</p>
    </div>
  )
}

export default Profile