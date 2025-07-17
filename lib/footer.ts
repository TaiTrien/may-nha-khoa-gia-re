export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerData: FooterSection[] = [
  {
    title: "Về chúng tôi",
    links: [
      { label: "Giới thiệu", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Liên hệ", href: "#" }
    ]
  },
  {
    title: "Hỗ trợ",
    links: [
      { label: "Câu hỏi thường gặp", href: "#" },
      { label: "Chính sách bảo hành", href: "#" }
    ]
  },
  {
    title: "Theo dõi chúng tôi",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "Zalo", href: "#" }
    ]
  }
];
