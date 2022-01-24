//Aqui se debe unir los 3 componentes> logo, categoies y account.
import React from "react";
import Account from "../../components/Account/Account";
import Categories from "../../components/Categories/Categories";
import Logo from "../../components/Logo/Logo"
import menuIcon from '../../assets/icons/icon_menu.svg'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <img src={menuIcon} alt="" className="menuIcon" />
            <Logo />
            <Categories />
            <Account />
        </div>
    );
};

export default Header;