import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import "./sidebar.css"
import Sidebaroption from './Sidebaroption'
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{playlists},dispatch]=useStateValue();
  return (
    <div className='sidebar'>
    <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <Sidebaroption Icon={HomeIcon} tittle="Home"/>
      <Sidebaroption Icon={SearchIcon} tittle="Search"/>
      <Sidebaroption Icon={LibraryMusicIcon}tittle="Your Library"/>
      <br />
    <strong className='sidebar__tittle'>PLAYLISTS</strong>
    <hr/>
    {playlists?.items?.map(playlists => (
      <Sidebaroption tittle={playlists.name}/>
    ))}
    </div>
  );
}

export default Sidebar