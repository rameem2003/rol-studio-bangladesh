import React from "react";
import Container from "../resuseable/Container";
import Flex from "../resuseable/Flex";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className=" mt-[50px] relative overflow-hidden">
        <div className="hidden md:block absolute  w-[500px] 2xl:w-[1200px] h-[500px] 2xl:h-[1200px] bg-[#0C3869] blur-[295px] left-[50%] translate-x-[-50%] bottom-[-1430px] z-50  "></div>
        <Container>
          <Flex className="flex-wrap gap-10 lg:gap-0">
            <div className=" w-full lg:w-5/12 xl:w-5/12">
              <img
                className="mx-auto lg:m-0 w-full md:w-[80%] lg:w-[80%] xl:w-full"
                src="/footer.png"
                alt=""
              />
            </div>
            <div className=" w-full lg:w-5/12 xl:w-4/12">
              <h3 className=" font-black text-xl xl:text-[35px] text-white">
                Address
              </h3>
              <div className="mt-2">
                <p className=" text-sm xl:text-[18px] text-white font-semibold">
                  Benaroshi Polli, Mirpur - 10, Dhaka, Bangladesh
                </p>
                <p className=" text-sm xl:text-[18px] text-white font-semibold">
                  Phone: 01409029641
                </p>
                <p className=" text-sm xl:text-[18px] text-white font-semibold">
                  Email: info.rolstudio.bd@gmail.com
                </p>
              </div>
            </div>
            <div className=" w-full lg:w-2/12 xl:w-3/12">
              <h3 className=" font-black text-xl xl:text-[35px] text-white">
                Follow
              </h3>

              <Flex className="mt-2 gap-[30px]">
                <Link
                  href="https://www.facebook.com/rolstudiobangladesh"
                  className="w-[30px] h-[30px] relative  rounded-full flex items-center justify-center group"
                >
                  <div className="w-full h-full opacity-0 group-hover:opacity-100 duration-200 ease-in-out rounded-full absolute top-0 left-0 bg-white blur-xl z-[-1]"></div>
                  <FaFacebook className=" text-white hover:text-[#0768D5] text-2xl" />
                </Link>

                <Link
                  href="https://github.com/rameem2003"
                  className="w-[30px] h-[30px] relative  rounded-full flex items-center justify-center group"
                >
                  <div className="w-full h-full opacity-0 group-hover:opacity-100 duration-200 ease-in-out rounded-full absolute top-0 left-0 bg-white blur-xl z-[-1]"></div>
                  <FaGithub className=" text-white hover:text-[#0078FF] text-2xl" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/mahmood-hassan-rameem/"
                  className="w-[30px] h-[30px] relative  rounded-full flex items-center justify-center group"
                >
                  <div className="w-full h-full opacity-0 group-hover:opacity-100 duration-200 ease-in-out rounded-full absolute top-0 left-0 bg-white blur-xl z-[-1]"></div>
                  <FaLinkedin className=" text-white hover:text-[#0078FF] text-2xl" />
                </Link>
              </Flex>
            </div>
          </Flex>

          <div className=" mt-[42px] h-[1.5px] bg-white"></div>

          <Flex className=" items-start gap-5 justify-start md:justify-between my-5 flex-col md:flex-row">
            <Link className=" text-xs font-medium text-white" href="">
              Privacy Policy
            </Link>

            <span className=" text-xs font-medium text-white">
              ROL Studio Bangladesh || All Rights Reserved || 2025
            </span>
          </Flex>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
