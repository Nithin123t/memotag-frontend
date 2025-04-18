import { motion } from 'framer-motion';
import { FaHeartbeat, FaBrain, FaHandsHelping } from 'react-icons/fa';

const steps = [
  {
    icon: <FaHeartbeat className="text-4xl text-blue-600" />,
    title: "Monitor",
    desc: "Track cognitive and physical activity using wearable sensors and mobile inputs."
  },
  {
    icon: <FaBrain className="text-4xl text-blue-600" />,
    title: "Analyze",
    desc: "AI interprets behavioral data to detect early signs of cognitive decline."
  },
  {
    icon: <FaHandsHelping className="text-4xl text-blue-600" />,
    title: "Assist",
    desc: "Get actionable alerts and recommendations for caregivers and families."
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-blue-50 py-20 px-6 md:px-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800">How MemoTag Works</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A seamless system for cognitive health monitoring and support.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;
