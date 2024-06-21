import { useState } from 'react';
import PropTypes from 'prop-types';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Navbar.css';

const Navbar = ({ onSearch, onFilterDepartment, cartItemCount }) => {
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    const items = [
        { label: 'Despensa', command: () => onFilterDepartment('Despensa') },
        { label: 'Farmacia', command: () => onFilterDepartment('Farmacia') },
        { label: 'Lavandería', command: () => onFilterDepartment('Lavandería') },
        { label: 'Frutas y Verduras', command: () => onFilterDepartment('Frutas y Verduras') },
        { label: 'Lácteos y Huevo', command: () => onFilterDepartment('Lácteos y Huevo') },
        { label: 'Carnes', command: () => onFilterDepartment('Carnes') },
        { label: 'Pescados', command: () => onFilterDepartment('Pescados') },
        { label: 'BORRAR', command: () => onFilterDepartment('') }
    ];

    const start = (
        <>
            <img alt="logo" src="../assets/img/logo_market.png" height="40" />
            <span className="navbar-title">Market Tinita</span>
        </>
    );

    const end = (
        <div className="navbar-end">
            <span className="p-input-icon-left search-container">
                <InputText placeholder="Buscar" onChange={(e) => onSearch(e.target.value)} className="search-input" />
                <i className="pi pi-search search-icon" />
            </span>
            <div className="cart-icon">
                <i className="pi pi-shopping-cart" style={{ fontSize: '1.75rem' }}></i>
                <span className="cart-count">{cartItemCount}</span>
            </div>
        </div>
    );

    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    return (
        <div className="menubar-container">
            <Menubar model={items} start={start} end={end} className="menubar-custom" />
            <button className="menu-toggle" onClick={toggleMobileMenu}>
                <i className="pi pi-bars"></i>
            </button>
            {isMobileMenuVisible && (
                <div className="mobile-menu">
                    {items.map((item, index) => (
                        <button key={index} className="mobile-menu-item" onClick={item.command}>
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

Navbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onFilterDepartment: PropTypes.func.isRequired,
    cartItemCount: PropTypes.number.isRequired,
};

export default Navbar;
