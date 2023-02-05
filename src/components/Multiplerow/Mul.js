import React from 'react'
import Slider from "react-slick";
import cat from "../../assets/AboutImages/test2.png"
import eone from "../../assets/eveentone.png"
import etwo from "../../assets/eventtwo.png";
import ethree from "../../assets/eventthree.png";
import { useState } from 'react';
import left from "../../assets/left.png"
import right from "../../assets/right.png"
import "./Mul.css"

function Mul() {


  const NextArrow=({onClick})=>{
    return(
      <div className="arrow next" onClick={onClick}>
        <img className="arr" src={right} alt=""/>
      </div>
    )
  }
    const PrevArrow=({onClick})=>{
      return(
        <div className="arrow prev" onClick={onClick}>
          <img className="arr" src={left} alt=""/>
        </div>
      )

  }
  
    const images=[eone,etwo,ethree,eone,etwo,ethree,eone,etwo,ethree,eone,etwo,ethree]
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        lazyload:true,
      
        centerPadding: "20px",
        slidesToShow:3,
        speed: 300,
        rows: 2,
        
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,

        
       
      };
    
  return (
    <div className='car-slider'>
        <Slider {...settings}>
           {images.map((obj,idx)=>{
            return(
        <div className='slic'>
          <div className="upper">
            <img className="evim"src={obj} alt="img"/>

          </div>
          <div className="lower">
            <div className="date">
              <h4 style={{color:"#F3913B"}}>NOV</h4>
              <h4 className='num' style={{color:"#FFF"}}>20</h4>
          
              

            </div>
            <div className="desc">
            Indonesia - Korea Conference
            <br/>
           Soehanna, Daerah Khusus Ibukota
           <br/>
           Yogyakarta, Indonesia

            </div>
           

          </div>
        </div>

            )
           })}
       

        </Slider>
    </div>
  )
}

export default Mul