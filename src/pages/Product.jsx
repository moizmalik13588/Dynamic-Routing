import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const goToProductDetail = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <h3 className="text-center text-3xl font-bold mb-6">All Products</h3>
      {loading && <div className="flex justify-center"><span>Loading...</span></div>}
      {error && <div className="text-center text-red-500">Error fetching data</div>}
      <div className="flex flex-wrap justify-center gap-6">
        {products && products.map((product) => (
          <div
            key={product.id} 
            className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => goToProductDetail(product.id)} 
          >
            <img
              src={product.thumbnail} 
              alt={product.title} 
              className="w-full h-48 object-cover mb-4 rounded" 
            />
            <h4 className="text-lg font-bold">{product.title}</h4> 
            <p className="text-gray-600">${product.price}</p> 
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
