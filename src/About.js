import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Apparel Arcade",
    para: "Welcome to Apparel Arcade, your one-stop shop for all things style! We curate a unique collection of clothing and accessories, so you can level up your look and express yourself with confidence. Browse our ever-growing selection and discover your next wardrobe favorites.",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};
// const About = () => {
//   const { myName } = useProductContext();

//   const data = {
//     name: "Apostles' Archive",
//   };

//   return (
//     <>
//       {myName}
//       <HeroSection myData={data} />
//     </>
//   );
// };

export default About;
