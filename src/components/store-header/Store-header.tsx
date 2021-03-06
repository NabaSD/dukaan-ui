import React from 'react';
import './Store-header.scss';
import store from '../../assets/images/store.png';
import tick from '../../assets/images/tick.svg';
import CONSTANT from '../../shared/constants';

function StoreHeader() {
    return (
        <div className="f-r-s-s m-l-16 m-y-12">
            <img src={store} alt="store"></img>
            <div className="f-c-s-s m-l-10">
                <div className="store-name">{CONSTANT.STORE_DETAILS.name}</div>
                <div className="f-r-s-c">
                    <img className="m-r-4" src={tick} alt="tick"/>
                    <h3 className="store-tier m-0">{CONSTANT.STORE_DETAILS.tier}</h3>
                </div>
            </div>
        </div>
    );
}

export default StoreHeader