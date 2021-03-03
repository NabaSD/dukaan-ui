import React from 'react';
import './Navbar.scss';
import NavbarTab from './Navbar-tab';
import home_active from '../../assets/images/home_active.png'; 
import bag_inactive from '../../assets/images/bag_inactive.png'; 
import orders_inactive from '../../assets/images/orders_inactive.png'; 

const TAB_LIST = [
    {
        title: 'Home',
        iconRef: home_active,
        badge: '',
        isActive: true
    },
    {
        title: 'Bag',
        iconRef: bag_inactive,
        badge: '3',
        isActive: false
    },
    {
        title: 'Orders',
        iconRef: orders_inactive,
        badge: '',
        isActive: false
    }
];

function NavContainer(props: any) {
    return (
        <div className="f-r-b-c tab">
            {
                TAB_LIST.map(tab=>
                    <NavbarTab tab={tab}/>
                )
            }
        </div>
    );
}

export default NavContainer;