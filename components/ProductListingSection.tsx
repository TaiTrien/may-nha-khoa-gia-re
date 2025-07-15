
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import ConsultationModal from './ConsultationModal';
import { Product, products } from '../lib/products';

const ProductListingSection = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();


  const handleConsultationRequest = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <section id="products" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {t('products.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              onClick={() => router.push(`/products/${product.id}`)}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="aspect-video">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold text-blue-600">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {t('products.condition')}: {product.condition}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleConsultationRequest(product);
                  }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {t('products.requestConsultation')}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct?.name}
      />
    </section>
  );
};

export default ProductListingSection;
