import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';

import ExploreIcon from '@mui/icons-material/Explore';
import { Avatar } from '@mui/material';
import "./Navbar.css"
import { Signup } from './Signup';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <div className="row navbarset">
        <div className="col-sm-12 navbarset ">
            <div className="col-sm-2">
            </div>
            <div className="col-sm-3">
                <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"/>
            </div>
            <div className="col-sm-3 search">
            <SearchIcon/>
            <input placeholder="Search"type="text"></input>
            </div>
            <div className="col-sm-3 icons">
            <HomeIcon fontSize='large'/>
           <SendIcon  style={{marginLeft:"15px"}}/>
            <AddIcon  style={{marginLeft:"15px"}}/>
            <ExploreIcon  style={{marginLeft:"15px"}}/>
       
        <Avatar  src=""  style={{marginLeft:"15px"}}/>

            </div>
            
        </div>
        </div>
    </div>
  )
}

export default Navbar