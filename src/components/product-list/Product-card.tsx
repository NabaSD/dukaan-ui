import React from 'react';
import add from '../../assets/images/add.png'
import minus from '../../assets/images/minus.png'
import './Product.scss';

function ProductCard(props: any) {
    const {product, index, length} = props;
    return (
        <div className={`f-r-s-c product-card ${index !== 0 ? "m-t-16": ""} ${index < length-1 ? "b-b-16": ""}`}>
            <div className="product-img-container">
                <img src={product.imgSrc} alt="product"/>
                { product.offer ? <div className="offer">{product.offer}</div> : null }
            </div>
            <div className="f-c-c-s product-details">
                <div className="product-title">{product.productTitle} {index} {length-1}</div>
                <div className="unit">{`${product.unit} Unit`}</div>
                <div className="f-r-b-c w-100 price-and-action">
                    <div className="f-r-s-c">
                        <div className="price m-r-4">{product.price}</div>
                        {product.oldPrice ? <div className="fadded-price">{product.oldPrice}</div> : null}
                    </div>
                    { product.isAvailable ? 
                        <div className="box f-r-c-c">
                            {product.isAdded ? 
                                <img src={minus} alt="minus"/> : 
                                <div className="add-text">ADD</div>
                            }
                            {product.isAdded ? <div className="add-num"><div>{product.addedNumber}</div></div> : null}
                            <img src={add} alt="plus"/>
                        </div> :
                        <div className="error">Out of stock</div> 
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductCard;