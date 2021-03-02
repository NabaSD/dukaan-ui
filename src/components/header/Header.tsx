import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.svg';

function Header() {
    return (
        <div className="header f-r-b-c">
            <div className="f-r-s-c">
                <h6 className="font-size-12 m-0">Store made with</h6>
                <img className="m-l-4" src={logo} alt="logo"></img>
            </div>
            <strong><h6 className="text-decoration-underline font-size-12 m-0">DOWNLOAD APP</h6></strong>
        </div>
    );
}

export default Header;