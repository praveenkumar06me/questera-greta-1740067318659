import { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { FiShoppingCart, FiPlus, FiMinus } from 'react-icons/fi';

const Order = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('Hot Coffee');

  const menuItems = {
    'Hot Coffee': [
      { id: 1, name: 'Espresso', price: 2.99, image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04' },
      { id: 2, name: 'Cappuccino', price: 4.49, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085' },
      { id: 3, name: 'Latte', price: 4.49, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735' },
    ],
    'Cold Coffee': [
      { id: 4, name: 'Iced Latte', price: 4.99, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735' },
      { id: 5, name: 'Cold Brew', price: 4.99, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735' },
      { id: 6, name: 'Frappuccino', price: 5.49, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735' },
    ],
  };

  const categories = Object.keys(menuItems);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Order Now
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="flex gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-brown-900 text-white'
                    : 'bg-cream-100 text-brown-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems[selectedCategory].map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{item.name}</h3>
                    <span className="text-green-600">${item.price}</span>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-brown-900 text-white py-2 rounded-md hover:bg-brown-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <FiPlus /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FiShoppingCart /> Your Cart
            </h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span>${item.price}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FiMinus />
                      </button>
                    </div>
                  </div>
                ))}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>
                      ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
                    </span>
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-md mt-4 hover:bg-green-700 transition-colors">
                    Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;