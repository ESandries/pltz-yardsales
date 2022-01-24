import React from 'react';
import ArrowIcon from "../../assets/icons/flechita.svg";
import ShoppingCartIcon from "../../assets/icons/icon_shopping_cart.svg"
import './accounNavBar.scss';

const Account = () => {
    return (
        <div className="NavBarAccount">
            <ul>
                <li className="NavBarUser">hello.esandries@gmail.com <img src={ArrowIcon} /></li>
                <li className="NavbarShoppipngCartIcon">
                    <img src={ShoppingCartIcon} alt="Icono de carrito de compras" className='NavbarShoppipngCartIcon_img' />
                    <div>2</div>
                </li>
            </ul>
        </div>
    );
};

export default Account;