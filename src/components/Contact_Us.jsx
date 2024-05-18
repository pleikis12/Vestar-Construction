import { modernhouse, stars } from "../assets";
import Section from "./Section";
import Heading from "./Heading";
import EmailJS from "./EmailJS";
import { heroBackground } from "../assets";

const Contact_Us = () => {
  return (
    <Section className="overflow-hidden" id="contact">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={modernhouse}
            className="relative z-1"
            width={350}
            height={450}
            alt="House"
          />

          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading tag="Susisiekti" title="Uzpildikite ir Susirasisime" />

        <div className="xl:container mx-auto mb-32">
          <div
            className="rounded-lg flex justify-center bg-slate-800/15"
            style={{
              height: "250px",
            }}
          >
            <h1 className="text-5xl sm:text-7sl text-white uppercase pt-12">
              Susisiekite su mumis
            </h1>
          </div>

          <div className="px-4 sm:w-2/3 lg:w-1/2 mx-auto">
            <div className="rounded-lg shadow-lg bg-slate-600/25 -mt-24 py-10 md:py-12 px-4 md:px-6 text-n-4">
              <div className=" grid-cols-2 gap-x-6 mb-12 mx-auto">
                <div>
                  <EmailJS />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact_Us;
