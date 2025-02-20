import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Contact Us
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your email"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-brown-900 text-white py-2 rounded-md hover:bg-brown-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiMail className="text-green-600 h-5 w-5" />
                <span>contact@brewhaven.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <FiPhone className="text-green-600 h-5 w-5" />
                <span>(555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-3">
                <FiMapPin className="text-green-600 h-5 w-5" />
                <span>123 Coffee Street, Brew City, BC 12345</span>
              </div>
              
              <div className="flex items-center gap-3">
                <FiClock className="text-green-600 h-5 w-5" />
                <span>Mon-Fri: 7am-8pm<br />Sat-Sun: 8am-7pm</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Follow Us</h2>
            <div className="flex gap-4">
              <a href="#" className="text-brown-900 hover:text-green-600 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-brown-900 hover:text-green-600 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-brown-900 hover:text-green-600 transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;