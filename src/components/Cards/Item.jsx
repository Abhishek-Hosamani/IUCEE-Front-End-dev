import React from 'react'

import "./Card.css"

function Item(props) {
  return (
    <div className='inside'> 
       <img src={props.image} alt=" "/>
       <h5>{props.text}</h5>
    </div>
    
  )
}

export default Item