import { heroBackground } from "../assets";
import Section from "../components/Section";

const noPage = () => {
  return (
    <div>
      <Section
        className="pt-[12rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="container relative">
          <div
            className="relative z-1 max-w-[62rem] 
        mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb:
        [6.25rem]"
          >
            <h1 className="h1 mb-6">
              Error 404:{" "}
              <span className="inline-block relative">Page not Found </span>
            </h1>
          </div>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="opacity-5 absolute -top-[90%] left-1/2 w-[174%] -translate-x-1/2 md:-top-[93%] md:w-[174%] lg:-top-[22%]">
              <img
                src={heroBackground}
                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[25%] lg:-translate-y-[40%]"
                width={1440}
                height={1800}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default noPage;
