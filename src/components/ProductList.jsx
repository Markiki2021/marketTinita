/* FRUTAS Y VERDURAS
   DESPENSA
   LACTEOS Y HUEVO
   QUESOS Y SALCHICHONERIA
   JUGOS Y BEBIDAS
   CARNES,PESCADOS Y MARISCOS
   PANADERIA Y TORTILLERIA
   ALIMENTOS CONGELADOS
   CERVEZAS, VINOS Y LICORES
   FARMACIA
   HIGIENE PERSONAL Y BELLEZA 
   LIMPIEZA DEL HOGAR
   LAVANDERIA
   ARTICULOS DEL HOGAR
   MASCOTAS
   BEBES
*/

import 'primeicons/primeicons.css';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import './ProductList.css';

const ProductList = ({ productos, handleAddToCart }) => {
    return (
        <div className="product-list-container">
            {productos.map(producto => (
                <div key={producto.id} className="product-item">
                    <div className="product-item-image">
                        <img src={`../assets/img/${producto.imagen}`} alt={producto.nombre} className="product-image" />
                        {/* <img src={`/src/assets/img/${producto.imagen}`} alt={producto.nombre} className="product-image" /> */}
                    </div>
                    <div className="product-item-text">
                        <h3 className="product-name">{producto.nombre}</h3>
                        <p className="product-description">{producto.descripcion}</p>
                        <p className="product-price">Precio: ${producto.precio} / {producto.unidad}</p>
                    </div>
                    <div className="product-item-button">
                        <Button 
                            icon="pi pi-shopping-cart" 
                            label="Añadir al carrito" 
                            className="add-to-cart-button" 
                            onClick={() => handleAddToCart(producto)} 
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

ProductList.propTypes = {
    productos: PropTypes.array.isRequired,
    handleAddToCart: PropTypes.func.isRequired,
};

export default ProductList;


