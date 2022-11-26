import React from 'react'
import "./footer.css"
import ShuffleRoundedIcon from '@mui/icons-material/ShuffleRounded';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid,Slider } from '@mui/material';




function Footer() {
  return (
    <div className='footer'>
      <div className='footer__left'>
      <img className='footer__image'  src='./Ceazer.jpg'/>
        <div className='footer__songInfo'>
          <h4>Album name</h4>
          <p>Song Info</p>
          </div>
      </div>
      <div className='footer__center'>
        <ShuffleRoundedIcon className='footer_green'/>
        <SkipNextRoundedIcon className='footer_icon'/>
        <PlayCircleFilledIcon fontsize="large" className='footer_icon'/>
        <SkipPreviousRoundedIcon className='footer_icon'/>
        <RepeatIcon className='footer_icon'/>
 
        
      </div>
      <div className='footer__right'>
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default Footer