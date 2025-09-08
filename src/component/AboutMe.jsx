import React from "react";
import Group from "../assets/Group 62.png"

const AboutMe = () => {
  return (
    <>
      <main className="layout bg-[#222831]">
        <article className="flex ">

        {/* section for About me context */}
        <section className="text-white w-1/2">
          <h1 className="text-[64px]  font-Poppins leading-[100%] tracking-[0%] ">About <span className="text-[#00ADB5]">me</span></h1>
          <p className="font-Poppins leading-[100%] tracking-[0%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.... Read more
          </p>
        </section>
        {/* Section for About Me Illustration Image */}
        <section id="illustration" >
          <figure><img src={Group} alt="ilustration image " /></figure>
        </section>
        </article>
      </main>
    </>
  );
};

export default AboutMe;
