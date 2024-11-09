import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Heart, Award } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80"
          alt="Tailoring Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            Our Story
          </motion.h1>
        </div>
      </div>

      {/* Mission, Vision, Values Section */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <Target className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To deliver exceptional tailoring services that enhance our clients' confidence and style through perfect fits and superior craftsmanship.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <Heart className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <p className="text-gray-600">
                We believe in attention to detail, integrity in our work, and creating lasting relationships with our clients through exceptional service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <Award className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be the most trusted name in bespoke tailoring, known for our innovation, quality, and customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-8">Our History</h2>
            <p className="text-gray-600 mb-8">
              Founded in 1995, Elite Tailors began as a small family business with a passion for craftsmanship and attention to detail. Over the years, we've grown to become one of the most respected names in bespoke tailoring, serving thousands of satisfied clients.
            </p>
            <p className="text-gray-600">
              Our journey has been marked by continuous innovation, investment in the latest tailoring techniques, and a commitment to preserving the art of traditional craftsmanship. Today, we're proud to be at the forefront of modern tailoring while maintaining the personal touch that has always set us apart.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Master Tailors</h2>
            <p className="text-gray-600">
              Our team of experienced craftsmen brings decades of expertise to every garment
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;