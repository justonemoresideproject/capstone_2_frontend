import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Carousel } from 'react-responsive-carousel';

import ProductList from './Product/ProductList';
import { randomProducts } from './Helpers/AlgFunctions';
import MovingProduct from './Product/MovingProduct';
import { getProductsFromApi } from '../actions/Product';

import "react-responsive-carousel/lib/styles/carousel.min.css";
var Carousel = require('react-responsive-carousel').Carousel;

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

    console.log(firstRandomProducts)

    return (
        <>
            <Carousel 
                showArrows={true} 
                // onChange={onChange} 
                // onClickItem={onClickItem} 
                // onClickThumb={onClickThumb}
                >
                {Object.keys(randomProducts).map((key, index) => {
                    console.log(randomProducts[key])
                    return (
                        <div>
                            <img src={randomProducts[key].imageSrc} />
                            <p className='legend'>Legend {index + 1}</p>
                        </div>
                    )
                })}
                    {/* <div>
                        <img src={firstRandomProducts[1].imageSrc} />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img src={firstRandomProducts[2].imageSrc} />
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img src={firstRandomProducts[3].imageSrc} />
                        <p className="legend">Legend 3</p>
                    </div> */}
            </Carousel>
            
            <ProductList products={randomProducts} rows={2} />
        </>
    )
}

export default Home