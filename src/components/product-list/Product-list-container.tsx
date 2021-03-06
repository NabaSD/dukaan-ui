import React from 'react';
import ProductList from './Product-list';
import creamBowl from '../../assets/images/icecream-M.png';
import baskin from '../../assets/images/baskin.png';
import creamBowl2 from '../../assets/images/icecream-2.png';
import kawlity from '../../assets/images/icecream-3.png';

const categoryWiseProducts = [
    {
        categoryName: 'Ice Creams',
        products: [
            {
                productTitle: 'Ice Cream Bowl',
                unit: 1,
                price: '₹209',
                oldPrice: '₹399',
                offer: '30% OFF',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: creamBowl
            },
            {
                productTitle: 'Baskin Robbin’s Scoop Cup',
                unit: 1,
                price: '₹399',
                oldPrice: '',
                offer: '',
                isAvailable: false,
                isAdded: false,
                addedNumber: '',
                imgSrc: baskin
            },
            {
                productTitle: 'Ice Cream Bowl',
                unit: 1,
                price: '₹249',
                oldPrice: '',
                offer: '',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: creamBowl2
            },
            {
                productTitle: 'Kwality Walls Black Currant',
                unit: 1,
                price: '₹175',
                oldPrice: '',
                offer: '',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: kawlity
            },
            {
                productTitle: 'Ice Cream Bowl',
                unit: 1,
                price: '₹209',
                oldPrice: '₹399',
                offer: '30% OFF',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: creamBowl
            },
            {
                productTitle: 'Baskin Robbin’s Scoop Cup',
                unit: 1,
                price: '₹399',
                oldPrice: '',
                offer: '',
                isAvailable: false,
                isAdded: false,
                addedNumber: '',
                imgSrc: baskin
            },
            {
                productTitle: 'Ice Cream Bowl',
                unit: 1,
                price: '₹249',
                oldPrice: '',
                offer: '',
                isAvailable: true,
                isAdded: true,
                addedNumber: 3,
                imgSrc: creamBowl2
            },
            {
                productTitle: 'Kwality Walls Black Currant',
                unit: 1,
                price: '₹175',
                oldPrice: '',
                offer: '',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: kawlity
            },
            {
                productTitle: 'Ice Cream Bowl',
                unit: 1,
                price: '₹209',
                oldPrice: '₹399',
                offer: '30% OFF',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: creamBowl
            },
            {
                productTitle: 'Baskin Robbin’s Scoop Cup',
                unit: 1,
                price: '₹399',
                oldPrice: '',
                offer: '',
                isAvailable: false,
                isAdded: false,
                addedNumber: '',
                imgSrc: baskin
            },
            {
                productTitle: 'Ice Cream Bowl',
                unit: 1,
                price: '₹249',
                oldPrice: '',
                offer: '',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: creamBowl2
            },
            {
                productTitle: 'Kwality Walls Black Currant',
                unit: 1,
                price: '₹175',
                oldPrice: '',
                offer: '',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: kawlity
            }
        ]
    },
    {
        categoryName: 'Ice Creams',
        products: [
            {
                productTitle: 'Ice Cream Bowl',
                unit: 1,
                price: '₹209',
                oldPrice: '',
                offer: '',
                isAvailable: true,
                isAdded: false,
                addedNumber: '',
                imgSrc: creamBowl
            }
        ]
    }
]

function ProductListContainer(props: any) {
    return (
        <div className="list-container">
            {
                categoryWiseProducts.map((products,index )=>
                    <ProductList productList={products}/>
                )
            }
        </div>
    );
}

export default ProductListContainer;