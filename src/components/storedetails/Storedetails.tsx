import React from 'react';
import './Storedetails.scss';
import CONSTANT from '../../shared/constants';

function Storedetails(props: any) {
    return (
        
        <div className="f-c-c-c store-details">
            <div className="heading">STORE DETAILS</div>
            <div className="store-name">{CONSTANT.STORE_DETAILS.name}</div>
            <div className="store-address">{CONSTANT.STORE_DETAILS.address}</div>
        </div>
    );
}

export default Storedetails;