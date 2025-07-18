import { useState, useRef, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

// Animated 3D Background Component
const AnimatedSphere = () => {
  const sphereRef = useRef();
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5;
    if (sphereRef.current) {
      sphereRef.current.distort = 0.3 + Math.sin(t) * 0.1;
      sphereRef.current.rotation.x = t * 0.1;
      sphereRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <Sphere args={[1, 100, 100]} ref={sphereRef} position={[0, 0, 0]} scale={1.8}>
      <MeshDistortMaterial
        color="#6366f1"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-70">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins text-slate-800 dark:text-white mb-6">
              <span className="block">Turning Ideas Into</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 font-inter mb-8 max-w-2xl mx-auto lg:mx-0">
              Freelance developer specializing in creating stunning, high-performance websites and applications that drive results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/contact" 
                  className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 font-inter"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Let's Work Together
                  <span className="ml-2 inline-block transition-transform duration-300 transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/portfolio" 
                  className="inline-block px-8 py-4 bg-transparent border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 text-slate-800 dark:text-white font-medium rounded-lg transition-all duration-300 font-inter"
                >
                  View My Work
                </Link>
              </motion.div>
            </div>
            
            {/* Stats Counter */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <CounterItem value={50} label="Projects Completed" />
              <CounterItem value={15} label="Happy Clients" />
              <CounterItem value={3} label="Years Experience" />
              <CounterItem value={99} label="Satisfaction Rate" suffix="%" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 dark:bg-indigo-900/30 rounded-full filter blur-3xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-100 dark:bg-cyan-900/30 rounded-full filter blur-3xl opacity-70"></div>
              <img 
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" 
                alt="Developer" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto z-10 relative"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-slate-500 dark:text-slate-400 text-sm mb-2 font-inter">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-slate-500 dark:border-slate-400 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-1.5 h-1.5 bg-indigo-600 dark:bg-indigo-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Counter Component with Animation
const CounterItem = ({ value, label, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  
  useState(() => {
    let startValue = 0;
    const endValue = value;
    const duration = 2000;
    const increment = endValue / (duration / 16); // 60fps
    
    const counter = setInterval(() => {
      startValue += increment;
      
      if (startValue > endValue) {
        setCount(endValue);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startValue));
      }
    }, 16);
    
    return () => clearInterval(counter);
  }, [value]);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm shadow-lg"
    >
      <h3 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 font-poppins" ref={counterRef}>
        {count}{suffix}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 font-inter text-sm mt-1">{label}</p>
    </motion.div>
  );
};

export default Hero;