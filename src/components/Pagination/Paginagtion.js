import React from 'react'
import { useEffect } from 'react'
import "../Pagination/Pagination.css"
function Paginagtion({loading,posts}) {
    if(loading){
        return(
            <h1>LOADING..</h1>
        )
    }
    return(
      <ul className='newshead'>
        {posts.map(obj=>{
            return(
                <>
                   <h2 style={{color:'F31913B'}}>IUCEE ANUAL HIGHLIGHTS 2022</h2>
                   <li key={obj.id}>{obj.content}</li>
                </>
             
            )
        })}
      </ul>
    )
  
  
}

export default Paginagtion