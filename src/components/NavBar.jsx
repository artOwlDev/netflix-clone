

import React from 'react'
import "./css/navbar.scss"
import { Search, Notifications, ArrowDropDown, Edit, Person, LaptopWindows } from '@material-ui/icons'
import { useState } from 'react'


const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  console.log(isScrolled);
  
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
          <div className="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className="right">
              <Search className="icon"/>
              <Notifications className="icon"/>
              <img src="https://i.quotev.com/img/q/u/18/9/5/hzt5or3bjd.jpg" alt="" />
              <div className="profile">
                  
                  <ArrowDropDown className="icon" />
                  <div className="options">
                      <div className="profile-manage">
                          <Edit className="icon-options"/>
                          <span>Manage Profile</span>
                      </div>
                      <div className="account">
                          <Person className="icon-options"/>
                          <span>Account</span>
                      </div>
                      <hr></hr>
                      <div className="logout">
                        <span>Logout</span>
                      </div>
                  </div>
                
              </div>
          </div>
        </div>
    </div>
  )
}


export default NavBar;