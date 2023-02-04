import { useState } from "react";
import Slider from "react-slick";
import cat from "../../assets/AboutImages/test2.png"
import eone from "../../assets/recone.png"
import etwo from "../../assets/rectwo.png";
import ethree from "../../assets/recthree.png";

import "./Curved.css"
import left from "../../assets/left.png"
import right from "../../assets/right.png"


const images=[etwo,ethree,eone,eone,ethree,etwo]


function Events(props) {

 

 

  const settings={
    infinite:true,
    lazyload:true,
    speed:300,
   
    slidesToShow:3,
   

    
    centerMode:true,
    centerPadding:"20px",
 
  

  }
  return (
    <div className="body-cur">
        <section className="sect-car">

      
      <Slider {...settings}>
      {images.map((img,idx)=>(
        <div className="wrapper">
          
            <img className="wrap-img"src={img} alt="img"/>

    
          </div>

      ))
     
      
      }
      



      </Slider>
      </section>


      
      
      
      </div>
  )
}

export default Events