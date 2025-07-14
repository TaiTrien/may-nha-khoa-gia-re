
import { useTranslation } from 'react-i18next';
import { DollarSign, Shield, Truck } from 'lucide-react';

const WhyChooseUsSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: DollarSign,
      title: t('whyChooseUs.affordablePrice.title'),
      description: t('whyChooseUs.affordablePrice.description')
    },
    {
      icon: Shield,
      title: t('whyChooseUs.professionallyTested.title'),
      description: t('whyChooseUs.professionallyTested.description')
    },
    {
      icon: Truck,
      title: t('whyChooseUs.nationwideDelivery.title'),
      description: t('whyChooseUs.nationwideDelivery.description')
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {t('whyChooseUs.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
