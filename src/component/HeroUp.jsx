import HeroImageRight from "../assets/HeroImageRight.png"
import HeroVectorLeft from "../assets/HeroVector.png"
import HeroVectorRight from "../assets/HeroVectorRight.png"

const HeroUp = () => {
  return (
    <section className="bg-[#222831] text-white min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex">
            <img src={HeroVectorLeft} alt="" />
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                CREATIVE UI <br />
                <span className="text-cyan-400">DESIGNER</span>
              </h1>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 transition text-white font-medium">
                  Hire me
                </button>
                <button className="px-6 py-3 rounded-full bg-gray-700 hover:bg-gray-600 transition flex items-center gap-2">
                  Download CV <img src="" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <img
              src={HeroVectorRight}
              alt="Designer Illustration"
              className="w-[80%] md:w-[90%] lg:w-full max-w-md"
            />
            <img
              src={HeroImageRight}
              alt=""
              className=" absolute top-50 rotate-270 right w-[50%] md:w-[85%]  max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroUp;
