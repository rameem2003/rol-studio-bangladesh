import { teams } from "@/assets/data/teams";
import Container from "@/components/resuseable/Container";
import Flex from "@/components/resuseable/Flex";
import Speciality from "@/components/resuseable/Speciality";
import React from "react";

export const metadata = {
  title: "Our Team - ROL Studio Bangladesh",
  description:
    "Leading web and software development and design studio in Bangladesh.",
  keywords: [
    "web development",
    "web design",
    "Bangladesh",
    "ROL Studio",
    "Next.js",
  ],
  openGraph: {
    title: "ROL Studio Bangladesh",
    description:
      "Leading web and software development and design studio in Bangladesh.",
    url: "https://rolstudiobangladesh.vercel.app/",
    siteName: "ROL Studio Bangladesh",
    images: [
      {
        url: "https://rolstudiobangladesh.vercel.app/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "ROL Studio Bangladesh",
  //   description: "Leading web development and design studio in Bangladesh.",
  //   images: ["https://yourdomain.com/twitter-image.jpg"],
  // },
};

const page = () => {
  return (
    <main className=" py-[150px] xl:pt-[200px] xl:pb-[250px]">
      <Container>
        <section>
          <h2 className=" text-center lg:text-left font-bold text-3xl md:text-4xl xl:text-[46px] text-[#0078FF] capitalize">
            we’re more than just developers
          </h2>

          <p className=" text-center lg:text-left mt-6 text-base md:text-lg xl:text-[26px] text-white font-medium">
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
