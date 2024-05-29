import image_hero from "../src/assets/image-hero-desktop.png";
import client_audiophile from "../src/assets/client-audiophile.svg";
import client_databiz from "../src/assets/client-databiz.svg";
import client_maker from "../src/assets/client-maker.svg";
import client_meet from "../src/assets/client-meet.svg";

const Section = () => {
  return (
    <div className="flex w-[87%] mx-auto sm:justify-between gap-20  flex-wrap sm:w-[90%] justify-center">
      <article className="flex-1 flex flex-col gap-6 sm:mt-48 mt-16">
        <h1 className="sm:text-7xl font-bold text-4xl sm:text-wrap text-center sm:text-left">
          Make remote work
        </h1>
        <p className="sm:max-w-[380px] text-MediumGray text-center sm:text-left">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="bg-black w-32 m-auto sm:m-0 text-white p-2 rounded-md ease-in-out duration-300 hoverBtn font-semibold ">
          Learn more
        </button>

        <div className="grid grid-cols-2 gap-3 sm:mt-20 my-10 place-items-center sm:grid-cols-4">
          <img src={client_databiz} alt="client databiz" className="inline" />
          <img
            src={client_audiophile}
            alt="client audiophile"
            className="inline"
          />
          <img src={client_meet} alt="client meet" className="inline" />
          <img src={client_maker} alt="client maker" className="inline" />
        </div>
      </article>

      <article className="flex-1 mt-24 hidden sm:block">
        <img src={image_hero} alt="image-hero" className="max-w-[400px]" />
      </article>
    </div>
  );
};

export default Section;
