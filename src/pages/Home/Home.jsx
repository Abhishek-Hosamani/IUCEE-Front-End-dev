import React from 'react'
import axios from 'axios';
import Eve from "../../components/Events/Events"
import img from "../../assets/images/img1.png"
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Newcard from '../../components/Cards/Newcard'
import Text from "../../components/Text/Text"
import flower from "../../assets/Vector.png"
import { useEffect } from 'react';
import { useState } from 'react';

import Paginagtion from '../../components/Pagination/Paginagtion';
import Footer from '../../components/Footer/Footer';
const Home = () => {
  var url = 'https://newsapi.org/v2/everything?' +
  'q=Apple&' +
  'from=2023-01-21&' +
  'sortBy=popularity&' +
  'apiKey=d8f6137fec6b433a8b526d57e535a3ec';
  const [news,setNews]=useState([]);
  const [loading,setLoading]=useState(false);
  const o=1;


  const [current,setCurrent]=useState(o);
  const [postsperpage,setPostsperpage]=useState(3);
  const totalPosts=Math.ceil(news.length/postsperpage)
  const change=()=>{
    setCurrent(current+1);
  }
  const back=()=>{
    if(current===1)
    {
      setCurrent(1)
      return;
    }
    setCurrent(current-1);
  }

  useEffect(()=>{
    const fun=async ()=>{
      setLoading(true);
      const res=await axios.get(url);
      setNews(res.data.articles)
      setLoading(false)
      
    }

    fun();
    

  },[]);

  const indexoflastpost=current*postsperpage;
  const indexofFirstpost=indexoflastpost-postsperpage;
  const currentpost=news.slice(indexofFirstpost,indexoflastpost);





 
  

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
    <section>

      <Paginagtion loading={loading} posts={currentpost}/>
      <div className='news-bottom'>
        <h6>Page {current} of {totalPosts}</h6>
        <div className="rhsbtns">
        <button className='nxtbtn' onClick={back}>BACK </button>
       <button className='nxtbtn' onClick={change}>NEXT</button>

        </div>
      
        
        </div>
     
    
    </section>
    <div className='events'>
    <Text  above="Recent Event" ma="Recent Events"/>

    <Eve/>

   

 



  

    </div>

    <Footer/>
    
  
    
    </>
  )
}

export default Home