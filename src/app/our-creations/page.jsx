import Container from "@/components/resuseable/Container";
import DisplayProject from "@/components/screens/projects/DisplayProject";
import React from "react";

export const metadata = {
  title: "Our Creations - ROL Studio Bangladesh",
  description:
    "Leading web and software development and design studio in Bangladesh.",
  keywords: [
    "Best web development company in Dhaka",
    "Best web development company in Bangladesh",
    "react js development",
    "Mahmood Hassan Rameem",
    "MERN stack development",
    "web development",
    "web design",
    "Bangladesh",
    "ROL Studio Bangladesh",
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
    <main className=" py-[120px] 2xl:pt-[200px] 2xl:pb-[100px]">
      <Container>
        <section>
          <h2 className=" text-center lg:text-left font-bold text-3xl md:text-4xl 2xl:text-[46px] text-[#0078FF] capitalize">
            Our Projects at ROL Studio Bangladesh
          </h2>

          <p className=" text-center lg:text-left mt-6 text-base md:text-lg 2xl:text-[26px] text-white font-medium">
            Explore our collection of innovative and impactful projects, crafted
            with precision and creativity. At ROL Studio Bangladesh, we
            transform ideas into real-world digital solutions that drive growth,
            engagement, and success for our clients.
          </p>
        </section>

        <section className=" my-10">
          <DisplayProject />
        </section>
      </Container>
    </main>
  );
};

export default page;
