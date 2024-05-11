import Section from "./Section";
import Heading from "./Heading";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import { check, service1, service2, service3 } from "../assets";
import { Gradient } from "./design/Services";

const Location = () => {
  return (
    <Section id="location">
      <div className="container">
        <Heading title="Kur Mes Dirbame" />

        <div className="relative ">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem] ">
            <div className="absolute inset-0 top-0 left-0 w-full h-full md:w-3/5 xl:w-auto ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143887.3874763195!2d21.102981215554237!3d55.70219246337986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4dbfae447448b%3A0x80acbc67146d87a1!2sKlaip%C4%97da%2C%20Klaipeda%20City%20Municipality%2C%20Lithuania!5e0!3m2!1sen!2sus!4v1714149853895!5m2!1sen!2sus"
                width="1280"
                height="735"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto bg-gradient-to-b from-n-8/0 to-n-8/20 lg:p-0">
              <h4 className="h4 mb-4 text-n-11 font-bold ">Klaipedos City</h4>
              <ul className="body-2 text-n-11 font-semibold ">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-s border-e border-b border-n-6/30 "
                  >
                    <img className="ml-3" width={24} height={24} src={check} />
                    <p className="ml-5">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2 ">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden ">
              <div className="absolute inset-0 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d142913.74877379154!2d20.929132344355654!3d55.966228871132174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e5293217c7cec3%3A0x604cbaa99f7d399!2sPalanga%2C%20Palanga%20City%20Municipality!5e0!3m2!1sen!2slt!4v1714152732373!5m2!1sen!2slt"
                  width="627"
                  height="742"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Palanga</h4>
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem] bg-gradient-to-b from-n-8/0 to-n-6">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Gargzdai</h4>
                <p className="body-2 mb-[2rem] text-n-3">Ir Aplink</p>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17981.549352914106!2d21.359920528421462!3d55.71169629604988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e4e1016277f521%3A0xa00d18ec9ba7800!2sGarg%C5%BEdai%2C%20Klaip%C4%97da%20District%20Municipality!5e0!3m2!1sen!2slt!4v1714153341803!5m2!1sen!2slt"
                  width="597"
                  height="400"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Location;
