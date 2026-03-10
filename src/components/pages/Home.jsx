
import Ads from "../layouts/Ads"
import Banner from "../layouts/Banner"
import FooterTop from "../layouts/FooterTop"
import LimitedEdition from "../layouts/LimitedEdition"
import PromoBannerShowcase from "../layouts/PromoBannerShowcase"
import Spring from "../layouts/Spring"
import TrendProduct from "../layouts/TrendProduct"


const Home = () => {
    return (
        <>
        <Banner/>
        <TrendProduct/>
        <Spring/>
        <PromoBannerShowcase/>
        <LimitedEdition/>
        <Ads/>
        <FooterTop/>
        </>
    )
}

export default Home