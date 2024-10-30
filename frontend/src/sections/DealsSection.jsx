import React from 'react';
import dealsImage from '../assets/deals.png';



export default function DealsSection() {

   return (
      <section className='section__container deals__container'>
         <div className='deals__image'>
            <img src={dealsImage} alt="woman model"/>
         </div>

         <div className='deals__content'>
            <h5 className="font-semibold tracking-wider">Get Up To 20% Discount</h5>
            <h4>Deals Of This Month</h4>
            <p className="font-semibold tracking-wider">Our Women's Fashion Deals of the Month are here to make your style
               dreams a reality without breaking the bank. Discover a curated
               collection of exquisite clothing, accessories, and footwear, all
               handpicked to elevate your wardrobe.</p>
            <div className='deals__countdown flex-wrap'>
               <div className='deals__countdown__card'>
                  <h4>14</h4>
                  <p>Days</p>
               </div>
               <div className='deals__countdown__card'>
                  <h4>20</h4>
                  <p>Hours</p>
               </div>
               <div className='deals__countdown__card'>
                  <h4>15</h4>
                  <p>Mins</p>
               </div>
               <div className='deals__countdown__card'>
                  <h4>05</h4>
                  <p>Secs</p>
               </div>
            </div>
         </div>
      </section>

   );
}