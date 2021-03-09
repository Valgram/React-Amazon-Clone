import React, { useEffect } from 'react';
import { Gallery } from '../components/ComponentForSingleProduct/Gallery';
import { ProductInfoSingleProductPage } from '../components/ComponentForSingleProduct/ProductInfoSingleProductPage';
import { AddToCart } from '../components/AddToCart';
import { Grid } from '@material-ui/core';
import { FeaturedProductsCarousel } from '../components/FeaturedProductsCarousel';
import { ProductDescription } from '../components/ComponentForSingleProduct/ProductDescription';
import { ProductDetails } from '../components/ComponentForSingleProduct/ProductDetails';

import { single_product_url as url } from '../constants/URLForProducts';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/ProductsContext';
import { useParams, useHistory } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

export const SingleProductPage = () => {
    const { id } = useParams();
    const history = useHistory();
    const { single_product_loading: loading, single_product_error: error, single_product: product, fetchSingleProduct } = useProductsContext();

    useEffect(() => {
        fetchSingleProduct(`${url}${id}`);
    }, [id]);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                history.push('/');
            }, 3000);
        }
    }, [error]);

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }
    const { name, price, description, stock, stars, reviews, id: sku, company, images } = product;

    return (
        <div>
            <Grid container justify='space-around'>
                <Gallery {...product} images={images} />
                <ProductInfoSingleProductPage {...product} name={name} price={price} description={description} reviews={reviews} sku={sku} company={company} stars={stars} />
                {stock > 0 && <AddToCart product={product} />}
            </Grid>
            {/* <Grid container justify='center'>
                <ProductDescription {...product} description={description} />
            </Grid>
            <Grid container justify='center'>
                <ProductDetails {...product} sku={sku} company={company}/>
            </Grid> */}
            <Grid>
                <FeaturedProductsCarousel />
                <FeaturedProductsCarousel />
            </Grid>
        </div>
    );
};
