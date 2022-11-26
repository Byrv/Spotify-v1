import Search from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./header.css"
import { useStateValue } from './StateProvider'

function Header() {
    const [{user},dispatch] = useStateValue();
  return (
    <div className='header'>
        <div className='header_left'>
        <Search/>
            <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
        </div>
        <div className='header_right'>
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header