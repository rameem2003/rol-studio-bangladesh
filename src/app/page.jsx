import Services from "@/components/resuseable/Services";
import Technology from "@/components/resuseable/Technology";
import Banner from "@/components/screens/Home/Banner";
import Speciality from "@/components/screens/Home/Speciality";
import React from "react";

const page = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Technology />
      <Speciality />
    </main>
  );
};

export default page;
