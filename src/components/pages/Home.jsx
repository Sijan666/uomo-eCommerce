
import Ads from "../layouts/Ads"
import Banner from "../layouts/Banner"
import FooterTop from "../layouts/FooterTop"
import SmallBanner from "../layouts/SmallBanner"
import Spring from "../layouts/Spring"
import TrendProduct from "../layouts/TrendProduct"


const Home = () => {
    return (
        <>
        <Banner/>
        <TrendProduct/>
        <Spring/>
        <SmallBanner/>
        <Ads/>
        <FooterTop/>
        </>
    )
}

export default Home