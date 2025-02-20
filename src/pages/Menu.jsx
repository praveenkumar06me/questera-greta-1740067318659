import { motion } from 'framer-motion';

const menuCategories = [
  {
    category: "Hot Coffee",
    items: [
      { name: "Espresso", price: 2.99, description: "Pure and intense" },
      { name: "Cappuccino", price: 4.49, description: "Espresso with steamed milk foam" },
      { name: "Latte", price: 4.49, description: "Espresso with steamed milk" },
      { name: "Americano", price: 3.49, description: "Espresso with hot water" }
    ]
  },
  {
    category: "Cold Coffee",
    items: [
      { name: "Iced Latte", price: 4.99, description: "Chilled espresso with cold milk" },
      { name: "Cold Brew", price: 4.99, description: "Slow-steeped and smooth" },
      { name: "Frappuccino", price: 5.49, description: "Blended coffee drink" },
      { name: "Iced Americano", price: 3.99, description: "Chilled espresso with water" }
    ]
  },
  {
    category: "Non-Coffee",
    items: [
      { name: "Hot Chocolate", price: 3.99, description: "Rich and creamy" },
      { name: "Chai Tea Latte", price: 4.49, description: "Spiced black tea with milk" },
      { name: "Green Tea", price: 3.49, description: "Traditional Japanese sencha" },
      { name: "Matcha Latte", price: 4.99, description: "Premium grade matcha" }
    ]
  }
];

const Menu = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Our Menu
      </motion.h1>

      <div className="space-y-12">
        {menuCategories.map((category, categoryIndex) => (
          <motion.div 
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-brown-900">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((item, itemIndex) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-green-600 font-semibold">${item.price}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;