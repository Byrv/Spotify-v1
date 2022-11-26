import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled';
import React from 'react'
import "./body.css"
import Header from "./Header"
import { useStateValue } from './StateProvider';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import SongRow from './SongRow';

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();
  return (
    <div className='body'>
      <Header spotify={spotify} />
      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} />
        <div className='body__infoText'>
          <strong>PLAYLISTS</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>

      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilled className='body_shuffel' />
          <FavoriteRoundedIcon fontSize='large' />
          <MoreHorizRoundedIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>

  );
}

export default Body