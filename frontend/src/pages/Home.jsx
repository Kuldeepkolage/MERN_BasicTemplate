import { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductCard } from '../components2/productcard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=3');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = async (product) => {
    try {
      await axios.post('http://localhost:5000/api/records', {
        productName: product.name,
        productPrice: product.price,
        productImage: product.image,
        // Set default values for other fields or leave them empty
        name: '',
        email: '',
        message: '',
        phone: '',
        address: '',
        quantity: 1,
        dateOfBirth: ''
      });
      alert('Product added to cart!');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add product to cart.');
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-blue-600 text-center mb-8">Discover Amazing Products at TechHub</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={`$${product.price}`}
            image={product.image}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
