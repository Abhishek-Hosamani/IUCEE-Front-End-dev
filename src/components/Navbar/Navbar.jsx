import React from 'react'
import'./Navbar.css'
import { Link } from 'react-router-dom'
// import Event from '../../pages/Event/Event'
// import { useNavigate } from 'react-router-dom'
// import { ROUTES } from '../../routes/RouterConfig'

const Navbar = () => {
  // const navigate = useNavigate()

    // const changeDir = (dir) =>{
    //     navigate(dir)
    // }
  return (
    <div className='body'>
        <div className='nav'>
            <ul>
                <li className='a1'><Link to="/">HOME</Link></li>
                <li className='a1'><Link to="/event" >EVENTS</Link></li>
                <li className='iucee'><Link to="/event" >IUCEE</Link></li>
                <li className='a1'><Link to="/service">SERVICES</Link></li>
                <li className='a1'><Link to="/about">ABOUT US</Link></li>
            </ul>
        
        </div>
    </div>
  )
}

export default Navbar