import React from "react";
import Container from "../resuseable/Container";
import Flex from "../resuseable/Flex";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

const Navigation = () => {
  return (
    <nav className="py-2 bg-transparent w-full fixed top-0 left-0 z-[999999]">
      <Container>
        <Flex className="items-center justify-between">
          <Link href={"/"} className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              className=" w-[60%] md:w-full"
              width={200}
              height={100}
            />
          </Link>

          <Flex className="items-center justify-end gap-4 xl:gap-[50px] hidden md:flex">
            <Link
              href={"/creations"}
              className=" text-sm xl:text-[22px] text-white font-medium uppercase"
            >
              Our Creations
            </Link>
            <Link
              href={"/teams"}
              className=" text-sm xl:text-[22px] text-white font-medium uppercase"
            >
              Our Team
            </Link>

            <button className=" font-bold text-sm xl:text-[18px] text-white uppercase py-[14px] px-[10px] rounded-[10px] bg-[#0078FF] shadow-nav-button">
              Contact for Hire
            </button>
          </Flex>

          <button className="block md:hidden">
            <CgMenuRight className=" text-3xl text-white " />
          </button>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navigation;
