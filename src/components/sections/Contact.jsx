/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Twitter, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ইনপুট পরিবর্তনের জন্য হ্যান্ডেলার
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ফর্ম জমা দেওয়ার জন্য হ্যান্ডেলার (এখানে আপনি আপনার API বা Email Service যোগ করবেন)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert(
      "Thank you for your message! (In a real app, this submits to a backend service like Formspree/EmailJS)"
    );
    setFormData({ name: "", email: "", message: "" }); // ফর্ম রিসেট
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/yourusername", name: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/yourusername",
      name: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/yourusername",
      name: "Twitter",
    },
    // এখানে আপনার অন্যান্য সোশ্যাল লিংক যোগ করুন
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background-dark relative z-10"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="font-display text-4xl font-bold text-center text-white mb-12 after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mx-auto after:mt-2"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-background-dark/50 p-8 rounded-xl border border-primary/20 shadow-xl">
          {/* বাম কলাম: যোগাযোগের তথ্য */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Contact Info
              </h3>
              <p className="text-white/70 mb-6">
                Let's discuss your project or research collaboration. I'm
                available for new opportunities.
              </p>

              {/* ইমেইল */}
              <div className="flex items-center gap-3 text-white mb-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-primary transition-colors"
                >
                  your.email@example.com
                </a>
              </div>

              {/* ফোন (ঐচ্ছিক) */}
              <div className="flex items-center gap-3 text-white mb-6">
                <Phone className="w-5 h-5 text-primary" />
                <span>+880 1XXXXXXXXX</span>
              </div>

              {/* সোশ্যাল মিডিয়া */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-primary transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ডান কলাম: ফর্ম */}
          <motion.div
            className="lg:col-span-2"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/5 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-white/5 border border-white/20 text-white p-3 rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                type="submit"
                className="bg-primary text-background-dark font-bold py-3 rounded-lg flex items-center justify-center transition-colors hover:bg-primary/80"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 mr-2" /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
