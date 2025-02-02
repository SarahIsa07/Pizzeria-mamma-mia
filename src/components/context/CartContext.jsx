import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [countCart, setCountCart] = useState([]);
    return (
        <CartContext.Provider value={{ countCart, setCountCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider