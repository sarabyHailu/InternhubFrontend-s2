import Navbar from '../components/Navbar';
import HeroSection from "../components/Herosection";
import LatestCollections from "../components/LatestCollections";
import CategoryCollections from "../components/ListwithCategory";
import SummerCollection from '../components/SummerCollection';
import CategoryBrowser from "../components/BrowsebyCategory";
import Footer from "../components/Footer";
const Home = () => {
    return (
<div>
<Navbar />
      <HeroSection />
      <LatestCollections />
      <CategoryCollections/>
      <SummerCollection/>
      <CategoryBrowser/>

      <Footer /></div>)}
      export default Home;