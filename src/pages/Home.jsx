

import React from 'react'
import NavBar from '../components/NavBar'
import Featured from '../components/Featured'
import "./css/home.scss"
import List from '../components/List'

const Home = () => {
  return (
    <div className="home">
      <NavBar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      
    </div>
  )
}

export default Home