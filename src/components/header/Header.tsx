import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';

function Header() {
    return (
        <div className="header f-r-b-c">
            <div className="f-r-s-c">
                <div className="line-1">Store made with</div>
                <img className="m-l-4" src={logo} alt="logo"></img>
            </div>
            <div className="text-decoration-underline header-app-link">DOWNLOAD APP</div>
        </div>
    );
}

export default Header;