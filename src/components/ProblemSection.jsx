import { motion } from 'framer-motion';

const stats = [
  { label: '55M+', desc: 'People living with dementia worldwide' },
  { label: '60%', desc: 'Cases go undiagnosed globally' },
  { label: '2X', desc: 'More likely in women than men' },
];

const ProblemSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800">The Dementia Challenge</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Dementia affects millions yet remains vastly underdiagnosed and underserved.
        </p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl shadow hover:shadow-md transition bg-blue-50"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-600">{item.label}</h3>
            <p className="mt-2 text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
