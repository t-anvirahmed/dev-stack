import heroBanner from "../assets/banner-stack.png";
import "../index.css";
const Hero = () => {
  return (
    //-----without responsive-----
    // <div className="container mx-auto m-24 p-4 flex justify-between items-center">
    //   <div>
    //     <h1 className="text-7xl font-extrabold text-heading">
    //       Build Your Ideal <br />
    //       <span className="bg-text-gradient bg-clip-text text-transparent">
    //         Development Stack
    //       </span>
    //     </h1>
    //     <p className="text-lg text-primary-text mt-10 mb-10">
    //       Explore frontend, backend, database, and tooling options,
    //       <br /> compare them side by side, and put together the stack that fits
    //       your <br /> next project.
    //     </p>
    //     <div className="flex gap-4">
    //       <button className="font-semibold bg-btn-gradient text-white rounded-xl p-4 cursor-pointer transition-all duration-300 ease-out hover:scale-105">
    //         Explore Technologies
    //       </button>
    //       <button className=" box-border border-2 border-[#E5E7EB] px-12 py-3 rounded-xl cursor-pointer transition-all duration-300 ease-out hover:scale-105">
    //         Learn More
    //       </button>
    //     </div>
    //   </div>
    //   <div>
    //     <img src={heroBanner} alt="" />
    //   </div>
    // </div>
    //----------------------------
    //--responsive styles from chatgpt--
    <div className="container mx-auto px-4 pt-24 sm:px-6 lg:px-8 lg:py-24">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
        {/* Hero Content */}
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          {/* Heading */}
          <h1
            className="
          text-4xl
          font-extrabold
          leading-tight
          text-heading
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
          >
            Build Your Ideal
            <br />
            <span className="bg-text-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          {/* Description */}
          <p
            className="
          mx-auto
          mt-5
          max-w-md
          text-base
          leading-relaxed
          text-primary-text
          sm:text-lg
          lg:mx-0
          lg:mt-8
          lg:max-w-xl
        "
          >
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div
            className="
          mt-7
          flex
          w-full
          justify-center
          gap-3
          sm:gap-4
          lg:justify-start
        "
          >
            <button
              className="
            flex-1
            rounded-xl
            bg-btn-gradient
            px-4
            py-3
            font-semibold
            text-white
            cursor-pointer
            transition-all
            duration-300
            ease-out
            hover:scale-105
            sm:flex-none
            sm:px-6
            sm:py-4
            text-sm
          "
            >
              Explore Technologies
            </button>

            <button
              className="
            flex-1
            rounded-xl
            border-2
            border-[#E5E7EB]
            px-4
            py-3
            cursor-pointer
            transition-all
            duration-300
            ease-out
            hover:scale-105
            sm:flex-none
            sm:px-10
            sm:py-3
            text-sm
          "
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={heroBanner}
            alt="Development technologies"
            className="
          mx-auto
          w-full
          max-w-sm
          object-contain
          sm:max-w-md
          lg:max-w-xl
        "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
