import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ConsultationModal from "../../components/ConsultationModal";
import { Button } from "../../components/ui/button";
import { products } from "../../lib/products";
import ProductMedia from "../../components/ProductMedia";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="pt-20 text-center">Loading...</div>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-12 container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded shadow p-4 space-y-6">
          <ProductMedia
            videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
            frames={[
              'https://placehold.co/600x400?text=Frame1',
              'https://placehold.co/600x400?text=Frame2',
              'https://placehold.co/600x400?text=Frame3',
              'https://placehold.co/600x400?text=Frame4',
            ]}
            galleryImages={[
              'https://images.unsplash.com/photo-1512445239399-1b17f6b9e9fe?w=800',
              'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800',
              'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
              'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800',
            ]}
            beforeImage="https://placehold.co/600x400?text=Before"
            afterImage="https://placehold.co/600x400?text=After"
          />
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-blue-600 text-xl font-semibold">{product.price}</p>
            <p className="text-sm text-gray-500">
              {t('products.condition')}: {product.condition}
            </p>
            <p className="text-gray-700">{product.description}</p>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              {t('products.requestConsultation')}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
      />
    </>
  );
};

export default ProductDetailPage;
