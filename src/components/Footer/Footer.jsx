import React from 'react'
import "./Footer.css";
import Behance from '../../svg/behance';
import Linkedin from '../../svg/linkedin';
import Git from '../../svg/git';
export default function Footer() {
  return (
    <div className="footer-page-container">
    <h1  className='footer-h1'>© 2023 Aylen Gorosito</h1>
<div className='footer-contacts'> 
<a  target="_blank"  href="https://www.behance.net/aylengorosito">
 <Behance />
</a>
<a  target="_blank" href="https://www.linkedin.com/in/aylengorosito/">
   <Linkedin/>
</a>
<a  target="_blank"  href="https://github.com/AylenGorosito313">
   <Git/>
</a>
   
   
   
</div>
  </div>
  )
}
