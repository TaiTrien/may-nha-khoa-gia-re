export interface Product {
  id: number;
  name: string;
  price: string;
  condition: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Máy khoan nha khoa cao cấp",
    price: "15,000,000 VNĐ",
    condition: "Còn mới 95%",
    description:
      "Máy khoan nha khoa hiện đại với công nghệ tiên tiến, phù hợp cho các phòng khám nha khoa chuyên nghiệp.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Ghế nha khoa điện tử",
    price: "25,000,000 VNĐ",
    condition: "Như mới",
    description:
      "Ghế nha khoa điện tử với hệ thống điều khiển thông minh, mang lại sự thoải mái tối đa cho bệnh nhân.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Máy X-quang nha khoa",
    price: "35,000,000 VNĐ",
    condition: "Đã qua sử dụng",
    description:
      "Máy X-quang nha khoa chất lượng cao, hình ảnh rõ nét, hỗ trợ chẩn đoán chính xác.",
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Tủ tiệt trùng Autoclave",
    price: "8,000,000 VNĐ",
    condition: "Tốt",
    description:
      "Tủ tiệt trùng Autoclave đảm bảo vệ sinh an toàn cho các dụng cụ nha khoa.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Máy siêu âm làm sạch răng",
    price: "12,000,000 VNĐ",
    condition: "Còn mới 90%",
    description:
      "Máy siêu âm làm sạch răng hiệu quả, loại bỏ cao răng và mảng bám một cách nhẹ nhàng.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    name: "Đèn LED phẫu thuật",
    price: "18,000,000 VNĐ",
    condition: "Như mới",
    description:
      "Đèn LED phẫu thuật ánh sáng trắng, độ sáng cao, không tạo bóng đổ trong quá trình điều trị.",
    image: "https://images.unsplash.com/photo-1584982751755-d86c34bd4cbd?w=400&h=300&fit=crop",
  },
];
