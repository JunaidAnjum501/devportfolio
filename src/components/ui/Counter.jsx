import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Counter = ({ end, duration = 2, label, icon, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Set up intersection observer to trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  // Animate the counter when in view
  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Use easeOutExpo for a nice deceleration effect
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeOutExpo * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end); // Ensure we end exactly at the target number
      }
    };

    // Add delay before starting animation
    const timer = setTimeout(() => {
      animationFrame = requestAnimationFrame(updateCount);
    }, delay * 1000);

    return () => {
      clearTimeout(timer);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isInView, end, duration, delay]);

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      className="flex flex-col items-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg"
    >
      {icon && (
        <div className="text-indigo-600 dark:text-indigo-400 mb-3">
          {icon}
        </div>
      )}
      <div className="text-4xl font-bold text-slate-800 dark:text-white font-poppins">
        {count.toLocaleString()}+
      </div>
      <div className="text-slate-600 dark:text-slate-300 mt-2 text-center font-inter">
        {label}
      </div>
    </motion.div>
  );
};

export default Counter;