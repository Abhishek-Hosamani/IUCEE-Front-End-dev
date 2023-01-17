import React from 'react'
import "../Text/Text.css"
function Text(props) {
  return (
    <>
    <div className="design">
        <h1>
            {props.ma}
          
        </h1>
       
    </div>
    <div className="below">
        <h5>
            {props.ma}
          
        </h5>
       
    </div>
    </>
  )
}

export default Text