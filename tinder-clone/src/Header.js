import React from 'react'
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import TinderLogo from "./tinder_logo.png";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className='header'>
        {/* Wrap IconButton around PersonIcon to make PersonIcon a clickable button; PROFILE BUTTON */}
        <IconButton>
           <PersonIcon fontSize="large" className="header_icon" /> 
        </IconButton>

        {/* Header Logo */}
        {/*Imported TinderLogo PNG */}
        <img 
            className="header_logo"
            src={TinderLogo} 
            alt=""
        />

        {/* Wrap IconButton around ForumIcon to make ForumIcon a clickable button; CHAT ICON */}
        <IconButton>
            <ForumIcon fontSize="large" className="header_icon"/>
        </IconButton>
        
    </div>
  )
}

export default Header