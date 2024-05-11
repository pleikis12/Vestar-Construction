import { curve, heroBackground, renovation, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parralaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parralaxRef}>
        <div
          className="relative z-1 max-w-[62rem] 
        mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb:
        [6.25rem]"
        >
          <h1 className="h1 mb-6">
            Profesionaliai &nbsp; Atliekame &nbsp; Lorem ipsum dolor sit{" "}
            <span className="inline-block relative">
              amet.{" "}
              <img
                src={curve}
                className="absolute top-full left-0 
                w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Lorem ipsum dolor sit amet.
          </p>
          <Button href="#aboutus" white>
            Get Started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/440] lg:aspect-[1024/600] rounded-lg shadow-lg bg-slate-600 p-[0.4rem]">
                <img
                  src={renovation}
                  className="w-full "
                  width={1024}
                  height={600}
                  alt="interior"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-20 md:w-[40rem] md:-translate-x-1/2 lg:w-[50rem]" />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="opacity-5 absolute -top-[90%] md:-top-[93%] lg:-top-[22%] w-[174%] -translate-x-1/2 md:w-[174%] left-1/2">
            <img
              src={heroBackground}
              className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[25%] lg:-translate-y-[40%]"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
