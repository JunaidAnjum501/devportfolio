import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
      {/* Background SVG Animation */}
      <div className="absolute top-0 right-0 opacity-10 dark:opacity-5">
        <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M10,50 C10,30 30,10 50,10 C70,10 90,30 90,50 C90,70 70,90 50,90 C30,90 10,70 10,50 Z"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.path
            d="M20,50 C20,35 35,20 50,20 C65,20 80,35 80,50 C80,65 65,80 50,80 C35,80 20,65 20,50 Z"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <motion.path
            d="M30,50 C30,40 40,30 50,30 C60,30 70,40 70,50 C70,60 60,70 50,70 C40,70 30,60 30,50 Z"
            fill="none"
            stroke="#6366f1"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-inter">
            Get to know more about me, my background, and what drives me to create exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                alt="Professional Portrait" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-indigo-100 dark:bg-indigo-900/30 rounded-full filter blur-3xl opacity-70 z-0"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-cyan-100 dark:bg-cyan-900/30 rounded-full filter blur-3xl opacity-70 z-0"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
              Freelance Web Developer & UI/UX Designer
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 font-inter">
              Hello! I'm a passionate freelance developer with over 3 years of experience in creating beautiful, functional, and user-centered digital experiences. I combine technical expertise with creative problem-solving to build websites and applications that help businesses grow.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6 font-inter">
              My approach is collaborative and focused on delivering solutions that meet both user needs and business goals. I believe in clean code, responsive design, and creating intuitive user experiences that delight and engage.
            </p>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-inter">Name</span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium font-inter">John Doe</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-inter">Email</span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium font-inter">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-inter">Phone</span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium font-inter">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-inter">Location</span>
                  <p className="text-slate-800 dark:text-slate-200 font-medium font-inter">New York, USA</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center font-inter"
                >
                  Hire Me
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-800 dark:text-white font-medium rounded-lg transition-all duration-300 text-center font-inter"
                >
                  Download CV
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;