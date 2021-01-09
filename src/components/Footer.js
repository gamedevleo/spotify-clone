import React from 'react';
import '../css/Footer.css';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Slider,Grid} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

export const Footer = ({spotify}) => {
  
  return (
    <div className='footer'>
      <div className='footer_left'>
        <img className='footer_albumLogo' src='' alt='' />
        <div className='footer_songInfo'>
          <h4>Song</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className='footer_center'>
        <ShuffleIcon className='footer_green'/>
        <SkipPreviousIcon  className='footer_icon'/>
        <PlayCircleOutlineIcon className='footer_icon' fontSize='large'/>
        <SkipNextIcon className='footer_icon'/>
        <RepeatIcon className='footer_green'/>
      </div>
      <div className='footer_right'>
        <Grid container spacing={2} >
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby='continuous-slider' />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
