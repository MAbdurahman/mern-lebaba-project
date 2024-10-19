import React from 'react';
import { Link } from 'react-router-dom';
import bannerImage from '../../assets/header.png';

export default function BannerComponent() {

   return (
      <div className='section__container header__container'>
         <div className='header__content z-30'>
            <h4 className='uppercase'>UP TO 20% Discount on</h4>
            <h1>Girl's Fashion</h1>
            <p>Discover the latest trends and express your unique style with our
               Women's Fashion website. Explore a curated collection of clothing,
               accessories, and footwear that caters to every taste and occasion.</p>
            <button className='btn'><Link to='/shop'>EXPLORE NOW</Link></button>
         </div>
         <div className='header__image'>
            <img src={bannerImage} alt="banner image"/>
         </div>
      </div>

   );
}