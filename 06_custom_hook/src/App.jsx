import "./App.css";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import { products } from "./data/products";
import { useCart } from "./hooks/useCart";

function App() {
  const { cart, UpdateQuantity, removeFromCart, addToCart, total } = useCart();
  return (
    <div className="app">
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <main className="products">
        <section
          style={{
            display: "flex",
            gap: "16px",
            flexDirection: "column",
            itemAlign: "center",
            justifyContent: "center",
          }}
        >
          {products.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={addToCart} />
          ))}
        </section>
        <section
          style={{
            width: "100%",
          }}
        >
          <div>
            <Cart
              cart={cart}
              onUpdateQuantity={UpdateQuantity}
              onRemove={removeFromCart}
              total={total}
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
