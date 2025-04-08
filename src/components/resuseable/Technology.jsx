import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { technology } from "@/assets/data/technology";

const Technology = () => {
  return (
    <section className=" py-[150px] relative">
      <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] top-[450px] left-0 absolute z-[-1]"></div>
      <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] bottom-5  right-0 absolute z-[-1]"></div>
      <Container>
        <h2 className=" mx-auto font-bold text-3xl md:text-5xl lg:text-[46px] text-white capitalize w-auto lg:w-[866px] text-center">
          Empowering solutions with{" "}
          <span className=" text-[#0078FF]">
            cutting-edge tools and technology
          </span>
        </h2>

        <Flex className="mt-[80px] flex-wrap justify-between">
          {technology.map((item, i) => (
            <div
              key={i}
              className=" mb-[25px] w-auto xl:w-[348px] bg-[#0C3869] flex items-center rounded-full gap-1 lg:gap-[25px] pr-1"
            >
              <div className=" w-[80px] h-[80px] lg:w-[130px] lg:h-[130px] rounded-full bg-[#0768D5] flex items-center justify-center">
                <img
                  className=" w-[50%] xl:w-auto"
                  src={item.image}
                  alt={item.title}
                />
              </div>

              <span className=" font-bold text-xl lg:text-[28px] text-white">
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
