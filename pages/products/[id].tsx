import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ConsultationModal from "../../components/ConsultationModal";
import { Button } from "../../components/ui/button";
import { products } from "../../lib/products";

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
        <div className="max-w-3xl mx-auto bg-white rounded shadow">
          <div className="aspect-video">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="p-6 space-y-4">
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
