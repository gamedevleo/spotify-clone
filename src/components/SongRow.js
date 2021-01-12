import React from 'react';
import '../css/SongRow.css';

export const SongRow = ({track,spotify}) => {

  const handle=()=>{
    spotify.play(track).catch(err=>{
      alert(err.response);
    });
  }

  return (
    <div className='songRow'>
      <img className='songRow_album' src={track.album.images[0].url} alt=''/>
      <div className='songRow_info'>
        <h1 onClick={handle}>{track.name}</h1>
        <p>
          {track.artists.map(artist=>artist.name).join(',')}
          {track.album.name}
        </p>
      </div>
    </div>
  )
}
