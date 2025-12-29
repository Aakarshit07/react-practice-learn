import { products } from "../data/products";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-cart">
      <h1>{products.name}</h1>
      <p className="price">${products.price}</p>
      <button onClick={() => onAddToCart(product)}>
        <ShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
