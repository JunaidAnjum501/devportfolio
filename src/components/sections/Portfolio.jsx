import { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // SVG Animation Component
  const PortfolioAnimation = () => (
    <div className="absolute bottom-10 right-10 opacity-10 dark:opacity-5 z-0">
      <svg width="300" height="300" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          x="20"
          y="20"
          width="20"
          height="20"
          fill="none"
          stroke="#6366f1"
          strokeWidth="0.5"
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{ rotate: 360, opacity: 0.7 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.rect
          x="30"
          y="30"
          width="40"
          height="40"
          fill="none"
          stroke="#0ea5e9"
          strokeWidth="0.5"
          initial={{ rotate: 0, opacity: 0.3 }}
          animate={{ rotate: -360, opacity: 0.7 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#6366f1"
          strokeWidth="0.5"
          initial={{ scale: 0.8, opacity: 0.2 }}
          animate={{ scale: 1.1, opacity: 0.5 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX Design' },
  ];
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      description: 'A productivity app for managing tasks, projects, and team collaboration with real-time updates.',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Fitness Tracker Mobile App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A mobile application for tracking workouts, nutrition, and fitness progress with personalized recommendations.',
      technologies: ['React Native', 'Redux', 'Node.js'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80',
      description: 'A comprehensive real estate platform with property listings, advanced search, and virtual tours.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Google Maps API'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 5,
      title: 'Food Delivery App UI',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1482442120256-9c4a5ab72d4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A modern and intuitive user interface design for a food delivery application with a focus on user experience.',
      technologies: ['Figma', 'Adobe XD', 'Illustrator'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Travel Companion App',
      category: 'mobile',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80',
      description: 'A travel companion mobile app with itinerary planning, location-based recommendations, and offline maps.',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 7,
      title: 'Banking Dashboard UI',
      category: 'ui',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      description: 'A clean and modern banking dashboard UI design with data visualization, transaction history, and account management.',
      technologies: ['Figma', 'Photoshop', 'Illustrator'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
    {
      id: 8,
      title: 'Social Media Platform',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      description: 'A social media platform with user profiles, posts, comments, and real-time notifications.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
    },
  ];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
  return (
    <section id="portfolio" className="py-20 bg-slate-50 dark:bg-slate-800/50 relative overflow-hidden">
      <PortfolioAnimation />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-slate-800 dark:text-white mb-4">
            My <span className="text-indigo-600 dark:text-indigo-400">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-inter">
            Check out some of my recent projects. Each project is unique and built with attention to detail and focus on user experience.
          </p>
        </motion.div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category.id ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600 shadow-md'}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-indigo-900/90 to-cyan-600/70 flex flex-col justify-end p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex space-x-3 mb-4">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white text-indigo-600 rounded-lg font-medium text-sm hover:bg-indigo-50 transition-colors shadow-md"
            >
              Live Demo
            </a>
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium text-sm hover:bg-indigo-700 transition-colors shadow-md"
            >
              View Code
            </a>
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-indigo-600/90 text-white text-xs font-medium rounded-full shadow-md">
            {project.category === 'web' ? 'Web Development' : 
             project.category === 'mobile' ? 'Mobile App' : 'UI/UX Design'}
          </span>
        </div>
      </div>
      
      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 font-poppins">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4 font-inter text-sm">{project.description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full font-inter"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;