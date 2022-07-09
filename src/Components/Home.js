import './ComponentCss/Home.css';
import "react-responsive-carousel/lib/styles/carousel.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ProductList from './Product/ProductList'
import { randomProducts } from './Helpers/AlgFunctions'
import { getProductsFromApi } from '../actions/Product'
var Carousel = require('react-responsive-carousel').Carousel

function Home() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    const firstRandomProducts = randomProducts(products, 3)

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
            <div className='carouselWrapper'>
            <Carousel
                showArrows={true}
                >
                    <div>
                        <img 
                            className='carouselImg'
                            src={firstRandomProducts[1].imageSrc} 
                        />
                        <p className='legend'>
                            {firstRandomProducts[1].name}
                        </p>
                    </div>
                    <div>
                        <img 
                            className='carouselImg'
                            src={firstRandomProducts[2].imageSrc} 
                        />
                        <p className='legend'>
                            {firstRandomProducts[2].name}
                        </p>
                    </div>
                    <div>
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