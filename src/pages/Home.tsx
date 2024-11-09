import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Scissors, Ruler, Clock, Star } from 'lucide-react';

const slideImages = [
  'https://images.unsplash.com/photo-1556048219-bb6978360b84?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507904953637-96429a46671a?auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1590401958793-42a0c6502b0d?auto=format&fit=crop&q=80',
];

const services = [
  {
    icon: <Scissors className="h-8 w-8" />,
    title: 'Custom Tailoring',
    description: 'Perfectly fitted garments crafted to your measurements',
  },
  {
    icon: <Ruler className="h-8 w-8" />,
    title: 'Alterations',
    description: 'Expert alterations to make any garment fit perfectly',
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: 'Quick Service',
    description: 'Fast turnaround without compromising on quality',
  },
];

const testimonials = [
  {
    name: 'John Smith',
    role: 'Business Executive',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    text: 'The attention to detail and craftsmanship is exceptional. My suits have never fit better.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Fashion Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    text: 'Tailor Hub transformed my designs into reality with incredible precision.',
  },
];

const stats = [
  { label: 'Years Experience', value: 25 },
  { label: 'Satisfied Clients', value: 10000 },
  { label: 'Master Tailors', value: 15 },
  { label: 'Perfect Fits', value: 50000 },
];

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slideImages[0]}
            alt="Tailoring"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white px-4"
          >
            <h1 className="text-5xl font-bold mb-4">Crafting Perfection</h1>
            <p className="text-xl mb-8">Your personal style, expertly tailored</p>
            <a href="https://wa.me/8639803676" target="_blank" rel="noopener noreferrer">
  <button className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors">
    Book Appointment
  </button>
</a>

          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the perfect fit with our comprehensive tailoring services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
              >
                <div className="text-indigo-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center text-white"
              >
                <div className="text-4xl font-bold mb-2">{stat.value}+</div>
                <div className="text-indigo-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;