import { useState } from 'react';
import ProductListContainer from './components/ProductListContainer';
import Cart from './components/Cart';
import './App.css';

const App = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (producto) => {
        const existingItem = cartItems.find(item => item.id === producto.id);
        if (existingItem) {
            const updatedCart = cartItems.map(item =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...producto, cantidad: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    };

    // Calcular el total de productos en el carrito
    const totalProductsInCart = cartItems.reduce((total, item) => total + item.cantidad, 0);

    return (
        <div className="app">
            <div className="content">
                <ProductListContainer addToCart={addToCart} totalProductsInCart={totalProductsInCart} />
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
            </div>
        </div>
    );
};

export default App;

