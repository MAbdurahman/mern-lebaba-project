import React from 'react';

import instagramImage1 from '../assets/instagram-1.jpg';
import instagramImage2 from '../assets/instagram-2.jpg';
import instagramImage3 from '../assets/instagram-3.jpg';
import instagramImage4 from '../assets/instagram-4.jpg';
import instagramImage5 from '../assets/instagram-5.jpg';
import instagramImage6 from '../assets/instagram-6.jpg';

export default function FooterLayout() {

   return (
      <>
         <footer className='section__container footer__container'>
            <div className='footer__col'>
               <h4>CONTACT INFO</h4>
               <p>
                  <span><i className="ri-map-pin-2-fill"></i></span>
                  1234 Park Avenue,
                  <p className="text-black tracking-wider"> New York, New York</p>
               </p>
               <p>
                  <span><i className="ri-mail-fill"></i></span>
                  support@lebaba.com
               </p>
               <p>
                  <span><i className="ri-phone-fill"></i></span>
                  (+012) 3456 789
               </p>
            </div>

            <div className='footer__col'>
               <h4>COMPANY</h4>
               <a href="/">Home</a>
               <a href="/">About Us</a>
               <a href="/">Careers With Us</a>
               <a href="/">Our Blogs</a>
               <a href="/">Terms & Condition</a>
            </div>

            <div className='footer__col'>
               <h4>USEFUL LINK</h4>
               <a href="/">Help</a>
               <a href="/">Track your order</a>
               <a href="/">Men</a>
               <a href="/">Women</a>
               <a href="/">Dresses</a>
            </div>
            <div className='footer__col'>
               <h4>INSTAGRAM</h4>
               <div className='instagram__grid'>
                  <img src={instagramImage1} alt="instagram image" />
                  <img src={instagramImage2} alt="instagram image" />
                  <img src={instagramImage3} alt="instagram image" />
                  <img src={instagramImage4} alt="instagram image" />
                  <img src={instagramImage5} alt="instagram image" />
                  <img src={instagramImage6} alt="instagram image" />
               </div>
            </div>
         </footer>

         <div className='footer__bar tracking-wider bg-neutral-100'>
            Copyright © 2024 by Lebaba. All rights reserved.
         </div>
      </>

   );
}