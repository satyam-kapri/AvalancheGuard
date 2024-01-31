import * as React from 'react';
import '../css/home.css'
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import Form from './Form';
import { Link } from 'react-router-dom';
import Bottom from './bottom';
import illus from '../assets/alpine-rescue-service-illustration-brave-mountain-rescuers-avalanche-victim-aircraft-transportation-life-danger_575670-223.jpg'

function Home() {
  return (
    <div>
      <img src={illus} className='maskimage'></img> 
     
        <div className='home-center'>
       <div className='home-left'>
        <p>Our mission is to educate and raise awareness about avalanche safety. We aim to<br></br> equip adventurers, hikers, skiers, and mountaineers with knowledge<br></br> and resources to make informed decisions<br></br> when exploring avalanche-prone regions.</p>
        <span>See Danger Zones</span>
        <Link to={'/map'}><Button variant="contained" sx={{width:'200px',height:'60px',borderRadius:'20px'}}><ExploreIcon></ExploreIcon>&nbsp;Open Maps</Button></Link>
       </div>
       <Form></Form>
       </div>
       <Bottom></Bottom>
    </div>
  )
}

export default Home
