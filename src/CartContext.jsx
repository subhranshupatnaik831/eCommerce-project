import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // ✅ NEW

  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) {
        return prev.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + qty }
            : i
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const setCartItemQuantity = (product, qty) => {
    setCart(prev => {
      const found = prev.find(i => i.id === product.id);

      if (!found) {
        return [{ ...product, quantity: qty }];
      }

      return prev.map(i =>
        i.id === product.id ? { ...i, quantity: qty } : i
      );
    });
  };

  const clearCart = () => setCart([]);

  const cartTotal = useMemo(
    () => cart.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [cart]
  );

  // ✅ PLACE ORDER FUNCTION
  const placeOrder = (total) => {
    const newOrder = {
      id: Date.now(),
      items: cart,
      total,
      date: new Date().toLocaleString(),
    };

    setOrders(prev => [newOrder, ...prev]);
    clearCart();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders,          // ✅ expose orders
        addToCart,
        setCartItemQuantity,
        clearCart,
        cartTotal,
        placeOrder,      // ✅ expose function
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => useContext(CartContext);