import vectorSVG from "../assets/Vector 186.svg";
import vectorSVG1 from "../assets/Group 2372.svg";
import send from "../assets/send.svg";
import keyboard from "../assets/keyboard.png";
import mail from "../assets/mail.png";
import Ellipse from "../assets/Ellipse 3.png";

const GoOnAProject = () => {
  return (
    <div className="min-h-screen bg-[#222831] relative overflow-hidden">
      <img
        src={keyboard}
        alt=""
        className="absolute right-8 top-20 lg:right-180 lg:top-12"
      />
      <img
        src={mail}
        className="absolute bottom-0 right-0 md:bottom-10 md:right-10 lg:bottom-30 lg:right-70"
      />

      <div className="flex justify-center items-center w-full min-h-screen">
        <div className="flex justify-between items-start container mx-auto py-10 px-5 flex-col lg:flex-row">
          {/* Left Section */}
          <div className="w-full relative">
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Got a project in <br />
              <span className="text-[#00ADB5]">mind?</span>
            </h2>
            <div className="flex gap-2 mt-4">
              <img
                src={vectorSVG}
                alt="Vector"
                className="w-[30%]   lg:w-[20%]"
              />
              <img
                src={vectorSVG1}
                alt="Vector1"
                className="w-[60%] md:w-[40%] lg:w-[40%]"
              />
              <img
                src={Ellipse}
                className="absolute left-25 bottom-[-10px] lg:left-35 md:left-50"
              />
            </div>
          </div>

          {/* Right Section (Form) */}
          <form className="text-white flex flex-col gap-12 w-full mt-10 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="bg-[#393E4680] py-4 px-2 rounded-[16px] w-full placeholder:text-[#EEEEEE80]"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Your email</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="bg-[#393E4680] py-4 px-2 rounded-[16px] w-full placeholder:text-[#EEEEEE80]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                placeholder="Message"
                className="w-full h-40 md:h-70 bg-[#393E4680] rounded-[16px] placeholder:text-[#EEEEEE80] px-4 py-2"
              ></textarea>
            </div>

            <div className="py-4 px-2 lg:w-[232px]  rounded-full bg-[#00ADB5] text-center flex justify-center gap-2 items-center font-black shadow-sm">
              Send Message <img src={send} alt="send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoOnAProject;
