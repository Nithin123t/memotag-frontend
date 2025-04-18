import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="cta" className="bg-blue-50 py-20 px-6 md:px-24">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800">Get In Touch</h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Interested in MemoTag? Caregiver, doctor, or investor — drop us a message.
        </p>
      </motion.div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md grid gap-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border p-3 rounded w-full"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-3 rounded w-full"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="border p-3 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          {status === "loading" ? "Sending..." : "Submit"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">Something went wrong. Try again.</p>
        )}
      </form>
    </section>
  );
};

export default CTASection;
