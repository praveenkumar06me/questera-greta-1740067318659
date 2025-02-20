import { motion } from 'framer-motion';
import { FiCoffee, FiStar, FiMapPin } from 'react-icons/fi';

const Home = () => {
  const features = [
    {
      icon: <FiCoffee className="h-8 w-8" />,
      title: "Premium Coffee",
      description: "Expertly roasted beans from around the world"
    },
    {
      icon: <FiStar className="h-8 w-8" />,
      title: "Loyalty Rewards",
      description: "Earn points with every purchase"
    },
    {
      icon: <FiMapPin className="h-8 w-8" />,
      title: "Multiple Locations",
      description: "Find us in your neighborhood"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Hero Section */}
      <section className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Coffee shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brown-900/80 to-transparent flex items-center">
          <div className="text-cream-50 p-8 max-w-lg">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              Welcome to Brew Haven
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg mb-6"
            >
              Experience the perfect blend of artisanal coffee and cozy atmosphere
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <div className="text-green-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Drinks</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: "Caramel Macchiato",
              image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2",
              price: "$4.99"
            },
            {
              name: "Cold Brew",
              image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735",
              price: "$3.99"
            },
            {
              name: "Matcha Latte",
              image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7",
              price: "$4.49"
            },
            {
              name: "Espresso",
              image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04",
              price: "$2.99"
            }
          ].map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-green-600">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;