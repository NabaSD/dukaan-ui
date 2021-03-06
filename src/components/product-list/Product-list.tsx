import React from 'react';
import ProductCard from './Product-card';
import arrow from '../../assets/images/arrow.png';
import './Product.scss'

function ProductList(props: any) {
    const {productList: {categoryName, products}} = props;
    return (
        <div className="list">
            <div className="f-r-s-s product-details">
                <div className="section-title">
                    {categoryName}
                </div>
                <div className="counter f-r-c-c">{products.length}</div>
            </div>
            {
                products.map((product:any,index: number) => 
                    <ProductCard product={product} index={index} length={products.length}/>
                )
            }
            {
                products.length > 1 ? 
                    <div className="f-r-c-c"> 
                        <div className="all-product f-r-c-c">
                            <div>SEE ALL PRODUCTS</div>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div> : null
            }
            
        </div>
    );
}

export default ProductList;