import Container from "@/components/resuseable/Container";
import Flex from "@/components/resuseable/Flex";
import Services from "@/components/resuseable/Services";
import Speciality from "@/components/resuseable/Speciality";
import React from "react";

const page = () => {
  return (
    <main className=" pt-[200px] pb-[250px]">
      <Container>
        <section className=" my-5 md:my-[30px] 2xl:my-[140px]">
          <Flex>
            <div className=" w-full md:w-10/12 2xl:w-7/12">
              <h2 className=" font-bold text-3xl md:text-5xl lg:text-[46px] text-[#0078FF] capitalize">
                who we are?
              </h2>

              <p className=" mt-6 text-base md:text-lg lg:text-[26px] text-white font-medium">
                <span className=" text-[#0078FF]">ROL Studio Bangladesh</span>{" "}
                is a passionate web & app development agency based in
                Bangladesh, built by a dedicated team of developers, designers,
                and digital thinkers. We specialize in creating modern, fast,
                and scalable digital products—from powerful e-commerce websites
                to custom dashboards, mobile apps, and more. We started with one
                simple goal: to help businesses grow by bringing their ideas to
                life through clean, functional, and beautifully designed
                software.
              </p>
            </div>
          </Flex>
        </section>

        <Services />
        <Speciality />
      </Container>
    </main>
  );
};

export default page;
