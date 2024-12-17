// src/pages/NotFound.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="flex flex-col mt-32 items-center justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <motion.h1
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-[150px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500 leading-none"
        >
          404
        </motion.h1>

        <h2 className="text-2xl font-medium text-gray-200">Page Not Found</h2>

        <p className="text-gray-400 max-w-md px-4">
          The page you're looking for doesn't exist or has been moved to another
          location.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-violet-500 
          text-white font-medium hover:from-blue-700 hover:to-violet-600 transition-all duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};
