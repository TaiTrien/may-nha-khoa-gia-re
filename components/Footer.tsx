
import { footerData } from "../lib/footer";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="container mx-auto max-w-6xl grid sm:grid-cols-5 gap-8">
        <div className="sm:col-span-2 text-center sm:text-left">
          <h3 className="text-2xl font-bold mb-4">DentalEquip</h3>
          <p className="text-gray-400 mb-4">
            Chuyên cung cấp thiết bị nha khoa chất lượng cao với giá cả phải chăng
          </p>
        </div>
        {footerData.map((section, idx) => (
          <div key={idx} className="text-center sm:text-left">
            <h4 className="font-semibold mb-3">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-gray-400 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800 pt-4 mt-4 text-center">
        <p className="text-gray-500 text-sm">© 2024 DentalEquip. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
