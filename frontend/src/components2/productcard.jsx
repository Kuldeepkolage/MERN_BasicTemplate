import tshirt from "../assets/tshirt.png"
// remove import and then -> change image value from tshirt to "./abcd" also delete images

export function ProductCard({ name = "T-Shirt", price = "₹499", image = tshirt, onAddToCart }) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({ name, price, image });
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition w-80 text-center flex flex-col">
      <img src={image} alt={name} className="rounded-md mb-3 w-full h-48 object-cover" />
      <h3 className="font-semibold text-lg mb-2 line-clamp-2">{name}</h3>
      <p className="text-gray-500 mb-4">{price}</p>
      <button onClick={handleAddToCart} className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 mt-auto">Add to Cart</button>
    </div>
  );
}
