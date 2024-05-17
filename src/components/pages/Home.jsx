import ButtonGradient from "../../assets/svg/ButtonGradient";
import Header from "../Header";
import Hero from "../Hero";
import Gallery from "../Gallery";
import About_Us from "../About_Us";
import Location from "../Location";
import Contact_Us from "../Contact_Us";
import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt=[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <About_Us />
        <Gallery />
        <Location />
        <Contact_Us />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
