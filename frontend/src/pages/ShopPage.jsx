import React, {useEffect, useState} from 'react';

import productsData from '../data/products.json';
import ProductCardsComponent from '../components/products/ProductCardsComponent.jsx';


const filters = {
   categories: ['all', 'accessories', 'dresses', 'jewelry', 'cosmetics'],
   colors: ['all', 'beige', 'black', 'brown', 'blue', 'green', 'gold', 'red', 'grey', 'silver'],
   priceRanges: [
      {label: 'Under $50', min: 0, max: 50},
      {label: '$51 - $100', min: 51, max: 100},
      {label: '$101 - $200', min: 101, max: 200},
      {label: 'above $200', min: 201, max: Infinity}
   ]
};


export default function ShopPage() {
   const [products, setProducts] = useState(productsData);
   const [filtersState, setFiltersState] = useState({
      category: 'all',
      color: 'all',
      priceRange: ''
   });


   const clearFilters = () => {
      setFiltersState({
         category: 'all', color: 'all', priceRange: ''
      })
   }

   const applyShoppingFilters = () => {

      let filteredProducts = productsData;


      if (filtersState.category && filteredProducts.category !== 'all') {
         filteredProducts = filteredProducts.filter(product => product.category === filtersState.category);

      }
      if (filtersState.color && filtersState.color !== 'all') {
         filteredProducts = filteredProducts.filter(product => product.color === filtersState.color);
      }

      if (filtersState.priceRange && filtersState.priceRange !== 'all') {
         const [minPrice, maxPrice] = filtersState.priceRange.split('-').map(Number);
         filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
      }
      setProducts(filteredProducts);
      console.log(products)

   }



   useEffect(() => {
      applyShoppingFilters();


   }, [filtersState]);

   return (
      <>
         <section className="section__container bg-primary-light">
            <h2 className="section__header capitalize">Shop Page</h2>
            <p className="section__subheader">Discover the Hottest Picks: Elevate
               Your Style with Our Curated Collection of Trending Women's Fashion
               Products.</p>
         </section>
         <section className="section__container">
            <div className="flex flex-col md:flex-row md:gap-12 gap-8">
               {/* left side */}
               <h3 className="font-header text-xl font-medium mb-4">
                  Shopping Filters
               </h3>


               {/* right side */}
               <div>
                  <h3 className="font-header text-xl font-medium mb-4">
                     Available Products
                  </h3>
                  <ProductCardsComponent products={products}/>

               </div>
            </div>
         </section>
      </>

   );
}