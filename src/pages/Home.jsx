import Hero from "../components/Home/Hero";
import TravelSearch from "../components/Home/TravelSearch";
import PopularDestinations from "../components/Home/PopularDestinations";
import WhoWeAre from "../components/Home/WhoWeAre";
import Services from "../components/Home/Services";
import FeaturedPackages from "../components/Home/FeaturedPackages";
import Events from "../components/Home/Events";
import Testimonials from "../components/Home/Testimonials";
import FAQ from "../components/Home/FAQ";
import Stats from "../components/Home/Stats";
import Newsletter from "../components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />

      <TravelSearch />

      <PopularDestinations />

      <WhoWeAre />

      <Services />

      <FeaturedPackages />

      <Events />

      <Testimonials />

      <FAQ />

      <Stats />

      <Newsletter />
    </>
  );
};

export default Home;