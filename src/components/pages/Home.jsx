import React from 'react';
import { Helmet } from 'react-helmet-async';

import Ads from "../layouts/Ads"
import Banner from "../layouts/Banner"
import Collection from "../layouts/Collection"
import FooterTop from "../layouts/FooterTop"
import LimitedEdition from "../layouts/LimitedEdition"
import Promotionalbanner from "../layouts/Promotionalbanner"
import Spring from "../layouts/Spring"
import TrendProduct from "../layouts/TrendProduct"
import NewsletterModal from '../NewsletterModal';
import CookieConsent from '../CookieConsent';

const Home = () => {
    return (
        <>
        <Helmet>
            <title>Home | uomo-eCommerce</title>
            <meta name="description" content="Welcome to uomo-eCommerce. Explore our latest collections, trend products, and limited editions!" />
        </Helmet>
        <Banner/>
        <Collection/>
        <TrendProduct/>
        <Spring/>
        <Promotionalbanner/>
        <LimitedEdition/>
        <Ads/>
        <FooterTop/>
        <NewsletterModal/>
        <CookieConsent/>
        </>
    )
}

export default Home;