import Container from "@/components/resuseable/Container";
import Flex from "@/components/resuseable/Flex";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <>
      <div className="hidden md:block absolute z-[-1] w-[500px] 2xl:w-[1200px] h-[500px] 2xl:h-[1200px] bg-[#0C3869] blur-[295px] left-[50%] translate-x-[-50%] top-[-100px] 2xl:top-[-1100px] "></div>
      <section className=" w-full py-[100px] lg:py-[180px] xl:py-[250px]">
        <Container>
          <Flex className="items-center flex-col-reverse lg:flex-row relative">
            <div className=" w-full lg:w-7/12">
              <h1 className=" text-center md:text-left text-[35px] md:text-[50px] 2xl:text-[71px] font-bold text-white capitalize">
                Empower your business with digital presence & Modern
                Technologies
              </h1>

              <Flex className=" mt-6 lg:mt-10 xl:mt-[76px] justify-center md:justify-start items-center gap-4 md:gap-[30px] ">
                <Link
                  href="/get-started"
                  className=" py-2 2xl:py-[17px] px-3 2xl:px-[22px] flex  border-[2px] border-[#0078FF] items-center justify-center gap-4 font-bold text-base md:text-lg xl:text-[25px]  text-white rounded-[10px] bg-[#0078FF]"
                >
                  Get started <FaArrowRightLong />{" "}
                </Link>
                <Link
                  href={""}
                  className=" py-2 2xl:py-[17px] px-3 2xl:px-[50px] flex border-[2px] border-[#0078FF] items-center justify-center gap-4 font-bold text-base md:text-lg xl:text-[25px]  text-white rounded-[10px]"
                >
                  Our Projects
                </Link>
              </Flex>
            </div>
            <div className="  w-full static md:absolute right-0 top-[50%] translate-0 md:translate-y-[-50%]  md:w-1/2 z-[-1] xl:w-5/12">
              <div className=" relative z-[100]">
                <div className="  w-[100px] xl:w-[346px] h-[100px] xl:h-[346px] bg-[#0C3869] blur-[75px] absolute top-[-80px] left-0 z-[-1]"></div>
                <div className="  w-[100px] xl:w-[346px] h-[100px] xl:h-[346px] bg-[#5F7184] blur-[75px] absolute bottom-[-60px] right-0 z-[-1]"></div>
                <Image
                  className=" mx-auto w-[80%]"
                  src="/logo-rol-circle.png"
                  alt="logo"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </Flex>
        </Container>
      </section>
    </>
  );
};

export default Banner;
