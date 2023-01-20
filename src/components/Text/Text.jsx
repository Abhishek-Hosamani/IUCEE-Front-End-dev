import React from 'react'
import "../Text/Text.css"
function Text(props) {
  return (
    <>
    <div className='main-text'> 
    <div className="design">
        <h1>
            {props.above}
          
        </h1>
       
    </div>
    <div className="below">
        <h5>
            {props.ma}
          
        </h5>
       
    </div>
    </div>
    </>
  )
}

export default Text