import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brown-900 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brew Haven</h3>
            <p className="text-cream-200">
              Your cozy corner for premium coffee and delightful moments.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/menu" className="hover:text-green-400">Menu</Link></li>
              <li><Link to="/rewards" className="hover:text-green-400">Rewards</Link></li>
              <li><Link to="/location" className="hover:text-green-400">Locations</Link></li>
              <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">
                <FiFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FiInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FiTwitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg flex-1 text-brown-900"
              />
              <button
                type="submit"
                className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-brown-700 text-center text-cream-200">
          <p>&copy; 2024 Brew Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;