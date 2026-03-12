
import Ads from "../layouts/Ads"
import Banner from "../layouts/Banner"
import FooterTop from "../layouts/FooterTop"
import LimitedEdition from "../layouts/LimitedEdition"
import NewPromo from "../layouts/newPromo"
// import PromoBannerShowcase from "../layouts/PromoBannerShowcase"
import Spring from "../layouts/Spring"
import TrendProduct from "../layouts/TrendProduct"


const Home = () => {
    return (
        <>
        <Banner/>
        <TrendProduct/>
        <Spring/>
        {/* <PromoBannerShowcase/> */}
        <NewPromo/>
        <LimitedEdition/>
        <Ads/>
        <FooterTop/>
        </>
    )
}

export default Home