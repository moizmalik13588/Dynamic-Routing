import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {loading && <div className="text-center text-gray-500">Loading...</div>}
        {error && <div className="text-center text-red-500">Error fetching product details.</div>}
        {product && !loading && !error && (
          <>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h1 className="text-xl font-bold mt-4">{product.title}</h1>
            <p className="text-gray-600 mt-2">Price: ${product.price}</p>
            <p className="text-gray-800 mt-2">Rating: {product.rating.toFixed(1)}</p>
            <p className="text-gray-800 mt-2">{product.description}</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
