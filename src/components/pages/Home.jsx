
import Ads from "../layouts/Ads"
import Banner from "../layouts/Banner"
import LimitedAddition from "../layouts/LimitedEdition"
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
        <LimitedAddition/>
        <Ads/>
        </>
    )
}

export default Home