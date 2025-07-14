
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>
        <Button 
          onClick={scrollToProducts}
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
        >
          {t('hero.cta')}
          <ArrowDown size={20} />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
