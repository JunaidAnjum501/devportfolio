import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-9xl font-bold text-indigo-600 dark:text-indigo-400 font-poppins">404</h1>
        <h2 className="text-3xl font-semibold text-slate-800 dark:text-white mt-4 mb-6 font-poppins">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-300 mb-8 font-inter">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="btn btn-primary px-8 py-3 rounded-lg shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;