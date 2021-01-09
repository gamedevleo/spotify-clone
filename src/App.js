import React,{useEffect} from 'react';
import './App.css';
import {Login} from './components/Login';
import {Player} from './components/Player';
import {getTokecFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import {useStateValue} from './redux/StateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{user,token,playlists},dispatch] = useStateValue();

  useEffect(()=>{
    const hash = getTokecFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type:'SET_TOKEN',
        token:_token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then(user=>{
        dispatch({
          type:'SET_USER',
          user:user
        });
      });

      spotify.getUserPlaylists().then( playlists=>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists
        });
      })
    }
  },[dispatch,user,playlists,token]);

  useEffect(()=>{
    spotify.getPlaylist(playlists.items?.[0].id).then(response=>{
      dispatch({
        type:'SET_DISCOVER_WEEKLY',
        discover_weekly:response
      })
    })
  },[playlists.items,dispatch])
  return (
    <div className="App">
      {token ? <Player spotify={spotify}/> : <Login />}
    </div>
  );
}

export default App;
