import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { Button } from 'primereact/button';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
    const [showQRCode, setShowQRCode] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculateTotal = () => {
            let totalPrice = 0;
            cartItems.forEach(item => {
                totalPrice += item.precio * item.cantidad;
            });
            setTotal(totalPrice);
        };

        calculateTotal();
    }, [cartItems]);

    const handleBuy = () => {
        setShowQRCode(true);
    };

    const generateQRCodeValue = useCallback(() => {
        if (cartItems.length === 0) return 'No hay productos en el carrito';

        const qrData = cartItems.map(item => ({
            cantidad: item.cantidad,
            nombre: item.nombre,
            precio: item.precio,
            total: item.precio * item.cantidad
        }));

        // Construir el formato de texto para el código QR
        const qrText = qrData.map(item => `${item.cantidad}\t${item.nombre}\t$${item.precio.toFixed(2)}\t$${item.total.toFixed(2)}`).join('\n');
        return qrText;
    }, [cartItems]);

    return (
        <div className="cart-container">
            <div className="cart-header">
                <h2>Carrito de Compras</h2>
                <div className="cart-total">
                        <h3>Total de la Compra: ${total.toFixed(2)}</h3>
                    </div>
                {cartItems.length > 0 && (
                    <Button label="Comprar" icon="pi pi-shopping-cart" onClick={handleBuy} className="buy-button" />
                )}
            </div>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    <ul className="cart-list">
                        {cartItems.map(item => (
                            <li key={item.id} className="cart-item">
                                <img src={`/public/assets/img/${item.imagen}`} alt={item.nombre} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <span className="cart-item-name">{item.nombre}</span>
                                    <span className="cart-item-description">Descripción: {item.descripcion}</span>
                                    <span className="cart-item-price">Precio unitario: ${item.precio.toFixed(2)}</span>
                                    <span className="cart-item-quantity">Cantidad: {item.cantidad}</span>
                                    <span className="cart-item-total">Total: ${item.precio * item.cantidad.toFixed(2)}</span>
                                </div>
                                <Button
                                    className="cart-item-remove-button"
                                    icon="pi pi-trash"
                                    label='Eliminar'
                                    onClick={() => removeFromCart(item.id)}
                                />
                            </li>
                        ))}
                    </ul>
                    
                </>
            )}
            {showQRCode && cartItems.length > 0 && (
                <div className="qr-code-container">
                    <QRCode value={generateQRCodeValue()} size={200} level="H" includeMargin={true} />
                </div>
            )}
            <div className="centerText">
                <span>Copyright © Markiki 2024 </span>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default Cart;


