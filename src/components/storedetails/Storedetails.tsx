import React from 'react';
import './Storedetails.scss';

const STORE_DETAILS = {
    name: 'Mano Super Market',
    address: 'Krishvi Terazzo, 80 Feet Road Indiranagar, Bengaluru, Karnataka',

}

function Storedetails(props: any) {
    return (
        <div className="f-c-c-c store-details">
            <div className="heading">STORE DETAILS</div>
            <div className="store-name">{STORE_DETAILS.name}</div>
            <div className="store-address">{STORE_DETAILS.address}</div>
        </div>
    );
}

export default Storedetails;