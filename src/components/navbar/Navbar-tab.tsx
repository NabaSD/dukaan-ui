import React from 'react';
import './Navbar.scss';

function NavbarTab(props: any) {
    const {tab} = props;
    return (
        <div className={`f-r-c-c tab-container ${tab.isActive ? "active" : ""}`}>
            <img className="m-r-6" src={tab.iconRef} alt="tab-icon"/>
            {tab.badge ? <div className="oval">{tab.badge}</div> : null}
            <div>{tab.title}</div>
        </div>
    );
}

export default NavbarTab;