import { speciality } from "@/assets/data/speciallity";
import Container from "@/components/resuseable/Container";
import Flex from "@/components/resuseable/Flex";
import Image from "next/image";
import React from "react";

const Speciality = () => {
  return (
    <section className=" py-[50px] 2xl:py-[100px]">
      <Container>
        <Flex className="items-center flex-col lg:flex-row">
          <div className=" w-full lg:w-1/2 relative">
            <div className="w-[300px] h-[300px] md:w-[622px] md:h-[662px] max-w-[662px] rounded-full bg-[#0078FF] blur-[320px] top-[50px] left-0 absolute z-[-1]"></div>
            <h2 className="text-3xl md:text-4xl xl:text-4xl 2xl:text-[46px] text-white font-bold w-auto  xl:w-[745px] capitalize">
              Why <span className=" text-[#0078FF]">ROL Studio Bangladesh</span>{" "}
              Is Best?
            </h2>

            <div className=" mt-[70px] flex items-center justify-between flex-wrap">
              {speciality.map((item, i) => (
                <p
                  key={i}
                  className=" font-medium text-lg xl:text-xl 2xl:text-[26px] text-white w-full sm:w-1/2 mb-9"
                >
                  <span className=" text-[#0078FF]">{item.id}. </span>
                  {item.title}
                </p>
              ))}
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <div className=" relative z-[100]">
              <div className="  w-[100px] xl:w-[346px] h-[100px] xl:h-[346px] bg-[#0C3869] blur-[75px] absolute top-[-80px] left-0 z-[-1]"></div>
              <div className="  w-[100px] xl:w-[200px] h-[100px] xl:h-[200px] bg-[#5F7184] blur-[75px] absolute bottom-[-60px] right-0 z-[-1]"></div>
              <Image
                className=" mx-auto w-full"
                src="/map.png"
                alt="logo"
                width={500}
                height={500}
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Speciality;
