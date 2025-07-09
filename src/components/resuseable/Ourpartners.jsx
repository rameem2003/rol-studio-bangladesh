import React from "react";
import Container from "./Container";
import { partners } from "@/assets/data/partners";
import Flex from "./Flex";
import Image from "next/image";

const Ourpartners = () => {
  return (
    <section className=" py-[40px] 2xl:py-[120px] relative">
      <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] top-[450px] left-0 absolute z-[-1]"></div>
      <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] bottom-5  right-0 absolute z-[-1]"></div>

      <Container>
        <h2 className=" text-3xl md:text-4xl xl:text-4xl 2xl:text-[46px] text-white font-bold w-auto  lg:w-[754px] capitalize">
          Our Trusted Partners for{" "}
          <span className=" text-[#0768D5]">Deliver Better Experience</span>
        </h2>

        <p className=" w-auto mt-[33px] font-medium text-lg md:text-xl xl:text-xl 2xl:text-[26px] leading-[33px] text-white xl:w-[836px]">
          We collaborate with industry leaders to ensure our clients receive the
          best solutions and services, enhancing their digital experience and
          driving success through strategic partnerships.
        </p>

        <Flex className=" mt-[77px] flex-wrap gap-5 justify-between">
          {partners.map((service, i) => (
            <div
              key={i}
              className=" rounded-2xl border-2 border-[#0078FF] w-[45%] md:w-[30%] lg:w-[20%] transition-all duration-200 ease-in-out mb-5 bg-white  shadow-service-card hover:shadow-service-card-hover p-5 md:px-5 md:py-7 lg:px-6 lg:py-10 "
            >
              <Image
                className="w-full h-auto"
                src={service.image}
                alt={service.title}
                width={500}
                height={500}
              />
            </div>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Ourpartners;
