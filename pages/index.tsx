
import React from 'react';
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import ProductListingSection from "../components/ProductListingSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <WhyChooseUsSection />
        <ProductListingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
