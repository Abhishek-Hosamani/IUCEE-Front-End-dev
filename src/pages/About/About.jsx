import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../routes/RouterConfig'

import History from '../../components/About/History'
import Collaboration from "../../components/About/Collaboration"
import './About.css'
import Flower from './flower.png'
import Footer from '../../components/Footer/Footer.jsx'
import Flow from '../../assets/Flower.png'
const About = () => {

  const navigate = useNavigate()

  const changeDir = (dir) => {
    navigate(dir)
  }

  return (
    <div className="Navbox">
      <img src={Flower} className="FlowerBG" ></img>
      <History className="Hist_and_Vision" /><br></br>
      <img src={Flow} alt="FlowerBG" className='Flow1'></img>
      <Collaboration />
      <Footer />
    </div>
  )
}

export default About