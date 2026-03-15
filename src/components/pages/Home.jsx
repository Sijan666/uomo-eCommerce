
import Ads from "../layouts/Ads"
import Banner from "../layouts/Banner"
import Collection from "../layouts/Collection"
import FooterTop from "../layouts/FooterTop"
import LimitedEdition from "../layouts/LimitedEdition"
import Promotionalbanner from "../layouts/Promotionalbanner"
import Spring from "../layouts/Spring"
import TrendProduct from "../layouts/TrendProduct"


const Home = () => {
    return (
        <>
        <Banner/>
        <Collection/>
        <TrendProduct/>
        <Spring/>
        <Promotionalbanner/>
        <LimitedEdition/>
        <Ads/>
        <FooterTop/>
        </>
    )
}

export default Home