
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  vi: {
    translation: {
      hero: {
        title: "Thiết bị nha khoa giá rẻ uy tín",
        subtitle: "Chúng tôi cung cấp các thiết bị nha khoa chất lượng cao với giá cả phải chăng, được kiểm tra chuyên nghiệp và giao hàng toàn quốc.",
        cta: "Xem sản phẩm"
      },
      whyChooseUs: {
        title: "Tại sao chọn chúng tôi?",
        affordablePrice: {
          title: "Giá cả phải chăng",
          description: "Cam kết mang đến giá tốt nhất thị trường cho các sản phẩm chất lượng"
        },
        professionallyTested: {
          title: "Kiểm tra chuyên nghiệp",
          description: "Tất cả thiết bị được kiểm tra kỹ lưỡng bởi các chuyên gia nha khoa"
        },
        nationwideDelivery: {
          title: "Giao hàng toàn quốc",
          description: "Dịch vụ giao hàng nhanh chóng và an toàn đến mọi miền đất nước"
        }
      },
      products: {
        title: "Sản phẩm nổi bật",
        condition: "Tình trạng",
        requestConsultation: "Yêu cầu tư vấn"
      },
      consultationForm: {
        title: "Yêu cầu tư vấn",
        name: "Họ và tên",
        phone: "Số điện thoại",
        submit: "Gửi yêu cầu",
        cancel: "Hủy"
      },
      language: {
        vietnamese: "Tiếng Việt",
        english: "English"
      }
    }
  },
  en: {
    translation: {
      hero: {
        title: "Affordable and Trusted Dental Equipment",
        subtitle: "We provide high-quality dental equipment at affordable prices, professionally tested and delivered nationwide.",
        cta: "View Products"
      },
      whyChooseUs: {
        title: "Why Choose Us?",
        affordablePrice: {
          title: "Affordable Price",
          description: "Committed to bringing the best market prices for quality products"
        },
        professionallyTested: {
          title: "Professionally Tested",
          description: "All equipment is thoroughly tested by dental professionals"
        },
        nationwideDelivery: {
          title: "Nationwide Delivery",
          description: "Fast and secure delivery service to every corner of the country"
        }
      },
      products: {
        title: "Featured Products",
        condition: "Condition",
        requestConsultation: "Request Consultation"
      },
      consultationForm: {
        title: "Request Consultation",
        name: "Full Name",
        phone: "Phone Number",
        submit: "Submit Request",
        cancel: "Cancel"
      },
      language: {
        vietnamese: "Tiếng Việt",
        english: "English"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
