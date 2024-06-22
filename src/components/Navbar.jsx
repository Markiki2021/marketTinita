import { useState } from 'react';
import PropTypes from 'prop-types';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Navbar.css';

const Navbar = ({ onSearch, onFilterDepartment, cartItemCount }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    const items = [
        { label: 'Carnes', command: () => onFilterDepartment('Carnes') },
        { label: 'Desechables', command: () => onFilterDepartment('Desechables') },
        { label: 'Despensa', command: () => onFilterDepartment('Despensa') },
        { label: 'Embutidos', command: () => onFilterDepartment('Embutidos') },
        { label: 'Frutas y Verdaduras', command: () => onFilterDepartment('Frutas y Verdaduras') },
        { label: 'Huevos', command: () => onFilterDepartment('Huevos') },
        { label: 'Lacteos', command: () => onFilterDepartment('Lacteos') },
        { label: 'Limpieza', command: () => onFilterDepartment('Limpieza') },
        { label: 'Panaderia', command: () => onFilterDepartment('Pan') },
        { label: 'Pescados', command: () => onFilterDepartment('Pescados') },
        { label: 'Quesos', command: () => onFilterDepartment('Quesos') },
        { label: 'Salud', command: () => onFilterDepartment('Salud') },
        { label: 'Snacks', command: () => onFilterDepartment('Snacks') },
        { label: 'Suavizantes', command: () => onFilterDepartment('Suavizantes') },
        { label: 'Yoghourts', command: () => onFilterDepartment('Yoghourt') },
        { label: 'BORRAR', command: () => onFilterDepartment('') }
    ];

    const start = (
        <>
            <img alt="logo" src="/public/assets/img/logo_market.png" height="40" className="navbar-logo" />
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
            <i className="pi pi-bars menu-icon" onClick={() => setIsMenuVisible(!isMenuVisible)}></i>
        </div>
    );

    return (
        <>
            <Menubar model={items} start={start} end={end} className="menubar-custom" />
            {isMenuVisible && (
                <div className="menu-items-mobile">
                    {items.map((item, index) => (
                        <div key={index} className="menu-item-mobile" onClick={item.command}>
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

Navbar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    onFilterDepartment: PropTypes.func.isRequired,
    cartItemCount: PropTypes.number.isRequired,
};

export default Navbar;
