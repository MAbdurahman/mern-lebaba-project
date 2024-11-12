import React from 'react'
import { Link, useParams } from 'react-router-dom';
import RatingStarsComponent from './RatingStarsComponent.jsx';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../redux/features/cart/cartSlice.js';
import {useGetSingleProductQuery} from '../../redux/features/products/productAPI.js';


export default function SingleProductComponent() {
   /*const params = useParams();*/
   /*const {id} = useParams();*/
   /*const productId = params.productId;*/

   const {productId} = useParams();

   /*console.log('ID is : ', productId);*/
   const dispatch = useDispatch();

   const {data, error, isLoading} = useGetSingleProductQuery(productId);


   console.log('data', {productId});



   const productImage = "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   const handleAddToCart = (product) => {
      dispatch(addToCart(product))
   }

   if(isLoading) {
      return <p>Loading...</p>
   }

   if(error) {
      return <p>Error loading product details.</p>
   }

   return (
      <>
         <section className='section__container bg-primary-light'>
            <h2 className='section__header capitalize'>Single Product Page</h2>
            <div className='section__subheader space-x-2'>
               <span className='hover:text-primary'><Link className='capitalize'
                                                          to="/">home</Link></span>
               <i className="ri-arrow-right-s-line"></i>
               <span className='hover:text-primary'><Link className='capitalize'
                                                          to="/shop">shop</Link></span>
               <i className="ri-arrow-right-s-line"></i>
               <span className='hover:text-primary'>{'Evening Gown'}</span>
            </div>
         </section>
         <section className='section__container mt-8'>
            <div className='flex flex-col items-center md:flex-row gap-8'>
               {/* product image */}
               <div className='md:w-1/2 w-full'>
                  <img src={productImage} alt="product image"
                       className='rounded-md w-full h-auto'
                  />
               </div>


               <div className='md:w-1/2 w-full'>
                  <h3 className='text-2xl font-semibold mb-4'>{'Evening Gown'}</h3>
                  <p className='text-xl text-black mb-4 space-x-1'>
                     {
                        <s className='ml-1'>${'199.99'}</s>}
                     ${'149.99'}

                  </p>
                  <p className='text-gray-900 tracking-wider mb-4'>{'Elegant black evening gown/dress for special occasions. Embrace the allure of sophistication with this exquisite black mesh dress, designed to captivate and enchant. The delicate interplay of sheer fabric and intricate detailing creates a stunning silhouette, perfectly accentuating the figure while exuding an air of mystery.'}</p>

                  {/* additional product info */}
                  <div className='flex flex-col space-y-2'>
                     <p><strong>Category:</strong> {'clothing'}</p>
                     <p><strong>Color:</strong> {'black'}</p>
                     <div className='flex gap-1 items-center'>
                        <strong>Rating: </strong>
                        <RatingStarsComponent rating={5}/>
                     </div>

                  </div>

                  <button
                     onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart()
                     }}
                     className='btn mt-6 px-6 py-3 uppercase font-semibold rounded-md'>
                     Add to Cart
                  </button>
               </div>
            </div>
         </section>
         {/* display Reviews */}
         <section className='section__container mt-8'>
            ReviewCardComponent goes here!
         </section>
      </>

   );
}