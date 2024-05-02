import FeatureProduct from "./components/FeatureProduct";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Apparel Arcade",
    para: "Apparel Arcade: Your Fashion Wonderland! Browse, shop, and redefine your style with our curated collection of trendy clothing and accessories. Experience seamless shopping and discover the perfect look for every occasion.",
  };

  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
