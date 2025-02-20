import { motion } from 'framer-motion';
import { FiStar, FiUser } from 'react-icons/fi';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "March 15, 2024",
      comment: "Best coffee in town! The atmosphere is perfect for both work and relaxation.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      date: "March 14, 2024",
      comment: "Great service and amazing pastries. The cold brew is exceptional.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 5,
      date: "March 13, 2024",
      comment: "Love the cozy atmosphere and friendly staff. Their lattes are perfect!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FiStar
        key={index}
        className={`${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        } h-5 w-5`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Customer Reviews
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">{review.name}</h3>
                <p className="text-gray-500 text-sm">{review.date}</p>
              </div>
            </div>
            
            <div className="flex mb-4">
              {renderStars(review.rating)}
            </div>
            
            <p className="text-gray-600">{review.comment}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-12 bg-brown-900 text-white p-8 rounded-lg text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Share Your Experience</h2>
        <p className="mb-6">We'd love to hear about your visit to Brew Haven</p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
          Write a Review
        </button>
      </motion.div>
    </div>
  );
};

export default Reviews;