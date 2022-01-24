import React from 'react';
import logoIcon from '../../assets/logos/logo_yard_sale.svg'
import './logo.scss'

const Logo = () => {
    return (
        <img src={logoIcon} alt="Logo Yard Sales" className='LogoYardSales' />
    );
};

export default Logo;