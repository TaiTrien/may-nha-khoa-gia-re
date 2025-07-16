import React, { useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ConsultationModal from "../../components/ConsultationModal";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../components/ui/select";
import { Product, products } from "../../lib/products";

const ProductPage = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [condition, setCondition] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const uniqueConditions = Array.from(new Set(products.map((p) => p.condition)));

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (condition === "all" || p.condition === condition)
  );

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-32 px-4 container mx-auto max-w-7xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          {t("products.title")}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Input
            placeholder="Search products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="sm:w-64"
          />
          <Select value={condition} onValueChange={setCondition}>
            <SelectTrigger className="sm:w-64">
              <SelectValue placeholder="Filter by condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {uniqueConditions.map((c) => (
                <SelectItem key={c} value={c}>
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
                    {t("products.condition")}: {product.condition}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProduct(product);
                    setIsModalOpen(true);
                  }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                >
                  {t("products.requestConsultation")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct?.name}
      />
    </>
  );
};

export default ProductPage;

