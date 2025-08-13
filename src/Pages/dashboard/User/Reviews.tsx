import { useState } from 'react';
import Breadcrumb from '../../../Components/Breadcrumb';
import Rating from '../../../Components/Rating';

const UserReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      product: {
        id: 1,
        name: 'Ultra HD Tablet Pro',
        image: 'tablet-pro.jpg'
      },
      rating: 4,
      comment: 'Great tablet with excellent display quality. Battery life could be better though.',
      date: '2023-05-20',
      helpful: 12
    },
    {
      id: 2,
      product: {
        id: 4,
        name: 'Wireless Headphones',
        image: 'headphones.jpg'
      },
      rating: 5,
      comment: 'Amazing sound quality and noise cancellation. Very comfortable for long sessions.',
      date: '2023-04-15',
      helpful: 24
    }
  ]);

  const deleteReview = (reviewId: number) => {
    setReviews(reviews.filter(review => review.id !== reviewId));
  };

  return (
    <div>
      <Breadcrumb 
        items={[
          { name: 'Dashboard', path: '/dashboard' },
          { name: 'My Reviews' }
        ]} 
      />
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Product Reviews</h1>
      
      {reviews.length > 0 ? (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between items-center">
                <div className="flex items-center">
                  <img
                    src={review.product.image}
                    alt={review.product.name}
                    className="h-16 w-16 rounded object-cover mr-4"
                  />
                  <h3 className="text-lg font-medium text-gray-900">
                    {review.product.name}
                  </h3>
                </div>
                <button
                  onClick={() => deleteReview(review.id)}
                  className="text-red-600 hover:text-red-900 text-sm font-medium"
                >
                  Delete Review
                </button>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center mb-2">
                  <Rating value={review.rating} />
                  <span className="ml-2 text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{review.comment}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{review.helpful} people found this helpful</span>
                  <button className="ml-4 text-indigo-600 hover:text-indigo-900">
                    Edit Review
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">You haven't reviewed any products yet</h3>
          <p className="text-gray-600 mb-4">Your reviews help other customers make informed decisions</p>
          <a
            href="/products"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Shop Now
          </a>
        </div>
      )}
    </div>
  );
};

export default UserReviews;