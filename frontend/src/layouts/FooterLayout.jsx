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
            <div className="footer__col">
               <h4>CONTACT INFO</h4>
               <div>
                  <span><i className="ri-map-pin-2-fill"></i></span>
                  1234 Park Avenue,
                  <p className="text-black tracking-wider"> New York, New York</p>
               </div>
               <p>
                  <a href="mailto:support@lebaba.com"
                     target="_blank" className=""><span><i className="ri-mail-fill"></i></span>support@lebaba.com</a>
               </p>
               <p>


                  <a href="tel: 901-828-4631"><span><i className="ri-phone-fill"></i></span>(+212) 234-5678</a>
               </p>
            </div>

            <div className="footer__col">
               <h4>COMPANY</h4>
               <a href="/">Home</a>
               <a href="/about">About Us</a>
               <a href="/">Careers With Us</a>
               <a href="/">Our Blogs</a>
               <a href="/terms-condition">Terms & Condition</a>
            </div>

            <div className='footer__col'>
               <h4>USEFUL LINK</h4>
               <a href="/">Track Orders</a>
               <a href="/categories/accessories">Accessories</a>
               <a href="/categories/clothing">Clothing</a>
               <a href="/categories/jewelry">Jewelry</a>
               <a href="/categories/cosmetics">Cosmetics</a>
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
            © 2024 by Lebaba,Inc. All rights reserved.
         </div>
      </>

   );
}