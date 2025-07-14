
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import ConsultationModal from './ConsultationModal';

interface Product {
  id: number;
  name: string;
  price: string;
  condition: string;
  description: string;
  image: string;
}

const ProductListingSection = () => {
  const { t } = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock data simulating Google Sheets API response
  const products: Product[] = [
    {
      id: 1,
      name: "Máy khoan nha khoa cao cấp",
      price: "15,000,000 VNĐ",
      condition: "Còn mới 95%",
      description: "Máy khoan nha khoa hiện đại với công nghệ tiên tiến, phù hợp cho các phòng khám nha khoa chuyên nghiệp.",
      image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Ghế nha khoa điện tử",
      price: "25,000,000 VNĐ",
      condition: "Như mới",
      description: "Ghế nha khoa điện tử với hệ thống điều khiển thông minh, mang lại sự thoải mái tối đa cho bệnh nhân.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Máy X-quang nha khoa",
      price: "35,000,000 VNĐ",
      condition: "Đã qua sử dụng",
      description: "Máy X-quang nha khoa chất lượng cao, hình ảnh rõ nét, hỗ trợ chẩn đoán chính xác.",
      image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Tủ tiệt trùng Autoclave",
      price: "8,000,000 VNĐ",
      condition: "Tốt",
      description: "Tủ tiệt trùng Autoclave đảm bảo vệ sinh an toàn cho các dụng cụ nha khoa.",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Máy siêu âm làm sạch răng",
      price: "12,000,000 VNĐ",
      condition: "Còn mới 90%",
      description: "Máy siêu âm làm sạch răng hiệu quả, loại bỏ cao răng và mảng bám một cách nhẹ nhàng.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Đèn LED phẫu thuật",
      price: "18,000,000 VNĐ",
      condition: "Như mới",
      description: "Đèn LED phẫu thuật ánh sáng trắng, độ sáng cao, không tạo bóng đổ trong quá trình điều trị.",
      image: "https://images.unsplash.com/photo-1584982751755-d86c34bd4cbd?w=400&h=300&fit=crop"
    }
  ];

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
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
                  onClick={() => handleConsultationRequest(product)}
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
