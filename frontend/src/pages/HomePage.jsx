import React from 'react';
import BannerComponent from './../components/home/BannerComponent';
import CategorySection from './../sections/CategorySection';
import HeroSection from './../sections/HeroSection';
import TrendingProductsSection from './../sections/TrendingProductsSection';

export default function HomePage() {

   return (
      <>
         <BannerComponent />
         <CategorySection />
         <HeroSection />
         <TrendingProductsSection />
      </>

   );
}