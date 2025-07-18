import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      content: 'Working with this developer was an absolute pleasure. They delivered our e-commerce platform ahead of schedule and exceeded all our expectations. Their attention to detail and problem-solving skills are exceptional.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, BrandGrow',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      content: 'I was impressed by the level of creativity and technical expertise. Our website redesign not only looks stunning but also performs exceptionally well. The developer was responsive, professional, and truly understood our vision.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, DesignHub',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      content: 'An outstanding developer who combines technical skills with an eye for design. They transformed our outdated website into a modern, user-friendly platform that has significantly increased our conversion rates.',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'CTO, InnovateTech',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      content: 'Exceptional work on our mobile application. The developers expertise in React Native was evident in the smooth performance and intuitive interface. They were communicative throughout the project and delivered on time.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'E-commerce Manager, ShopElite',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      content: 'We hired this developer to optimize our e-commerce platform, and the results were remarkable. Page load times decreased by 40%, and our mobile conversion rate increased by 25%. Highly recommended for any e-commerce project.',
      rating: 4,
    },
  ];

  // Register Swiper modules
  useEffect(() => {
    // This is needed for proper module registration with Swiper
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
            Client <span className="text-indigo-600 dark:text-indigo-400">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-inter">
            Don't just take my word for it. Here's what my clients have to say about working with me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative testimonials-slider"
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-xl font-semibold text-center text-slate-700 dark:text-slate-300 mb-8 font-poppins">
            Trusted by Companies Worldwide
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Company logos - using SVG for better dark mode compatibility */}
            <div className="w-32 h-12 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <svg className="h-8 text-slate-700 dark:text-slate-300" viewBox="0 0 124 34" fill="currentColor">
                <path d="M11.5 3.5c-4.4 0-8 3.6-8 8v11c0 4.4 3.6 8 8 8h101c4.4 0 8-3.6 8-8v-11c0-4.4-3.6-8-8-8h-101zm0 2h101c3.3 0 6 2.7 6 6v11c0 3.3-2.7 6-6 6h-101c-3.3 0-6-2.7-6-6v-11c0-3.3 2.7-6 6-6zm27.2 3.5c-3.2 0-5.7 2.5-5.7 5.7 0 3.2 2.5 5.7 5.7 5.7 1.9 0 3.5-.9 4.5-2.3v2h2.2v-10.9h-2.2v2c-1-1.4-2.6-2.2-4.5-2.2zm38.5 0c-3.2 0-5.7 2.5-5.7 5.7 0 3.2 2.5 5.7 5.7 5.7 1.9 0 3.5-.9 4.5-2.3v2h2.2v-10.9h-2.2v2c-1-1.4-2.6-2.2-4.5-2.2zm-57.8.3v16.6h2.2v-5.7c1 1.4 2.6 2.3 4.5 2.3 3.2 0 5.7-2.5 5.7-5.7 0-3.2-2.5-5.7-5.7-5.7-1.9 0-3.5.9-4.5 2.3v-2h-2.2v-2.1zm76.6 0v10.9h2.2v-10.9h-2.2zm-47.9 1.9h5.7v2.2h-5.7c-1.9 0-3.5 1.6-3.5 3.5 0 1.9 1.6 3.5 3.5 3.5h1.3c1.2 0 2.2-1 2.2-2.2 0-1.2-1-2.2-2.2-2.2h-1.3v-2.2h1.3c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4h-1.3c-3.2 0-5.7-2.5-5.7-5.7 0-3.2 2.5-5.7 5.7-5.7zm-32.2.3c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4zm38.5 0c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4zm38.5 0c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4zm-57.8 0c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4z" />
              </svg>
            </div>
            <div className="w-32 h-12 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <svg className="h-8 text-slate-700 dark:text-slate-300" viewBox="0 0 124 34" fill="currentColor">
                <path d="M23.5 11.5h-12c-1.7 0-3 1.3-3 3v5c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-5c0-1.7-1.3-3-3-3zm-9 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                <path d="M113.5 11.5h-12c-1.7 0-3 1.3-3 3v5c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-5c0-1.7-1.3-3-3-3zm-9.5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                <path d="M68.5 11.5h-12c-1.7 0-3 1.3-3 3v5c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-5c0-1.7-1.3-3-3-3zm-9.5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                <path d="M50.5 15.5h-15v3h15z"/>
                <path d="M95.5 15.5h-15v3h15z"/>
              </svg>
            </div>
            <div className="w-32 h-12 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <svg className="h-8 text-slate-700 dark:text-slate-300" viewBox="0 0 124 34" fill="currentColor">
                <path d="M62 12.5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
                <path d="M87.5 12.5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
                <path d="M36.5 12.5c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 14c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
              </svg>
            </div>
            <div className="w-32 h-12 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <svg className="h-8 text-slate-700 dark:text-slate-300" viewBox="0 0 124 34" fill="currentColor">
                <path d="M33.5 9.5h-15c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zm-7.5 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                <path d="M69.5 9.5h-15c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zm-7.5 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
                <path d="M105.5 9.5h-15c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2v-11c0-1.1-.9-2-2-2zm-7.5 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-4 md:p-6 rounded-xl shadow-lg h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-300 dark:text-slate-600'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Testimonial Content */}
      <div className="mb-6 flex-grow">
        <p className="text-slate-600 dark:text-slate-300 italic font-inter text-sm md:text-base">"{testimonial.content}"</p>
      </div>

      {/* Client Info */}
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4"
        />
        <div>
          <h4 className="font-semibold text-slate-800 dark:text-white font-poppins text-sm md:text-base">{testimonial.name}</h4>
          <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-inter">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;