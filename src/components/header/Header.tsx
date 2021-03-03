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
            <strong><div className="text-decoration-underline line-1 ">DOWNLOAD APP</div></strong>
        </div>
    );
}

export default Header;