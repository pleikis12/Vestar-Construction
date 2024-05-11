import { house } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.8rem] ${
        className || ""
      }
        text-base`}
    >
      <img
        className="w-5 h-5 md:mr-[10rem] xl:mr-[16rem]"
        src={house}
        alt="Location"
      />
      Palangos G 17, Palanga, Lithuania
    </div>
  );
};

export default Generating;
