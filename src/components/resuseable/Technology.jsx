import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { technology } from "@/assets/data/technology";

const Technology = () => {
  return (
    <section className=" py-[80px] xl:py-[150px] relative">
      <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] top-[450px] left-0 absolute z-[-1]"></div>
      <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] bottom-5  right-0 absolute z-[-1]"></div>
      <Container>
        <h2 className=" mx-auto font-bold text-3xl md:text-4xl lg:text-[40px] text-white capitalize w-auto lg:w-[770px] text-center">
          Empowering solutions with{" "}
          <span className=" text-[#0078FF]">
            Cutting-edge tools and technology
          </span>
        </h2>

        <Flex className="mt-[80px] flex-wrap justify-between">
          {technology.map((item, i) => (
            <div
              key={i}
              className=" mb-[25px] w-auto xl:w-[300px] 2xl:w-[348px] bg-[#0C3869] flex items-center rounded-full gap-1 xl:gap-4 2xl:gap-[25px] pr-1"
            >
              <div className=" w-[80px] h-[80px] xl:w-[100px] 2xl:w-[130px] xl:h-[100px] 2xl:h-[130px] rounded-full bg-[#0768D5] flex items-center justify-center">
                <img
                  className=" w-[50%] 2xl:w-auto"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <span className=" font-bold text-xl 2xl:text-[28px] text-white">
                {item.title}
              </span>
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Technology;
