import { useEffect, useMemo, useState } from "react";

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

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const UpdateQuantity = (productId, quantity) => {
    console.log("prduct ID: ", productId, quantity);
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // This is Not Required in React 19 or later.
  // Usage: UseMemo, it wont recompute on Next render if cart didnt change
  const total = useMemo(() => {
    return Number(
      cart
        .reduce((sumTotal, item) => {
          const itemTotal = item.price * (item.quantity || 0);
          return sumTotal + itemTotal;
        }, 0)
        .toFixed(2)
    );
  }, [cart]);

  return {
    cart,
    addToCart,
    removeFromCart,
    UpdateQuantity,
    total,
  };
}
