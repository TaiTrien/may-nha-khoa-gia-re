
import React from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ProductListingSection from "../components/ProductListingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16 pb-12">
        <HeroSection />
        <WhyChooseUsSection />
        <ProductListingSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
