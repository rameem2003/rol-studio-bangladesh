import Services from "@/components/resuseable/Services";
import Technology from "@/components/resuseable/Technology";
import Banner from "@/components/screens/Home/Banner";
import Speciality from "@/components/resuseable/Speciality";
import React from "react";
import Ourpartners from "@/components/resuseable/Ourpartners";

const page = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Ourpartners />
      <Technology />
      <Speciality />
    </main>
  );
};

export default page;
