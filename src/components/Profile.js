import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import pic from '../img/profile.jpg'
import desktop from '../img/desktop.svg'
import mobile from '../img/mobile.svg'


function Profile() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <section className='profile full-width flex column align-center'>
      <img src={pic} alt="profile pic" />
      <p id='twitter'>@ronniiii_i</p>
      <p id="slack">Roni</p>
      <img className='share desktop' src={desktop} alt="share profile" />
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              arrow
              placement="bottom-start"
              title={
                <a style={{fontSize: '14px', color: 'white'}}>Share Profile</a>
              }
            >
              <img className='share mobile' src={mobile} alt="share profile" onClick={handleTooltipOpen} />
            </Tooltip>
          </div>
        </ClickAwayListener>
    </section>
  )
}

export default Profile