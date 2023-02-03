import { useState } from "react";
import Slider from "react-slick";
import cat from "../../assets/AboutImages/test2.png"
import "./Events.css"
import left from "../../assets/left.png"
import right from "../../assets/right.png"


const images=[cat,cat,cat,cat]


function Events() {

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

  const [imageIndex,setImageIndex]=useState(0)

  const settings={
    infinite:true,
    lazyload:true,
    speed:300,
    slidesToShow:3,
    centerMode:true,
    centerPadding:0,
    nextArrow:<NextArrow/>,
    prevArrow:<PrevArrow/>,
    beforeChange: (current,next)=>setImageIndex(next)
  

  }
  return (
    <div className="car-slider">
      <Slider {...settings}>
      {images.map((img,idx)=>(
        <div className={idx===imageIndex ? "sli activeSlide" : "sli"}>
          <div className="upper">
            <img className="evim"src={img} alt="img"/>

          </div>
          <div className="lower">
            <p>
              Indoesia conderence<br>
              </br>
              conderence
            </p>

          </div>
        </div>

      ))
     
      
      }



      </Slider>


      
      
      
      </div>
  )
}

export default Events