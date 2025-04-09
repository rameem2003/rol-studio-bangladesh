import { teams } from "@/assets/data/teams";
import Container from "@/components/resuseable/Container";
import Flex from "@/components/resuseable/Flex";
import Speciality from "@/components/resuseable/Speciality";
import React from "react";

const page = () => {
  return (
    <main className=" pt-[200px] pb-[250px]">
      <Container>
        <section>
          <h2 className=" font-bold text-3xl md:text-5xl lg:text-[46px] text-[#0078FF] capitalize">
            we’re more than just developers
          </h2>

          <p className=" mt-6 text-base md:text-lg lg:text-[26px] text-white font-medium">
            ROL Studio BD is proud to be powered by a diverse group of skilled
            individuals. Our team includes full-stack developers, UI/UX
            designers, testers, and project managers—all working collaboratively
            to bring your ideas to life. We believe in creativity, quality, and
            innovation, and that’s what drives every project we take on.
          </p>
        </section>

        <section className=" my-10">
          <Flex className="gap-4 flex-wrap justify-between">
            {teams.map((member, i) => (
              <div className=" w-full md:w-[48%] lg:w-[30%] group " key={i}>
                <img
                  className=" w-full object-cover grayscale duration-200 ease-in-out group-hover:grayscale-0"
                  src={member.image}
                  alt={member.name}
                />

                <div className="  py-2">
                  <h2 className=" uppercase font-bold text-2xl md:text-3xl text-white">
                    {member.name}
                  </h2>

                  <h3 className=" capitalize font-medium text-base lg:text-lg text-white">
                    {member.role}
                  </h3>
                </div>
              </div>
            ))}
          </Flex>
        </section>

        <Speciality />
      </Container>
    </main>
  );
};

export default page;
