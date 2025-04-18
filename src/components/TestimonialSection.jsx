import Slider from "react-slick";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Maya Singh",
    role: "Neurologist",
    quote:
      "MemoTag is transforming dementia care with real-time AI tracking. It's a breakthrough for early detection.",
  },
  {
    name: "Alex Peterson",
    role: "Caregiver",
    quote:
      "My mother’s condition is better managed thanks to MemoTag. The alerts and reports are incredibly helpful.",
  },
  {
    name: "Nina K.",
    role: "Healthcare Investor",
    quote:
      "This is one of the most promising AI health startups I’ve seen. Great team, strong traction.",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white py-20 px-6 md:px-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800">What People Are Saying</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Feedback from doctors, caregivers, and supporters of MemoTag.
        </p>
      </motion.div>

      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <div key={index} className="px-4">
            <div className="bg-blue-100 rounded-xl p-8 max-w-3xl mx-auto shadow-md text-center">
              <p className="text-xl text-gray-700 italic mb-6">“{t.quote}”</p>
              <h4 className="text-lg font-semibold text-blue-800">{t.name}</h4>
              <span className="text-sm text-gray-600">{t.role}</span>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialSection;
