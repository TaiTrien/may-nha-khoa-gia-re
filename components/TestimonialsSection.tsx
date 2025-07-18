import { useTranslation } from 'react-i18next';
import { testimonials } from '../lib/testimonials';

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          {t('testimonials.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 rounded-lg text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
              />
              <p className="text-gray-600 italic mb-2">"{item.feedback}"</p>
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
