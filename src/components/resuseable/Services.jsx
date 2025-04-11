import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { services } from "@/assets/data/service";

const Services = () => {
  return (
    <section className=" py-[40px] 2xl:py-[180px] relative">
      <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] top-[450px] left-0 absolute z-[-1]"></div>
      <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] bottom-5  right-0 absolute z-[-1]"></div>
      <Container>
        <h2 className=" text-3xl md:text-4xl xl:text-4xl 2xl:text-[46px] text-white font-bold w-auto  lg:w-[754px] capitalize">
          Cutting Edge digital Service for{" "}
          <span className=" text-[#0768D5]">growth & future</span>
        </h2>

        <p className=" w-auto mt-[33px] font-medium text-lg md:text-xl xl:text-xl 2xl:text-[26px] leading-[33px] text-white xl:w-[836px]">
          We provide personalized services to help you thrive in the digital
          world, offering expert guidance tailored to your unique business goals
          and driving growth and innovation
        </p>

        <Flex className=" mt-[77px] flex-wrap gap-5 justify-between">
          {services.map((service, i) => (
            <div
              key={i}
              className=" w-full lg:w-[49%] transition-all duration-200 ease-in-out mb-5 bg-[#0C3869] hover:bg-[#0078FF] shadow-service-card hover:shadow-service-card-hover p-5 md:px-5 md:py-7 lg:px-6 lg:py-10 2xl:py-[58px] 2xl:px-[22px]"
            >
              <h3 className=" font-bold text-2xl xl:text-[35px]  2xl:text-[43px] uppercase mb-9 text-white">
                {service.title}
              </h3>

              <p className=" font-medium text-base xl:text-[18px]  2xl:text-[23px] leading-[30px] text-white">
                {service.description}
              </p>
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Services;
