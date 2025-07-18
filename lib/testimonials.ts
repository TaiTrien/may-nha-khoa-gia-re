export interface Testimonial {
  id: number;
  name: string;
  feedback: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Phòng khám Smile Dental",
    feedback:
      "Thiết bị ở đây rất chất lượng, giá cả hợp lý. Dịch vụ tư vấn tận tình.",
    image:
      "https://images.unsplash.com/photo-1551754651-593b54f356a9?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Nha khoa Việt Đức",
    feedback:
      "Chúng tôi đã trang bị nhiều máy móc từ DentalEquip và hoàn toàn hài lòng.",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Bác sĩ Trần Thị B",
    feedback:
      "Giá cả tốt, giao hàng nhanh chóng, hỗ trợ nhiệt tình trước và sau bán hàng.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
  }
];
