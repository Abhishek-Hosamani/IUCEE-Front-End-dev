import React,{useEffect, useState} from 'react'
import Item from './Item'
import Carousel from 'better-react-carousel'
import 'react-multi-carousel/lib/styles.css';
import left from "../../assets/left.png"
import right from "../../assets/right.png"

import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
import five from "../../assets/five.png"
import six from "../../assets/six.png"




// import { CCarousel } from '@coreui/react'


import "./Card.css"



function Cards() {
  const rights=()=>{
    return(<img className='rhs' width="10px" src={right} alt=""/>)
  }
  const lefts=()=>{
    return(<img className='lhs' width="10px" src={left} alt=""/>)
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
      
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
             {image:one,text:"Faculty Empowerment"},
             {image:two,text:"Student Develoment"},
             {image:three,text:"Journal(JEET)"},
             {image:four,text:"EVENTS"},
             {image:five,text:"Engineering Educator Certification"},
             {image:six,text:"Become a member"},
          
        
             
 ]
 const [currentIndex,setCurrentIndex]=useState(0)


  return (
  
     
     <div className="mains">
      

      <div className="card">


    <Carousel arrowLeft={lefts} arrowRight={rights} cols={3} rows={2} gap={10} loop>
       {data.map((item,index)=>{
         return <Carousel.Item><div className='images' style={{transform:`translate( -${currentIndex * 100}%)`}}> <Item image={item.image} text={item.text}></Item></div></Carousel.Item>
      })}
    

     
      {/* ... */}
    </Carousel>
    
     

     </div>
     
     </div>
    
  )
}

export default Cards