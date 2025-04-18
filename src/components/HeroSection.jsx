import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20 px-6 md:px-24 flex flex-col-reverse md:flex-row items-center justify-between">
      {/* Left Content */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
          AI for Dementia Care
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          MemoTag helps caregivers track cognitive and physical changes with AI insights.
        </p>
        <a href="#cta">
          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get a Demo
          </button>
        </a>
      </motion.div>

      {/* Right Lottie Animation */}
      <motion.div
        className="w-full md:w-1/2 mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Player
          autoplay
          loop
          src="/animations/brain-ai.json"
          style={{ height: '300px', width: '300px' }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
