import React, { useEffect } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import ProductsDummy from '../constants/productsExamples';

//multi carousel

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Product } from '../components/Product';

import { useProductsContext } from '../context/ProductsContext';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { Link } from 'react-router-dom';

export const FeaturedProductsCarousel = () => {
    const { products_loading: loading, products_error: error, featured_products: featured } = useProductsContext();

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <Carousel
            className='container__carousel'
            removeArrowOnDeviceType={['tablet', 'mobile']}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass='container'
            dotListClass=''
            draggable
            focusOnSelect={false}
            infinite
            itemClass=''
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024,
                    },
                    items: 3,
                    partialVisibilityGutter: 40,
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464,
                    },
                    items: 2,
                    partialVisibilityGutter: 30,
                },
            }}
            showDots={true}
            sliderClass=''
            slidesToSlide={1}
            swipeable={true}
        >
            {featured.map((product) => {
                const { name, id, image, category } = product;
                return (
                    
                    <Grid key={id} className='container__carousel_products' item container justify='center' alignItems='center'>
                        {/* <h1>{category}</h1> */}
                        <main>
                            <h1>{name}</h1>
                            <Link to={`/ProductsPages/${id}`}>
                                <img src={image} alt='images' width='200px' height='150px' />
                            </Link>
                        </main>
                    </Grid>
                );
            })}
        </Carousel>
    );
};
