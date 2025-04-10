import React from "react";
import Container from "../resuseable/Container";
import Flex from "../resuseable/Flex";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const BottomBanner = () => {
  return (
    <section className=" linear py-[68px] mt-[50px] lg:mt-[100px] relative w-full shadow-bottom-banner-outer">
      <Container>
        <Flex className="items-center flex-col lg:flex-row">
          <div className="w-full lg:w-8/12 ">
            <h2 className=" font-black text-5xl leading-[100px] 2xl:text-[110px] text-white  w-auto 2xl:w-[1041px]">
              LET'S <br className=" hidden 2xl:block" /> BUILD TOGETHER
            </h2>

            <p className=" text-xl text-white mt-7 font-semibold">
              {" "}
              Lets have a conversation about your project!
            </p>

            <Link
              href="/contact"
              className=" mt-10 py-2 2xl:py-[17px] px-3 2xl:px-[22px] inline-flex items-center justify-center gap-4 font-bold text-base md:text-lg xl:text-[25px] 2xl:text-[30px] text-white rounded-[10px] bg-background"
            >
              Get in touch <FaArrowRightLong />{" "}
            </Link>
          </div>

          <div className=" hidden lg:block lg:w-4/12 ">
            <img
              className=" rounded-full shadow-bottom-banner-img"
              src="/logo-rol-circle.png"
              alt=""
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default BottomBanner;
