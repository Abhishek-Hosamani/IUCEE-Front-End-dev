import React from 'react'
import { Icon } from '@iconify/react';
import './Footer.css';

function Footer() {
    return (
        <div className='OuterCont_foot'>
            <div className='Footer_container'>
                <div className='information-container'>
                    <p>Information</p>
                    <a >About us</a> <br></br>
                    <a>More Searches</a><br></br>
                    <a>Testimonials</a><br></br>
                    <a>Blog</a><br></br>
                    <a>Event</a><br></br>
                </div>
                <div className='helpful-link'>
                   
                    <p>Helpful Links</p>
                    <Link to="#">Services</Link>
                    <Link to="#">Supports</Link>
                    <Link to="#">Terms and Conditions</Link>
                    <Link to="#">Privacy Policy</Link>
                    

                </div>
                <div className='contact'>
                    <p>Contact</p>
                    <Link to="#">+1234567890</Link>
                    <Link to="#">iucee@gmail.com</Link>
                </div>
                <div className='SocialIcons'>
                    <Icon icon="cib:instagram" color="orange" width="35" className='Social_icons' />
                    <Icon icon="uiw:linkedin" color="orange" width="35" className='Social_icons' />
                    <Icon icon="mdi:twitter" color="orange" width="35" className='Social_icons' />
                    <Icon icon="bi:facebook" color="orange" width="35" height="35" className='Social_icons' />

                </div>

            </div>

            <p>Copyright © 2023 Indo Universal Collaboration For Engineering Education (IUCEE)</p>


        </div>
    )
}

export default Footer;