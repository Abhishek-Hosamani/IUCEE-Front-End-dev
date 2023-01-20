import React from 'react'
import img from "../../assets/images/img1.png"
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Newcard from '../../components/Cards/Newcard'
import Text from "../../components/Text/Text"
import flower from "../../assets/Vector.png"
const Home = () => {
  
  return (
   <>
   
  <Carousel autoPlay={true} interval={3000} infiniteLoop={true} showStatus={false}showThumbs={false}>
    <div className='carousel'>
   <img className="img"src={img} alt="" srcset="" width={"100%"} height={"60%"}/>
   </div>
   <div className='carousel'>
   <img className="img"src={img} alt="" srcset="" width={"100%"} height={"60%"}/>
   </div>

   <div className='carousel'>
   <img className="img"src={img} alt="" srcset="" width={"100%"} height={"60%"}/>
   </div>
   </Carousel>
   <div className='herocontainer'>
    <h2>The Impact of Digital Transformation in the Education Sector</h2>
    <p>Digital transformation in the education industry helps improve the learning experience for both students and teachers, as well as<br/> other people involved in the process. Such changes focus on improving engagement and accessibility through interactive and<br/> customizable learning.<br/>
    As a result, online education gets cheaper, more comprehensive, and more inclusive. 
 
</p>
<h2 style={{paddingTop:"40px"}}>Making a Better World with Better Engineering Education </h2>
<p style={{position:"relative"}}>
Vision: The vision of Indo Universal Collaboration for Engineering Education (IUCEE) is to improve the quality and global relevance<br/> of engineering education in India<br/>
</p>
<p style={{position:"relative"}}>
Mission: The mission is to build an ecosystem for transforming engineering education in India with the assistance of engineering education<br/>experts and industry from around the world

</p>


   </div>

   <div className="btn">
    <button className='button'>Join us</button>

   </div>
   <img className='flo' src={flower}  alt=''/>
  
   
    {/* <Card/> */}
    <div>
    <Text className="ne"  above="WHAT WE DO" ma="WHAT WE DO"/>
    </div>
    <Newcard/>
    <Text className="news-heading" above="NEWS" ma="NEWS"/>
    </>
  )
}

export default Home