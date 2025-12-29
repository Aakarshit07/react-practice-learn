import { useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.log("Faiiled to load cart from localstorage", error);
      return [];
    }
  });

  // Persist cart to localstorage
  useEffect(() => {
    try {
      const savedcart = localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.log("Faiiled to save cart to localstorage", error);
    }
    return () => {};
  }, [cart]);

  // Sync Across
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "cart") {
        try {
          const newCart = JSON.parse(e.newValue || []);
          setCart(newCart);
        } catch (error) {
          console.log("Faiiled to parse cart to localstorage", error);
        }
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
}
