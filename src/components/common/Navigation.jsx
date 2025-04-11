"use client";
import React, { useEffect, useState } from "react";
import Container from "../resuseable/Container";
import Flex from "../resuseable/Flex";
import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    // console.log(offset);

    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`py-2 ${
        scrolled ? "bg-[#f5f7cb12] backdrop-blur-[100px]" : "bg-transparent"
      }  w-full fixed top-0 left-0 z-[999999]`}
    >
      <Container>
        <Flex className="items-center justify-between">
          <Link href={"/"} className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              className=" w-[60%] md:w-full"
              width={250}
              height={100}
            />
          </Link>

          <Flex className="items-center justify-end gap-4 xl:gap-[50px] hidden md:flex">
            <Link
              href={"/creations"}
              className=" text-sm xl:text-base 2xl:text-[22px] text-white font-medium uppercase"
            >
              Our Creations
            </Link>
            <Link
              href={"/teams"}
              className=" text-sm xl:text-base 2xl:text-[22px] text-white font-medium uppercase"
            >
              Our Team
            </Link>

            <Link
              href="/contact"
              className=" font-bold text-sm xl:text-base 2xl:text-[18px] text-white uppercase py-[14px] px-[10px] rounded-[10px] bg-[#0078FF] shadow-nav-button"
            >
              Contact for Hire
            </Link>
          </Flex>

          <button
            onClick={() => setMenuToggle(!menuToggle)}
            className="block md:hidden"
          >
            <CgMenuRight className=" text-3xl text-white " />
          </button>
        </Flex>

        <section
          className={`${
            menuToggle ? "right-0" : "right-[-100%]"
          } duration-200 ease-in-out flex items-center md:hidden flex-col gap-7 h-screen absolute top-0 pt-16 w-full z-[-1] bg-background`}
        >
          <Link
            onClick={() => setMenuToggle(false)}
            href={"/creations"}
            className=" text-sm xl:text-[22px] text-white font-medium uppercase"
          >
            Our Creations
          </Link>
          <Link
            onClick={() => setMenuToggle(false)}
            href={"/teams"}
            className=" text-sm xl:text-[22px] text-white font-medium uppercase"
          >
            Our Team
          </Link>

          <Link
            onClick={() => setMenuToggle(false)}
            href="/contact"
            className=" font-bold text-sm xl:text-[18px] text-white uppercase py-[14px] px-[10px] rounded-[10px] bg-[#0078FF] shadow-nav-button"
          >
            Contact for Hire
          </Link>
        </section>
      </Container>
    </nav>
  );
};

export default Navigation;
