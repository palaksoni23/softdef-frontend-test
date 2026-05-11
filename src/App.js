import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import PlantCard from "./components/PlantCard";
import ReviewCard from "./components/ReviewCard";
import O2Plants from "./sections/O2Plants";
import Reviews from "./sections/Reviews";
import TopSelling from "./sections/TopSelling";
import TrendingPlants from "./sections/TrendingPlants";

function App() {
  return (
    <div>
      <Navbar />
      <HeroBanner />
      <PlantCard />
      <TrendingPlants />
      <TopSelling />
      <Reviews />
      <ReviewCard />
      <O2Plants />
      <Footer />
    </div>
  );
}

export default App;