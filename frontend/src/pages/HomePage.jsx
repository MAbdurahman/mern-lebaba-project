import React from 'react';
import BannerComponent from './../components/home/BannerComponent';
import CategorySection from './../sections/CategorySection';
import HeroSection from './../sections/HeroSection';
import TrendingProductsSection from './../sections/TrendingProductsSection';
import DealsSection from './../sections/DealsSection';
import PromotionBannerSection from './../sections/PromotionBannerSection';
import BlogSection from '../sections/BlogSection';

export default function HomePage() {

   return (
      <>
         <BannerComponent />
         <CategorySection />
         <HeroSection />
         <TrendingProductsSection />
         <DealsSection />
         <PromotionBannerSection />
         <BlogSection />
      </>

   );
}