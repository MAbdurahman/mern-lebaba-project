import React, {useState, useEffect}  from 'react';
import dealsImage from '../assets/deals.png';

const COUNTDOWN_TARGET = new Date('2026-11-11T00:00:01');

const getTimeLeft = () => {
   const totalTimeLeft = COUNTDOWN_TARGET - new Date();
   const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
   const hrs = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
   const mins = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
   const secs = Math.floor((totalTimeLeft / 1000) % 60);
   return [ days, hrs, mins, secs ];
};

export default function DealsSection() {
   const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

   useEffect(() => {
      const timer = setInterval(() => {
         setTimeLeft(getTimeLeft());
      }, 1000);

      return () => {
         clearInterval(timer);
      };
   }, []);

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
                  <h4>{timeLeft[0]}</h4>
                  <p>Days</p>
               </div>
               <div className='deals__countdown__card'>
                  <h4>{timeLeft[1]}</h4>
                  <p>Hrs</p>
               </div>
               <div className='deals__countdown__card'>
                  <h4>{timeLeft[2]}</h4>
                  <p>Mins</p>
               </div>
               <div className='deals__countdown__card'>
                  <h4>{timeLeft[3]}</h4>
                  <p>Secs</p>
               </div>
            </div>
         </div>
      </section>

   );
}