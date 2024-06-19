import { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

const Home = () => {
    const [cart, setCart] = useState([]);

    const addToCart = producto => {
        setCart([...cart, { ...producto, cantidad: 1 }]);
    };

    return (
        <div>
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cart} />
        </div>
    );
};

export default Home;
