import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

import History from '../../components/About/History'
import Collaboration from "../../components/About/Collaboration"
import './About.css'
import Flower from './flower.png'
import Footer from '../../components/Footer/Footer.jsx'
const About = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className="Navbox">
      <div className='iucee-heading'>
        <h2 className='iucee-title'>IUCEE</h2>
        <div className='home-about'>
          <h5 className="home99 ">Home >> About</h5> 
        </div>


      </div>
      <img src={Flower} className="FlowerBG" ></img>
      <History className="Hist_and_Vision" /><br></br>
      <Collaboration />
      <Footer />
    </div>
  )
}

export default About