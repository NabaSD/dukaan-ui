import React from 'react';

function BestsellersItemCard(props: any) {
    return (
        <div className="item-card">
            <img src={props.item.imgSrc} alt={`Not found`} />
            <div className="overlay"></div>
            <div className="caption">{props.item.imgCaption}</div>
        </div>
    );
}

export default BestsellersItemCard;