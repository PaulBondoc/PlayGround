import React from "react";
import AddResourcesButton from "./AddResourcesButton";

const HeroSection = () => {
  return (
    <>
      <section className="p-3 xs:px-5 lg:px-10 relative z-[10] my-[1.5rem] sm:my-[3rem] md:my-[5rem]">
        <h1 className="xs:text-center text-[28px] sm:text-[40px] md:text-[50px] font-bold text-primary drop-shadow-lg">
          Web Development <span className="gradient">Resources</span>
        </h1>
        <p className="mt-3 sm:mt-0 xs:text-center w-full lg:w-[980px] mx-auto text-[14px] sm:text-[18px] md:text-[20px] text-primary font-medium">
          Embark on a journey of exploration, learning, and creation in the
          expansive world of web development resources.
        </p>
        <AddResourcesButton />
      </section>
    </>
  );
};

export default HeroSection;
