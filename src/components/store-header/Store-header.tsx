import React from 'react';
import './Store-header.scss';
import store from '../../assets/images/store.png';
import tick from '../../assets/images/tick.svg';

function StoreHeader() {
    return (
        <div className="f-r-s-c m-x-16 m-y-12">
            <img src={store} alt="store"></img>
            <div className="f-c-c-s m-l-10">
                <h1 className="store-name m-0">Mano Super Market</h1>
                <div className="f-r-s-c">
                    <img className="m-r-4" src={tick} alt="tick"/>
                    <h3 className="store-tier m-0">TRUSTED SELLER</h3>
                </div>
            </div>
        </div>
    );
}

export default StoreHeader