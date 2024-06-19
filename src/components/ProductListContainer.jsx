import { useState } from 'react';
import PropTypes from 'prop-types'; 
import Navbar from './Navbar';
import ProductList from './ProductList';
import productos from './productos'; // Importa tus productos desde el archivo correspondiente

const ProductListContainer = ({ addToCart, totalProductsInCart }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleFilterDepartment = (department) => {
        setSelectedDepartment(department);
    };

    const filteredProducts = productos.filter(producto => {
        const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDepartment = selectedDepartment ? producto.departamento === selectedDepartment : true;
        return matchesSearch && matchesDepartment;
    });

    return (
        <div>
            <Navbar onSearch={handleSearch} onFilterDepartment={handleFilterDepartment} cartItemCount={totalProductsInCart} />
            
            <ProductList productos={filteredProducts} handleAddToCart={addToCart} />
        </div>
    );
};

// PropTypes para validar las props
ProductListContainer.propTypes = {
    addToCart: PropTypes.func.isRequired,
    totalProductsInCart: PropTypes.number.isRequired,
};

export default ProductListContainer;


