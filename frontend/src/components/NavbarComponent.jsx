import React, { useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
/*import{useDispatch, useSelector} from 'react-redux';*/
/*import ShoppingCartModal from './shop/ShoppingCartModal.jsx';*/


export default function NavbarComponent() {
   /*const products = useSelector((state) => state.cart.products);*/
   const [isCartOpen, setIsCartOpen] = useState(false);


   const handleCartToggle = () => {
      setIsCartOpen(!isCartOpen)
   }

   return (
      <header className="fixed-nav-bar w-nav">
         <nav className='max-w-screen-2xl mx-auto px-4 flex justify-between items-center'>
            <ul className='nav__links'>
               <li className='link'><Link to="/">Home</Link></li>
               <li className='link'><Link to="/about">About</Link></li>
               <li className='link'><Link to="/shop">Shop</Link></li>
               <li className='link'><Link to="/">Pages</Link></li>
               <li className='link'><Link to="/contact">Contact</Link></li>
            </ul>
            {/* logo */}
            <div className='nav__logo'>
               <Link to="/">Lebaba<span>.</span></Link>
            </div>
            {/* nav icons */}
            <div className='nav__icons relative'>
               <span>
                  <Link to="/search">
                     <i className="ri-search-line"></i>
                  </Link>
               </span>
               <span>
                  <button onClick={handleCartToggle} className='hover:text-primary'>
                     <i className="ri-shopping-bag-line"></i>
                     <sup className='text-sm inline-block px-1.5 text-white rounded-full  bg-primary text-center'>
                               {'2'}
                     </sup>
                  </button>
               </span>
               <span>
                  <Link to="sign-in">
                     <i className="ri-user-line"></i>
                  </Link>
               </span>

            </div>
         </nav>
         {/*{isCartOpen && <ShoppingCartModal products={products} isOpen={isCartOpen} onClose={handleCartToggle} />}*/}
      </header>

   );
}//end of NavbarComponent Function