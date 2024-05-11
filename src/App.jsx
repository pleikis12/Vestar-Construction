import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import About_Us from "./components/About_Us";
import Location from "./components/Location";
import Contact_Us from "./components/Contact_Us";
import Footer from "./components/Footer";

const App = () => {
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

export default App;
