import { motion } from 'framer-motion';
import { FiMapPin, FiClock, FiPhone } from 'react-icons/fi';

const Location = () => {
  const locations = [
    {
      name: "Downtown Cafe",
      address: "123 Main Street",
      hours: "Mon-Fri: 7am-8pm, Sat-Sun: 8am-7pm",
      phone: "(555) 123-4567",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
    },
    {
      name: "Westside Branch",
      address: "456 Park Avenue",
      hours: "Mon-Fri: 6am-9pm, Sat-Sun: 7am-8pm",
      phone: "(555) 234-5678",
      image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814"
    },
    {
      name: "University Center",
      address: "789 College Road",
      hours: "Mon-Sun: 7am-10pm",
      phone: "(555) 345-6789",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Our Locations
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <motion.div
            key={location.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <img
              src={location.image}
              alt={location.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{location.name}</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-green-600" />
                  <span>{location.address}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiClock className="text-green-600" />
                  <span>{location.hours}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <FiPhone className="text-green-600" />
                  <span>{location.phone}</span>
                </div>
              </div>

              <button className="mt-6 w-full bg-brown-900 text-white py-2 rounded-md hover:bg-brown-800 transition-colors">
                Get Directions
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Location;