
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-gray-900">DentalEquip</h1>
        </div>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Header;
