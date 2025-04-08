import Services from "@/components/resuseable/Services";
import Technology from "@/components/resuseable/Technology";
import Banner from "@/components/screens/Home/Banner";
import React from "react";

const page = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Technology />
    </main>
  );
};

export default page;
