import React, { useEffect } from 'react';
import { HomeCarousel } from '../components/HomeCarousel';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { FeaturedProductsCarousel } from '../components/FeaturedProductsCarousel';

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <FeaturedProducts />
            <FeaturedProductsCarousel />
        </div>
    );
};
export default Home;
