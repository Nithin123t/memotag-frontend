import { motion } from 'framer-motion';

const tractionData = [
  {
    stat: '3K+',
    label: 'Preorders from Caregivers',
  },
  {
    stat: '10+',
    label: 'Healthcare Partners',
  },
  {
    stat: '98%',
    label: 'User Satisfaction Rate',
  },
];

const TractionSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800">MemoTag Traction</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Real numbers that show we're solving a real need.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {tractionData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-blue-100 p-8 rounded-xl shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-extrabold text-blue-700">{item.stat}</h3>
            <p className="mt-2 text-gray-700 text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TractionSection;
