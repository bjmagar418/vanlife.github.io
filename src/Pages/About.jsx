import React from 'react'
import { Link } from 'react-router-dom';
import img2 from '../assets/images/img2.png';

const About = () => {
  return (
    <div className="about-page-container"> 
        <img src={img2} alt='about img'  className='about-img'></img>
        <div className="about-page-content">
            <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
            <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
            <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
        </div>
        <div className="about-page-cta">
       <h2>Your destiny is waiting <br/>Your van is ready </h2>
       <Link className="link-button-btn" >Expolre your van</Link>
        </div>
    </div>
  )
}

export default About;
