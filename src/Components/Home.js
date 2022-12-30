import './ComponentCss/Home.css';
import "react-responsive-carousel/lib/styles/carousel.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ProductList from './Product/ProductList'
import { randomProducts } from './Helpers/AlgFunctions'
import { getProductsFromApi } from '../actions/Product'
import EnlargedProduct from './Product/EnlargedProduct';
var Carousel = require('react-responsive-carousel').Carousel

function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const firstRandomProducts = randomProducts(products, 3)

    const [enlargedProduct, setEnlargedProduct] = useState(false)

    useEffect(function() {
        dispatch(getProductsFromApi())
    }, [dispatch])

    if(Object.keys(products).length == 0) {
        return (
            <h1>Hmmmm...Something went wrong</h1>
        )
    }

    return (
        <>
            <h1>Aglets Store</h1>
            {enlargedProduct && <EnlargedProduct product={enlargedProduct} setEnlargedProduct={setEnlargedProduct}/> }
            <div className='carouselWrapper'>
            <Carousel
                showArrows={true}
                >
                    <div 
                        onClick={() => setEnlargedProduct(firstRandomProducts[1])}>
                        <img 
                            className='carouselImg'
                            src={firstRandomProducts[1].imageSrc} 
                        />
                        <p className='legend'>
                            {firstRandomProducts[1].name}
                        </p>
                    </div>
                    <div
                        onClick={() => setEnlargedProduct(firstRandomProducts[2])}>
                        <img 
                            className='carouselImg'
                            src={firstRandomProducts[2].imageSrc} 
                        />
                        <p className='legend'>
                            {firstRandomProducts[2].name}
                        </p>
                    </div>
                    <div
                        onClick={() => setEnlargedProduct(firstRandomProducts[3])}>
                        <img 
                            className='carouselImg'
                            src={firstRandomProducts[3].imageSrc} 
                        />
                        <p className='legend'>
                            {firstRandomProducts[3].name}
                        </p>
                    </div>
            </Carousel>
            </div>
        </>
    )
}

export default Home