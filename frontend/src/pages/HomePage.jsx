import React from 'react';
import BannerComponent from '../components/home/BannerComponent.jsx';
import CategorySection from '../sections/CategorySection.jsx';
import HeroSection from '../sections/HeroSection.jsx';
import TrendingProductsSection from '../sections/TrendingProductsSection.jsx';
import DealsSection from '../sections/DealsSection.jsx';
import PromotionBannerSection from '../sections/PromotionBannerSection.jsx';
import BlogSection from '../sections/BlogSection.jsx';

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