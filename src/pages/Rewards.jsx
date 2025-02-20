import { motion } from 'framer-motion';
import { FiGift, FiCoffee, FiAward } from 'react-icons/fi';

const Rewards = () => {
  const tiers = [
    {
      name: 'Bronze',
      points: '0-100',
      benefits: ['Free birthday drink', '10% off on Mondays', 'Exclusive newsletter'],
      icon: <FiCoffee className="h-8 w-8" />
    },
    {
      name: 'Silver',
      points: '101-300',
      benefits: ['All Bronze benefits', 'Free size upgrades', 'Double points Tuesdays'],
      icon: <FiGift className="h-8 w-8" />
    },
    {
      name: 'Gold',
      points: '301+',
      benefits: ['All Silver benefits', 'Monthly free drink', 'Priority ordering'],
      icon: <FiAward className="h-8 w-8" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl font-bold mb-4">Rewards Program</h1>
        <p className="text-gray-600">Earn points with every purchase and enjoy exclusive benefits</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md text-center"
          >
            <div className="text-green-600 flex justify-center mb-4">{tier.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{tier.name}</h2>
            <p className="text-gray-600 mb-4">{tier.points} points</p>
            <ul className="text-left space-y-2">
              {tier.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  {benefit}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="bg-brown-900 text-white p-8 rounded-lg text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Start Earning Today!</h2>
        <p className="mb-6">Join our rewards program and get 50 bonus points on your first purchase</p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
          Join Now
        </button>
      </motion.div>
    </div>
  );
};

export default Rewards;