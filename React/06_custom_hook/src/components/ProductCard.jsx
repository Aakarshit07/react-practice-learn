import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h1>{product.name}</h1>
      <p className="price">${product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <ShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
