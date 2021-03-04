import React from 'react';
import './footer.scss';
import FooterIcon from './Footer-icon';
import easyreturns from '../../assets/images/easyreturns.png';
import protection from '../../assets/images/protection.png';
import support from '../../assets/images/support.png';
import Storedetails from '../../components/storedetails/Storedetails';
import ContactUs from '../contact-us/Contact-us';
import FabButton from '../../components/fab-button/Fab-button';

const NAV_ICON_LIST = [
    {
        text: 'Free Delivery',
        iconRef: easyreturns,
        condition: '(above ₹500)'
    },
    {
        text: 'Buyer Protection',
        iconRef: protection,
        condition: ''
    },
    {
        text: 'Customer Support',
        iconRef: support,
        condition: ''
    }
];


function FooterContainer(props: any) {
    return (
            <div className="f-c-c-c footer-container"> 
                <div className="f-r-b-c w-100">
                    <div className="f-c-s-b icon-container w-100">
                        {
                            NAV_ICON_LIST.map(navicon=> 
                                <div>
                                    <FooterIcon icon={navicon}/>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="hr-line w-100"></div>
                <Storedetails/>
                <ContactUs />
                <FabButton />
            </div>
    );
}

export default FooterContainer;