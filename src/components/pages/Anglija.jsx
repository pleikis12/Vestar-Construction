import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Section from "../Section";
import Footer from "../Footer";
import Header from "../Header";

import Carousel from "../Carouselpage";

const Anglija = () => {
  return (
    <div>
      <Header />
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
              Sveiki Atvyke I Anglijos{" "}
              <span className="inline-block relative">Gallerija </span>
            </h1>
            <div className="p">
              <div className="flex justify-center border-4 border-slate-300 border-solid rounded-2xl flex-wrap align-content-center flex-col hover:border-slate-600 mb-[5rem] pb-4">
                <h1 className="flex-col pt-4 font-bold text-lg">
                  Epping Night Club
                </h1>
                <Carousel />
              </div>
              <div className="flex justify-center border-4 border-slate-300 border-solid rounded-2xl flex-wrap align-content-center flex-col hover:border-slate-600 pb-4">
                <h1 className="flex-col pt-4 font-bold text-lg">
                  Slough Penthouses
                </h1>
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Anglija;
