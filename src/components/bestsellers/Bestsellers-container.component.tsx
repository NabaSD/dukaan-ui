import React from 'react';
import './Bestsellers.style.scss';
import BestsellersItemCard from './Bestsellers-item-card.component';
import dummyImg1 from '../../assets/images/icecream-L.png';
import dummyImg2 from '../../assets/images/homefood-L.png';

const BESTSELLERS = [
    {
        imgCaption: 'Ice Creams',
        imgSrc: dummyImg1
    },
    {
        imgCaption: 'Home Food',
        imgSrc: dummyImg2
    },
    {
        imgCaption: 'Ice Creams',
        imgSrc: dummyImg1
    },
    {
        imgCaption: 'Home Food',
        imgSrc: dummyImg2
    },
    {
        imgCaption: 'Ice Creams',
        imgSrc: dummyImg1
    },
    {
        imgCaption: 'Home Food',
        imgSrc: dummyImg2
    }
]


function BestsellersContainer() {
    return (
        <div className="bestsellers-container f-c-s-s">
            <div className="section-title">Bestsellers</div>
            <div className="f-r-s-c list-v">
                {
                    BESTSELLERS.map((item,index) => 
                        <div className={`${index < BESTSELLERS.length-1 ? "m-r-14" : ""}`}>
                            <BestsellersItemCard item={item}/>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default BestsellersContainer;