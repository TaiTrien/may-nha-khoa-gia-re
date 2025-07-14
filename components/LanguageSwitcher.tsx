
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'vi' ? 'en' : 'vi';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="flex items-center gap-2"
    >
      <Languages size={16} />
      {i18n.language === 'vi' ? t('language.english') : t('language.vietnamese')}
    </Button>
  );
};

export default LanguageSwitcher;
