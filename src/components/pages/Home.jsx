
import Ads from "../layouts/Ads"
import Banner from "../layouts/Banner"
import FooterTop from "../layouts/FooterTop"
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
        <Ads/>
        <FooterTop/>
        </>
    )
}

export default Home