import React from 'react';
import '../css/Body.css';
import {Header} from './Header';
import {SongRow} from './SongRow';
import {useStateValue} from '../redux/StateProvider';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export const Body = ({spotify}) => {
  const [{discover_weekly},dispatch] = useStateValue();


  return (
    <div className='body'>
      <Header spotify={spotify}/>
      <div className='body_info'>
        <img src={discover_weekly?.images[0].url} alt='' />
        <div className='body_infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilledIcon className='body_shuffle'/>
          <FavoriteIcon fontSize='large'/>
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map(item=>(
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  )
}
