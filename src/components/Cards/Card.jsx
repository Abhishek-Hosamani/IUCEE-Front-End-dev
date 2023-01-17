// import React from 'react'
// import one from "../../assets/one.png"
// import two from "../../assets/two.png"
// import three from "../../assets/three.png"
// import four from "../../assets/four.png"
// import five from "../../assets/five.png"
// import six from "../../assets/six.png"
// import Item from "../Cards/Item"
// import "../Cards/Card.css"


// function Card() {
//     const data=[{image:one,text:"Faculty Empowerment"},
//     {image:two,text:"Student Develoment"},
//     {image:three,text:"Journal(JEET)"},
//     {image:four,text:"EVENTS"},
//     {image:five,text:"Engineering Educator Certification"},
//     {image:six,text:"Become a member"},
// ]
//   return (
//     <div className="maincon">


    
//     <div className="a">
//     <ul className='yes'>
//       {data.map((item,index)=>{
//          return <li> <Item image={item.image} text={item.text}></Item></li>
//       })}
//       </ul>

//     </div>
//     <div className="b">
//     <ul>
//       {data.map((item,index)=>{
//          return <li> <Item image={item.image} text={item.text}></Item></li>
//       })}
//       </ul>
//     </div>

  
  

//       {/* <ul>
//       {data.map((item,index)=>{
//          return <li> <Item image={item.image} text={item.text}></Item></li>
//       })}
//       </ul> */}
// </div>
//   )
// }

// export default Card
import React,{useEffect, useState} from 'react'
import Item from './Item'
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
import five from "../../assets/five.png"
import six from "../../assets/six.png"
import right from "../../assets/right.png"
import left from "../../assets/left.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import { CCarousel } from '@coreui/react'


import "./Card.css"



function Cards() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 1000, min: 1024 },
      items: 6
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
 const data=[{image:one,text:"Faculty Empowerment"},
             {image:two,text:"Student Develoment"},
             {image:three,text:"Journal(JEET)"},
             {image:four,text:"EVENTS"},
             {image:five,text:"Engineering Educator Certification"},
             {image:six,text:"Become a member"},
          
        
             
 ]
 const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button> <img src={right} onClick={()=>onClick()} /></button>;
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button> <img src={left} onClick={()=>onClick()} /></button>;
};

 const [currentIndex,setCurrentIndex]=useState(0)

 const somefn=()=>{
   if(currentIndex===data.length-1){
      return setCurrentIndex(0)
   }
   return setCurrentIndex(currentIndex+1)
 }
 

  return (
   // <Slider>
     
     <div className="main">
      

      <div className="card">

      {/* <Carousel    itemClass="carousel-item-padding-40-px" containerClass="carousel-container" customLeftArrow={<CustomLeftArrow/>} customRightArrow={<CustomRightArrow />} responsive={responsive}> */}
      <Carousel
  additionalTransfrom={0}
  arrows
 
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass="container"
  dotListClass=""
//  customLeftArrow={<CustomLeftArrow/>} 
//  customRightArrow={<CustomRightArrow />} 
  draggable
  focusOnSelect={false}
  infinite={false}
  itemClass=""
  keyBoardControl
  minimumTouchDrag={80}
  pauseOnHover
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
  responsive={{
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 3,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  }}
  rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  slidesToSlide={1}
  swipeable
>
     

    
     {/* <div className='card' > */}
      {/* <h1 className='text-red-100'>alefja</h1> */}

       {/* <div className="images" >
       <Item image={one} text="Faculty Empowerment"/>
         
      </div>

      <div className="images">
      <Item image={two} text="Student Development"/>

      </div>
      */}
 
      {data.map((item,index)=>{
         return <div className='images' style={{transform:`translate( -${currentIndex * 100}%)`}}> <Item image={item.image} text={item.text}></Item></div>
      })}
    

     
    

     {/* </div> */}
     </Carousel>
     </div>
     
     </div>
    
  )
}

export default Cards