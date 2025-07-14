
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { toast } from '../hooks/use-toast';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const ConsultationModal = ({ isOpen, onClose, productName }: ConsultationModalProps) => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Yêu cầu đã được gửi",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    });
    setName('');
    setPhone('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{t('consultationForm.title')}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {productName && (
            <p className="text-sm text-gray-600">
              Sản phẩm: <span className="font-medium">{productName}</span>
            </p>
          )}
          <div>
            <Label htmlFor="name">{t('consultationForm.name')}</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="phone">{t('consultationForm.phone')}</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mt-1"
            />
          </div>
          <div className="flex gap-2 pt-4">
            <Button type="submit" className="flex-1 bg-blue-500 hover:bg-blue-600">
              {t('consultationForm.submit')}
            </Button>
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              {t('consultationForm.cancel')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
