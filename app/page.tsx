import Aboutus from "@/components/homepage/Aboutus";
import Cards from "@/components/homepage/Cards";
import Contactus from "@/components/homepage/Contactus";
import Footer from "@/components/homepage/Footer";
import Header from "@/components/homepage/Header";
import MainSection from "@/components/homepage/MainSection";
import Pricing from "@/components/homepage/Pricing";
import ScrollButton from "@/components/homepage/ScrollButton";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Cards />
      <Pricing />
      <Aboutus />
      <Contactus />
      <Footer />
      <ScrollButton />
    </div>
  );
};

export default page;
