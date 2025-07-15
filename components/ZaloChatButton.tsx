import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ZALO_LINK = 'https://zalo.me/0912345678';

const ZaloChatButton = () => {
  const { t } = useTranslation();
  return (
    <a
      href={ZALO_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-blue-500 p-3 text-white shadow-lg hover:bg-blue-600"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:block">{t('consultationForm.chatZalo')}</span>
    </a>
  );
};

export default ZaloChatButton;
