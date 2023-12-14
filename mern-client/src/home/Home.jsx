import Banner from "../components/Banner"
import FavBook from "./FavBook"
import FavouriteBooks from "./FavouriteBooks"
import OrtherBooks from "./OtherBooks"
import PromoBanner from "./PromoBanner"
import ReviewBook from "./ReviewBook"

const Home = () => {
  return (
    <div>
      <Banner />
      <FavouriteBooks />
      <FavBook />
      <PromoBanner />
      <OrtherBooks/>
      <ReviewBook/>
    </div>
  )
}

export default Home
